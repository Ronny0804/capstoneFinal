import { initializeApp } from "firebase/app"
import { getFirestore, serverTimestamp,getDoc,doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/storage";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAK4pY6QDFcfKjTYitSc8vQ0C6mvaejrJg",
    authDomain: "msme-a4330.firebaseapp.com",
    databaseURL: "https://msme-a4330-default-rtdb.firebaseio.com",
    projectId: "msme-a4330",
    storageBucket: "msme-a4330.appspot.com",
    messagingSenderId: "4057459509",
    appId: "1:4057459509:web:170bd267980dd95064ba7c",
    measurementId: "G-PYPJYCDE9C"
})



export const firestore = getFirestore(firebaseApp)
 export const auth = getAuth(firebaseApp)
export const db={
    templates:"templates",
    userTemplate:"userTemplate",
    users:"users",
    formatedDoc:doc=>{
      return{id:doc.id,...doc.data()}
    },
    getCurrentTimeStamp:serverTimestamp,
  }

  //get Single Document

