import React, { useEffect } from 'react';
import "./index.css";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa"; 
import { IoIosArrowForward } from "react-icons/io"; 
import AOS from "aos"
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:1200});
  },[]);
  return (
    <div className='container' id='ContactContainer'>
        <div className='row mg mb-5'>
            <div className="col-12 container-contact text-center">
                <div data-aos="fade-up">
                    <h1 className='text-white text-center mb-3 fw-bolder'>Wanna Make <span className='gradient'>Conversation<br/></span> To Me?</h1>
                    <p className='para-contact'>Reach out to me today and let's discuss how I can help you achieve your goal</p>
                    <button type='button' className='shadow btn-contact'>Contact Me now <IoIosArrowForward /></button>
                </div>
            </div>
            <div className='col-12 col-md-6 copy-container text-center text-md-left'>
                <h4 className='copyright'>Copyright @2024</h4>
            </div>
            <div className='col-12 col-md-6 icon-container text-center text-md-right'>
                <FaInstagram className='icon-1'/>
                <FaGithub className='icon-1'/>
                <FaLinkedinIn className='icon-1'/>
                <FaTwitter className='icon-1'/>
                <FaWhatsapp className='icon-1'/>
            </div>
        </div>
    </div>
  )
}

export default Contact;
