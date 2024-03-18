import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './pages/create-hero/create-hero.component';
import { HomeComponent } from './pages/home/home.component';
import { EditHeroComponent } from './pages/edit-hero/edit-hero.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-hero', component: CreateHeroComponent },
  { path: 'edit-hero', component: EditHeroComponent },
  { path: 'login', component: LoginComponent },
  { path: "**", redirectTo: '/home' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
