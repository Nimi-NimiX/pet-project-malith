import axios from 'axios';

const BASE_URL = process.env.REACT_APP_PET_BASE_URL;

const registerUser = async (userData) => {
  try {
    console.log(`base url:${BASE_URL}`);
    const response = await axios.post(`${BASE_URL}/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default registerUser;
