// src/pages/ExerciseListPage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const ExerciseListPage = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExerciseList = async () => {
      try {
        const response = await axios.get("/api/exercises");
        setExerciseList(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercise list:", error);
        // Handle error, show error message, etc.
      }
    };

    fetchExerciseList();
  }, []);

  return (
    <div>
      <h1>Exercise List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {exerciseList.map((exercise) => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExerciseListPage;
