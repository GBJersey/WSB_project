import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './../avatarbw.png';


class Mainpage extends Component {
    render() {
        return(
           <div style={{width: '100%', height: '100%', margin: 'auto'}}>
               <Grid className="mainpage-grid">
                   <Cell col={12}>

                       <div className="banner-text">
<<<<<<< HEAD
                           <h1>Full Stack Recruiter</h1>
=======
                            <img 
                                    src={avatar}
                                    alt='avatar'
                                    className="avatar-img"
                            />
                           <h1>Full Stack Recruiter<br />Hobbit the programer</h1>
>>>>>>> 49f8ce54f8c75178c19e8769e37032d90d62c771
                           <hr/>

                           <p>HTML5/CSS3 | JavaScript| React | NodeJS | MongoDB</p>
                           <div className="social-links">

                               {/* LinkedIN */}
                               <a href="https://www.linkedin.com/in/alekgis/" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-linkedin-square" aria-hidden="true" />
                               </a>

                               {/* GitHub */}
                               <a href="https://github.com/GBJersey" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-github-square" aria-hidden="true" />
                               </a>

                               {/* Freecodecamp */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-free-code-camp" aria-hidden="true" />
                               </a>

                               {/* YouTube*/}
                               <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-youtube-square" aria-hidden="true" />
                               </a>
                           </div>


                       </div>
                   </Cell>
               </Grid>

           </div>
        )
    }
}

export default Mainpage;