import { Component } from "react";

export class FeedbackOptions extends Component {
    render() {
        return <ul className='buttons-list'>
            <li key={1} className='button-item'>
                <button id="good" onClick={this.props.addReview}>good</button>
            </li>
            <li key={2} className='button-item'>
                <button id="neutral" onClick={this.props.addReview}>neutral</button>
            </li>
            <li key={3} className='button-item'>
                <button id="bad" onClick={this.props.addReview}>bad</button>
            </li>
        </ul>
    }
}