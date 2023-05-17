import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserviewComponent } from './userview/userview.component';
import { WorkerComponent } from './worker/worker.component';
import { AdminComponent } from './admin/admin.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'userview', component: UserviewComponent },
  { path: 'detail/:id', component: WorkerComponent },
  { path: 'output', component: OutputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
