import React, { useEffect } from 'react';
import "./index.css";
import { FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"; 
import { IoIosArrowForward } from "react-icons/io"; 
import AOS from "aos"
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:1200});
  },[]);
  const makeCall = () => {
    window.location.href = 'tel:+916380596461';
  };
  return (
    <div className='container' id='ContactContainer'>
        <div className='row mg mb-5'>
            <div className="col-12 container-contact text-center">
                <div data-aos="fade-up">
                    <h1 className='text-white text-center mb-3 fw-bolder'>Wanna Make <span className='gradient'>Conversation<br/></span> To Me?</h1>
                    <p className='para-contact'>Reach out to me today and let's discuss how I can help you achieve your goal</p>
                    <button type='button' className='shadow btn-contact' onClick={makeCall}>Contact Me now <IoIosArrowForward /></button>
                </div>
            </div>
            <div className='col-12 col-md-6 copy-container text-center text-md-left'>
                <h4 className='copyright'>Copyright @2024</h4>
            </div>
            <div className='col-12 col-md-6 icon-container text-center text-md-right'>
                <a href="https://www.instagram.com/__.__suryaa__.__?igsh=MWNreGh0aGNqaWZ1eQ=="><FaInstagram className='icon-1'/></a>
                <a href="https://github.com/SuryaaVijayD"><FaGithub className='icon-1'/></a>
                <a href="https://www.linkedin.com/in/suryaa-d/"><FaLinkedinIn className='icon-1'/></a>
                <a href="https://wa.me/6380596461"><FaWhatsapp className='icon-1'/></a>
              
            </div>
        </div>
    </div>
  )
}

export default Contact;
