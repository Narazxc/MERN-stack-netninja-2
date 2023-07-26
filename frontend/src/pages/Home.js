import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  // useEffect fire the function when the component is rendered
  // second argument [] empty array (dependency array), implies that only fires the function once, when the component first rendered.
  useEffect(() => {
    // the purpose of creating a function inside use effect because we want to use async keyword
    // we shouldn't use async directly in the callback function of useEffect
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
}
