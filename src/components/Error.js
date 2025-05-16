import { useRouteError } from "react-router-dom";

const Error = () => {
  console.log(useRouteError);
  return (
    <div>
      <h2>Oops Something went wrong!!</h2>
      {/* <h2>{useRouteError}</h2> */}
    </div>
  );
};

export default Error;
