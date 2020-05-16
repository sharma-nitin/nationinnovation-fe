import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopsComponent } from './workshops/workshops.component';
import { HomeComponent } from './home/home.component';
import { AndroidComponent } from './projects/android/android.component';
import { EmbeddedsystemComponent } from './projects/embeddedsystem/embeddedsystem.component';
import { ImageprocessingComponent } from './projects/imageprocessing/imageprocessing.component';
import { IotComponent } from './projects/iot/iot.component';
import { JavaComponent } from './projects/java/java.component';
import { PhpComponent } from './projects/php/php.component';
import { PythonComponent } from './projects/python/python.component';
import { RspberrypiComponent } from './projects/rspberrypi/rspberrypi.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'java', component: WorkshopsComponent },
  { path: 'tcad', component: WorkshopsComponent },
  { path: 'py', component: WorkshopsComponent},
  { path: 'iot', component: WorkshopsComponent},
  { path: 'ml', component: WorkshopsComponent},
  { path: 'al', component: WorkshopsComponent},
  { path: 'plc', component: WorkshopsComponent},
  { path: 'avr', component: WorkshopsComponent},
  { path: 'vhdl', component: WorkshopsComponent},
  { path: 'android-projects', component: AndroidComponent},
  { path: 'embedded-projects', component: EmbeddedsystemComponent},  
  { path: 'image-projects', component: ImageprocessingComponent},  
  { path: 'iot-projects', component: IotComponent},  
  { path: 'java-projects', component: JavaComponent},  
  { path: 'php-projects', component: PhpComponent},  
  { path: 'python-projects', component: PythonComponent},  
  { path: 'raspberry-projects', component: RspberrypiComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
