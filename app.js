//initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_uWH4qG2OsYBeFcF0BEwVGeCc6eFvFoc",
  authDomain: "weather-dashboard-3310c.firebaseapp.com",
  databaseURL: "https://weather-dashboard-3310c-default-rtdb.firebaseio.com",
  projectId: "weather-dashboard-3310c",
  storageBucket: "weather-dashboard-3310c.firebasestorage.app",
  messagingSenderId: "366019390989",
  appId: "1:366019390989:web:a68bbf84b92bcd8b282f44",
  measurementId: "G-W326BHNNND"
};

firebase.initializeApp(firebaseConfig);

//initialize firebase serve
const auth = firebase.auth();
const database = firebase.database();