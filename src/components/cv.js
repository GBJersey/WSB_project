import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from './../avatarbw.png';
import Education from './education.js';
import Experience from './experience.js';
import Skills from './skills.js'

class Cv extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img
                    src={avatar}
                            alt='avatar'
                            className="avatar-img2"
                       />
                    </div>
                   
                   <h2 style={{paddingTop: '5px'}}>Aleksander Gis</h2>
                   <h4 style={{color: 'gray'}}>Senior IT Recruiter</h4>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                   <p>Specjalista ds. Rekrutacji z dużym doświadczeniem w poszukiwaniu najlepszych talentów IT. Jestem pasjonatem technologii i nowych technik sourcingu. Jeśli chcesz pracować w najbardziej ekscytujących i wymagających projektach informatycznych, które można znaleźć w „Wroclove”, po prostu wyślij mi wiadomość i skoczymy na kawę lub krafta.</p>
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
                <Cell className="cv-right-col" col={8}>
                <h2>Doświadczenie</h2>

                <Experience
                        startYear={2014}
                        endYear={2019}
                        jobName="Antal Poland"
                        jobDescription="Samodzielne zarządzanie wieloma stanowiskami IT poprzez pozyskiwanie, przeglądanie, kwalifikowanie, koordynowanie wywiadów, negocjowanie z wybranymi kandydatami
                        • Określenie optymalnych metod rekrutacji w celu opracowania i utrzymania wysoko wykwalifikowanej puli kandydatów
                        • Przeprowadzanie wstępnych wywiadów w celu określenia doświadczenia i poziomu umiejętności
                        • Koordynacja procesu rekrutacji i regularne monitorowanie zarówno kandydatów, jak i klientów
                        • Korzystanie z zaawansowanych technik pozyskiwania i poszukiwanie nowych rozwiązań
                        • Udział w konferencjach IT, wydarzeniach i spotkaniach Meet-Up ..."
                        />

                    <hr style={{borderTop: '3px solid #e52d27'}} />
                    <h2>Edukacja</h2>

                    <Education
                        startYear={2018}
                        endYear={2019}
                        schoolName="WSB - Wyższa Szkoła Bankowa."
                        schoolDescription="Kierunek: Programista Front-end."
                        />
                   
                    <Education
                        startYear={2006}
                        endYear={2012}
                        schoolName="Uniwersytet Wrocławski"
                        schoolDescription="Wydział Prawa, Ekonomii i Administracji. (Magister Prawa)"
                        />
                    <hr style={{borderTop: '3px solid #e52d27'}} />

                    <h2>Umiejętności</h2>
                    <Skills 
                        skill="IT Recruitment"
                        progress={90}
                    />
                    <Skills 
                        skill="Direct Search"
                        progress={90}
                    />
                    <Skills 
                        skill="Umiem w komputery"
                        progress={50}
                    />
                    <Skills 
                        skill="Umiem w programowanie"
                        progress={15}
                    />
                </Cell>
            </Grid>
        )
    }
}

export default Cv;