// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "XXXX",
	authDomain: "XXXX",
	projectId: "sXXXXXX",
	storageBucket: "XXXXom",
	messagingSenderId: "XXXX",
	appId: "XXXXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

/* 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "XXXX",
	authDomain: "XXXX",
	projectId: "sXXXXXX",
	storageBucket: "XXXXom",
	messagingSenderId: "XXXX",
	appId: "XXXXX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
 */
