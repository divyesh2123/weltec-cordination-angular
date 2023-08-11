import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-form-example',
  templateUrl: './validation-form-example.component.html',
  styleUrls: ['./validation-form-example.component.css']
})
export class ValidationFormExampleComponent implements OnInit {

  isValid : boolean = true;


  profileForm = this.fb.group({
    firstName: ['',[
      Validators.required,
      Validators.maxLength(15),
      Validators.email,
      Validators.pattern('^[a-z][A-Z]')]],

    lastName: ['',Validators.required],
    address: this.fb.group({
      street: ['',Validators.required],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

 get f() {return this.profileForm.controls};

  get fsubcontrols() {

    return this.profileForm.get('address') as FormGroup

  }



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


    onSubmit()
    {
      this.isValid = this.profileForm.valid;
     
    }

  

}
