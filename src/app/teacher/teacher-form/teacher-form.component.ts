import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.scss'
})
export class TeacherFormComponent {
  dropdownList = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' }
  ];
  selectedItems = [
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' }
  ];
  dropdownSettings:IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  
  addTitle: String = "Add Student";
  editTitle: String = "Edit Student";
  isEdit: Boolean = false;

  hideSuccessMessage: Boolean = true;
  hideFailureMessage: Boolean = true;

  constructor(private formBuilder: FormBuilder) {

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  teacherForm = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required]),
    skills: new FormArray([new FormControl(null)])
  });

  get skills(): FormArray {
    return this.teacherForm.get("skills") as FormArray
  }

  addSkill() {
    (<FormArray>this.teacherForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  removeSkill(skill: any) {
    (<FormArray>this.teacherForm.get('skills')).removeAt(skill);
  }

  get teacherFormControls() {
    return this.teacherForm.controls;
  }

  showAlert(type: any) {
    type === 'success' ? this.hideSuccessMessage = false : this.hideFailureMessage = false;
  }

  closeAlert(type: any) {
    type === 'success' ? this.hideSuccessMessage = true : this.hideFailureMessage = true;
  }

  saveTeacher() {

  }
}
