 import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { MatSidenav } from '@angular/material/sidenav';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  mode = new FormControl('push');
  loading = true;

  constructor(public dialog: MatDialog, private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

  phone() {
    //  this.router.navigateByUrl('phone');
  }
  core() {
    //  this.router.navigateByUrl('core/signup');
  }
  authenticated() {
    if (localStorage.getItem('LoggedIn') == null) {
      return false;
    }
    if (localStorage.getItem('LoggedIn') != null) {
      return true;
    } else return false;
  }

  logout() {
    console.log('clicked');
    // const dialogRef = this.dialog.open(LogoutComponent, {
    //   width: "430px"
    // });
    // dialogRef.afterClosed().subscribe(data => {
    //   console.log("Logout closed");
    //   console.log(data);
    // });
  }

  openDialog() {
    // console.log("clicked");
    // const dialogRef = this.dialog.open(LoginComponent, {
    //   width: "300px"
    // });
    // dialogRef.afterClosed().subscribe(data => {
    //   console.log("Login closed");
    //   console.log(data);
    // });
  }
  openDialog1() {
    // console.log("clicked");
    // const dialogRef = this.dialog.open(SignupComponent, {
    //   height: "auto",
    //   width: "430px"
    // });
    // dialogRef.afterClosed().subscribe(data => {});
  }

  // public socialSignIn(socialPlatform : string) {
  //   let socialPlatformProvider;
  //   if(socialPlatform == "facebook"){
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   }else if(socialPlatform == "google"){
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }

  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       console.log(socialPlatform+" sign in data : " , userData);      }
  //   );
  // }

  ngOnInit(): void {
    this.authenticated();
  }
  title = 'Angular';
  description = 'NgRx Example';
}
