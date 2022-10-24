import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import  firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup
  loading: boolean = false;
  

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private _firebaseError: FirebaseCodeErrorService,
    private toastr: ToastrService,
    private cookieService: CookieService
  ) { 
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  } 

  ngOnInit(): void {
  }
  token: string | undefined;
  login() {
    const email = this.loginUsuario.value.email
    const password = this.loginUsuario.value.password
    
    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      if(user.user?.emailVerified) {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookieService.set("token", this.token);
          }
        )
        this.router.navigate(['/cursos']);
      } else {
        this.router.navigate(['/verificar-correo']);
      }
    }).catch((error) => {
      this.loading = false;
      this.toastr.error(this._firebaseError.codeError(error.code));
    })
  }
  getIdToken(){
    console.log( this.token )
    return this.cookieService.get("token");  
  }
  
}
