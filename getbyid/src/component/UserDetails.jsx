import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();

  const user = location.state?.user;

  if (!user) {
    return <h2>User data not found</h2>;
  }

  return (
    <>
      <h2>User Details</h2>

      <p>
        <strong>ID:</strong> {user.id}
      </p>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <h3>Address</h3>

      <p>
        <strong>Street:</strong> {user.address.street}
      </p>

      <p>
        <strong>Suite:</strong> {user.address.suite}
      </p>

      <p>
        <strong>City:</strong> {user.address.city}
      </p>

      <p>
        <strong>Zipcode:</strong> {user.address.zipcode}
      </p>

      <h3>Company</h3>

      <p>
        <strong>Name:</strong> {user.company.name}
      </p>

      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </>
  );
};

export default UserDetails;