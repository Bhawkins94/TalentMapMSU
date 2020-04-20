import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDy5JjYveoqLOZdhojGwuJibtIocna3d5g",
  authDomain: "testdb-37f87.firebaseapp.com",
  databaseURL: "https://testdb-37f87.firebaseio.com",
  projectId: "testdb-37f87",
  storageBucket: "testdb-37f87.appspot.com",
  messagingSenderId: "120807551652",
  appId: "1:120807551652:web:a1767dc18021d7de05ec31",
  measurementId: "G-5D0YGDHH5F"
};

firebase.initializeApp(firebaseConfig);
export default firebase;