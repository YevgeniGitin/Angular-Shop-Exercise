import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { LogInRoutingModule } from './logIn-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        LogInRoutingModule,
        FormsModule
    ],
    declarations: [
       LogInFormComponent
    ],
})
export class LogInModule { }