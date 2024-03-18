import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateHeroComponent } from './pages/create-hero/create-hero.component';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SuperHeroService } from './services/super-hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateHeroComponent,
    EditHeroComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltip,
  ],
  providers: [
    provideAnimationsAsync('noop'),
    SuperHeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
