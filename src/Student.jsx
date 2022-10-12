import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
      <div class="student-container">
        <h2>{props.student.name}</h2>
        <h3 class="bio-container">Bio: <p class="bio">{props.student.bio}</p></h3>
        <h3>{props.student.scores.map(score =>
          <Score key={score} score={score} />
        )}
        </h3>
      </div>
    </>
  )
}

export default Student;