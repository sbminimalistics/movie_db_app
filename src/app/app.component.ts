import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
    constructor(private router: Router) {
    }

    initSearch(phrase: string) {
        console.log(`search phrase: ${phrase} inside AppComponent`);
        this.router.navigate(['/movies/', phrase]);
    }
}
