import React from 'react'
import { Helmet } from 'react-helmet'
// import'../intopageStyle.css'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';


const IntoPage = () => {
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
                <link rel="stylesheet" href="/breakdown/intopage/intopageStyle.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="/breakdown/intopage/style/intopageStyle918px.css"/>


            </Helmet>
            <h3 className="h3Class">MECHANICAL</h3>
            <div className="breakDownCards">
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-20191226235531680-506x506.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">CHASSIS</h5>
                        <p style={{ fontWeight: "500" }} >Steel tubular spaceframe chassis upholding the functionality of all subsystems of the vehicle. Being the key component for driver's saftey,it serves as an envelope designed to bear high loads generated during impact.</p>


                    </div>
                </div>
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-20191226164942560-506x506.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">BRAKES</h5>
                        <p style={{ fontWeight: "500" }} >It ensures the safety of the car and the driver. It is equipped with double hydraulic brake circuits along with adjustable pedal box and topology optimised brake pedal.</p>


                    </div>
                </div>
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-20191226164755900-506x506.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">DRIVE TRAIN</h5>
                        <p style={{ fontWeight: "500" }} >It comprises of the designing of gear box including the housing and the designing of shafts.</p>


                    </div>
                </div>


                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-20191226164819864-506x506.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">SUSPENSION</h5>
                        <p style={{ fontWeight: "500" }} >It is a system of linkages, springs and dampers to maintain the ride height of the vehicle and to damp the shocks or vibrations that may come through a bump or droop and to prevent the vehicle from roll during cornering.</p>


                    </div>
                </div>


            </div>


            <h3 className="h3Class">ELECTRONICS</h3>
            <div className="breakDownCards">
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-20191226164736924-696x696.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">INTEGRATED ELECTRONICS</h5>
                        <p style={{ fontWeight: "500" }} >Integrated electronics designs circuits and electrical systems meant for driver and car safety. The PCBs and components running on a 12V DC supply ensure that the driver remains safe in case of any failure. Also includes the implementation of safety indications for driver and the spectators</p>


                    </div>
                </div>
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-2019122616475407-696x696.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">BATTERY MANAGEMENT SYSTEM</h5>
                        <p style={{ fontWeight: "500" }} >A self designed Battery Management System is designed for monitoring voltage and temperature of accumulator cells and live telecast using ESP32 WiFi module. 6 slave and a master are used to monitor all the cells in the accumulator.</p>


                    </div>
                </div>
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-2019122616491890-696x696.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">DATA ACQUISITION</h5>
                        <p style={{ fontWeight: "500" }} >Implementiation of sensors, collection and analysis of data for future use and controlling the motor feed to the motor controllers are the main features data acquisition department. Future planning is also to include implementation of an oled display for the driver and live telemetry of data by use of 7 node CAN communication to the laptop while car is running.</p>


                    </div>
                </div>





            </div>


            <h3 className="h3Class">POWER ELECTRONICS</h3>
            <div className="breakDownCards">
                <div className="card" style={{ width: "16rem" }} >
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-20191226164840668-696x696.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">ACCUMULATOR</h5>
                        <p style={{ fontWeight: "500" }} >Accumulator is the heart of an formula student electric vehicle.We design a Li-Po pouch cells based accumulator . The aim of this department is to develop an electrically safe, fireproof, compact and durable battery which can fulfil the energy and power requirement of the vehicle.   </p>
                    </div>

                </div>
                {/* </div> */}
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/square-fit-20191226164648400-696x696.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">DRIVE CONTROL</h5>
                        <p style={{ fontWeight: "500" }} >Rear wheel electronic differential which provides stability to the car during cornering. Taking inputs from various sensors like throttle sensor, steering sensor, rpm sensor and inertial unit for the car to be balanced.</p>


                    </div>
                </div>
                <div className="card" style={{ width: "16rem" }}>
                    <img src="https://automobileclub.iitd.ac.in/assets/images/emrax-554x554.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">MOTORS AND MOTOR CONTROLLER</h5>
                        <p style={{ fontWeight: "500" }} >High Voltage and liquid cooled Synchronous motors. These motors are high power density and offer have efficiency nearly 96%.
                            Rinehart PM100 propulsion inverters used for on and off road applications.</p>


                    </div>
                </div>
            </div>





        </div>

    )
}

export default IntoPage