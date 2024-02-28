import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { User } from '../User';
import { UserService } from '../service/user.service';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatCardModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  constructor(private userService: UserService){}
  users: User[] = [];
  title = 'firebase-cms';
  firestore = inject(Firestore);
  
  ngOnInit(): void {
    getDocs(collection(this.firestore, "testPath")).then((response) => {
      console.log(response.docs)
    })
    //this.getUserList();
  }
  getUserList(){
    //this.users = this.userService.getUser();
  }
  
}
