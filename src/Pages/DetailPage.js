import React, { Component } from 'react'
import Header from 'Parts/Header'
import PageDetailTitle from 'Parts/PageDetailTitle'

import Footer from 'Parts/Footer'

import itemDetails from 'json/itemDetails.json'

export default class DetailPage extends Component {
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }
    
    render() {

        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: " House Details", pageHref: ""}
        ];

        return (
            <>
                <Header {...this.props}/>
                <PageDetailTitle 
                    breadcrumb={breadcrumb}
                    data={itemDetails}
                >
                </PageDetailTitle>
                <Footer />
            </>
        )
    }
}
