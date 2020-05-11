import { Component, OnInit } from '@angular/core';
import { User } from '../auth/model/user';
import { AuthService } from '../auth/service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: User = new User();

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      Object.assign(this.currentUser, res.msg); //this.currentUser = res.msg;
    })
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  logout() {
    this.authService.doLogout()
  }
}
