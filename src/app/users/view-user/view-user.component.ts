import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { User } from 'src/app/shared/interfaces/users.interface';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit, OnChanges {
  user: User;
  @ViewChild('viewModal') viewModal: ElementRef;

  @Input()
  viewUser: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.viewUser);
    if (typeof this.viewUser !== 'undefined') {
      this.viewModal.nativeElement.click();
    }
  }

}
