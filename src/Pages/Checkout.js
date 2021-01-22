import React, { Component } from 'react'
import Header from 'Parts/Header'
import BookingInformation from 'Parts/Checkout/BookingInformation'

import itemDetails from 'json/itemDetails.json'

export default class Checkout extends Component {
    render() {
        return (
            <>
                <Header isCentered/>
                {/* <BookingInformation itemDetails={itemDetails}/> */}
            </>
        )
    }
}
