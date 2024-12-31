import axios from "axios";

const taskService = {
  endpoint: "https://localhost:44372/api/tasks",
};

const token = localStorage.getItem("token");

const fetchTasks = async () => {
  try {
    const response = await axios.get(taskService.endpoint, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

// const fetchProductById = async (id) => {
//   try {
//     const response = await axios.get(`${productService.endpoint}/${id}`, {
//       withCredentials: true,
//     });
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//   }
// };

// const fetchProductsByCategory = async (categoryId) => {
//   try {
//     const response = await axios.get(
//       `${productService.endpoint}/category/${categoryId}`,
//       {
//         withCredentials: true,
//       }
//     );
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//   }
// };

const createTask = async (payload) => {
  const config = {
    method: "POST",
    url: `${taskService.endpoint}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log("This is the create task payload", payload);
    const newTask = await axios(config);
    console.log("This is newTask", newTask);
    return newTask;
  } catch (error) {
    console.error("Creating new task failed:", error);
  }
};

// const updateProduct = async (id, payload) => {
//   const config = {
//     method: "PUT",
//     url: `${productService.endpoint}/${id}`,
//     data: payload,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   try {
//     const updatedProduct = await axios(config);
//     console.log("This is the axios update productData", payload);
//     return updatedProduct;
//   } catch (error) {
//     console.error("Error updating product:", error);
//   }
// };

// const deleteProduct = async (id) => {
//   const config = {
//     method: "DELETE",
//     url: `${productService.endpoint}/${id}`,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   try {
//     console.log("Deleting product with ID:", id);
//     const deletedProduct = await axios(config);
//     return deletedProduct;
//   } catch (error) {
//     console.error("Error deleting product:", error);
//   }
// };

export default {
  fetchTasks,
  createTask,
};
