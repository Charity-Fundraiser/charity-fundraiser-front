import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FlexLayoutModule} from "@angular/flex-layout";
import {LoginComponent} from "./auth/login.component";
import {HeaderComponent} from "./shared/header/header.component";

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      HeaderComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FlexLayoutModule,
      ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
