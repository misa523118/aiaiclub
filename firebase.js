// firebase.js
// ↓ Firebaseが提示したAPIキーをそのまま使う（ここだけFirebase提示のものを流用）
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ↓ ここはFirebaseコンソールが提示した値をそのまま使う
const firebaseConfig = {
  apiKey: "AIzaSyASQUHhVG7uFYDa1YqLS0iY8xvLzQrj1Zc",
  authDomain: "hogonekosite-4df15.firebaseapp.com",
  projectId: "hogonekosite-4df15",
  storageBucket: "hogonekosite-4df15.firebasestorage.app",
  messagingSenderId: "447638577442",
  appId: "1:447638577442:web:18741de859469b401b857b",
  measurementId: "G-2DWNC14DM4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
