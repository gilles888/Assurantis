
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './components/navbar/navbar.component';
import { AppFooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbarComponent, AppFooterComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-white">
      <app-navbar />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {
  title = 'ASSURANTIS';
}