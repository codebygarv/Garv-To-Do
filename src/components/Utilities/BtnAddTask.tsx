import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";

const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();
  const customStyles = {
    backgroundColor: "hsl(233deg 36% 38%)",
    marginRight:"0px",
    margin:"auto"
  };
  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal} style={{ ...customStyles }}>
        Add new task
      </button>
    </>
  );
};

export default BtnAddTask;
