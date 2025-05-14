import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoBrowserComponent } from './pages/photo-browser/photo-browser.component';

const routes: Routes = [{ path: '', component: PhotoBrowserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
