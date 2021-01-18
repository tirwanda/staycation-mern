import React, { Component } from 'react'
import Header from 'Parts/Header'
import PageDetailTitle from 'Parts/PageDetailTitle'
import FeaturedImage from 'Parts/FeaturedImage'
import PageDetailDescription from 'Parts/PageDetailDescription'
import BookingForm from 'Parts/BookingForm'

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
                <FeaturedImage data={itemDetails.imageUrls}/>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <PageDetailDescription data={itemDetails} />
                        </div>
                        <div className="col-5">
                            <BookingForm itemDetails={itemDetails}/>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
