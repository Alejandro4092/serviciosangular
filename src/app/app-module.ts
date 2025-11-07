import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProvider } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersonas } from '../service/service.persona';


@NgModule({
  declarations: [
    App,
    PersonasApiComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    ServicePersonas,
    provideHttpClient(),
     provideBrowserGlobalErrorListeners(),appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
