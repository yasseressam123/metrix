import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subordinate } from 'src/app/Models/subordinate';
import { getSubordinates } from 'src/app/store/actions/subordinate.action';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements OnInit {

  subordinates:Subordinate[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAllSubordinates();
  }

  getAllSubordinates():void{
    this.store.dispatch(getSubordinates());
  }

}
