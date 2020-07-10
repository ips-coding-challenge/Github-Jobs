import axios from "axios";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const findAllJobs = async (description, location, fulltime) => {
  const API_URL = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fulltime}`;
  const response = await axios.get(`${PROXY_URL}${API_URL}`);
  return response.data;
};

export const findOneJob = async (id) => {
  const API_URL = `https://jobs.github.com/positions/${id}.json`;
  const response = await axios.get(`${PROXY_URL}${API_URL}`);
  return response.data;
};
