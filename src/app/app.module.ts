import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { RequestMapComponent } from './request-map/request-map.component';
import { AgmCoreModule } from '@agm/core';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RequestStatusComponent } from './request-status/request-status.component';
import { SendInvoiceComponent } from './send-invoice/send-invoice.component';
import { ViewAllMechanicsComponent } from './view-all-mechanics/view-all-mechanics.component';
import { AddNewMechanicComponent } from './add-new-mechanic/add-new-mechanic.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditMechanicComponent } from './edit-mechanic/edit-mechanic.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    FooterComponent,
    RequestMapComponent,
    UpdateProfileComponent,
    RequestStatusComponent,
    SendInvoiceComponent,
    ViewAllMechanicsComponent,
    AddNewMechanicComponent,
    EditMechanicComponent,
    ViewAdminComponent,
    AddAdminComponent,
    EditAdminComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAiXDp6kzNL0-PEcOjyewGMTFQ40rdlwWw',
      libraries: ['places']
    }),
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
