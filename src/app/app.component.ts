import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-css-animations';

  constructor(
    private router: Router,
    private contexts: ChildrenOutletContexts
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url === '/');
        event.url === '/'
          ? document.documentElement.style.setProperty('--title-height', '50vh')
          : document.documentElement.style.setProperty(
              '--title-height',
              '25vh'
            );
      }
    });
  }

}
