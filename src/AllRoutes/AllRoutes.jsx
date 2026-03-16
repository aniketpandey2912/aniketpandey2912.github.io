import React from "react";
import { Navigate } from "react-router-dom";

function AllRoutes() {
  // Default route redirects to home
  return <Navigate to="#home" replace />;
}

export default AllRoutes;
