import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // public loggedin: boolean = false;
  login(email: string, passwrd: string) {
    console.log("Verifying user with email: " + email);
    return this.afAuth.signInWithEmailAndPassword(email, passwrd)
      .then(result => {
        this.userEmail.next(email);
        this.router.navigate(['admin']);
      })
      .catch((error) => {
        console.log(error.message)
      });
  }


  getLoggedInUser(): any //funktiota kutsutaan canActivate()-funktiossa
  { return of(true); }

  checkLoggedInUser(): any { }

  constructor(public afAuth: AngularFireAuth, //inject firebase auth service
    public router: Router) {
    //käytetään subscribe metodia, jolla tilataan firebasesta kirjautuneen käyttäjän sposti
    //http pyynnön vastaanottava muuttuja on userEmail
    //jos käyttäjä on kirjautunut, sposti tallennetaan userEmail-muuttujaan
    this.afAuth.authState.subscribe(user => {
      let userEmail = user?.email as string;
      if (user != null) this.userEmail.next(userEmail);
    });
  }
  logout() {
    this.router.navigate(['hello']);
  }
}
