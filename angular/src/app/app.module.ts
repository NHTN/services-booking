import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material.module';
import { BannerComponent } from './components/homepage/banner/banner.component';
import { HomeHeaderComponent } from './components/homepage/home-header/home-header.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { ServicesListCardComponent } from './components/homepage/services-list-card/services-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    BannerComponent,
    HomeHeaderComponent,
    HomeComponent,
    ServicesListCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
}
)
export class AppModule { }
