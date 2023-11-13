import { Injectable } from "@angular/core"

@Injectable ()
export class AboutService {
  getAbout () {
    return About;
  }
}

const About = [
  {
    title: 'Aeon Franco Fitness',
    description: 'Aeon gets you (back) into the groove of working out by addressing these imbalances, and setting you up with the exercises and tools you need to continue seeing the progress you want. Tools such as: 1-on-1 coaching in a private studio, house call-sessions, custom workouts, videos of YOU doing corrective exercises for future reference, a general Exercise Library for common exercises, nearly 24/7 responsiveness, nutrition coaching, self-led programs that cover all levels of fitness',
    description2: 'On Your Own workouts to strech out training packages (or get an extra workout between sessions), flexible payment plant, Aeon Franco Fitness intramural competitions for motivation (with prizes), and MUCH MORE! Let work together to MEET YOUR GOALS! ',
    imageUrl: './assets/images/about/about-4.png'
  }
]
