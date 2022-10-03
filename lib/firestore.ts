import admin from "firebase-admin";

var serviceAccount = JSON.parse(process.env.FIREBASE_CONNECTION);
if (admin.apps.length == 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
//console.log(admin.apps.length, "firestore");

const firestore = admin.firestore();
export { firestore, admin };
