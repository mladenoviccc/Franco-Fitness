import { Injectable } from "@angular/core";

@Injectable ()
export class Services {
  getService () {
    return Service;
  }
}

const Service = [
  {
    title: '4-Week Balance',
    description: 'Fits into any existing workout routine. The program is three (3) 10-min circuits/week for a month, totaling 12 sessions and 120 minutes. It comes with an index outliningevery movement...',
    imageUrl: './assets/images/home/home-1.jpg'
  },

  {
    title: '6-Week Linear Strength',
    description: 'Designed to steadily increase your maxes/volume by focusing on foundational movements and essential muscle groups to “The Big 3” compound lifts. Comes with 1 rep max testing walkthrough...',
    imageUrl: './assets/images/home/home-2.jpg'
  },

  {
    title: '10-Week Bodybuilding',
    description: 'Comes in the form of an excel sheet (the others are word documents), that contains modifiable weight tracking. Simply put your maxes in at the top, and every workout will have the weight...',
    imageUrl: './assets/images/home/home-3.jpg'
  }
]
