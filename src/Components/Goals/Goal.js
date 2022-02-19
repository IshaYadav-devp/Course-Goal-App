import "./Goal.css";

const Goal = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="goal" onClick={deleteHandler}>
      {props.title}
    </div>
  );
};

export default Goal;
