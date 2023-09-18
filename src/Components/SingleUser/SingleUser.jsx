const SingleUser = ({ users }) => {
  const { id, name, email, phone } = users;
  return (
    <div className="border-2 border-fuchsia-400 p-2 rounded-lg">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default SingleUser;
