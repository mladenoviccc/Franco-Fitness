export interface FaqModel {
  id: number;
  question: string;
  answer: string;
  opened: boolean;
}

export interface Testimonial {
  id: number;
  imageUrl: string;
  content: string;
  name: string;
  position: string;
}
