import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styles: [
  ]
})
export class LandingComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger) ;

    const profileBox = document.querySelector('.dashimage')!
    
    gsap.to(profileBox,{
      scrollTrigger:{
        trigger : profileBox,
        start : "top 80%",
        end: "bottom 20%",
        scrub : true,
        toggleActions:"restart pause reverse none",
      },
      y:400,
      duration:3,
      })

    function elementAppear(){
      var timel =  gsap.timeline({
        defaults:{
          opacity:0,
          ease: "linear",
          duration: 0.2,
        }
      })

      timel.fromTo('#hero-text2',{opacity:0, y:-50},{
        opacity:1,
        y:0,
      }).fromTo('#hero-text',{opacity:0, y:-50},{
        opacity:1,
        y:0,
      }).fromTo('#paragraphe',{opacity:0, y:-50},{
        opacity:1,
        y:0,
      }).fromTo('#btn-purchasse',{opacity:0, y:-50},{
        opacity:1,
        y:0,
      }).fromTo('#btnlearn',{opacity:0, y:-50},{
        opacity:1,
        y:0,
      })

      

      
      
    }

      

    elementAppear()
  }

  isClicked(){
    function btnClicked(){
      const btnMenu = document.querySelector('#btn-menu')!
      const navLinks = document.querySelector('#nav-links')!

      btnMenu.classList.toggle('bg-white')
      btnMenu.classList.toggle('bg-gray-950')
      btnMenu.classList.toggle('text-white')
      navLinks.classList.toggle('scale-0')

      // gsap.from("#nav-links",{
      //   duration:1,
      //   x:20,
      // })

      var tl = gsap.timeline({
        defaults:{
          //duration: 0.5,
        }
      })

      tl.fromTo("#link1", {
        opacity:0
      }, {
        opacity:1,
        duration:0.1,
      }).fromTo("#link2", {
        opacity:0
      },{
        opacity:1,
        duration:0.1,
      }).fromTo("#link3", {
        opacity:0
      },{
        opacity:1,
        duration:0.1,
      }).fromTo("#link4", {
        opacity:0
      },{
        opacity:1,
        duration:0.1,
      }).fromTo("#link5", {
        opacity:0
      },{
        opacity:1,
        duration:0.1,
      })
    }

    btnClicked()
  }
}
