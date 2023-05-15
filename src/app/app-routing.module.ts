import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
=======
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [{ path: 'userview', component: UserviewComponent }];
>>>>>>> e4e9c87a016b400d5005c1955b9989c8cd86c78b

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
