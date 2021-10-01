import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Command } from '../models/Command';

@Component({
  selector: 'create-command',
  templateUrl: './create-command.component.html',
  styleUrls: ['./create-command.component.css']
})
export class CreateCommandComponent implements OnInit {
  newCommandForm: FormGroup;
  howTo: FormControl;
  commandLine: FormControl;
  comment: FormControl;

  @Input() platformId: string;
  @Input() platformName: string;

  @Output() addNewCommand = new EventEmitter;
  @Output() cancelAddNewCommand = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
    //Initialize all the formControls with initial value and validation.
    //These will be used in the form fields as formControlName="presenter" etc..
    this.howTo = new FormControl('', Validators.required);
    this.commandLine = new FormControl('', Validators.required);

    //The custom validator function restrictedWords, is added to this field, so when this field is validated, the function is called.
    this.comment = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    //Initialize the formGroup with all the formControls. This will be used in the form as [formGroup]="newSessionForm" in the template
    this.newCommandForm = new FormGroup({
      howTo: this.howTo,
      commandLine: this.commandLine,
      comment: this.comment,
    })
  }

  //The ngSubmit function that is called when the create session form is submitted
  saveCommand(formValues) {
    let command: Command = {
      commandLineId: undefined,//id will eventually be provided in a http service
      howTo: formValues.howTo,
      line: formValues.commandLine,//+ casts to a number
      promptPlatformName: this.platformName,
      comment: formValues.comment,
      promptPlatformId: this.platformId
    }

    //The create-session component is used as a child component in the event-details component. So when a new session is added here, this event is fired, and it can
    //then be handled in the component that uses it.
    this.addNewCommand.emit(command);
  }

  cancel() {
    this.cancelAddNewCommand.emit();
  }
}
