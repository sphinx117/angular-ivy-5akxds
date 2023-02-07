import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // name: string;
  // id: number;
  usersList: User[];

  constructor(
    private userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.usersList = users.data;
      console.log(users.data);
    });
  }

  goToProfile(userId: number) {
    // this.userService.getUserFromId(userId).subscribe((user: any) => {
    //   this.id = user.data.id;
    // });

    const url = '/profile/' + userId;
    this.router.navigateByUrl(url);
  }
}
