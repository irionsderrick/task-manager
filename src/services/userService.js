import axios from "axios";

const userService = {
  endpoint: "https://localhost:44372/api/Auth",
};

const register = async (email, passwordHash) => {
  const config = {
    method: "POST",
    url: `${userService.endpoint}/register`,
    data: { email, passwordHash },
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  try {
    console.log("This is the register config:", config);
    const newUser = await axios(config);
    console.log("User registered successfully", newUser);
    return newUser;
  } catch (error) {
    console.error("Register failed", error);
  }
};

const login = async (payload) => {
  const config = {
    method: "POST",
    url: `${userService.endpoint}/login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  try {
    console.log("This is the login payload:", payload);
    const newUser = await axios(config);
    console.log("User logged in successfully", newUser);
    return newUser;
  } catch (error) {
    console.error("Login failed", error);
  }
};

export default {
  register,
  login,
};
