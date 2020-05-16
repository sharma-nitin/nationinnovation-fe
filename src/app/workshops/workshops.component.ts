import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  currentRoute: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute=this.router.url;
    console.log(this.currentRoute); 
  }

}
