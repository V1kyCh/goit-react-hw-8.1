import { Component } from "react";

export class Statistics extends Component {
    render(){
        return <ul className='list'>
          <li className='item' key={1}>Good: {this.props.good}</li>
          <li className='item' key={2}>Neutral: {this.props.neutral}</li>
          <li className='item' key={3}>Bad: {this.props.bad}</li>
          <li className='item' key={4}>Total: {this.props.total()}</li>
          <li className='item' key={5}>Positive Feedback: {this.props.positivePercentage}</li>
        </ul>
    }
}