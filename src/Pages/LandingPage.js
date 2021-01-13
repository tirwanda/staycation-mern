import React, { Component } from 'react'
import Header from 'Parts/Header'

import landingPage from 'json/landingPage.json'
import Hero from 'Parts/Hero'
import MostPicked from 'Parts/MostPicked'
import Categories from 'Parts/Categories'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {
        return <>
            <Header {...this.props}></Header>
            <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
            <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
            <Categories data={landingPage.categories}/>
        </>;
    } 
}
