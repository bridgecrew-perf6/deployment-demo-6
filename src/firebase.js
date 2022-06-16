import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  DocumentSnapshot,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBk0WxCPGnDaDLgt30RvAuIboXAyOxLPb8",
  authDomain: "clone-d2fac.firebaseapp.com",
  projectId: "clone-d2fac",
  storageBucket: "clone-d2fac.appspot.com",
  messagingSenderId: "797474730271",
  appId: "1:797474730271:web:bf58e314f0b36be7ab402a",
  measurementId: "G-559PR9MQGV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const commentsCollection = collection(db, "comments");
export { addDoc, onSnapshot, where, query } from "firebase/firestore";
export const getCommentsByVideo = async (videoId) => {
  const q = query(commentsCollection, where("videoId", "==", videoId));
  const snapshot = await getDocs(q);
  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};
