import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import 'bootstrap/dist/css/bootstrap.min.css'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import { useState, useEffect } from 'react'
import Loader from './components/Loader/Loader'


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="background">
      <NavBar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
