import React from 'react'
import propTypes from 'prop-types'
import './index.scss'


export default function Star({className, value, height, width, spacing}) {
    const decimals = Number(value) % 1;
    const star = [];
    const starPlaceholder = [];
    
    let leftPos = 0;

    for(let index = 0; index < 5 && index < value - decimals; index++) {
        leftPos = leftPos + width;
        
        star.push(
            <div 
                key={`Star-${index}`}
                className="star"
                style={{left: index * width, height: height, width: width, marginRight: spacing}}>
            </div>
        );
    }

    if(decimals > 0 && value <= 5) {
        star.push(
            <div 
                key={`Star-Placeholder`}
                className="star"
                style={{left: leftPos, height: height, width: decimals * width - spacing}}>
            </div>
        );
    }

    for(let index = 0; index < 5; index++) {
        starPlaceholder.push(
            <div 
                key={`StarPlaceholder-${index}`}
                className="star placeholder"
                style={{left: index * width, height: height, width: width, marginRight: spacing}}>
            </div>
        );
    }

    return (
        <>
            <div className={['stars', className].join(" ")}
                style={{height: height}}>
                    {starPlaceholder}
                    {star}
            </div>
        </>
    )
}

Star.propTypes= {
    className: propTypes.string,
    value: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
    spacing: propTypes.number
}
