import axios from "axios";

const fetchTasks = async () => {
  try {
    const response = await axios.get("/api/tasks");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching tasks");
  }
};

export default {
  fetchTasks,
};
