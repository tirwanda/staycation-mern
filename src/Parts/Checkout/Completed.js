import React from 'react'
import Fade from 'react-reveal/Fade'
import completedIlustration from 'assets/images/completed.jpg'

export default function Completed() {
    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content text-center">
                    <div className="col-4">
                        <img 
                            className="img-fluid"
                            src={completedIlustration} 
                            alt="Completed Checkout Apartment"
                        />
                        <p className="text-gray-500">
                            We will inform you via email later
                            once the transaction has been accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
