
import { Routes, RouterModule } from "@angular/router";
import { Component, ModuleWithProviders } from "@angular/core";
import { PlantillaFuncionSimple } from "./components/plantilla.funcion.simple/plantilla.funcion.simple";
import { CochesComponent } from "./components/coches.component/coches.component";
import { MenuComponent } from "./components/menu.component/menu.component";
import { PlantillaFuncionMultiple } from "./components/plantilla.funcion.multiple/plantilla.funcion.multiple";

// No rutas al componente Menu ni al App root; el menú ya está en app.html y App es el bootstrap.
const appRoutes: Routes = [
    { path: '',component:MenuComponent  },
    { path: 'plantillas', component: PlantillaFuncionSimple },
     { path: 'plantillasmultiple', component: PlantillaFuncionMultiple },
       
];     

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);