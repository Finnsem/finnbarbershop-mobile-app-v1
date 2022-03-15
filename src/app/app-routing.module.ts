import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'edit-booking/:id',
    loadChildren: () => import('./edit-booking/edit-booking.module').then( m => m.EditBookingPageModule)
  },

  {
    path: 'hairstyle',
    loadChildren: () => import('./hairstyle/hairstyle.module').then( m => m.HairstylePageModule)
  },
  {
    path: 'treatment',
    loadChildren: () => import('./treatment/treatment.module').then( m => m.TreatmentPageModule)
  },
  {
    path: 'barberprofile',
    loadChildren: () => import('./barberprofile/barberprofile.module').then( m => m.BarberprofilePageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'adminlogin',
    loadChildren: () => import('./adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'edit-job/:id',
    loadChildren: () => import('./edit-job/edit-job.module').then( m => m.EditJobPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
