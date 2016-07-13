import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

declare var process: any;
let isDebug: boolean = process.env.NODE_ENV !== "production";

if(!isDebug) {
    enableProdMode();
}

bootstrap(AppComponent);