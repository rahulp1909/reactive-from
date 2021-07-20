import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    isLinear = true;
    isSubmit = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;
    category = [];
    organization = [];
    imagePreviews = [];
    imageFiles = [];

    constructor(private _formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) { }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            organization: ['', Validators.required],
            category: ['', Validators.required],
            activity: ['', Validators.required],
            title: ['', Validators.required],
            min_age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
            max_age: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            project_name: ['', Validators.required],
            project_image: [null, Validators.required],
            image_url: ['']
        });

        this.thirdFormGroup = this._formBuilder.group({
            project_name: ['', Validators.required],
            week_cost: this._formBuilder.array([this.weekCost()])
        });

        this.fourthFormGroup = this._formBuilder.group({
            project_name: ['', Validators.required],
            include_description: this._formBuilder.array([this.includeDescription()])
        });

        this.fifthFormGroup = this._formBuilder.group({
            project_name: ['', Validators.required],
            dates: this._formBuilder.array([this.dates()])
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

    weekCost(): FormGroup {
        return this._formBuilder.group({
            id: [],
            week: ['', Validators.required],
            cost: ['', Validators.required]
        });
    }

    weekCostControls() {
        return this.thirdFormGroup.get('week_cost') as FormArray;
    }

    addWeekCost() {
        this.weekCostControls().push(this.weekCost());
    }

    removeWeekCost(i: number) {
        this.weekCostControls().removeAt(i);

        if (this.weekCostControls().length <= 0) {
            this.addWeekCost();
        }
    }

    includeDescription(): FormGroup {
        return this._formBuilder.group({
            description: ['', Validators.required],
            inlcude: ['', Validators.required]
        });
    }

    includeDescriptionControl() {
        return this.fourthFormGroup.get('include_description') as FormArray;
    }

    addIncludeDescription() {
        this.includeDescriptionControl().push(this.includeDescription());
    }

    removeIncludeDescription(i:number) {
        this.includeDescriptionControl().removeAt(i);

        if (this.includeDescriptionControl().length <= 0) {
            this.addIncludeDescription();
        }
    }

    dates(): FormGroup {
        return this._formBuilder.group({
            date: ['', Validators.required]
        })
    }

    datesControls() {
        return this.fifthFormGroup.get('dates') as FormArray;
    }

    addDate() {
        this.datesControls().push(this.dates());
    }

    removeDate(i: number) {
        this.datesControls().removeAt(i);

        if (this.datesControls().length <= 0) {
            this.addDate();
        }
    }


    onImageSelectd(event) {
        if (event.target.files && event.target.files.length) {
            const file = (event.target as HTMLInputElement).files;
            
            //preview 
            for (let i = 0; i < event.target.files.length; i++) {
                this.imageFiles.push(event.target.files[i]);
                var reader = new FileReader();
                reader.onload = (event: any) => {
                    this.imagePreviews.push(event.target.result);
                }

                reader.readAsDataURL(event.target.files[i]);
            }

            this.secondFormGroup.patchValue({project_image: this.imageFiles});
            this.secondFormGroup.get('project_image').updateValueAndValidity();

            this.secondFormGroup.patchValue({image_url: this.imagePreviews});
            this.secondFormGroup.get('image_url').updateValueAndValidity();
        }
    }

    removeImage(i: number) {
        this.imagePreviews.splice(i,1);
        this.imageFiles.splice(i,1);
        
        this.secondFormGroup.patchValue({project_image: this.imageFiles});
        this.secondFormGroup.get('project_image').updateValueAndValidity();
        
        this.secondFormGroup.patchValue({image_url: this.imagePreviews});
        this.secondFormGroup.get('image_url').updateValueAndValidity();
    }

    nextForm(form, type) {

        if (typeof form.value.project_name !== undefined) {
            this.secondFormGroup.controls.project_name.setValue(form.value.project_name);
            this.thirdFormGroup.controls.project_name.setValue(form.value.project_name);
            this.fourthFormGroup.controls.project_name.setValue(form.value.project_name);
            this.fifthFormGroup.controls.project_name.setValue(form.value.project_name);
        }

        if (type == 'submit') {
            this.isSubmit = true;

        }
    }

}
