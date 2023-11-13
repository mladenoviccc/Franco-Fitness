import { Injectable } from "@angular/core";
import { FaqModel } from "../interfaces";

@Injectable ()
export class FaqService {
  getFaqs () {
    return Faq;
  }
}

const Faq : FaqModel[] = [
  {
    id: 1,
    question: 'Why personal training?',
    answer: 'No one is born knowing how to workout, let alone what exercises are best for them. I’m a Personal Trainer certified by the National Academy of Sports Medicine. My background in research, mental health, pain management, as well as my own experiences, have made me the health professional that I am, makingworkouts as unique as you. My methods put the “personal” in “personal training”.',
    opened: true
  },

  {
    id: 2,
    question: 'What makes Aeon different? Why not just use a workout I found online?',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates itaque qui, repellat possimus fuga repudiandae animi iusto tempore voluptas dicta!',
    opened: false
  },

  {
    id: 3,
    question: 'There’s a lot of different options listed for pricing and location, how do I know which one is right for me?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam maxime doloribus possimus aperiam. Magni earum architecto dolorum doloribus ut.',
    opened: false
  }
]
