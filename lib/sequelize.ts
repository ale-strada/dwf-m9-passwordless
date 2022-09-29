import { firestore, admin } from "./firestore";
import firebaseSequelizer from "firestore-sequelizer";

firebaseSequelizer.initializeApp(admin);
//console.log(firebaseSequelizer.apps.length);

export {};
