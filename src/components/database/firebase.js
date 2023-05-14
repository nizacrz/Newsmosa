// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjF5ksP_2B4BtQC2IaBoKlo-wbp_Fym54",
  authDomain: "newsmosareact.firebaseapp.com",
  projectId: "newsmosareact",
  storageBucket: "newsmosareact.appspot.com",
  messagingSenderId: "521344407800",
  appId: "1:521344407800:web:b29806814707ffa71a830d",
  measurementId: "G-2D34B5Q26J"
};

firebase.initializeApp(firebaseConfig);

export default firebase;