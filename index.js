// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAriSCQZu4TtdXRwnKTd22YCCICnHQWlcw",
  authDomain: "gitwell-a5ae1.firebaseapp.com",
  projectId: "gitwell-a5ae1",
  storageBucket: "gitwell-a5ae1.firebasestorage.app",
  messagingSenderId: "278437707197",
  appId: "1:278437707197:web:011c1c5e8ab41e92b626d4",
  measurementId: "G-VGY8GJGYLM"
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("pushHabit").addEventListener("click", async () => {
  const journal = document.getElementById("journalText").value;
} )

try {
  await addDoc(collection(db, "texts"), { content: text });
  document.getElementById("journalText").value = "";
  loadData();
} catch (e) {
  console.log("Error", e);
}

async function loadData() {
  const querySnapshot = await getDocs(collection(db, "texts"));
  let outputHTML = "";
  
  querySnapshot.forEach((doc) => {
    outputHTML += `<p>${doc.data().content}</p>`;
  });

  document.getElementById(".journalPara").innerHTML = outputHTML;
}

// Load data on page load
window.onload = loadData;


