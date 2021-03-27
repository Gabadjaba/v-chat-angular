import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AppLayoutComponent, data: { activeMenuItem: 'dashboard' },
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { name: 'Dashboard' } },
      { path: 'chat', component: DashboardComponent, data: { name: 'Chat' } }
    ]
  },
  { path: '**', redirectTo: '/home' } // TODO 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
