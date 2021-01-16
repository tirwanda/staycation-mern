import React, { useState, useRef, useEffect } from 'react'
import { DateRange } from 'react-date-range'
import propTypes from 'prop-types'

import IconCalendar from 'assets/images/icon/icon-calendar'

import './index.scss'

export default function Date(props) {
    const { value, placeHolder, name } = props;
    const [isShowed, setIsShowed] = useState(false);

    const datePickerChange = value => {
        const target= {
            target: {
                value: value.selection,
                name: name
            }
        }
        props.onChange(target);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });

    const refDate = useRef(null);
    const handleClickOutside = event => {
        if(refDate && !refDate.current.contains(event.target)) {
            setIsShowed(false);
        }
    };

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    };

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}
        ${value.endDate(value.endDate) ? " - " + formatDate(value.endDate) : ""}`

    return (
        <div
            ref={refDate}
            className={['input-date mb-3', props.outerClassName].join(" ")}
        >
            <div className="input-group">
                <div className="input-group-prepend bg-gray-900">
                    <span className="input-group-text">
                        <img src={IconCalendar} alt="icon Clendar"/>
                    </span>
                </div>
                <input 
                    className="form-control"
                    readOnly
                    type="text"
                    value={displayDate}
                    placeholder={placeHolder}
                    onClick={() => setIsShowed(!isShowed)}
                />
                {
                    isShowed && (
                        <div className="date-range-wrapper">
                            <DateRange
                                editableDateInputs={true}
                                onChange={datePickerChange}
                                moveRangeOnFirstSelection={false}
                                onRangeFocusChange={check}
                                ranges={[value]}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

Date.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeHolder: propTypes.string,
    outerClassName: propTypes.string
}