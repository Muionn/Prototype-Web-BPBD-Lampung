// Tambahkan Firebase CDN di HTML sebelum script ini dipanggil
// Contoh di HTML:
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm2enUub5iDuRz5zt-c6azGwjARIcGQCo",
  authDomain: "website-bpbd-lampung.firebaseapp.com",
  projectId: "website-bpbd-lampung",
  storageBucket: "website-bpbd-lampung.appspot.com",
  messagingSenderId: "907535825975",
  appId: "1:907535825975:web:a08460394eacc25da613b2",
  measurementId: "G-L51CY0BQ4Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = firebase.analytics();

// Optional: Initialize Firebase Auth
const auth = firebase.auth();

// Optional: Initialize Firestore
const db = firebase.firestore();

document.cookie = "name=value; SameSite=Lax";
