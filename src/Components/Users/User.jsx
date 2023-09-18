import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className="text-2xl">Our User {users.length} </h2>
      <div className="grid grid-cols-3">
        {users.map((user) => (
          <SingleUser key={user.id} users={user}></SingleUser>
        ))}
      </div>
    </div>
  );
};

export default User;
