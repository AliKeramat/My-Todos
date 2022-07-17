import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop"

function TodoCard(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function clickOnMoreBtn () {
        setIsModalOpen(true)
    }

    function closeModal () {
        setIsModalOpen(false)
    }

    function closeModalByDone () {
        setIsModalOpen(false)
        const modalStatus = document.getElementById('Status')
        modalStatus.style.color = "green"
    }
    function closeModalByUnDone () {
        setIsModalOpen(false)
        const modalStatus = document.getElementById('Status')
        modalStatus.style.color = "red"
    }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p id="Status">Undone</p>
      <div className="action">
        <button className="btn" onClick={clickOnMoreBtn}>
          More
        </button>
      </div>
      {isModalOpen && <Modal onDone={closeModalByDone} onUnDone={closeModalByUnDone}/>}
      {isModalOpen && <Backdrop onClose={closeModal}/>}
    </div>
  );
  }
export default TodoCard;
