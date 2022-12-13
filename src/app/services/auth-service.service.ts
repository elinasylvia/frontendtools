import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  static checkLoggedInUser() {
    throw new Error('Method not implemented.');
  }

  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // public loggedin: boolean = false;
  login(email: string, passwrd: string) {
    console.log("Verifying user with email: " + email);
    return this.afAuth.signInWithEmailAndPassword(email, passwrd)
      .then(result => {
        this.userEmail.next(email);
        this.router.navigate(['admin']);
        console.log("toimii")
      })
      .catch((error) => {
        console.log(error.message)
        console.log("ei toimi")

      });
  }


  getLoggedInUser(): any //funktiota kutsutaan canActivate()-funktiossa
  {
    // return of(true);
    return this.afAuth.authState;
  }

  getLoggedInUserEmail(): string {

    return this.userEmail.getValue();
  }

  checkLoggedInUser(): any {
    return this.userEmail;
  }

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
    return this.afAuth.signOut().then(() => {
      this.userEmail.next("");
      this.router.navigate(['hello']);
    });
  }
}
