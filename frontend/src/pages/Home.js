import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  // useEffect fire the function when the component is rendered
  // second argument [] empty array (dependency array), implies that only fires the function once, when the component first rendered.
  useEffect(() => {
    // the purpose of creating a function inside use effect because we want to use async keyword
    // we shouldn't use async directly in the callback function of useEffect
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        // update the context state (global state)
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
