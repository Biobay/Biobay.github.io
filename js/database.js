// filepath: /c:/Users/mario/Desktop/github_project/Raser_group/js/database.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhy3EY3inV3g4fp7iyNDOkJ-Ua0zHSCzM",
    authDomain: "raser-group-srl.firebaseapp.com",
    databaseURL: "https://raser-group-srl-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "raser-group-srl",
    storageBucket: "raser-group-srl.firebasestorage.app",
    messagingSenderId: "166723581966",
    appId: "1:166723581966:web:b70c8d544268b917fba45f",
    measurementId: "G-J742G6BDE5"
  };

// Initialize Firebas
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Seleziona il form
const contactForm = document.getElementById('contact-form');

// Aggiungi un listener per l'evento submit
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Ottieni i valori dei campi del form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        // Aggiungi un nuovo documento alla collezione "contacts"
        await addDoc(collection(db, 'contacts'), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });
        alert('Messaggio inviato con successo!');
    } catch (error) {
        console.error('Errore durante l\'invio del messaggio: ', error);
        alert('Errore durante l\'invio del messaggio.');
    }

    // Resetta il form
    contactForm.reset();
});


const contact_finale_Form = document.getElementById('form_finale_contattaci');

// Aggiungi un listener per l'evento submit
contact_finale_Form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Ottieni i valori dei campi del form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('subject').value; // Numero di cellulare
    const message = document.getElementById('message').value;

    try {
        // Aggiungi un nuovo documento alla collezione "contacts"
        await addDoc(collection(db, 'AltriContatti'), {
            name: name,
            email: email,
            phone: phone, // Salva il numero di cellulare
            message: message,
            timestamp: new Date()
        });
        alert('Messaggio inviato con successo!');
    } catch (error) {
        console.error('Errore durante l\'invio del messaggio: ', error);
        alert('Errore durante l\'invio del messaggio.');
    }

    // Resetta il form
    contact_finale_Form.reset();
});