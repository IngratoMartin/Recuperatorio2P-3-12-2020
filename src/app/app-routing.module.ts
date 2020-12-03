import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAutoComponent } from './pages/listar-auto/listar-auto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LogueadoGuard } from '../app/guards/logueado.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { AltaAutoComponent } from './pages/alta-auto/alta-auto.component';
import { MisAutosComponent } from './pages/mis-autos/mis-autos.component';
import { ModificarComponent } from './pages/modificar/modificar.component';

const routes: Routes = [
  {
    path:"",
    component:ListarAutoComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registro",
    component:RegistroComponent
  },
  {
    path:"logout",
    component:LogoutComponent,
    canActivate:[LogueadoGuard]
  },
  {
    path:"publicar",
    component:AltaAutoComponent,
    canActivate:[LogueadoGuard]
  },
  {
    path:"misautos",
    component:MisAutosComponent,
    canActivate:[LogueadoGuard]
  },
  {
    path: 'modificar/:id',
    component: ModificarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
