import { Component } from '@angular/core';

@Component({
    selector: 'gs-app',
    template: `
        <div>
            <h2>{{ pageTitle }}</h2>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = "My Angular 2 App";
}