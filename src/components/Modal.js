function Modal(props) {
  function doneBtn() {
    props.onDone();
  }

  function unDoneBtn() {
    props.onUnDone();
  }
  const title = sessionStorage.getItem("title");
  let description;

  switch (title) {
    case "Go to work":
      description =
        "After a good night's sleep, I have to go to work. Working with passion is definitely a good start to the day.";
      break;
    case "Rest":
      description =
        "After a working day, I need to rest to have enough energy to continue the day. One hour seems enough!";
      break;
    case "Online meeting":
      description =
        "After the break, I need to participate in the daily online meeting and learn and teach new things.";
      break;
    case "Dinner with family":
      description =
        "The work day is over and what is better than a dinner with the family?";
      break;
    case "Sleep":
      description =
        "Tomorrow is definitely a better day and more progress awaits me. Comfortable and sufficient sleep is a prerequisite for a good and energetic tomorrow";
      break;
    default:
      description = "undifind";
      break;
  }

  return (
    <div className="modal">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <button className="btn" onClick={doneBtn}>
          Done
        </button>
        <button className="btn btn--alt" onClick={unDoneBtn}>
          Undone
        </button>
      </div>
    </div>
  );
}

export default Modal;
