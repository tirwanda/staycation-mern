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
            bankHolder: "",
        },
    };

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value,
            },
        });
    };

    componentDidMount() {
        window.scroll(0, 0);
        document.title = "Staycation | Checkout";
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
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <>
                                <Numbering 
                                    data={steps}
                                    current={CurrentStep}
                                    style={{ marginBottom: 50 }}
                                />

                                <Meta data={steps} current={CurrentStep} />
                                <MainContent data={steps} current={CurrentStep} />

                                {
                                    CurrentStep === "bookingInformation" && (
                                            <Controller>
                                                {
                                                    data.firstName !== "" &&
                                                    data.lastName !== "" &&
                                                    data.email !== "" &&
                                                    data.phone !== "" && (
                                                        <Fade>
                                                            <Button 
                                                                className="btn mb-3"
                                                                type="button"
                                                                isBlock
                                                                isPrimary
                                                                hasShadow
                                                                onClick={nextStep}
                                                            >
                                                                Continue to Book
                                                            </Button>
                                                        </Fade>
                                                    )
                                                }

                                                <Button
                                                    className="btn"
                                                    type="link"
                                                    isBlock
                                                    isLight
                                                    href={`/properties/${ItemDetails._id}`}
                                                >
                                                    Cancel
                                                </Button>
                                            </Controller>
                                    )
                                }

                                {
                                    CurrentStep === "payment" && (
                                        <Controller>
                                            {
                                                data.proofPayment !== "" && 
                                                data.bankName !== "" &&
                                                data.bankHolder !== "" && (
                                                    <Fade>
                                                        <Button 
                                                            className="btn mb-3"
                                                            type="button"
                                                            isBlock
                                                            isPrimary
                                                            hasShadow
                                                            onClick={nextStep}
                                                        >
                                                            Continue to Book
                                                        </Button>
                                                    </Fade>
                                                )
                                            }

                                            <Button
                                                className="btn"
                                                isLight
                                                isBlock
                                                type="button"
                                                onClick={prevStep}
                                            >
                                                Cancel
                                            </Button>
                                        </Controller>
                                    )
                                }

                                {
                                    CurrentStep === "completed" && (
                                        <Controller>
                                            <Button 
                                                className="btn mb-3"
                                                type="link"
                                                isBlock
                                                isPrimary
                                                hasShadow
                                                href=""
                                            >
                                                Back to Home
                                            </Button>
                                        </Controller>
                                    )
                                }
                            </>
                        )
                    }
                </Stepper>
            </>
        )
    }
}
