import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/interfaces/users.interface';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  item: User;

  @Output()
  removeUser: EventEmitter<any> = new EventEmitter();

  @Output()
  viewUser: EventEmitter<any> = new EventEmitter();

  @Output()
  quickEditUser: EventEmitter<any> = new EventEmitter();

  @Output()
  editUser: EventEmitter<any> = new EventEmitter();

  editingMode = false;
  inputDirty: string;

  constructor() { }

  onNameChange(value) {
    console.log(value);
    this.item.name = value;
  }

  onUserNameChange(value) {
    console.log(value);
    this.item.username = value;
  }

  onPhoneChange(value) {
    console.log(value);
    this.item.phone = value;
  }

  toggleEditing() {
    if (this.editingMode) {
      this.quickEditUser.emit(this.item);
    }
    this.editingMode = !this.editingMode;
  }

  onRemove() {
    this.removeUser.emit(this.item);
  }

  onView() {
    this.viewUser.emit(this.item);
  }

  onEdit() {
    this.editUser.emit(this.item);
  }

  onCancelEditing(event) {
    console.log(event);
    this.editingMode = !this.editingMode;
  }

  ngOnInit() {
  }


}
