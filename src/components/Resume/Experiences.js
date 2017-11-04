import React, { Component } from 'react'
import ExperienceModel from '../../models/ViewModels'


class Experiences extends Component {
    constructor(props){
        super(props)
        this.currentExperince = 
        new ExperienceModel(this.props.title,this.props.company,this.props.decription,this.props.date)
    }
    render () {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
            <div className="my-auto">
              <h2 className="mb-5">Experience</h2>
              {experience(this.currentExperince)}
            </div>
          </section>
        )
    }
}

const experience=({title, company, decription, date})=>{
    return(
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">{title}</h3>
                  <div className="subheading mb-3">{company}</div>
                  <p>{decription}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{date}</span>
                </div>
              </div>
    )
}

export default Experiences