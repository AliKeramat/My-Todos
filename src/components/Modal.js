function Modal(props) {

    function doneBtn () {
       props.onDone ()
    }

    function unDoneBtn () {
        props.onUnDone ()
    }
  return (
    <div className="modal">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div>
        <button className="btn" onClick={doneBtn}>Done</button>
        <button className="btn btn--alt" onClick={unDoneBtn}>Undone</button>
      </div>
    </div>
  );
}

export default Modal;
