import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LogInFormComponent } from './log-in-form/log-in-form.component';

const routes: Routes = [
    {path: 'logIn', component: LogInFormComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LogInRoutingModule {}