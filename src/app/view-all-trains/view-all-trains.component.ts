import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-trains',
  templateUrl: './view-all-trains.component.html',
  styleUrls: ['./view-all-trains.component.css']
})
export class ViewAllTrainsComponent implements OnInit {

  constructor() { }
  name="kishore"
status:boolean=false
  read=()=>{
    this.name="raju"
    this.status=true
  }

  ngOnInit(): void {
  }

}
