import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  user$: Observable<User>;
  isReadyUser: boolean = true;

  constructor(
    private userService: UserService,
    private readonly route: ActivatedRoute
  ) {this.getUser();}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user$ = this.userService.getUserFromId(id).pipe(
      map((res) => {
        this.isReadyUser = true;
        console.log('user ret', res.data);
        return res.data;
      })
    );
  }
}
