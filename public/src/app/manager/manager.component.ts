import { Component, OnInit, Input } from '@angular/core';
import { Manager } from '../manager';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  @Input() getManager: any;
  sum=0;
  avg=0;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  managers: Manager;
  showManager: Manager;
  createManager: Manager = new Manager();
  remManager: Manager;

  ngOnInit() {
  this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
  });
  this._httpService.getManagers().subscribe(managers => this.managers = managers as Manager);
  }

  delManager(manager_id: string): void {
    
    this._httpService.remManager(manager_id).subscribe(manager => this.ngOnInit());
  }

}
