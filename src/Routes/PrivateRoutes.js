import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE } from "./Routes";

const PrivateRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("AUTH_ACCESS_TOKEN");
    if (!login) {
      navigate("/");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default PrivateRoutes;
