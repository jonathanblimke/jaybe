import React from 'react'

const  About = () =>  {

  
//    const[darkMode, setDarkMode]  = React.useState(true)
     
    return (
         //   <div className={darkMode ? "dark-mode": "light-mode"}>
    <div class="aboutmespacer">
    {/* //   <button onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle Mode</button> */}
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
       {/*  */}
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Über Mich</span>
                    <h2 className="colorlib-heading">Wer bin Ich?</h2>
                    <p>Entwickler, Techhead, INFP. Die Frage <i>wer bin ich?</i> beschäftigte mich auf vielen Ebenen. Als Entwickler, gestalte und programmiere ich Applikationen und halte dabei stets eine gute User Experience im Auge. Und sonst so? Musik, Musik, Musik. Für den perfekten Flow beim Programmieren oder zum Abschalten nach der Arbeit mit eigenen musikalischen Produktionen. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="skills">
        <div className="colorlib-narrow-content" >
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Was kann ich?</span>
                <h2 className="colorlib-heading">Meine Fähigkeiten</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web-Entwicklung </h3>
                    <p>Erfahrung bei der Entwicklung von Landing Pages, Web-Applikationen und Content-Management-Systemen.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Wireframing & Prototyping</h3>
                    <p>Gestaltung von Wireframes, Mockups in Low- sowie High- Fidelity.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>API Development</h3>
                    <p>In meiner Abschlussarbeit entwarf ich eine RESTful HTTP API unter Verwendung aktueller best-practice.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Internet of Things</h3>
                    <p>Arduino, espressif, PlatformIO - Entwicklung einer <a href="https://www.hochschule-trier.de/hochschule/aktuelles/news-und-pressemitteilungen/news-detail/studierender-der-hochschule-trier-fachbereich-informatik-entwickelt-medienfassade-fuer-trierer-unternehmen">Medienfassade</a> einer Kommunikationsagentur mit einer addressierbaren Schnittstelle.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Programmier- und Skriptsprachen</h3>
                    <p>Die objektorientierte Programmierung mit Java begleitete mich in meinem gesamtem Studium. Im Webbereich setze ich auf Javascript, JSON, HTML, CSS. Weiterhin habe ich Kenntnisse in C++, Grundlagen Python und PHP.</p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  
}


export default About;