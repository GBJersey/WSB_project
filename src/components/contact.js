import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Aleksander Gis</h2>
                    <img 
                            src='https://lh3.googleusercontent.com/Dgc6bWzuk7WXKw-MOrDKDCXV1_GI4k5Bg9KAxeOLboMXlthfya4SipUsTc0h7TcnvELWDmlX94ei1nDwOtJ-Ew1GO9gpQ8Ps_yvzhgtJvcDHnsVnoSgtTglvp6nQ2fpts9V8pAR4dMPCL3wKbzEBrgoNepDyRah1CsWVLRNlWTbyuHTFLP02srJi8KqGKBNuJ5X6JBvHQJcBXrf-_0L64QwaRNrsuoZTf6p0O1JDvgnse65XprwL_Zbh8EBAKdTUj8eke11GBVZ70ga3FAxNPQQGzsZQL-kF5AsgnTuF7O6hqg7dikukL-VWlYhwrMGYm6_tWqGK1ruHB6CTWlWkHimni4z_TKps5XdMbEXJIWoHkk8VCJ_2NCE-PTPCbdnzWL7q8prZwoKoSBGvrmSZbFD5D1QPMG_Le9TdxeagodU-ph5XgpovGmyPJiRl8w9CMxd5pFtufDxDNZZ8qD8GmoGty15C7UUE4NfwF2q9tlVcUjjWNXQTaC-Ob4hUqwizu9JKBVL8A-MPOEkfObnNtTVAkqfZ3HouOKkd0SIs2jaOF5XZua3UjUHDaD_KM92qdOPMXtEj8JB3lcvh01pab51gHOJdTXQRCywlAUygcMze0jpg0JIb8hO613UrlV9a1sULw08sSZHtF2mTrLpt2zFjwA=s625-no'
                            alt='contact-avatar'
                            style={{height: '250px'}}
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