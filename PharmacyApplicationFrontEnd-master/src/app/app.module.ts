import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListMedicineAvailableComponent } from './list-medicine-available/list-medicine-available.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicineComponent } from './medicine_update/medicine.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TemparatureTrackingChartComponent } from './temparature-tracking-chart/temparature-tracking-chart.component';
import { WelcomeUserPageComponent } from './welcome-user-page/welcome-user-page.component';
import { MedicineRequestPageComponent } from './medicine-request-page/medicine-request-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListMedicineAvailableComponent,
    MenuHeaderComponent,
    FooterComponent,
    LogoutComponent,
    MedicineComponent,
    AboutusComponent,
    TemparatureTrackingChartComponent,
    WelcomeUserPageComponent,
    MedicineRequestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
