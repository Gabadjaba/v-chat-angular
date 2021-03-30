import { Component, Input, OnInit } from '@angular/core';
import InputTypeModel from './models/input-type.model';

@Component({
  selector: 'app-v-chat-input',
  templateUrl: './v-chat-input.component.html',
  styleUrls: ['./v-chat-input.component.scss']
})
export class VChatInputComponent {
  // @Input() type: InputTypeModel;
  // @Input() name: string;
  @Input() value: string | number;

  constructor() {
    this.value = '';
    // this.type = type;
    // this.name = name;
    // this.value = value;
  }

}
