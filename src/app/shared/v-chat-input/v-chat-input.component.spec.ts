import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VChatInputComponent } from './v-chat-input.component';

describe('VChatInputComponent', () => {
  let component: VChatInputComponent;
  let fixture: ComponentFixture<VChatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VChatInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
