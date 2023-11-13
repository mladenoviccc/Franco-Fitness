import {Routes} from "@angular/router"
import { HomePageComponent } from "../home-page/home-page.component"
import { AboutComponent } from "../about/about.component"
import { ServiceComponent } from "../service/service.component"
import { FaqComponent } from "../faq/faq.component"

export const appRoutes:Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent, data: { showBanner: true }},
  {path: 'service', component: ServiceComponent, data: { showBanner: true }},
  {path: 'faq', component: FaqComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}
]
