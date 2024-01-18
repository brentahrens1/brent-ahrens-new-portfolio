import React, { useState, useRef, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

import '../../sass/_contact-form.scss'

const firebaseConfig = {
  apiKey: 'AIzaSyC4NsIij21Xo2vKlW-8pdH2FxNnETkLvgw',
  authDomain: 'portfolio-contact-78056.firebaseapp.com',
  projectId: 'portfolio-contact-78056',
  storageBucket: 'portfolio-contact-78056.appspot.com',
  messagingSenderId: '1009504064020',
  appId: '1:1009504064020:web:3e898c7b290aa61ea8cd01'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const formRef = useRef(null)

  const [messages, loading, error] = useCollection(
    collection(db, "messages"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the message to Firestore
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      timestamp: serverTimestamp()
    });

    setFormSubmitted(true);

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (formRef.current && !formRef.current.contains(e.target)) {
  //       setOpenForm(false);
  //     }
  //   }

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  
  // }, [openForm])

  return (
    <div className="contact-form">
      {
        openForm ?
          formSubmitted ?
            <>
              <h2>Thank you, I will be in touch soon.</h2>
              <h2>View projects I've worked on <a href="/index">here</a></h2>
            </>
          :
          <div className="form-wrapper">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-close" onClick={() => setOpenForm(false)}>
                <div className="form-close__bar"></div>
                <div className="form-close__bar"></div>
              </div>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label>Message:</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

              <button type="submit">Submit</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
          </div>
        :
          <div className="tier-grid">
            <h1>Pick a plan that best suits your companies needs.</h1>
            <div className="tier-grid-wrapper">
              <div className="tier-grid-wrapper__tier">
                <h3>Basic</h3>
                <p>This plan is for companies that are seeking a basic 2-3 page marketing website with an already designed template.</p>
                <ul>
                  <li>Template selected from Webflow, Squarespace, or Wordpress</li>
                  <li>Website populated with all content including text and images</li>
                  <li>SEO and Accessibility optimization</li>
                  <li>Ensure responsiveness and connect to domain</li>
                  <li>Please reach out for more details</li>
                </ul>
              </div>
              <div className="tier-grid-wrapper__tier">
                <h3>Pro</h3>
                <p>This plan is for companies that have a custom design and need custom developement to inplement the design and functionality</p>
                <ul>
                  <li>Template selected from Webflow, Squarespace, or Wordpress</li>
                  <li>Website populated with all content including text and images</li>
                  <li>SEO and Accessibility optimization</li>
                  <li>Ensure responsiveness and connect to domain</li>
                  <li>Please reach out for more details</li>
                </ul>
              </div>
              <div className="tier-grid-wrapper__tier">
                <h3>Premium</h3>
                <p>This is for companies looking for custom design and custom development built from the ground up to compliment your brand identity:</p>
                <ul>
                  <li>Complete custom design to compliment your brand</li>
                  <li>Custom codebase connected to a user friendly content management system</li>
                  <li>SEO and Accessibility optimization</li>
                  <li>Full responsiveness and cross browser compatability</li>
                  <li>Please reach out for more details</li>
                </ul>
              </div>
            </div>
            <div className="cta-container">
              <a href="/index">View My Projects</a>
              <button onClick={() => setOpenForm(true)}>Get in touch</button>
            </div>
          </div>
      }
    </div>
  );
};

export default Contact;