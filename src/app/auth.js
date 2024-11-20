import axios from "axios";

const checkAuth = () => {
  
  const TOKEN = localStorage.getItem("token");
  
  // Define public routes
  const PUBLIC_ROUTES = ["/login", "/forgot-password", "/documentation", "/"];
  
  // Get the current pathname from the window location
  const currentPath = window.location.pathname;
  
 
  const isPublicPage = PUBLIC_ROUTES.includes(currentPath);

  
  if (!TOKEN && !isPublicPage) {
    window.location.href = "/login";
    return;
  } 
  
  
  if (TOKEN) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
    
    // Add Axios request interceptor for global loading indicator
    axios.interceptors.request.use(
      function (config) {
        
        // UPDATE: Add this code to show global loading indicator
        document.body.classList.add("loading-indicator");
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Add Axios response interceptor for global loading indicator
    axios.interceptors.response.use(
      function (response) {

        // UPDATE: Add this code to show global loading indicator
        document.body.classList.remove("loading-indicator");
        return response;
      },
      function (error) {
        document.body.classList.remove("loading-indicator");
        return Promise.reject(error);
      }
    );

    return TOKEN; 
  }
};

export default checkAuth;
