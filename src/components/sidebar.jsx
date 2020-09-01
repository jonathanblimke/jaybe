import React from 'react'

const Sidebar = () => {
    return (
      <div  >
        <div class="navigationbar">
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight" >
            <div className="text-center">
              <div className="author-img" class="clip-circle" style={{backgroundImage: 'url(images/me.png)'}} />
              <h1 class="borderspacer" id="colorlib-logo"><a href="index.html">Jonathan Blimke</a></h1>
              <span className="email"><i className="icon-mail"></i> jblimke@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  {/* <li className="active"><a href="#home" data-nav-section="home">Start</a></li> */}
                  <li><a href="#about" data-nav-section="about">Über mich</a></li>
                  <li><a href="#skills" data-nav-section="skills">Fähigkeiten</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Lebenslauf</a></li>
                  {/* <li><a href="#projects" data-nav-section="projects">Projects</a></li> */}
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                 
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li> */}
                <li><a href="https://github.com/jonathanblimke" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> <br></br>
                  {/* <div className="author-img" style={{backgroundImage: 'url(images/black-logo-png.png)'}} /> */}
                  
              </small></p>
            
            </div>
          </aside>
        </div>
      </div>
    )
  
}

export default Sidebar;