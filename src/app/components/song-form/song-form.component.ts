import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISong } from 'src/app/interface/index.interface';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent implements OnInit, OnChanges {
  @Input() titleButton = '';
  @Input() updateData: ISong = null;
  @Output() emitDataForm = new EventEmitter<ISong>();
  formSong: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.updateData) {
      this.formSong.patchValue({ ...this.updateData });
    }
  }

  public async onSubmit() {
    const songFormValue = this.formSong.value as ISong;
    this.emitDataForm.emit(songFormValue);
    this.formSong.reset();
  }

  private buildForm(): void {
    this.formSong = this.formBuilder.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    });


  }


}
