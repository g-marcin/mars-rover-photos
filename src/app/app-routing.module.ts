import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoBrowserComponent } from './pages/photo-browser/photo-browser.component';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent},
  { path: 'browser', component: PhotoBrowserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
