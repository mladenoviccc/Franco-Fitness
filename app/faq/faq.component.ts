import { Component, OnInit } from "@angular/core";
import { FaqService } from "./faq.service";
import { FaqModel } from "../interfaces";
import { ActivatedRoute } from "@angular/router";

@Component ({
  templateUrl: './faq.component.html',
  styleUrls: [ './faq.component.css' ]
})
export class FaqComponent implements OnInit {
  faqs: FaqModel[] = [];
  pageTitle: string = 'FAQ';
   showBanner: boolean = true;

  constructor(private FaqService:FaqService, private route: ActivatedRoute) {}

  ngOnInit () {
    this.faqs = this.FaqService.getFaqs()

    const routeData = this.route.snapshot.data;
    this.showBanner = routeData && routeData['showBanner'] !== false;
  }

  public questionClicked(faq: FaqModel) {
    this.faqs.forEach(item => {
      if (item.id === faq.id) {
        item.opened = !item.opened
      }
      else {
        item.opened = false;
      }
    })

  }
}
