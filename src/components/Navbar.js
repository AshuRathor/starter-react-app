import { React, useRef,useState, useContext } from 'react'
import Logo from '../img/logo.png'
import InvertedLogo from '../img/logo_non_inverted.png'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import LoadingBar from 'react-top-loading-bar'
import TeamContext from '../context/Team/TeamContext'

const Navbar = (props) => {
    // const [progress, setProgress] = useState(0)
    // const setValueProgress = ()=>{
    //     set
    // }
    const context = useContext(TeamContext)
    const {progress, setProgress} = context;
    const updateLoadOnClick = ()=>{
        setProgress(10)
    }
    // setProgress(90)
    // const {a} = context;
    console.log("Inside the context ",progress)

    const abtUs = useRef("")
    const cars = useRef("")
    const navbarBrand = useRef("")
    const navbarBrandImg = useRef("")
    const navbarHeading = useRef("")
    const navbar = useRef("")
    // const abtUsHover  = useRef("")


    const onClickAbtUs = () => {
        // abtUs.current.classList.toggle("real_show")
        // abtUs.current.classList.remove("show")
    }

    const onHoverAbtUs = () => {
        // abtUs.current.classList.add("real_show")
        // abtUs.current.classList.remove("show")
    }
    const onOutAbtUs = () => {
        // abtUs.current.classList.remove("show")
        // abtUs.current.classList.remove("real_show")
    }
    const carsClick = () => {
        // cars.current.classList.toggle("real_show")
        // cars.current.classList.remove("show")
    }
    const carsMouseOver = () => {
        // cars.current.classList.add('real_show')
        // cars.current.classList.remove("show")
    }
    const carsMouseOut = () => {
        // cars.current.classList.remove("show")
        // cars.current.classList.remove("real_show")
    }
    const brandMouseOver = () => {
        // navbarBrandImg.current.setAttribute("src", InvertedLogo)
        // navbarBrand.current.style.background = "white"
        // navbarHeading.current.style.color = "#232323"
    }
    const brandMouseout = () => {
        // navbarBrandImg.current.setAttribute("src", Logo)
        // navbarBrand.current.style.background = "None"
        // navbarHeading.current.style.color = "white"
    }
    const navbarOnscroll = () => {
        // navbar.current.style.opacity = "0.8"
        // navbar.current.classList.toggle("sticky-top", window.scrollY > 0)
    }


    return (
        // <div style={{maxHeight:"100%"}}>

            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <Helmet>
                <link  rel="stylesheet" href="/navigationCSS.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="/style/918.css" />
                <script src="/Script.js"></script>
            </Helmet>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"><img id="navbar-brandImg" src="img/logo.png" alt="" srcset=""/> <h1 id="navbar-brandHeading">TEAM ZENITH</h1></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item" id="homeItem">
                    <Link className="nav-link active" aria-current="page" id="homeLink" to="/"><i className="fa-solid fa-house"></i> HOME</Link>
                  </li>
                  
                  <li className="nav-item dropdown cars" id="carsItem">
                    <Link className="nav-link dropdown-toggle" id="carsLink" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-car-side"></i> CARS
                    </Link>
                    <ul className="dropdown-menu cars_within">
                      <li><Link className="dropdown-item" to="/">ELECTRIC CARS</Link></li>
                      <li><Link className="dropdown-item" to="/">COMBUSTION CARS</Link></li>
                    </ul>
                  </li>
                  
                  <li className="nav-item" id="mediaItem">
                    <Link className="nav-link active" aria-current="page" id="mediaLink" to="/"><i className="fa-solid fa-photo-film"></i> ALBUM</Link>
                  </li>
                  
                  <li className="nav-item" id="formula_studentItem">
                    <Link className="nav-link active" id="formula_studentLink" aria-current="page" to="/formulaStudent/"><i className="fa-solid fa-flag-checkered"></i> SAE STUDENT</Link>
                  </li>
        
        
                  <li className="nav-item dropdown abt_us " id="abt_usItem">
                    <Link className="nav-link dropdown-toggle" id="abt_usLink" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-address-card"></i> ABOUT US
                    </Link>
                    <ul className="dropdown-menu abt_us_within">
                      <li><Link className="dropdown-item" to="/team/">TEAM</Link></li>
                      <li><Link className="dropdown-item" to="/breakdown">DEPARTMENT</Link></li>
                      <li><Link className="dropdown-item" to="/">TESTIMONIALS</Link></li>
                      <li><Link className="dropdown-item" to="/ourAchievements/">OUR ACHIEVEMENTS</Link></li>
                      {/* <!-- <li><Link className="dropdown-item" to="/">TIMELINE</Link></li> --> */}
        
                    </ul>
                  </li>
        
        
                  <li className="nav-item" id="sponsorsItem">
                    <Link className="nav-link active" aria-current="page" id="sponsorsLink" to="/sponsors/"><i className="fa-solid fa-star"></i> SPONSORS</Link>
                  </li>
                </ul>
              </div>
            </div>
            <LoadingBar
                color='#f11946'
                progress={progress}
                // onLoaderFinished={() => setProgress(50)}
            />
          </nav>
        // </div>
    )
}

export default Navbar