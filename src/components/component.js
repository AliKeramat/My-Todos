import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
let statusClassName = "black-status";

function TodoCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [firstState, secondState] = useState("Undone");

  function clickOnMoreBtn() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function closeModalByDone() {
    setIsModalOpen(false);
    statusClassName = "green-status";
    secondState("Done");
  }
  function closeModalByUnDone() {
    setIsModalOpen(false);
    statusClassName = "red-status";
    secondState("Undone");
  }

  const title = [props.title];
  sessionStorage.setItem("title", title);
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p className={statusClassName}> Status : {firstState} </p>
      <div className="action">
        <button className="btn" onClick={clickOnMoreBtn}>
          More
        </button>
      </div>
      {isModalOpen && (
        <Modal onDone={closeModalByDone} onUnDone={closeModalByUnDone} />
      )}
      {isModalOpen && <Backdrop onClose={closeModal} />}
    </div>
  );
}
export default TodoCard;
