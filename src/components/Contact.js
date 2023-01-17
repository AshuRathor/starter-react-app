import React from 'react'
import { Helmet } from 'react-helmet'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Contact = () => {

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
                <link rel="stylesheet" href="/contact/style.css" />
                <link rel="stylesheet" media="screen and (max-width: 918px)" href="/contact/style/918px.css" />
            </Helmet>

            <h1>CONTACT US</h1>
            <div class="contactForm">
                <div class="name">
                    <label for="name">Name</label>
                    <input type="name" />
                </div>
                <hr />
                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" />
                </div>
                <hr />
                <div class="phone">
                    <label for="phone">Phone</label>
                    <input type="phone" />
                </div>
                <hr />
                <div class="msg">
                    <label for="msg">Message</label>
                    <textarea name="msg" id="msgID" cols="30" rows="10"></textarea>
                </div>
            </div>

        </div>
    )
}

export default Contact