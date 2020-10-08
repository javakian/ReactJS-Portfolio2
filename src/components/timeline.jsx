import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      
                        <h2>Full Stack Website Developer, Optical Automation, LLC  <span>January 2020 to present</span></h2>
                        <p>
                        Produced Full Stack Database websites by MERN, MongoDB atlas and MySQL JS stack websites for general information, eCommerce marketing, and remote database websites.
                        Produced shopping list by MERN for The ProductList Network with The ShopperLady shopping list and entertainment network for storage retrieval system. Used Auth0 for convenient user access. Deployed file upload to Heroku hosting by GIT repository version storage. Use of Handlebars, hbs, and Embedded JavaScript Templating, ejs file display.
                        
                         </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Xamarin Mobile Developer, Optical Automation, LLC<span>January 2016 to January 2020</span></h2>
                        <p>Developed Microsoft Xamarin C# iOS and Android mobile app applications. Used Microsoft Visual Studio to create XAML, JSON, RESTapi, CoreData, SQLite, and Azure information apps. Created application development, workforce, project consulting and payroll management apps for devices including desktop, phone, tablet, wrist-watch, and hand-held displays. Developed personal, social, business, and game apps for consumer, real estate reporter, movie media, camera photograph, photo selection, voice recognition, speech synthesis, and animated games.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>iOS Mobile Developer Optical Automation, LLC <span>  January 2014 to December 2016  </span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
