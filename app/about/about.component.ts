import { Component, OnInit } from "@angular/core";
import { AboutService } from "./about.service";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items: any;
  pageTitle: string = 'About';
  showBanner: boolean = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.items = this.aboutService.getAbout();
  }
}
