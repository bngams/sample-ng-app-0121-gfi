import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser();
    this.changedSession();
    this.initForm('values');
  }

  changedSession(): void {
    this.userService.session.subscribe({
      next: (v) => console.log(`session changed: ${v}`)
    });
    this.userService.connect();
  }

  loadUser(): void {
    this.userService.hello();
    this.userService.getUser().subscribe(r => console.log('user', r));
  }

  initForm(values: any): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }

}
