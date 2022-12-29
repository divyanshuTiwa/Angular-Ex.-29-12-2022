

import { Component } from '@angular/core';  
import { AbstractControl, ValidatorFn } from '@angular/forms';
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
}) 
export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
/* 
export class AppComponent {
onSubmit: any;
[x: string]: any;
form: any;
submitted: any;
onSubmit(): {
throw new Error('Method not implemented.');
}
onsubmit() {
throw new Error('Method not implemented.');
}  
   const title = 'Welcome to Angular...';  
}*/
