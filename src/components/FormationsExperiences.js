import React from 'react'
import "./FormationsExperiences.css"
import DataFormations from '../datas/Formations'
import Formations from './Formations'
import DataExperiences from '../datas/Experiences'
import Experiences from './Experiences'

function FormationsExperiences() {
    return (
      <>
      <br/>
        <Formations datas={DataFormations}/>
      <br/>
        <Experiences datas={DataExperiences}/>
      </>
    )
}

export default FormationsExperiences