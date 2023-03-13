import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextInput from "../atoms/TextInput";
import ButtonCompo from "../atoms/Button";
import { Modal, Button } from "react-bootstrap";
import validations from "../../validations/CardTitleValidations";
import { useForm } from "react-hook-form";
export const AddButtonForm = styled.form`
  display: flex;
  position: relative;
`;
const { CARDTITLE, CARDDETAILS } = validations;
const AddForm = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);
  const onSubmit = ({ cardTitle, cardDetails }) => {
    if (cardTitle && cardDetails) {
      props.onConfirm({ cardDetails, cardTitle });
      handleClose();
    }

    setValue("");
    setFocus(false);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div style={{ position: "relative" }}>
      <AddButtonForm
        onSubmit={onSubmit}
        width={props.width}
        maxWidth={props.maxWidth}
      >
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextInput
              type="text"
              registerProps={register("cardTitle", CARDTITLE)}
              errors={errors.card}
              id={"cardTitle"}
              placeholder={"Task Title"}
            />
            <label>Add task details</label>
            <textarea
              style={{ height: "120px", width: "100%" }}
              {...register("cardDetails", CARDDETAILS)}
            />
            {errors?.textArea?.message ? (
              <div style={{ color: "red" }}>{errors.textArea.message}</div>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <ButtonCompo variant="primary" onClick={handleSubmit(onSubmit)}>
              Submit
            </ButtonCompo>
          </Modal.Footer>
        </Modal>
      </AddButtonForm>
    </div>
  );
};

AddForm.propTypes = {
  onConfirm: PropTypes.func,
  placeholder: PropTypes.string,

  gray: PropTypes.bool,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
};
export default AddForm;
