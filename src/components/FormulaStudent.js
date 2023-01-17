import { React} from 'react'
import { Helmet } from 'react-helmet'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const FormulaStudent = () => {

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
        <>
            <Helmet>
                <link rel="stylesheet" href="/formulaStudent/style.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="/formulaStudent/style/918px.css" />
            </Helmet>

            <div>
                <div className="page1">
                    <div id="formulaImgDiv"><img id="formulaImg" src="/formulaStudent/img/formula.jpg" alt="" /></div>
                    <div id="page1pDiv">
                        <h1>WHAT IS FORMULA STUDENT?</h1>
                        <p id="page1p">Formula Student is the most prestigious engineering competition for students with over 600 university teams, from all over the world, competing in it. The aim of the competition is the education and development of students through the design and manufacturing of a competitive racing vehicle, and the success of the team is judged by renowned engineers from the automotive industry as well as the motor sport industry.</p>
                        <button >Learn More</button>
                    </div>
                </div>

                <div className="page2">
                    <h2>DO YOU THINK WE HYPE FSG?</h2>
                    <h2>Here's what the tech giants have to say</h2>

                    <div className="speakers">
                        <div className="frst">
                            <img src="https://automobileclub.iitd.ac.in/assets/images/alia-200x200.jpg" alt="image not entered" />
                            <div className="rightpar1">
                                <p id="rp1p1">"Formula Student Germany has thrived since the beginning almost 15 years, because it has been built by 'Giants' and it grows future 'Giants'."</p>
                                <h3>Alia Hall</h3>
                                <p id="rp1p2">FSG OFFICIAL</p>
                            </div>
                        </div>
                    </div>

                    <div className="scnd">
                        <img src="https://automobileclub.iitd.ac.in/assets/images/thorsten-225x225.jpg" alt="image not entered" />
                        <div className="rightpar2">
                            <p id="rp2p1">"Team spirit, an infectious enthusiasm and the impressive professionalism of all teams that is what distinguishes FSG "</p>
                            <h3>Thorsten Walz</h3>
                            <p id="rp2p2">SIEMENS</p>
                        </div>
                    </div>
                </div>

                <div className="thrd">
                    <img src="https://automobileclub.iitd.ac.in/assets/images/martin-schneider-200x200.jpg" alt="image not entered" />
                    <div className="rightpar3">
                        <p id="rp3p1">"At FSG, we meet people who have what it takes to be successful: commitment, team
                            spirit, and the will to win."</p>
                        <h3>Martin Schneider</h3>
                        <p id="rp3p2">BROSE GROUP</p>
                    </div>
                </div>

                <div className="frth">
                    <img src="https://automobileclub.iitd.ac.in/assets/images/dr-jochen-haberland-200x200.jpg" alt="image not entered" />
                    <div className="rightpar4">
                        <p id="rp4p1">"This is where we meet young, ambitious people from all over the world who are just as enthusiastic about automotive technology as we are here at Audi."</p>
                        <h3>Dr Jochen Haberland</h3>
                        <p id="rp4p2">AUDI</p>
                    </div>
                </div>

                <div className="fifth">
                    <img src="https://automobileclub.iitd.ac.in/assets/images/oliver-ferschke-200x200.jpg " alt="image not entered" />
                    <div className="rightpar5">
                        <p id="rp5p1"> "The BMW Group is very enthusiastic about its involvement in the Formula Student Germany. The challenges the teams face during the course of a
                            season are also always faced by us. "</p>
                        <h3>Oliver Ferschke</h3>
                        <p id="rp5p2">BMW</p>
                    </div>
                </div>

            </div>

            <div className="page3">
                <h2 id="staticEvents">STATIC EVENTS</h2>
                <div className="staticEventContent">

                    <div className="para">
                        <ol>
                            <li>
                                <h4>COST REPORT</h4>
                                <p>Students compose a detailed report of all costs related to materials, production and assembly. Points are obtained based on the final score of the vehicle and the quality of the report.</p>
                            </li>
                            <hr />
                            <li>
                                <h4>BUSINESS PLAN PRESENTATION</h4>
                                <p>The business presentation is set to demonstrate a business case to potential investors, that is created to show how to sell a racing vehicle. Key features and advantages of the vehicle, the design process, production possibilities and business offers must be mentioned.</p>
                            </li>
                            <hr />
                            <li>
                                <h4>DESIGN EVENT</h4>
                                <p>The most demanding static event is defending your project. Participants must be ready to explain why they used selected materials, components and systems, why they assembled them in that way and how do their solutions fit into the market demand. This is discussed with engineers from the most prestigious automotive and motor sport companies. The vehicle must illustrate the best engineering solution.</p>
                            </li>
                        </ol>
                    </div>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/bpp-1024x576.jpg" alt="" />
                </div>
                <h2 id="dynamicEvents">DYNAMIC EVENTS</h2>
                <div className="staticEventContent">

                    <div className="para">
                        <ol>
                            <li>
                                <h4>ACCELERATION</h4>
                                <p>This discipline focuses on the engine and transmission performances, as well as the suspension needed to achieve maximum tire grip.</p>
                            </li>
                            <hr />
                            <li>
                                <h4>SKIDPAD</h4>
                                <p>Driven on a track in the shape of the number 8, giving the teams a chance to show how their vehicle behaves when cornering. The vehicle must exhibit good lateral acceleration to pull a figure-of-eight in the least amount of time</p>
                            </li>
                            <hr />
                            <li>
                                <h4>AUTOCROSS</h4>
                                <p>This race is designed to train for Formula 1, testing handling and maneuvering on a narrow track, 800m long.</p>
                            </li>
                            <hr />
                            <li>
                                <h4>EFFICIENCY AND ENDURANCE</h4>
                                <p>Fuel consumption is monitored during the Endurance race.</p>
                            </li>
                        </ol>
                    </div>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/endurancerun-1024x683.png" alt="" />
                </div>
            </div>

        </>
    )
}

export default FormulaStudent