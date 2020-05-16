import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StickyNavModule } from 'ng2-sticky-nav';
import { SpecializationComponent } from './specialization/specialization.component';
import { TeamComponent } from './team/team.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactComponent } from './contact/contact.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { HomeComponent } from './home/home.component';
import { AndroidComponent } from './projects/android/android.component';
import { JavaComponent } from './projects/java/java.component';
import { PhpComponent } from './projects/php/php.component';
import { PythonComponent } from './projects/python/python.component';
import { IotComponent } from './projects/iot/iot.component';
import { ImageprocessingComponent } from './projects/imageprocessing/imageprocessing.component';
import { EmbeddedsystemComponent } from './projects/embeddedsystem/embeddedsystem.component';
import { RspberrypiComponent } from './projects/rspberrypi/rspberrypi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    SpecializationComponent,
    TeamComponent,
    JoinUsComponent,
    ContactComponent,
    WorkshopsComponent,
    HomeComponent,
    AndroidComponent,
    JavaComponent,
    PhpComponent,
    PythonComponent,
    IotComponent,
    ImageprocessingComponent,
    EmbeddedsystemComponent,
    RspberrypiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StickyNavModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
