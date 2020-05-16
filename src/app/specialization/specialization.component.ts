import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  changeRoute(evt:string){
    console.log(evt);
  this.router.navigate([evt]);
  }
}
