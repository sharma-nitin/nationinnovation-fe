import { Component, OnInit, HostListener } from '@angular/core';
import { trigger,state, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  

  ngOnInit() {
  }

  changeRoute(evt:string){
    console.log(evt);
  this.router.navigate([evt]);
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 190) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }
  
 

}
