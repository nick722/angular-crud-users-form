import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User [] = [
    {id: 1, name: 'Piper', lastname: 'One'},
    {id: 2, name: 'Nick', lastname: 'Two'},
    {id: 3, name: 'Preston', lastname: 'Three'}
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }
}
