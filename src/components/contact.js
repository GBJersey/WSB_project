import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from './../avatar-2.png';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Aleksander Gis</h2>
                    <img 
                            src={avatar}
                            alt="avatar"
                            className="contact-avatar"
                       />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Do czego tego użyć?
Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku. Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, czasem specjalnie (humorystyczne wstawki itd).</p>
                </Cell>

                <Cell col={6}>
                    <h2>Kontakt</h2>
                    <hr/>

                    <div className="contact-list">
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            linkedin.com/in/alekgis/
                        </ListItemContent>
                    </ListItem>
                    <List>
                     <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            +(48) 666 666 666
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            aleksander.gis@gmail.com
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                            MójSkypeID
                        </ListItemContent>
                    </ListItem>
                    </List>
                </div>
                
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Contact;