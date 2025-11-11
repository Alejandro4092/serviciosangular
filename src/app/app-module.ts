import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProvider } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersonas } from './service/service.persona';
import { PersonasStandAloneComponent } from './components/personas-stand-alone-component/personas-stand-alone-component';
import { ServiceCoches } from './service/service.coches';
import { CochesComponent } from './components/coches.component/coches.component';
import { PlantillaFuncionSimple } from './components/plantilla.funcion.simple/plantilla.funcion.simple';
import { MenuComponent } from './components/menu.component/menu.component';
import { ServicePlantillas } from './service/service.plantillas';
import { PlantillaFuncionMultiple } from './components/plantilla.funcion.multiple/plantilla.funcion.multiple';


@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    CochesComponent,
    PlantillaFuncionSimple,
    MenuComponent,
    PlantillaFuncionMultiple,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    PersonasStandAloneComponent
],
  providers: [
    ServicePlantillas,
    ServiceCoches,
    ServicePersonas,
    provideHttpClient(),
     provideBrowserGlobalErrorListeners(),appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
