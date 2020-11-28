import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { User } from 'src/app/shared/interfaces/users.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnChanges {
  user: User;
  @ViewChild('editModal') editModal: ElementRef;

  @Input()
  editUser: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.editUser);
    if (typeof this.editUser !== 'undefined') {
      this.editModal.nativeElement.click();
    }
  }

}
