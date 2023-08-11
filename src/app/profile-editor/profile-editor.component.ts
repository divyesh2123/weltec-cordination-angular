import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {


  fname = new FormControl('');
  lname = new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

  display()
  {
    this.fname.setValue('test123');
    console.log(this.fname.value + ' ' + this.lname.value);
  }

}
