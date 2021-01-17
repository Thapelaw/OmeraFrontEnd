import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditMechanicComponent } from './edit-mechanic/edit-mechanic.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { Role } from './model/role';
import { RegistrationComponent } from './registration/registration.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { SendInvoiceComponent } from './send-invoice/send-invoice.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path : '' ,component:LoginComponent},
  {path:'register-page',component:RegistrationComponent},
    {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'home',
        component: UserDashboardComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
      path: 'changeStatus/:id',
      component : RequestStatusComponent,
      canActivate: [AuthGuard],
        data: { roles: [Role.Admin]}

    },
    {
      path: 'send-invoice/:id',
      component : SendInvoiceComponent,
      canActivate: [AuthGuard],
        data: { roles: [Role.Admin]}

    },
    {
      path:'edit-mecchanic/:id',
      component : EditMechanicComponent,
      canActivate :[AuthGuard],
       data: {roles : [Role.Admin]}
    },
    {
      path:'edit-admin/:id',
      component:EditAdminComponent,
      canActivate :[AuthGuard],
       data: {roles : [Role.Admin]}
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
