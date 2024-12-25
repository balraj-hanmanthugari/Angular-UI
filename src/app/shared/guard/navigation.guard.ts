//import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { NavigationService } from '../service/navigation.service';
// import { ModalComponent } from '../component/modal/modal.component';

export const NavigationGuard: CanActivateFn = (route, state) => {
    // const navigationService = inject(NavigationService);
    // const modalComponent = inject(ModalComponent);
    // if(navigationService.getUnSavedChangesExist()) {
    //   modalComponent.openLg();
    // }
    // return navigationService.getUnSavedChangesExist();
    return true;
};