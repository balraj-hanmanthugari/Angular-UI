import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService  {

  private unSavedChangesExist: any = false;

  constructor() {}

  setUnSavedChangesExist(exist: any) {
    this.unSavedChangesExist = exist;
  }

  getUnSavedChangesExist() {
    return this.unSavedChangesExist;
  }

}