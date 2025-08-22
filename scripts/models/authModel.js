// Auth Model - Handle all authentication related operations

class AuthModel {
  constructor(auth, database) {
    this.auth = auth;
    this.database = database;
  }

  signup(name, email, password) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        return this.database.ref("users/" + userId).set({
          name: name,
          email: email,
        });
      });
  }

  login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.auth.signOut();
  }

  getCurrentUser(){
    return this.auth.currentUser;
  }
}
