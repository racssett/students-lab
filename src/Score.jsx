const Score = (props) => {
  return (
    <>
      <div  class="score">
        <h3>
          Score: <p> {props.score.score} </p>
        </h3>
        <h3>
          Date: {props.score.date}
        </h3>
      </div>
    </>
  )
}

export default Score