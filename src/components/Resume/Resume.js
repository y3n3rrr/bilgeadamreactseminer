
import React, { Component } from 'react'

class Resume extends Component {
    render () {
        var icons=["facebook","twitter", "linkedin", "github", "instagram"]
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
              <h1 className="mb-0">yener
                <span className="text-primary"> yilmaz</span>
              </h1>
              <div className="subheading mb-5">zafertepe mahleessi seyrabaglari <a href="mailto:name@email.com">name@email.com</a>
              </div>
              <p className="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
              <ul className="list-inline list-social-icons mb-0">
                {icons.map((val, index) => {
                    return (socialIcons(val, index))
                })}
              </ul>
            </div>
          </section>
        )
    }
}
socialIcons
const socialIcons=(icon, index)=>{
    return (
        <li key={index} className="list-inline-item">
        <a href="#">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className={"fa fa-"+icon+" fa-stack-1x fa-inverse" } />
          </span>
        </a>
      </li>
    )
}

export default Resume