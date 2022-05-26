import { Injectable } from '@angular/core';

import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  async register ([email,password]){
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,email,password
      )
      return user;
    } catch (e) {
      return e
    }
  }

  async login (email,password) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,email,password
      );
      return user;
    } catch (e) {
      return e
    }
  }

  logout(){
    return signOut(this.auth);
  }
}
