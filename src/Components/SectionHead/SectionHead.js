import React, {Component} from 'react';
import './SectionHead.scss'

class SectionHead extends Component {
    render() {
        return (
            <div className="section-header">
                <h3>{this.props.headName}</h3>
            </div>
        );
    }
}

export default SectionHead;