import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <>
      <h1>User Page</h1>
      <p><b>User id:</b> {id}</p>
    </>  
)

};

export default User;