import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '@angular/platform-browser-dynamic';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
