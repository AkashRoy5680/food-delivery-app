import {getApps,getApp,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyA86RYpBhXBt3NMJx6rJDtt2-dasm3DwSU",
    authDomain: "food-delivery-app-a7693.firebaseapp.com",
    databaseURL: "https://food-delivery-app-a7693-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-a7693",
    storageBucket: "food-delivery-app-a7693.appspot.com",
    messagingSenderId: "553135416599",
    appId: "1:553135416599:web:7211a0449b8b03d37ac352"
  };

  const app=getApps.Length >0?getApp():initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  const storage=getStorage(app);
  
  export {app,firestore,storage} ;