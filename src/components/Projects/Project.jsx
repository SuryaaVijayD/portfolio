import {useState , useEffect} from 'react'
import "./index.css";
import AOS from "aos"
import 'aos/dist/aos.css'

function Project() {
    useEffect(()=>{
      AOS.init({duration:1500});
    },[]);
    const projects = [
        {
          title: "DermLens",
          description: "This project aims to provide users with a convenient platform to predict skin and hair-related issues using image classification techniques. The application consists of both web and mobile versions, allowing users to access it from different devices. ",
          image: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699028/Screenshot_2024-03-29_132445_eel1ta.png",
          link: "https://github.com/SuryaaVijayD/dermatology.git",
          tech: ["HTML", "CSS", "JavaScript","flask","Python"]
        },
        {
          title: "Crypto value Recommendation",
          description: "This project is a recommendation system for cryptocurrency prices. It allows users to: Select a cryptocurrency: Bitcoin, Ethereum, or Tether. Enter a future date: The system will predict the price of the chosen cryptocurrency on that date",
          image: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699046/Screenshot_159_aeoyla.png",
          link: "https://github.com/SuryaaVijayD/CryptoCurrencyRecommendationApp.git",
          tech: ["HTML", "CSS", "JavaScript","flask","Python"]
        },
        {
          title: "Recruitment System",
          description: "A recruitment system application is a software platform designed to streamline and automate the process of hiring new employees. It typically includes features such as job posting, candidate sourcing, applicant tracking, resume parsing, interview scheduling, candidate evaluation, and onboarding.",
          image: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711700150/Screenshot_2024-03-29_134530_wzfoe0.png",
          link: "https://github.com/SuryaaVijayD/Recruitment-Project.git",
          tech: ["HTML", "CSS", "JavaScript","flask","Python"]
        },
        {
          title: "FoodMunch App",
          description: "The food delivery application project, developed solely with HTML and CSS, offers dynamic responsiveness for seamless user experience. It enables users to browse menus, place orders, and track deliveries.",
          image: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1711699046/Screenshot_2024-03-29_131238_wveuyh.png",
          link: "https://foodeliverysv.ccbp.tech/",
          tech: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "TODO App",
          description: "The Todo application project, developed using only HTML and CSS, offers a dynamic and responsive interface for managing tasks. Users can add, delete, and mark tasks as completed. The project showcases effective use of HTML structure and CSS styling to create an intuitive and visually appealing user experience",
          image: "https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720507095/Screenshot_189_aa4z9k.png",
          link: "https://todosv.ccbp.tech/",
          tech: ["HTML", "CSS", "JavaScript"]
        }
      ];
    return (
    <div className='container mg' id='ProjectContainer'>
      <div className='row' style={{ minHeight: '100vh' }}>
        <div className='mg col-12'>
          <h1 className='project-head mb-2' data-aos="fade-out">
            My selection of <span className='sub-heading'>Recent Works</span>
          </h1>
        </div>
        <div className="wrapper" data-aos="fade-out">
          <div className="cont">
            <input type="radio" name="slide" id="c1" />
            <label htmlFor="c1" className="cards">
              <div className="row-container">
                <div className="icon">1</div>
                <div className="description">
                  <h4 className='text-dark fw-bold'>DermLens</h4>
                  <p className='text-dark'>Code in <a href='https://github.com/SuryaaVijayD/dermatology.git'>Link</a></p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="cards">
              <div className="row-container">
                <div className="icon">2</div>
                <div className="description">
                  <h4>Crypo Rate Recommendation</h4>
                  <p>Code in <a href='https://github.com/SuryaaVijayD/CryptoCurrencyRecommendationApp.git'>Link</a></p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="cards">
              <div className="row-container">
                <div className="icon">3</div>
                <div className="description">
                  <h4>FoodMunch</h4>
                  <p>Link: <a href='https://foodeliverysv.ccbp.tech/'>Click Here!</a></p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c4" />
            <label htmlFor="c4" className="cards">
              <div className="row-container">
                <div className="icon">4</div>
                <div className="description">
                  <h4>Recruitment App</h4>
                  <p>Code in <a href='https://github.com/SuryaaVijayD/Recruitment-Project.git'>Link</a></p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c5" />
            <label htmlFor="c5" className="cards">
              <div className="row-container">
                <div className="icon">5</div>
                <div className="description">
                  <h4 className='text-dark'>To Do App</h4>
                  <p className='text-dark'>Code in <a href='https://todosv.ccbp.tech/'>Click Here!</a></p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className='d-md-none mt-5'>
          {projects.map((project, index) => (
            <div className='col-lg-6 card-container d-flex flex-column justify-content-center align-items-center' key={index} data-aos="fade-right">
              {/* edited code */}
              <div className='image-container'>
                <img src={project.image} alt={project.title} className='prod-image ml-4' />
              </div>
              <div className='img-content'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <button className='proj-btn' onClick={() => handleClick(project.link)}>View Demo or gitLink</button>
              </div>
              {/* end */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
