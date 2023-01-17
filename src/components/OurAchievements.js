import React from 'react'
import { Helmet } from 'react-helmet'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const OurAchievements = () => {

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
                <link rel="stylesheet" href="/ourachievements/style.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="/ourachievements/style/918px.css" />
            </Helmet>
            <h1 id="heading" className='my-4'>OUR ACHIEVEMENTS</h1>
            <div className="container">
                <div className="para">
                    <ul id="paraUl">
                        <li>AIR 1 in ISIE, Indian Karting Race in Public Choice Award</li>
                        <li>Future Talent Award</li>
                    </ul>
                </div>
                <img id="imgJpeg" src="/ourAchievements/img/achievements.jpeg" alt="" />
            </div>
        </div>
    )
}

export default OurAchievements