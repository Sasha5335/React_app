const UserCard = (props) => {
  const { user: { id, firstName, lastName, isSelected }, userSelector } = props;

  const styles = {
    border: isSelected ? '4px solid' : undefined,
  };

  const btnHendler = () => userSelector(id)

  return (
    <article style={styles}>
      <p>ID: {id}</p>
      <h1>User Name: {firstName} {lastName}</h1>
      <button onClick={btnHendler}>Border</button>
    </article>
  );
};

export default UserCard;
