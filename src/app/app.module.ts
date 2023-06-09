import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PhotoBrowserComponent } from './pages/photo-browser/photo-browser.component';
import { PhotoFormComponent } from './pages/photo-browser/photo-form/photo-form.component';
import { PhotoGalleryComponent } from './pages/photo-browser/photo-gallery/photo-gallery.component';
import { RoverImageComponent } from './components/rover-image/rover-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhotoBrowserComponent,
    PhotoFormComponent,
    PhotoGalleryComponent,
    RoverImageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
