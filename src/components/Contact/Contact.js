import React, { useState, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from '../../images/websites/gettingsmart.png';
import image2 from '../../images/websites/wnw.png';
import image3 from '../../images/websites/acehotel.png';
import image4 from '../../images/websites/tempopay.png';
import image5 from '../../images/websites/youngarts.png';
import image6 from '../../images/websites/kins.png';

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
            <div className="thank-you-message">
              <h2>Thank you, I will be in touch soon.</h2>
              <h2>View projects I've worked on <a href="/index">here</a></h2>
            </div>
          :
          <div className="form-wrapper">
            <h1>Get in touch!</h1>
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
            <h1>Brent Ahrens</h1>
            <h1>Web Development and Design</h1>
            <div className="tier-grid-wrapper">
              <div className="tier-grid-wrapper__tier">
                <h3>Basic</h3>
                <p>Basic 2-3 page marketing website with an pre-designed template.</p>
                <ul>
                  <li>Template selected from Webflow, Squarespace, Wordpress or CMS platform.
                    <span>&#10003;</span>
                  </li>
                  <li>Website populated with all content including text, images, and meta data
                    <span>&#10003;</span>
                  </li>
                  <li>SEO and Accessibility optimization
                    <span>&#10003;</span>
                  </li>
                  <li>Full responsiveness and cross browser compatability
                    <span>&#10003;</span>
                  </li>
                </ul>
                <h4 className="email-btn" onClick={() => setOpenForm(true)}>Email for more details</h4>
              </div>
              <div className="tier-grid-wrapper__tier">
                <h3>Pro</h3>
                <p>Custom developement to implement your design.</p>
                <ul>
                  <li>Design brought to life with pixel perfect web development.
                    <span>&#10003;</span>
                  </li>
                  <li>CMS to provide company with full control of content
                    <span>&#10003;</span>
                  </li>
                  <li>SEO and Accessibility optimization
                    <span>&#10003;</span>
                  </li>
                  <li>Full responsiveness and cross browser compatability
                    <span>&#10003;</span>
                  </li>
                </ul>
                <h4 className="email-btn" onClick={() => setOpenForm(true)}>Email for more details</h4>
              </div>
              <div className="tier-grid-wrapper__tier">
                <h3>Premium</h3>
                <p>Custom design and custom development to compliment your brand identity:</p>
                <ul>
                  <li>Custom design that embodies the brand identity and company values.
                    <span>&#10003;</span>
                  </li>
                  <li>Custom development to bring the design to life
                    <span>&#10003;</span>
                  </li>
                  <li>CMS to provide company with full control of content
                    <span>&#10003;</span>
                  </li>
                  <li>tutorials on how to update the content.
                    <span>&#10003;</span>
                  </li>
                  <li>1 month of additional web support.
                    <span>&#10003;</span>
                  </li>
                  <li>SEO and Accessibility optimization
                    <span>&#10003;</span>
                  </li>
                  <li>Full responsiveness and cross browser compatability
                    <span>&#10003;</span>
                  </li>
                </ul>
                <h4 className="email-btn" onClick={() => setOpenForm(true)}>Email for more details</h4>
              </div>
            </div>
            <div className="cta-container">
              <a href="/index">View My Projects</a>
              <button onClick={() => setOpenForm(true)}>Get in touch</button>
            </div>
            <div style={{marginTop: "110px"}}>
              <h1 style={{marginBottom: "20px"}}>Featured Work</h1>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="swiper-custom"
              >
                <SwiperSlide>
                  <img src={image2} style={{height: "100%", width: "100%", objectFit: "cover"}} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image5} style={{height: "100%", width: "100%", objectFit: "cover"}} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image3} style={{height: "100%", width: "100%", objectFit: "cover"}} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image1} style={{height: "100%", width: "100%", objectFit: "cover"}} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image4} style={{height: "100%", width: "100%", objectFit: "cover"}} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image6} style={{height: "100%", width: "100%", objectFit: "cover"}} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div style={{marginTop: "110px", marginBottom: "110px"}}>
              <h1 style={{marginBottom: "20px"}}>Client list includes</h1>
              <h4 style={{display: "inline"}}>Working Not Working / </h4>
              <h4 style={{display: "inline"}}>Redesign Health / </h4>
              <h4 style={{display: "inline"}}>Hugo & Marie (Elyse Walker) / </h4>
              <h4 style={{display: "inline"}}>Thinkingbox (L'Oreal) / </h4>
              <h4 style={{display: "inline"}}>Gates Creative / </h4>
              <h4 style={{display: "inline"}}>Atelier Ace (Ace Hotel) / </h4>
              <h4 style={{display: "inline"}}>Made by Grizzly / </h4>
              <h4 style={{display: "inline"}}>Studio LaRocca</h4>
            </div>
          </div>
      }
    </div>
  );
};

export default Contact;