import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'http';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  category = [];
  organization = [];
  constructor(private _formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      organization: ['', Validators.required],
      category: ['', Validators.required],
      activity: ['', Validators.required],
      title: ['', Validators.required],
      min_age: ['', Validators.required],
      max_age: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      project_name: ['', Validators.required],
      project_image: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      project_name: ['', Validators.required],
      week: ['', Validators.required],
      cost: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      project_name: ['', Validators.required],
      inlcude_description: ['', Validators.required],
      inlcude: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      project_name: ['', Validators.required],
      dates: ['', Validators.required],
    });

    this.projectService.geCategory().subscribe((result) => {
      console.log(result);
      if (result.status) {
        this.category = result.data;
      }
    });

    this.projectService.geOrganization().subscribe((result) => {
      if (result.status) {
        this.organization = result.data;
      }
    })
  }

  nextForm(form, type) {
    
    if (typeof form.value.project_name !== undefined) {
      this.secondFormGroup.controls.project_name.setValue(form.value.project_name);
      this.thirdFormGroup.controls.project_name.setValue(form.value.project_name);
      this.fourthFormGroup.controls.project_name.setValue(form.value.project_name);
      this.fifthFormGroup.controls.project_name.setValue(form.value.project_name);
    }
    
    if (type == 'submit') {
      localStorage.setItem('firstFormGroup', JSON.stringify(this.firstFormGroup.value));
      localStorage.setItem('secondFormGroup', JSON.stringify(this.secondFormGroup.value));
      localStorage.setItem('thirdFormGroup', JSON.stringify(this.thirdFormGroup.value));
      localStorage.setItem('fourthFormGroup', JSON.stringify(this.fourthFormGroup.value));
      localStorage.setItem('fifthFormGroup', JSON.stringify(this.fifthFormGroup.value));

      this.router.navigate(['/details']);
    }
    
  }

}
