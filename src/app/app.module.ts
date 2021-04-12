import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SharedModule } from './shared/shared.module';
import { VChatInputComponent } from './shared/v-chat-input/v-chat-input.component';
import { AuthService } from './core/services/auth-service';
import { CookieService } from './core/services/cookie-service/cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginComponent,
    DashboardComponent,
    LoginFormComponent,
    VChatInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
