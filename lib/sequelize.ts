import { firestore, admin } from "./firestore";
import firebaseSequelizer from "firestore-sequelizer";

firebaseSequelizer.initializeApp(admin);
console.log(firebaseSequelizer.apps.length);

export {};

//buscar la falla en la conexion a base de datos desde produccion
// ver variables de ambiente
