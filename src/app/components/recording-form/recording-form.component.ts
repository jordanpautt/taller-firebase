import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRecording } from '../../interface/index.interface';

@Component({
  selector: 'app-recording-form',
  templateUrl: './recording-form.component.html',
  styleUrls: ['./recording-form.component.scss'],
})
export class RecordingFormComponent implements OnInit, OnChanges {
  @Input() titleButton = '';
  @Input() updateData: IRecording = null;
  @Output() emitDataForm = new EventEmitter<IRecording>();
  formRecording: FormGroup = this.formBuilder.group({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.updateData) {
      this.formRecording.patchValue({ ...this.updateData });
    }
  }

  public async onSubmit() {
    const recordingFormValue = this.formRecording.value as IRecording;
    this.emitDataForm.emit(recordingFormValue);
    this.formRecording.reset();
  }

  private buildForm(): void {
    this.formRecording = this.formBuilder.group({
      nameRecording: ['', Validators.required],
      typeOfMelody: ['', Validators.required],
      numberOfCabins: [0, Validators.required],
      owner: ['', Validators.required],
    });
  }

}
