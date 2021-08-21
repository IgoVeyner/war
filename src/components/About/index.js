const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="about-header">How To Play</h1>
        <ol>
          <li>Start by clicking the deal button.</li>
          <li>Click the next button 
            until either you, the computer, or both of you are out of cards!</li>
        </ol>        
      </div>

      <div className="about-section">
        <h1 className="about-header">Rules</h1>
        <ol>
          <li>
            A standard 52 card deck is shuffled and split in half. 
            Each player taking one half.
          </li>

          <li> 
            Both players draw a card at the start of a round and place them on the table
          </li>
          <li>
            Compare the cards: 
          </li>
            <ul>
              <li>
                Whoever has the higher card takes all. Placing them at the bottom of their deck.
              </li>
              <li>
                If there is a draw (War). Both players need to play 3 cards face down 
                and 1 more to compare.
              </li>
            </ul>
          <li>
            The game ends when one or both players run out of cards.
          </li>
        </ol>
      </div>
    </div>
  )
}

export default About