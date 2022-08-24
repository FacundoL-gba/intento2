import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }
  codeError(code: string) {
    switch(code) {
      case 'auth/email-already-in-use':
        return 'El email ya esta registrado';
      case 'auth/weak-password':
        return 'La contraseña es muy debil';
      case 'auth/invalid-email':
        return 'Correo no valido';
      default:
        return 'Error desconocido'
    }
  }
}
