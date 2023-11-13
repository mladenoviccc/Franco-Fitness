import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

import { FaqService } from './faq/faq.service';
import { AboutService } from './about/about.service';
import { Services } from './service/services.service';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    ServiceComponent,
    FaqComponent,
    FooterComponent,
    BannerComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AboutService,
    Services,
    FaqService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
