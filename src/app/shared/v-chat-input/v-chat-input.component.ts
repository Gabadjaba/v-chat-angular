import { Component, Input, OnInit } from '@angular/core';
import InputTypeModel from './models/input-type.model';

@Component({
  selector: 'app-v-chat-input',
  templateUrl: './v-chat-input.component.html',
  styleUrls: ['./v-chat-input.component.scss']
})
export class VChatInputComponent {
  // @Input() type: InputTypeModel;

  @Input() value: string;
  @Input() label: string;
  @Input() error: string;
  @Input() name: string;

  constructor() {
    this.value = '';
    this.label = 'Test label';
    this.error = '';
    this.name = 'login';
  }

  labelActive(): string {
    if (this.value.length > 0) {
      return 'label-active';
    }

    return '';
  }

  inputError(): string {
    if (this.error.length > 0) {
      return 'input-container input-error';
    }

    return 'input-container';
  }
}
