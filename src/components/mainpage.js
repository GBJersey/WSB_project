import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Mainpage extends Component {
    render() {
        return(
           <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="mainpage-grid">
                   <Cell col={12}>
                       <img 
                            src='https://lh3.googleusercontent.com/3-AodBcTVgN7ppZnELilyGrwmO9Rn2RUbUUg6pP0-vYfU_gVMJPlOIWwZbpsKkRiaonxbp-MUaCBTcruWDCeXm4HYWG-18q6KC_og8W4ORknVrtUMO6hfvuPmzsoa8o1Wpu_Y8ijdaiqw7xTMbFvjokvYToyoJXEok6R0KKdtgUU29Ggee5hen1crJMyQWZtN8MrY5kmnt8_7dRlAwfxLX_N5UOm54edOfahJoiMEJfU2wBNeU0MODHG7wzEsSbCWDBTNtsIqnj8OuimbXwumm8HjkflkYPXq6Zl14MLI4gVEMtmJHkvlt38T8DVQIaEZOFPDoAWYCJjQMyPLkoRBt9P4aEdZtw_dPpc-PK_8YIX2PC2PUGe1DcUds_C796NxVlHHHzUy0OMMk7V5XQq2dBRRoVOPLQHeZ2T-Rtle5iX2cmUW2WK4R6sNEQKcnVlzh_ysITXJ5CNhQdFlN59zGteJhMU50LUh7RoyOjtlGfA_MS_4nzXerIvZsW9lO6i4z_e-I_XxoOyHeMKNUlCXd6bLhui6SuIf83oadpTSpUpsgOTQBfqCOx4hCv6PbfKSWBsoc_XFe-IfLLtoaBLg2nQ-O6SRbVm2C6wW3PvQt0g3y5PPdO0YeqvqZIo_qKkYFwSVkbabYkpajmsPBHD933tUg=s625-no'
                            alt='avatar'
                            className="avatar-img"
                       />
                       <div className="banner-text">
                           <h1>Full Stack Recruiter</h1>
                           <hr/>

                           <p>HTML5/CSS3 | JavaScript| React | NodeJS | MongoDB</p>
                           <div className="social-links">

                               {/* LinkedIN */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-linkedin-square" aria-hidden="true" />
                               </a>

                               {/* GitHub */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-github-square" aria-hidden="true" />
                               </a>

                               {/* Freecodecamp */}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-free-code-camp" aria-hidden="true" />
                               </a>

                               {/* YouTube*/}
                               <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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