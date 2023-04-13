
export const FeedbackOptions=({onLeaveFeedback})=>{
    return (
        <ul>
          <li>
            <button onClick={ this.addGoodFeedback }>Good</button>
          </li>
          <li>
            <button onClick={ this.addNeutralFeedback }>Neutral</button>
          </li>
          <li>
            <button onClick={ this.addBadFeedback }>Bad</button>
          </li>
        </ul>
    )
}