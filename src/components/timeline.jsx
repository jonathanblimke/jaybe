import React from 'react'

const Timeline = () =>  {

    return (
      <div >
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">bisheriger Weg</span>
                <h2 className="colorlib-heading animate-box">Bildung</h2>
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
                        <h2>Bachelor of Science (B.Sc.) <span>2017-2020</span></h2>
                        <p>Im Juni 2020 absolvierte ich meinen Bachelor an der Hochschule Trier im Studiengang Informatik: Digitale Medien und Spiele mit dem Schwerpunkt Medien. Dabei spezialisierte ich mich auf die Entwicklung von Medien- und Web-Anwendungen und erlernte Kompetenzen in der Kommunikationstechnologie, Design und User Experience.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>(Studienbeginn) Informatik - Sichere und mobile Systeme <span>2014-2017</span></h2>
                        <p>Ich begann mein Studium an der Hochschule Trier mit einer Begeisterung für IT-Sicherheit. Später zeigte sich jedoch meine Neigung für die gestalterische Schnittstelle zwischen Mensch und Maschine, weshalb ich meine Fachrichtung im Sommer 2017 wechselte.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Fachhochschulreife <span>2012-2014</span></h2>
                        <p>Meine Fachhochschulreife erlangte ich am staatlich, beruflichen Schulzentrum Neusäß mit Schwerpunkt im wirtschaftlich, kaufmännischen Bereich. Aufgrund der berufsbegleiteten Ausbildung erhielt ich einen sehr praxisnahen Einblick in die Betriebswirtschaft sowie das Rechnungswesen.</p> 
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


export default Timeline;