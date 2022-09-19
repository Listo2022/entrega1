import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { OrdenesComponent } from './Components/ordenes/ordenes.component';
import { PlatosComponent } from './Components/platos/platos.component';
import { RestaurantesComponent } from './Components/restaurantes/restaurantes.component';
import { SeguimientosComponent } from './Components/seguimientos/seguimientos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent},
  { path: 'empleados', component: EmpleadosComponent},
  { path: 'ordenes', component: OrdenesComponent},
  { path: 'restaurantes', component: RestaurantesComponent},
  { path: 'platos', component: PlatosComponent},
  { path: 'seguimientos', component: SeguimientosComponent},
  { path: 'servicios', component: ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
