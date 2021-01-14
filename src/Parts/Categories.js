import React from 'react'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'

export default function Categories({ data }) {
    return data.map((category, index1) => {
        return (
            <section className="container" key={`Category-${index1}`}>
                <Fade>
                <h4 className="mb-3 font-weight-medium">{category.name}</h4>
                <div className="container-grid">
                    {
                        category.items.length === 0 ? (
                            <div className="row">
                                <Fade>
                                <div className="col-auto align-item-center">
                                    There is no property at this category
                                </div>
                                </Fade>
                            </div>
                        ) : (
                            category.items.map((item, index2) => {
                                return (
                                    <div className="item column-3 row-1" key={`Category-${index1} Item-${index2}`}>
                                        <Fade bottom delay={300 * index2}>
                                        <div className="card">
                                            {
                                                item.isPopular && (
                                                    <div className="tag">
                                                        Popular <span className="font-weight-light">Choice</span>
                                                    </div>
                                                )
                                            }
                                            <figure className="img-wrapper">
                                                <img 
                                                    className="img-cover" 
                                                    style={{height: 180}}
                                                    src={item.imageUrl} 
                                                    alt={item.name}
                                                />
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button 
                                                    className="streched-link d-block text-gray-800"
                                                    href={`/properties/${item._id}`}
                                                    type="link">
                                                        <h5 className="h4">{item.name}</h5>
                                                </Button>
                                                <span className="text-gray-500">
                                                    {item.city}, {item.country}
                                                </span>
                                            </div>
                                        </div>
                                        </Fade>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                </Fade>
            </section>
        )
    })
}
