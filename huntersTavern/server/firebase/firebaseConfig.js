// Import necessary Firebase services
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAsGywkV8BmBTFLS5V01L0MCecArOxf24",
  authDomain: "hunterstavern-chat.firebaseapp.com",
  projectId: "hunterstavern-chat",
  storageBucket: "hunterstavern-chat.firebasestorage.app",
  messagingSenderId: "337643429491",
  appId: "1:337643429491:web:0e905d979e90db453ad406",
  measurementId: "G-3D3Y2RGLFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
