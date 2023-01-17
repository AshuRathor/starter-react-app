import React, { Component, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Iframe from 'react-iframe'
import Supra from '../img/SUPRA SAE INDIA 2019.jpg'
import TeamContext from '../context/Team/TeamContext'
import { useContext } from 'react'



const Home =(props)=>{
    // export class Home extends Component{

    

    // componentDidMount(){
    //     console.log("COmponent did mount")
    //     setProgress(30)
        // setProgress(50)
        // setTimeout(() => {
        //     setProgress(100)
            
        // }, 300);
    // }
    const context = useContext(TeamContext);
    const {progress, setProgress} = context;

    useEffect(() => {
        setProgress(30)
        setProgress(50)
        setTimeout(() => {
            setProgress(100)
            
        }, 300);
      console.log("Component did mounted")

    }, [])
    
 
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="/index.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="style/918px.css" />
            </Helmet>
            <h1 className="h1tag">TEAM ZENITH</h1>

            <h3 className='h3tag'>Innovate, Build, Inspire</h3>
            <div id="homePageBtnDiv">
                <button id="homePageBtn">GET TO KNOW MORE ABOUT US</button>
                <a id="downA" href="#page2"><button id="down"><i className="fa-solid fa-chevron-down"></i></button></a>

            </div>
            <div id="page2">
                <div className="row threeBoxes">
                    <div className="col">
                        <div className="card " id="card1">
                            <div className="card-body">
                                <h5 className="card-title" id="card1h">2014</h5>
                                <h6 className="card-text" id="card1h2">YEAR OF INCEPTION </h6>
                                <p id="card1p">STARTED WITH 2 MOTOR ENTHUSIASTS AS A COMBUSTION TEAM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="card2">
                            <div className="card-body">
                                <h5 className="card-title" id="card2h">9</h5>
                                <h6 className="card-text" id="card2h2">MANUFACTURED VEHICLES</h6>
                                <p id="card2p">9 COMBUSTION VEHICLES</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="card3">
                            <div className="card-body">
                                <h5 className="card-title" id="card3h">13</h5>
                                <h6 className="card-text" id="card3h2">COMPETITIONS</h6>
                                <p id="card3p">Go-Karts, HPVC, SUPRA SAE, BAJA SAEINDIA, FSA</p>
                            </div>
                        </div>

                    </div>

                    <div id="textOfPage2">
                        <img src={Supra} alt="image"/>
                    </div>

                </div>

                <div className="card footer bg-dark">
                    <div className="card-footer ">
                        <div id="insideFooter1">
                            <div id="frontFooter1">
                                <div id="address">
                                    <h6>Address</h6>
                                    <p>G7WC+PHM, G.B. Pant Engineering Resident,  Okhla Phase I, Okhla Industrial  Estate, New Delhi,   Delhi 110020</p>
                                </div>
                                <div id="feedback">
                                    <h6>Feedback</h6>
                                    <p>Please send us your ideas, bug reports, suggestions! Any  feedback would be  appreciated.</p>

                                </div>
                                <div id="contacts">
                                    <h6>Contacts</h6>
                                    <p>Aditya Bhardwaj
                                        Team Captain
                                        <a href="tel: +91 81786 71507"></a> +91 81786 71507</p>
                                </div>
                            </div>
                            <div id="FrontFooter2">
                                <Iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7631605863767!2d77.2714215!3d28.546837699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e5a2ab992b%3A0xe0dff05757a938b4!2sGB%20Pant%20DSEU%20Okhla%201%20Campus%20DSEU!5e0!3m2!1sen!2sin!4v1665812605104!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                        </div>
                        <div id="insideFooter2">
                            <div className="footerIcons">
                                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/company/team-zenith"><i className="fa-brands fa-linkedin-in" id="lnkdn"></i></a>
                                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/team_zenith101/?hl=en"><i className="fa-brands fa-instagram" id="insta"></i></a>
                                <a target="_blank" rel='noreferrer' href="https://youtube.com/channel/UCe5cEfpWNNsLdltQmhUQlHQ" ><i id="utube" className="fa-brands fa-youtube"></i></a>
                                <a href="mailto:teamzenith@gbpec.edu.in" ><i id="mail" className="fa-regular fa-envelope"></i></a>
                            </div>
                            <p>Feel Free to contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
    
}

            export default Home