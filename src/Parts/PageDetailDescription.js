import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Fade from 'react-reveal/Fade'
import { InputDate, InputNumber} from 'elements/Form'

export default function PageDetailDescription({ data }) {
    return (
        <main>
            <h4>About the Place</h4>
            {ReactHtmlParser(data.description)}

            <div className="row" style={{ marginTop: 30 }}>
                {
                    data.features.map((feature, index) => {
                        return(
                            <div
                                key={`Features-${index}`}
                                className="col-3"
                                style={{ marginBottom: 28 }}
                                >
                                    <img 
                                        className="d-block mb-2"
                                        src={feature.imageUrl} 
                                        alt={feature.name}
                                    />{" "}
                                    <span>{feature.qty}</span>{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        {feature.name}
                                    </span>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}
