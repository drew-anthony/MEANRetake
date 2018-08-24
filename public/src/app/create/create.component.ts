import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Manager } from '../manager';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  managers: Manager[];
  showManager: Manager;
  createManager: Manager = new Manager();
  remManager: Manager;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._httpService.getManagers().subscribe(managers => this.managers = managers as Manager[]);
  }

  addManager(): void {
    this._httpService.addManagers(this.createManager).subscribe(resturant => {
      this._router.navigate(['/']);
    });
  }
}