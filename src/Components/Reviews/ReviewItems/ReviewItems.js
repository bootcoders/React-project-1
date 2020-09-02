import React, {Component} from 'react';
import './ReviewItems.scss'
import profilePic from "../../../assets/images/harun.png";
class ReviewItems extends Component {
    render() {
        return (
            <div className="review_card">
                <div className="review_avatar">
                    <img src={profilePic} alt=""/>
                </div>
                <div className="review_name">
                    <h3>Harun Rashid</h3>
                </div>
                <div className="review_desc">
                    <p>Freelance Web Designer & Front-End Developer located in Bangladesh. Specialized in Creating Websites & Designing UI/UX. I love to play with colours and codes!

                    </p>
                </div>
            </div>
        );
    }
}

export default ReviewItems;