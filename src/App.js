import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Gismann" scroll>
            <Navigation>
                <Link to="/">Witaj</Link>
                <Link to="/cv">CV</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/aboutme">O mnie</Link>
                <Link to="/map">Mapa</Link>
                <Link to="/contact">Kontakt</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Witaj</Link>
                <Link to="/cv">CV</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/aboutme">O mnie</Link>
                <Link to="/map">Mapa</Link>
                <Link to="/contact">Kontakt</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
