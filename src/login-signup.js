import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';

import { store } from '../src/redux/store.js';
import {
  logIn
} from '../src/redux/actions.js';
import 'wc-epic-spinners';

import { FIREBASE_API_KEY } from '../env-vars.js';

class LoginSignup extends connect(store)(LitElement) {
  render() {
    return html`
      <div>
        <style>
          .login-signup-box {
            width: 300px;
            margin: 100px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .input-line {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .input-line input {
            height: 20px;
            margin: 5px 0;
            border: none;
            border-bottom: 1px solid #eee;
            padding-left: 5px;
          }
          .input-line label {
            color: #ccc;
          }
          .buttons-container {
            margin: 20px 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          button {
            padding: 10px 50px;
            border: none;
            border-radius: 4px;
            box-shadow: 5px 5px 5px #ddd;
            cursor: pointer;
          }
          #btnLogin {
            background-color: #eee;
          }
          #btnSignup {
            background-color: #22f;
            color: #fff;
          }
          #btnLogout {
            background-color: #f22;
            color: #fff;
            display: none;
          }
          .login-errors {
            color: #f00;
          }
          .login-errors p {
            text-align: center;
          }
          .hide {
            display: block;
          }
          .hide {
            display: none;
          }
          #error-spinner {
            margin-top: 10px;
          }
        </style>

        <h2>Login-Signup</h2>

        <div class="login-signup-box">
          <div class="input-line">
            <label for="email">E-Mail</label>
            <input id="txtEmail" type="email" name="email" placeholder="Type here...">
          </div>
          <div class="input-line">
            <label for="pass">Password</label>
            <input id="txtPassword" type="password" name="pass" placeholder="Type here...">
          </div>
          <div class="buttons-container">
            <button id="btnLogin">Login</button>
            <button id="btnSignup">Signup</button>
            <button id="btnLogout">Logout</button>
          </div>
          <div class="login-errors">
            ${this.logging ? html`<atom-spinner id="error-spinner" color="#ff1d5e" size="40"></atom-spinner>` : ''}
            <p class=${`${this.error !== '' ? 'show' : 'hide'}`}>${this.error}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      logging: {type: Boolean},
      error: {type: String}
    }
  }

  constructor() {
    super();
    this.logging = false;
    this.error = '';
  }

  firstUpdated() {
    // Web app's Firebase configuration
    let firebaseConfig = {
      apiKey: FIREBASE_API_KEY,
      authDomain: "anything-finder.firebaseapp.com",
      databaseURL: "https://anything-finder.firebaseio.com",
      projectId: "anything-finder",
      storageBucket: "anything-finder.appspot.com",
      messagingSenderId: "558820222659",
      appId: "1:558820222659:web:f27dad83785b83ab"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get elements
    const txtEmail = this.shadowRoot.getElementById('txtEmail');
    const txtPassword = this.shadowRoot.getElementById('txtPassword');
    const btnLogin = this.shadowRoot.getElementById('btnLogin');
    const btnSignup = this.shadowRoot.getElementById('btnSignup');
    const btnLogout = this.shadowRoot.getElementById('btnLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
      this.logging = true;
      this.error = '';
      // Get email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //Sign-in
      auth.signInWithEmailAndPassword(email, pass)
        .then(response => {
          this.logging = false;
          this.error = '';
          store.dispatch(logIn());
          console.log('Logged :)')
        })
        .catch(err => {
          this.logging = false;
          this.error = err.message;
        })
    });
    
    // Add signup event
    btnSignup.addEventListener('click', e => {
      this.logging = true;
      this.error = '';
      // Get email and pass
      // TODO: Check 4 real emails
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //Sign-in
      auth.createUserWithEmailAndPassword(email, pass)
        .then(response => {
          this.logging = false;
          this.error = '';
          console.log('User created :)')
        })
        .catch(err => {
          console.log('err: ', err);
          this.logging = false;
          this.error = err.message;
        })
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log('User logged: ', firebaseUser);
      } else {
        console.log('Not logged in');
      }
    });
  }
}

customElements.define('login-signup', LoginSignup);