import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-browser',
  templateUrl: './photo-browser.component.html',
  styleUrls: ['./photo-browser.component.scss'],
})
export class PhotoBrowserComponent {
  isMenuOpen: boolean = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
