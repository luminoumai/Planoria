import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "planoria-dad1f.firebaseapp.com",
  projectId: "planoria-dad1f",
  storageBucket: "planoria-dad1f.appspot.com",
  messagingSenderId: "989904618926",
  appId: "1:989904618926:web:3f230257dfb5d7e147b43f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);