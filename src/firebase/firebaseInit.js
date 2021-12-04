import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUCuC3dwoD4i7W1BFNVgnnoNC12RucJu8",
  authDomain: "vueblog-b2e18.firebaseapp.com",
  projectId: "vueblog-b2e18",
  storageBucket: "vueblog-b2e18.appspot.com",
  messagingSenderId: "704744582320",
  appId: "1:704744582320:web:bf6eaf26adf762eda71f75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
