import React, {Component,Fragment} from 'react';
import './SmallHeader.scss'
class SmallHeader extends Component {
    render() {
        return (
            <Fragment>
                <div className="small-header">
                    <div className="black-overlay ">
                        <h3>{this.props.pageName}</h3>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SmallHeader;