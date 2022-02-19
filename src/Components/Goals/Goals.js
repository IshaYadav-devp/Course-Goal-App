import Goal from "./Goal";

const Goals = (props) => {
  return (
    <div>
      {props.goals.map((goal) => (
        <Goal
          id={goal.id}
          key={goal.id}
          title={goal.title}
          onDelete={props.onDeleteGoal}
        />
      ))}
    </div>
  );
};

export default Goals;
