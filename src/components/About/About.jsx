import {useState , useEffect} from 'react'
import './index.css'
import AOS from "aos"
import 'aos/dist/aos.css'


const About = () => {
  const [copySuccess, setCopySuccess] = useState(false)

  const textToCopy = 'dhakshinamoorthyvijay@gmail.com'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopySuccess(true)
      setTimeout(() => {
        setCopySuccess(false)
      }, 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleClick = () => {
    const button = document.querySelector('.btn-custom-email')
    button.classList.add('surprise-effect')

    setTimeout(() => {
      button.classList.remove('surprise-effect')
    }, 1000)
  }

  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  return (
    <div id='AboutContainer' className="mg p-4" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 shadow">
            <div className="card-1 p-4 shadow d-flex flex-column justify-content-end align-items-start">
              <div className="card-content">
                <h1 className="w-75 text-white card-head fw-bolder">
                  I mostly prefer the customer satisfaction and have a direct
                  communication.
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 shadow">
            <div className="card-2 p-4" data-aos="fade-out">
              <div>
                <h3 className="fs-6">I constantly try to improve</h3>
                <h1 className="fs-1 fw-bolder">Tech Stack</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 shadow">
            <div className="card-3 p-4" data-aos="fade-out">
            <div>
                <p className="para">THE INSIDE SCOOP</p>
                <h1 className="fs-4 head">Currently Building a Project</h1>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4 shadow card-4">
            <div className=" p-4" data-aos="fade-out">
              <h1 className='fs-4'>Do you want to <span className='gradient'>start a project</span> together</h1>
              <button
                type="button"
                className="btn-custom-email"
                onClick={() => {
                  copyToClipboard()
                  handleClick()
                }}
              >
                {copySuccess ? 'Copied!' : 'Copy Text'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
