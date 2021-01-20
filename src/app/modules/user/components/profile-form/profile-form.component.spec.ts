import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileFormComponent } from './profile-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';


describe('ProfileFormComponent', () => {
  const spyUserService = jasmine.createSpyObj('UserService', ['hello', 'getUser']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        ProfileFormComponent
      ],
      providers: [
        {
          provide: UserService,
          useValue: spyUserService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProfileFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should loadUser', () => {
    const fixture = TestBed.createComponent(ProfileFormComponent);
    const app = fixture.componentInstance;
    // intercept method call
    spyUserService.getUser.and.returnValue(of({ lastname: 'Ng', firstname: 'Boris' }));
    app.loadUser();
    expect(app.user.lastname).toEqual('Ng');
  });

});
