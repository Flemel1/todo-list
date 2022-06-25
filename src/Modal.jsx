import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "./todo-slice";

const Modal = ({ onClose }) => {
  const [fields, setFields] = useState({
    title: "",
    subtitle: "",
  });

  const dispatch = useDispatch();

  const onChange = (event) => {
    const name = event.target.name;
    const newFields = { ...fields };
    newFields[name] = event.target.value;
    setFields(newFields);
  };

  const onSubmit = (event) => {
    dispatch(todoActions.addToDo(fields));
    onClose(false);
  };

  return (
    <div className="modal">
      <div className="wrapper">
        <div className="content">
          <h1 className="modal-header">Create To Do</h1>
          <input
            onChange={onChange}
            className="modal-input-title"
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            onChange={onChange}
            className="modal-input-subtitle"
            type="text"
            name="subtitle"
            placeholder="subtitle"
          />
        </div>
        <button
          onClick={() => onClose(false)}
          className="modal-button-cancel"
          type="button"
        >
          Cancel
        </button>
        <button onClick={onSubmit} className="modal-button" type="button">
          Create
        </button>
      </div>
    </div>
  );
};

export default Modal;
