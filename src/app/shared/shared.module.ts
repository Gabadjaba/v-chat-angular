import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { VChatInputComponent } from './v-chat-input/v-chat-input.component';


@NgModule({
  declarations: [
    VChatInputComponent
  ],
  exports: [
    VChatInputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
