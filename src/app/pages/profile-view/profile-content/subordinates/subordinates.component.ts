import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subordinate } from 'src/app/Models/subordinate';
import { SubordinateState } from 'src/app/store/reducers/subordinate.reducers';


@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent implements OnInit {
  subordinates$ = this.store.select('subordinates');
  

  constructor(private store: Store<SubordinateState>) { }

  ngOnInit(): void {
    console.log("here",this.subordinates$)
  }

  

}
