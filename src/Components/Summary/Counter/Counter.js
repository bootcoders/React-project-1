import React, {Component} from 'react';
import './Counter.scss'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor'
class Counter extends Component {
    render() {
        return (
            <div className="counter-box">

                <CountUp start={this.props.countNumberStart} end={this.props.countNumberEnd} >
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span className="counter_title" ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
                <span>{this.props.countLabel}</span>
            </div>
        );
    }
}

export default Counter;