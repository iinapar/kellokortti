import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [{ path: 'userview', component: UserviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
