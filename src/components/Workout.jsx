import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

const Workout = ({ workout }) => { 
  return (
    <SectionWrapper id={"workout"} header={"Welcome"} title={['The', 'DANGER', 'zone']}>
      <div className='flex flex-col gap-4 '>
        {workout && workout.length > 0 ? (
          workout.map((exercise, i) => (
            <ExerciseCard i={i} exercise={exercise} key={i} />
          ))
        ) : (
          <p>No workout generated yet.</p>
        )}
      </div>
    </SectionWrapper>
  )
}

export default Workout
