import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Manager } from '../manager';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name: any;
  id: any;
  value = 0;
  managers: Manager;
  getManager: Manager;
  show: Manager;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params['id'])
    });
    this._httpService.showManager(this.id).subscribe(managers => {
      this.getManager = managers as Manager;
      
      console.log(this.getManager['data']);
    });
  }
  delManager(manager_id: string): void {
    console.log(manager_id);
    this._httpService.remManager(manager_id).subscribe(manager => this.ngOnInit());
  }
  addToLikes(num){
    this._httpService.addToLikes(1); 
    }

}