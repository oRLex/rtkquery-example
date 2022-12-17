const TodoItem = ({data, onEdit, onDelete}) => {
  const handleEdit = () => {
    onEdit(data)
  }

  const handleRemove = () => {
    onDelete(data)
  }

  return (
    <div>
      <span>{data.name}</span>
      <span>{data.surname}</span>
      <span>{data.salary}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>&times;</button>
    </div>
  );
};

export default TodoItem;