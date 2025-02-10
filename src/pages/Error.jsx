import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "900px",
          }}
        >
          <img
            src="https://cdn.dribbble.com/users/4672508/screenshots/11584848/media/bf99e1c02486a053bffcf88366923dae.jpg?resize=1000x750&vertical=center"
            alt="Error Loading....."
          />
        </div>
        <button onClick={handleGoBack}>Go back</button>
      </>
    );
  }

  return <h1>The page you are looking does not exist.</h1>;
};

export default Error;
