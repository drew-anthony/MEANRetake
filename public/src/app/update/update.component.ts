import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Manager } from '../manager';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  name: any;
  id: any;
  managers: Manager;
  getManager: Manager;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params['id'])
      this._httpService.showManager(this.id).subscribe(managers => {
        this.getManager = managers as Manager;
        this.name = managers['name']     
        console.log(this.getManager['data']);
      });
    });
    
  }
  modManager(): void {
    this._httpService.editManager(this.id, this.getManager).subscribe(manager => {
      console.log(this.getManager)
      this._router.navigate(['/']);
    });
  }
}