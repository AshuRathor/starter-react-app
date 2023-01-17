import React from 'react'
import { Helmet } from 'react-helmet'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Marketing = () => {
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
                <link rel="stylesheet" href="/breakdown/marketing/style.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="/breakdown/marketing/style/918px.css" />
            </Helmet>
            <h1 className="heading">MARKETING AND FINANCE</h1>

            <div className="points">
                <ol>
                    <li>INDUSTRIAL COLLABORATIONS</li>
                    <hr />
                    <li>SPONSORS</li>
                    <hr />
                    <li>CONTACT WITH FACULTY AND STAFF</li>
                </ol>
            </div>


            <h1 className="heading">PUBLICITY</h1>

            <div className="points">
                <ol>
                    <li>SOCIAL MEDIA</li>
                    <hr />
                    <li>PROJECT CULTURE AND PRESENTATION</li>
                    <hr />
                    <li>ADMINISTRATION</li>
                </ol>
            </div>
        </div>
    )
}

export default Marketing