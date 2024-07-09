import './index.css'
import {MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md'
import 'animate.css'

const Home = () => {
  console.log()
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720438876/sun_rays_lkzdpn.png"
        className="ray1  d-none d-md-block"
        alt="ray1"
      />
      <img
        src="https://res.cloudinary.com/dvp9gkjpk/image/upload/v1720438876/sun_rays_lkzdpn.png"
        className="ray2"
        alt="ray1"
      />
      <div className="landing-page">
        <h4 className="heading">Who am I?</h4>
        <h1 className="mainheading animate__animated animate__zoomIn">
          Changing Imagination to Seamless{' '}
          <span className="secondary">UserExperience</span>
        </h1>
        <h4 className="heading2">
          I&#39;m Suryaa, Front-End Developer in India
        </h4>
        <button type="button" className="btn-custom">
          Explore
          <MdOutlineKeyboardDoubleArrowDown />
        </button>
      </div>
    </div>
  )
}
export default Home
