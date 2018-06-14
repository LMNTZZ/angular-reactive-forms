import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(
        null, 
        [Validators.required, CustomValidators.invalidProjectName], 
        CustomValidators.asyncInvalidProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectstatus': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();    
  }

}
