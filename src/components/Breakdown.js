import {React, useRef} from 'react'
import { Link } from 'react-router-dom'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';



const Breakdown = () => {

    const context = useContext(TeamContext);
    const {progress, setProgress} = context;
    // setProgress(100)
    console.log("Component before mounted")

    useEffect(() => {
        setProgress(30)
        setProgress(50)
        setTimeout(() => {
            setProgress(100)
            
        }, 300);
      console.log("Component did mounted")

    }, [])

    const btnHover = useRef("")
    const hoverHandle = ()=>{
        btnHover.current.style.backgroundColor = "#161616";
    }
    const hoverOutHandle = ()=>{
        btnHover.current.style.backgroundColor = "#232323";
    }


    const stylingObject = {
        firstPageHeading: {
            textAlign: "center",
            color: "white",
            backgroundColor: "#232323",
            paddingBottom: "5%",
            fontWeight: "bold"
        },
        breakDownCards: {
            display: "flex",
            width: "74%",
            margin: "auto",
            flexWrap: "wrap"
        },
        card:{
            margin: "6% auto",
            width:"16rem"
        },
        downButtons:{
            display: "flex",
            flexDirection: "column"
        },
        downButtonsA:{
            margin: "2% 0%"
        },
        cardTitle:{
            textAlign: "center"
        },
        btn:{
            background: "#232323",
            border: "none",
            margin: "2% 0%",
            
            textDecoration:" none",
            color: "white"
        },
        // .btn:hover{
        //     background: #161616;
        // }
        
        h3Class: {
            textAlign: "center",
            color: "#232323",
            fontWeight: "bold"
        },
        a:{
            textDecoration:" none",
            color: "#232323"
        }
    }

    return (
        <div>
            <h1 style={stylingObject.firstPageHeading} class="firstPageHeading">DEPARTMENT</h1>
            <h3 style={stylingObject.h3Class} class="h3Class">TECHNICAL</h3>
            <div style={stylingObject.breakDownCards} class="breakDownCards">
                <div style = {stylingObject.card} class="card">
                    <img src="https://automobileclub.iitd.ac.in/assets/images/mech-1-676x450.jpeg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 style={stylingObject.cardTitle} class="card-title">MECHANICAL</h5>
                            <div style={stylingObject.downButtons} class="downButtons">
                                <Link to="/intopage/" style = {stylingObject.btn} ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">CHASSIS</Link>
                                <Link to="/intopage/" style = {stylingObject.btn} ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">BREAKING</Link>
                                <Link to="/intopage/" style = {stylingObject.btn} ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">TRANSMISSION</Link>
                                <Link to="/intopage/" style = {stylingObject.btn} ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">VEHICLE DYNAMICS</Link>
                                <Link to="/intopage/" style = {stylingObject.btn} ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">AERODYNAMICS</Link>

                            </div>


                        </div>
                </div>
                <div style = {stylingObject.card} class="card" >
                    <img src="https://automobileclub.iitd.ac.in/assets/images/electrical-engineering-678-675x374.jpeg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 style = {stylingObject.cardTitle} class="card-title">ELECTRONICS</h5>
                            <div style = {stylingObject.downButtons} class="downButtons">
                                <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">BATTER MANAGEMENT SYSTEM</Link>
                                <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">DATA ACQUISITION</Link>
                                <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">INTEGRATED ELECTRONICS</Link>

                            </div>
                        </div>
                </div>
                <div style = {stylingObject.card} class="card">
                    <img src="./img/drivecontrol-1-676x676.jpeg" class="card-img-top" alt="..."/>
                        <div  class="card-body">
                            <div style = {stylingObject.downButtons} class="downButtons">
                                <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">ACCUMULATOR</Link>
                                <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">DRIVE CONTROL</Link>
                                <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">MOTORS AND MOTOR CONTROLLERS</Link>

                            </div>
                        </div>
                </div>
            </div>

            <h3 style = {stylingObject.h3Class} class="h3Class">NON-TECHNICAL</h3>
            <div style = {stylingObject.card} class="card">
                <img src="https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80" class="card-img-top" alt="..."/>
                    <div  class="card-body">
                        <div style = {stylingObject.downButtons}  class="downButtons">
                            <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">MANAGER</Link>
                            <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">PUBLIC RELATION</Link>
                            <Link style = {stylingObject.btn} to="/intopage/" ref = {btnHover} onMouseOver = {hoverHandle}  onMouseOut={hoverOutHandle} class="btn btn-primary">SOCIAL MEDIA</Link>

                        </div>
                    </div>
            </div>

            <div id="page2">
                <h3 style = {stylingObject.h3Class} class="h3Class">OPERATIONS</h3>
                <Link style = {stylingObject.breakDownCards} to="/marketing/" class="breakDownCards">
                        <div style = {stylingObject.card} class="card">
                            <img src="https://automobileclub.iitd.ac.in/assets/images/images-2-570x427.jpg" class="card-img-top" alt=""/>
                                <div  class="card-body">
                                    <h5 style = {Object.assign(stylingObject.cardTitle, stylingObject.a)} class="card-title">MARKETING</h5>

                                </div>
                        </div>
                        <div class="card" style = {stylingObject.card}>
                            <img src="https://automobileclub.iitd.ac.in/assets/images/publicity-2-588x441.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title" style = {stylingObject.cardTitle}>PUBLICITY</h5>

                                </div>
                        </div>

                </Link>
            </div>
        </div>
    )
}

export default Breakdown