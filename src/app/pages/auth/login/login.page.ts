import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.buildForm();
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  ngOnInit() { }

  public login(): void {
    const formValue = this.loginForm.value;
    this.authService.loginUser(formValue.email, formValue.password)
      .then(() => {
        this.router.navigateByUrl('home');
      })
      .catch(async (err) => {
        const alert = await this.alertController.create({
          message: err.message, buttons: [{ text: 'ok', role: 'cancel' }]
        });
        await alert.present();
      });
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
