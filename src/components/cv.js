import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './../avatarbw.png';
import Education from './education.js';

class Cv extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img
                    src={avatar}
                            alt='avatar'
                            className="avatar-img"
                       />
                    </div>
                   
                   <h2 style={{paddingTop: '2em'}}>Aleksander Gis</h2>
                   <h4 style={{color: 'gray'}}>Senior IT Recruiter</h4>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                   <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Adres:</h5>
                    <p>Wierzbowa 30, Wrocław 50-056</p>
                    <h5>Numer telefonu:</h5>
                    <p>(+48) 666 666 666</p>
                    <h5>Email:</h5>
                    <p>aleksander.gis@antal.pl</p>
                    <h5>Web:</h5>
                    <p>https://wsb-project.gismann.now.sh/</p>
                </Cell>






                <Cell className="cv-right-col" col={8}>Right Side</Cell>
            
            
            
            </Grid>
        )
    }
}

export default Cv;