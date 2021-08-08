function Todo(props) {
  function deleteButton() {}

  return (
    <div className="card">
      <h2>Plan for the next month</h2>
      <h3>{props.text}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
