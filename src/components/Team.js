import React from 'react'
import team from '../img/TEAM 2021.jpeg'
import { Helmet } from 'react-helmet'
import TeamContext from '../context/Team/TeamContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const Team = () => {
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

    const currentStyleImg = {
        width: "68%",
        margin: "3% auto 42%"
    }
    return (
        <div>
            <Helmet>

            </Helmet>
            <h1 className='my-3' style={{textAlign: "center"}}>Team members</h1>
            <div id="allMembers" style={{display:"flex"}}>
                <img style={currentStyleImg} src={team} alt="" />
            </div>
        </div>
    )
}

export default Team