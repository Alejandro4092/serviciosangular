import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProvider } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersonas } from './service/service.persona';
import { PersonasStandAloneComponent } from './components/personas-stand-alone-component/personas-stand-alone-component';
import { ServiceCoches } from './service/service.cohes';
import { CochesComponent } from './components/coches.component/coches.component';


@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    CochesComponent,
  
  ],
  imports: [
    BrowserModule,
    routing,
    PersonasStandAloneComponent
],
  providers: [
    ServiceCoches,
    ServicePersonas,
    provideHttpClient(),
     provideBrowserGlobalErrorListeners(),appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
