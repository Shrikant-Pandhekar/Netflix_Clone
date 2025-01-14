import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// const config = {
//   apiKey: "AIzaSyCghYC_wSxKn96-8_xUz5ivlDgE61aqKdA",
//   authDomain: "netflix-clone-6dc9a.firebaseapp.com",
//   projectId: "netflix-clone-6dc9a",
//   storageBucket: "netflix-clone-6dc9a.appspot.com",
//   messagingSenderId: "496034148778",
//   appId: "1:496034148778:web:58c92cf0a64ab4d6bd3bd3",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAcdva5hofGDH--Cv0zqOTi9Xj6L1dhavk",
  authDomain: "netflix-clone-3d838.firebaseapp.com",
  projectId: "netflix-clone-3d838",
  storageBucket: "netflix-clone-3d838.appspot.com",
  messagingSenderId: "970645454227",
  appId: "1:970645454227:web:4fa18fe88122fc8086bc66",
  measurementId: "G-88S4VX5P04"
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };
