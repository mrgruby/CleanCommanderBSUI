import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform} from '../models/Platform';
import { CommanderService } from '../shared/services/commander.service';
import { Toastr, TOASTR_TOKEN } from '../shared/services/common/toastr.service';

@Component({
  selector: 'app-create-platform',
  templateUrl: './create-platform.component.html',
  styleUrls: ['./create-platform.component.css']
})
export class CreatePlatformComponent implements OnInit {
  newPlatformForm: FormGroup;
  promptPlatformName: FormControl;
  promptPlatformImageUrl: FormControl;

  constructor(private router:Router, private service:CommanderService, @Inject(TOASTR_TOKEN) private toastr:Toastr) { }

  public isDirty: boolean = true;
  ngOnInit(): void {
    this.promptPlatformName = new FormControl('', Validators.required);
    this.promptPlatformImageUrl = new FormControl('', Validators.required);

    //Initialize the formGroup with all the formControls. This will be used in the form as [formGroup]="newSessionForm" in the template
    this.newPlatformForm = new FormGroup({
      promptPlatformName: this.promptPlatformName,
      promptPlatformImageUrl: this.promptPlatformImageUrl
    })
  }

  cancel() {
    this.router.navigate(['/platforms']);
  }

  savePlatform(formValues){
    let platform: Platform = {
      promptPlatformId: undefined,
      promptPlatformName:formValues.promptPlatformName,
      promptPlatformImageUrl:formValues.promptPlatformImageUrl,
      commandLineList:[]
    }
    this.service.savePlatform(platform).subscribe(() => {
    this.toastr.success('New platform created');
    this.isDirty = false;
      this.router.navigate(['/platforms'])
    });
  }
}
