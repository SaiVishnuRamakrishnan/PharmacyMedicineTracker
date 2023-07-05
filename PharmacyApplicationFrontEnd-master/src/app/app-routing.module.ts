import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListMedicineAvailableComponent } from './list-medicine-available/list-medicine-available.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MedicineComponent } from './medicine_update/medicine.component';
import { RouteSessionGuardService } from './service/route-session-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TemparatureTrackingChartComponent } from './temparature-tracking-chart/temparature-tracking-chart.component';
import { WelcomeUserPageComponent } from './welcome-user-page/welcome-user-page.component';
import { MedicineRequestPageComponent } from './medicine-request-page/medicine-request-page.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteSessionGuardService]},
  {path:'listMedicineAvailable', component: ListMedicineAvailableComponent, canActivate:[RouteSessionGuardService]},
  {path:'aboutUS', component: AboutusComponent, canActivate:[RouteSessionGuardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteSessionGuardService]},
  {path:'medicine/:id', component: MedicineComponent, canActivate:[RouteSessionGuardService]},
  {path:'welcomeUserPageComponent/:name', component: WelcomeUserPageComponent, canActivate:[RouteSessionGuardService]},
  {path:'temperatureHistory/:id', component: TemparatureTrackingChartComponent, canActivate:[RouteSessionGuardService]},
  {path:'medicineRequest', component: MedicineRequestPageComponent, canActivate:[RouteSessionGuardService]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
