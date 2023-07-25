import { Component, EventEmitter, Input, Output } from '@angular/core';
import { employeeType } from 'src/app/models/employeeType';

@Component({
  selector: 'sa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() employee!: employeeType;
  @Output() info = new EventEmitter<employeeType>();

  sendInfo(employee: employeeType) {
    this.info.emit(employee);
  }
}
