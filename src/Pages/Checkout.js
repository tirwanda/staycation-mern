import React, { Component } from 'react'

import Fade from 'react-reveal/Fade'
import Button from 'elements/Button'
import Stepper, { Controller, MainContent, Meta, Numbering } from 'elements/Stepper'

import Header from 'Parts/Header'
import BookingInformation from 'Parts/Checkout/BookingInformation'
import Completed from 'Parts/Checkout/Completed'
import Payment from 'Parts/Checkout/Payment'

import ItemDetails from 'json/itemDetails.json'

export default class Checkout extends Component {
    state = {
        data: {
            firsName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: ""
        }
    };

    onChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    };

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        const { data } = this.state;

        const checkout = {
            duration: 3
        }

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank field below",
                content: (
                    <BookingInformation 
                        data={data}
                        checkout={checkout}
                        ItemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },

            payment: {
                title: "Payment",
                description: "Kindly follow the instructions below",
                content: (
                    <Payment 
                        data={data}
                        ItemDetails={ItemDetails}
                        checkout={checkout}
                        onChange={this.onChange}
                    />
                )
            },

            completed: {
                title: "Yay! Completed",
                description: null,
                content: (
                    <Completed />
                )
            }
        };

        return (
            <>
                <Header isCentered/>

                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, currentStep, steps) => {
                            <>
                                <Numbering 
                                    data={steps}
                                    current={currentStep}
                                    style={{ marginBottom: 50 }}
                                />

                                <Meta data={steps} current={currentStep} />
                                <MainContent data={steps} current={currentStep} />
                            </>
                        }
                    }
                </Stepper>
            </>
        )
    }
}
