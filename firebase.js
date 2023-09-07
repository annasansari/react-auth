import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDy37ECY8bBvF9oM0jGLjwtbKayKnJhOvA",
    authDomain: "test-e83b7.firebaseapp.com",
    projectId: "test-e83b7",
    storageBucket: "test-e83b7.appspot.com",
    messagingSenderId: "1095416575854",
    appId: "1:1095416575854:web:cdfedb3d0fde20ec4eb37f",
    measurementId: "G-4NJYL5YJ4R"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {createUserWithEmailAndPassword, auth,signInWithEmailAndPassword  }