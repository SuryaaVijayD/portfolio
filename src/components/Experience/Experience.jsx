import {React,useEffect} from 'react';
import './index.css';
import AOS from "aos"
import 'aos/dist/aos.css'

function Experience() {
  const ExpCard = [
    {
      id: 1,
      title: "App Development Workshop",
      url: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720512334/Screenshot_2024-07-09_133231-removebg-preview_wkjvlv.png",
      description: "Taught app development class for school students to share my knowledge with the younger generation."
    },
    {
      id: 2,
      title: "News feed app - TrichyTimes",
      url: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720512334/Screenshot_2024-07-09_133435-removebg-preview_njp3mw.png",
      description: "Created a news feed mobile and web app for Trichy Times media company."
    },
  ];
  useEffect(()=>{
    AOS.init({duration:1500});
  },[]);
  return (
    <div className='container mt-5' data-aos="fade-up">
        <h1 className='mb-5 text-white text-center fw-bolder text-uppercase resize' style={{fontSize:'20px',letterSpacing:'2px'}}>My Work <span className='gradient'>Experience</span></h1>
        <div className='row'>
            {ExpCard.map((expcard) => (
                <div key={expcard.id} className='col-12 col-md-6 mb-4'>
                    <div className='bg-card p-3'>
                        <div className='Image-container mb-3 '>
                            <img src={expcard.url} alt={expcard.title} className='img1' />
                        </div>
                        <div className='exp-content'>
                            <h3 className='heading'>{expcard.title}</h3>
                            <p className='exp-description'>{expcard.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Experience;
