import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormGuard } from './guards/form.guard';
import { IsAdminGuard } from './guards/is-admin.guard';
import { LogInGuard } from './guards/log-in.guard';
import { UserService } from './services/user.service';
import { LocalizationService } from './services/localization.service';

@NgModule({
    providers: [ FormGuard, IsAdminGuard, LogInGuard, UserService, LocalizationService ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`CoreModule has already been loaded. Import core modules in AppModule only.`);
        }
    }
}
