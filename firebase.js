import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBfptlfPi4j84sHURePstO1FhCoupP5KyI",
    authDomain: "pinkreactproject.firebaseapp.com",
    projectId: "pinkreactproject",
    storageBucket: "pinkreactproject.appspot.com",
    messagingSenderId: "576210780013",
    appId: "1:576210780013:web:268df0944d4a770bd5a464",
    databaseURL: "https://pinkreactproject-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export  {database};
