import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonials: Testimonial[] = [
    {
      id: 1,
      imageUrl: './assets/images/home/testimonials.png',
      content: 'I really enjoyed that Aeon talked to me before the program, and evaluated some things on my movement to help accommodate them. Also it was really helpful to have balance work added in that helped with my previous injuries. I saw dramatic improvement in my stability and balance. Aeon was incredibly responsive, and providedtons of good resources for me, and always answered any questions I had, whether it was about lifting or nutrition. During the program, I experienced dramatic improvements, and it felt like every aspect of the program was useful and efficient in helping me reach my goals.',
      name: 'David H',
      position: 'customer'
    },
    {
      id: 2,
      imageUrl: './assets/images/home/testimonials.png',
      content: 'I really enjoyed that Aeon talked to me before the program, and evaluated some things on my movement to help accommodate them. Also it was really helpful to have balance work added in that helped with my previous injuries. I saw dramatic improvement in my stability and balance. Aeon was incredibly responsive, and providedtons of good resources for me, and always answered any questions I had, whether it was about lifting or nutrition. During the program, I experienced dramatic improvements, and it felt like every aspect of the program was useful and efficient in helping me reach my goals.',
      name: 'David H',
      position: 'customer'
    },
    {
      id: 3,
      imageUrl: './assets/images/home/testimonials.png',
      content: 'I really enjoyed that Aeon talked to me before the program, and evaluated some things on my movement to help accommodate them. Also it was really helpful to have balance work added in that helped with my previous injuries. I saw dramatic improvement in my stability and balance. Aeon was incredibly responsive, and providedtons of good resources for me, and always answered any questions I had, whether it was about lifting or nutrition. During the program, I experienced dramatic improvements, and it felt like every aspect of the program was useful and efficient in helping me reach my goals.',
      name: 'David H',
      position: 'customer'
    },
    {
      id: 4,
      imageUrl: './assets/images/home/testimonials.png',
      content: 'I really enjoyed that Aeon talked to me before the program, and evaluated some things on my movement to help accommodate them. Also it was really helpful to have balance work added in that helped with my previous injuries. I saw dramatic improvement in my stability and balance. Aeon was incredibly responsive, and providedtons of good resources for me, and always answered any questions I had, whether it was about lifting or nutrition. During the program, I experienced dramatic improvements, and it felt like every aspect of the program was useful and efficient in helping me reach my goals.',
      name: 'David H',
      position: 'customer'
    },
  ];

  constructor() { }

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }
}
