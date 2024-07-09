import './index.css'

const NavBar = () => {
  console.log()
  return (
    <div>
      <nav
        id="NavView"
        className="w-100 d-flex justify-content-center mt-5 ml-1 mr-1 fixed-top animatenavbar"
      >
        <ul className="nav-icons">
          <li>
            <a href="#HomeContainer">Home</a>
          </li>
          <li>
            <a href="#ProjectContainer">Projects</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1rYE7CUyJ_9ivAXj2LxfNPZlmUHKoX5CT/view?usp=drive_link">Resume</a>
          </li>
          <li>
            <a href="#ContactContainer">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
