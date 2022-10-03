import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginUsuario: FormGroup
  token: string | undefined; 
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private _firebaseError: FirebaseCodeErrorService,
    private toastr: ToastrService
  ) { 
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  
  getIdToken (){
    console.log(this.token);
    return this.token;
  }
}
