import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from './testimonials.service';
import { Testimonial } from '../interfaces';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  currentTestimonialIndex = 0;

  constructor(private testimonialsService: TestimonialsService) { }

  ngOnInit(): void {
    this.testimonialsService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
      this.startCarousel();
    });
  }

  startCarousel(): void {
    setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    }, 5000);
  }
}
