import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RestaurantesComponent } from './Components/restaurantes/restaurantes.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { PlatosComponent } from './Components/platos/platos.component';
import { SeguimientosComponent } from './Components/seguimientos/seguimientos.component';
import { OrdenesComponent } from './Components/ordenes/ordenes.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantesComponent,
    ClientesComponent,
    PlatosComponent,
    SeguimientosComponent,
    OrdenesComponent,
    EmpleadosComponent,
    ServiciosComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
