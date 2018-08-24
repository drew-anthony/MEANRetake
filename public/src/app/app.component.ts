import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Manager } from './manager';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ){}

  head = "Product List";
  managers: Manager[];
  showManager: Manager;
  createManager: Manager = new Manager();
  remManager: Manager;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
  });
    this._httpService.getManagers().subscribe(managers => this.managers = managers as Manager[]);
  }

  getManager(manager): void {
    this.showManager = manager;
    console.log(manager);
  }

  clear(): void {
    this.showManager = undefined;
  }

  addManager(): void {
    this._httpService.addManagers(this.createManager).subscribe(manager => this.managers.push(manager as Manager));
  }

  modManager(manager_id: string, manager: Manager): void {
    
    this._httpService.editManager(manager_id, manager).subscribe(manager => this.ngOnInit());
  }

  delManager(manager_id: string): void {
    
    this._httpService.remManager(manager_id).subscribe(manager => this.ngOnInit());
  }
}