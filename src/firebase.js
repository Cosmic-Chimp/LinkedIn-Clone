import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk6fASExYemM158ZhsjPerI57TJRhf0Xo",
  authDomain: "linkedin-clone-377bb.firebaseapp.com",
  projectId: "linkedin-clone-377bb",
  storageBucket: "linkedin-clone-377bb.appspot.com",
  messagingSenderId: "804050095268",
  appId: "1:804050095268:web:c1a8b6f25c1e934351ea31",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { initializeAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCk6fASExYemM158ZhsjPerI57TJRhf0Xo",
//   authDomain: "linkedin-clone-377bb.firebaseapp.com",
//   projectId: "linkedin-clone-377bb",
//   storageBucket: "linkedin-clone-377bb.appspot.com",
//   messagingSenderId: "804050095268",
//   appId: "1:804050095268:web:c1a8b6f25c1e934351ea31",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// const auth = initializeAuth(firebaseApp);

// export { db, auth };

// { some trouble-shooting } :

// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   query,
//   orderBy,
//   onSnapshot,
//   collection,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   serverTimestamp,
//   arrayUnion,
// } from "firebase/firestore";

// import { getAuth, signInAnonymously } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCk6fASExYemM158ZhsjPerI57TJRhf0Xo",
//   authDomain: "linkedin-clone-377bb.firebaseapp.com",
//   projectId: "linkedin-clone-377bb",
//   storageBucket: "linkedin-clone-377bb.appspot.com",
//   messagingSenderId: "804050095268",
//   appId: "1:804050095268:web:c1a8b6f25c1e934351ea31",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// // const auth = initializeAuth(firebaseApp);

// const authenticateAnonymously = () => {
//   return signInAnonymously(getAuth(firebaseApp));
// };

// const addPost = (userName, userId) => {
//   const postRef = collection(db, "posts");
//   return addDoc(postRef, {
//     created: serverTimestamp(),
//     createdBy: userId,
//     users: [
//       {
//         userId: userId,
//         name: userName,
//       },
//     ],
//   });
// };

// const getPosts = (postId) => {
//   const postDocRef = doc(db, "postList", postId);
//   return getDoc(postDocRef);
// };

// export { db, authenticateAnonymously, addPost, getPosts };
