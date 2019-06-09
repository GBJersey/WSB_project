import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="portfolio-grid"> 
                
                {/* Projekt React*/}
                <Card shadow={5}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>Projekt React No1</CardTitle>
                     <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque aliquam, pulvinar lorem eu, lobortis velit. Donec luctus dignissim purus, eu blandit tellus ullamcorper non. Vivamus vestibulum dolor vel elit hendrerit finibus. Maecenas at nibh eget velit blandit scelerisque. Duis congue neque non ligula tempus lacinia sit amet at urna. Suspendisse molestie luctus turpis in dapibus. Ut varius quam sed pellentesque sodales. Fusce quis pulvinar est, non dictum risus. Etiam ultricies leo vitae laoreet vulputate. Nam vel feugiat nunc, eget sollicitudin dui. Etiam maximus sit amet enim sit amet viverra. Aliquam eget ipsum finibus, maximus leo accumsan, molestie sem. Phasellus egestas nulla ligula, id finibus diam auctor a. Nunc sit amet aliquam urna. Maecenas vitae dolor ut augue euismod placerat.</CardText>
                <CardActions border>
                    <Button colored>StackBlitz</Button>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
 
                  {/* Projekt Angular*/}
                  <Card shadow={5}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>Projekt React No1</CardTitle>
                   <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque aliquam, pulvinar lorem eu, lobortis velit. Donec luctus dignissim purus, eu blandit tellus ullamcorper non. Vivamus vestibulum dolor vel elit hendrerit finibus. Maecenas at nibh eget velit blandit scelerisque. Duis congue neque non ligula tempus lacinia sit amet at urna. Suspendisse molestie luctus turpis in dapibus. Ut varius quam sed pellentesque sodales. Fusce quis pulvinar est, non dictum risus. Etiam ultricies leo vitae laoreet vulputate. Nam vel feugiat nunc, eget sollicitudin dui. Etiam maximus sit amet enim sit amet viverra. Aliquam eget ipsum finibus, maximus leo accumsan, molestie sem. Phasellus egestas nulla ligula, id finibus diam auctor a. Nunc sit amet aliquam urna. Maecenas vitae dolor ut augue euismod placerat.</CardText>
              <CardActions border>
                  <Button colored>StackBlitz</Button>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
              </Card>
                {/* Projekt VueJS*/}
                <Card shadow={5}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>Projekt React No1</CardTitle>
                     <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque aliquam, pulvinar lorem eu, lobortis velit. Donec luctus dignissim purus, eu blandit tellus ullamcorper non. Vivamus vestibulum dolor vel elit hendrerit finibus. Maecenas at nibh eget velit blandit scelerisque. Duis congue neque non ligula tempus lacinia sit amet at urna. Suspendisse molestie luctus turpis in dapibus. Ut varius quam sed pellentesque sodales. Fusce quis pulvinar est, non dictum risus. Etiam ultricies leo vitae laoreet vulputate. Nam vel feugiat nunc, eget sollicitudin dui. Etiam maximus sit amet enim sit amet viverra. Aliquam eget ipsum finibus, maximus leo accumsan, molestie sem. Phasellus egestas nulla ligula, id finibus diam auctor a. Nunc sit amet aliquam urna. Maecenas vitae dolor ut augue euismod placerat.</CardText>
                <CardActions border>
                    <Button colored>StackBlitz</Button>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
            </div>
               
            )
    }   else if(this.state.activeTab === 1) {
        return(
            <div className="portfolio-grid"> 
                
                {/* Projekt React*/}
                <Card shadow={5}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>Projekt React No1</CardTitle>
                     <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque aliquam, pulvinar lorem eu, lobortis velit. Donec luctus dignissim purus, eu blandit tellus ullamcorper non. Vivamus vestibulum dolor vel elit hendrerit finibus. Maecenas at nibh eget velit blandit scelerisque. Duis congue neque non ligula tempus lacinia sit amet at urna. Suspendisse molestie luctus turpis in dapibus. Ut varius quam sed pellentesque sodales. Fusce quis pulvinar est, non dictum risus. Etiam ultricies leo vitae laoreet vulputate. Nam vel feugiat nunc, eget sollicitudin dui. Etiam maximus sit amet enim sit amet viverra. Aliquam eget ipsum finibus, maximus leo accumsan, molestie sem. Phasellus egestas nulla ligula, id finibus diam auctor a. Nunc sit amet aliquam urna. Maecenas vitae dolor ut augue euismod placerat.</CardText>
                <CardActions border>
                    <Button colored>StackBlitz</Button>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
 
                  {/* Projekt Angular*/}
                  <Card shadow={5}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>Projekt React No1</CardTitle>
                   <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque aliquam, pulvinar lorem eu, lobortis velit. Donec luctus dignissim purus, eu blandit tellus ullamcorper non. Vivamus vestibulum dolor vel elit hendrerit finibus. Maecenas at nibh eget velit blandit scelerisque. Duis congue neque non ligula tempus lacinia sit amet at urna. Suspendisse molestie luctus turpis in dapibus. Ut varius quam sed pellentesque sodales. Fusce quis pulvinar est, non dictum risus. Etiam ultricies leo vitae laoreet vulputate. Nam vel feugiat nunc, eget sollicitudin dui. Etiam maximus sit amet enim sit amet viverra. Aliquam eget ipsum finibus, maximus leo accumsan, molestie sem. Phasellus egestas nulla ligula, id finibus diam auctor a. Nunc sit amet aliquam urna. Maecenas vitae dolor ut augue euismod placerat.</CardText>
              <CardActions border>
                  <Button colored>StackBlitz</Button>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
              </Card>
                {/* Projekt VueJS*/}
                <Card shadow={5}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover'}}>Projekt React No1</CardTitle>
                     <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae neque aliquam, pulvinar lorem eu, lobortis velit. Donec luctus dignissim purus, eu blandit tellus ullamcorper non. Vivamus vestibulum dolor vel elit hendrerit finibus. Maecenas at nibh eget velit blandit scelerisque. Duis congue neque non ligula tempus lacinia sit amet at urna. Suspendisse molestie luctus turpis in dapibus. Ut varius quam sed pellentesque sodales. Fusce quis pulvinar est, non dictum risus. Etiam ultricies leo vitae laoreet vulputate. Nam vel feugiat nunc, eget sollicitudin dui. Etiam maximus sit amet enim sit amet viverra. Aliquam eget ipsum finibus, maximus leo accumsan, molestie sem. Phasellus egestas nulla ligula, id finibus diam auctor a. Nunc sit amet aliquam urna. Maecenas vitae dolor ut augue euismod placerat.</CardText>
                <CardActions border>
                    <Button colored>StackBlitz</Button>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
            </div>
        )
    }   else if(this.state.activeTab === 2) {
        return(
            <div><h1>Zakładka VueJS</h1></div>
        )
}       else if(this.state.activeTab === 3) {
    return(
        <div><h1>Zakładka MongoDB</h1></div>
    )
    }
}

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section className="portfolio-grid">
                    <Grid>
                        <Cell col={12}>
                        <div className="content">
                        {this.toggleCategories()}
                        </div>
                        </Cell>
                    </Grid>

                </section>
            </div>    
        );
    }
}
export default Portfolio