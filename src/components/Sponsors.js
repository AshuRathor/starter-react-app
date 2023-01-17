import React from 'react'
import { Helmet } from 'react-helmet'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Sponsors = () => {
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
                <link rel="stylesheet" href="/sponsors/style.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="/sponsors/style/918px.css" />
                <script src="/sponsors/script.js"></script>
            </Helmet>
            <h1 className='my-3'>WHY SPONSOR US?</h1>
            <div id="paraDiv" >
                <p>
                    Team Zenith is a devoted team of engineering students passionate about designing and fabricating as a team, we contribute over thousand man-hours to the design, construction, and analysis of the vehicle. To succeed, we need resourses for research, development, fabrication and competition. A year of competition costs over Rs.4,00,000 and as a team we require supplies and tools to transform our designs into reality. Your support-in tools, parts-subsystems, or financing-will reward the members of Team Zenith with a one-of-a-kind opportunity to test their skills against students from around the nation. With your help, we will be able to provide our members with hands-on experience that helps them grow into engineers.
                </p>
            </div>


            <div id="btnDiv">
                <button id="btn">CLICK HERE TO COLLABORATE WITH US</button>
            </div>
            <div id="clgName" style={{display: "flex"}}>
                <img src="https://dseu.ac.in/wp-content/uploads/2021/05/Dseu-Logo-500X407-1-240x300.png" alt="" />
                <img src="img/COLLEGE LOGO (1).png" alt="" />
            </div>
            <h2 id="sponsorHeading">OUR SPONSORS</h2>
            <div className="sponsors">
                <img id="xps" src="img/sponsors/XPS INDIA black bg.jpg" alt="" />
                <img id="solidworks" src="https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo.png" alt="" />
                <img id="ktm" src="https://ktm.com/content/dam/websites/ktm-com/language-masters/en/logo/37860_KTM_LogoPodium_orange_RGB.jpg" alt="" />
                <img id="burnout" src="img/sponsors/burnout nobg bright.png" alt="" />
                <img id="ansys" src="img/sponsors/ansys logo png file.png" alt="" />
                <img id="chasis" src="img/sponsors/Chassis Sim logo.PNG" alt="" />
                <img id="asap" src="img/sponsors/ASAP_logo.png" alt="" />
                <img id="matlab" src="https://www.mathworks.com/etc.clientlibs/mathworks/clientlibs/customer-ui/templates/common/resources/images/pic-header-mathworks-logo.20220902200836890.svg" alt="" />
                <img id="stubborn" src="img/sponsors/stubborn.png" alt="" />
                <img id="monster" src="img/sponsors/monster energy with stroke.png" alt="" />
                <img id="ketto" src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=100&dpr=1.0" alt="" />
                <img id="altair" src="https://www.3ds.com/fileadmin/depositary/alliances/CRM_SITELOGO/20130500/SIT000018_1ALTAIR_LOGO_2013.jpg" alt="" />
                <img id="mitutoyo" src="https://mitutoyoindia.com/wp-content/uploads/2019/09/logo-new-one.png" alt="" />
            </div>
        </div>
    )
}

export default Sponsors