// src/utils/api.js

import axios from "axios";

const getExerciseList = async () => {
  try {
    const response = await axios.get("https://wger.de/api/v2/exercise/");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching exercise list from wger API:", error);
    throw error;
  }
};

export { getExerciseList };
