import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
setTimeout(() => {
const menuToggler=document.querySelector(".menu-toggler") as HTMLInputElement;
const menuWrapper=document.querySelector(".menu-wrapper") as HTMLInputElement;
menuToggler.addEventListener('click', () => menu());
const closeicon = menuToggler.querySelector(".cross") as HTMLInputElement;
const menuicon = menuToggler.querySelector(".menu") as HTMLInputElement;
function menu(){
    menuWrapper.classList.toggle("hidden");
    document.body.classList.toggle("overflow-y-hidden");
    closeicon.classList.toggle("hidden");
    menuicon.classList.toggle("hidden");
}
}, 1);