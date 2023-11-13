import { Component, OnInit } from "@angular/core";
import { Services } from "./services.service";

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: any;
  pageTitle: string = 'Service';
  showBanner: boolean = true;

  constructor(private service: Services) {}

  ngOnInit(): void {
    this.services = this.service.getService();
  }
}
