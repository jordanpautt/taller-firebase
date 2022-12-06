import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({});
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.buildForm();
  }

  get emailControl() {
    return this.registerForm.get('email');
  }

  get passwordControl() {
    return this.registerForm.get('password');
  }

  ngOnInit() { }

  public signUp(): void {
    const formValue = this.registerForm.value;
    this.authService.signupUser(formValue.email, formValue.password)
      .then(() => {
        this.router.navigateByUrl('login');
      })
      .catch(async (err) => {
        const alert = await this.alertController.create({
          message: err.message, buttons: [{ text: 'ok', role: 'cancel' }]
        });
        await alert.present();
      });
  }

  private buildForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
