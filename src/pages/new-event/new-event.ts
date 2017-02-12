import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import {NavController, Slides} from 'ionic-angular';

@Component({
    selector: 'page-new-event',
    templateUrl: 'new-event.html'
})
export class NewEventPage {
    slideStack:Array<any>=[];
    data = {
        typeOfVisit:'' // NC, FU
    }
    @ViewChild('newEventSlider') slider: Slides;
    mySlideOptions = {
        //initialSlide: 1,
        //loop: true
        //pager: true
    };
    constructor(public navCtrl: NavController) {
    }

    next(fromSlide,toSlideCode){
        //console.log(toSlideCode);
        this.slideStack.push(toSlideCode);
        this.slider.update();// TODO param debounce = 300
        //todo refresh!!!
        this.slider.slideNext();
    }

    selectGender(gender){
        //this.next(''); //TODO
    }
    isFollowup(){//TODO generaliser avec isInStack
        return this.data.typeOfVisit == 'FU';
    }

    isInStack(slideCode){//todo ecrire la methode
        //console.log(slide.ele.id);//TODO bingo
        return (this.slideStack.indexOf(slideCode)>-1);
    }
    selectFollowup(fromSlide){
        this.data.typeOfVisit = 'FU';//todo vraiment utile?
        this.next(fromSlide,'searchSlide');
    }
    selectNewCase(fromSlide) {
        this.data.typeOfVisit = 'NC';
        this.next(fromSlide,'personalData');
    }
}
