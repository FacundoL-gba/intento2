import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
    ) {
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  registrar () {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password !== repetirPassword) {
      alert('Las contraseñas no son iguales');
      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.loading = false;
      alert('¡Usuario Registrado con Exito!');
      this.router.navigate(['/login']);
    }).catch((error) => {
      this.loading = false;
      console.log(error);
      alert(this.firebaseError.codeError(error.code))
    })
  }
}
