import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './app-text-field.component.html',
  styleUrl: './app-text-field.component.css'
})
export class AppTextFieldComponent {
  @Input() value: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  } 
}
