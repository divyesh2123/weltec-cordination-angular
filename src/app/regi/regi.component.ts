import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {

   profile  = this.fb.group({

     firstName : [],
     lastName : [],
     address: this.fb.group({
      street: [],
      city: [],
      state: [],
      zip: []

     })
    
   })
   SaveInfo()
   {
    console.log(this.profile.value)
   }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
