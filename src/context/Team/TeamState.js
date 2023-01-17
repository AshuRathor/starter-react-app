import TeamContext from "./TeamContext"
import { useState } from "react"
import React from "react"

const TeamState = (props) => {
    const [progress, setProgress] = useState(0)
    // const state = {
    //   "name":"Aysu",
    //   "asdf":"AD"
    // }

  return (
    
    <TeamContext.Provider value={ {progress, setProgress} }>
      {props.children};
    </TeamContext.Provider>
  )
}

export default TeamState;