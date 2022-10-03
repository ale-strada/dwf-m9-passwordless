import { firestore, admin } from "./firestore";
import firebaseSequelizer from "firestore-sequelizer";

firebaseSequelizer.initializeApp(admin);

export {};
