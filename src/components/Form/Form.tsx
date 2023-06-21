import "./Form.scss";
import React, { FC, ChangeEvent, FormEvent, useState, useRef } from "react";
import AOS from "aos";
import { gsap } from "gsap";
import { InputsValueModel } from "../../models/InputsValueModel";
import { animationSubmit } from "../../utils/functions";

interface FormProps {
  handleSubmit: (data: InputsValueModel) => void;
}
const initState = {
  name: "",
  email: "",
  message: "",
};
const Form: React.FC<FormProps> = ({ handleSubmit }) => {
  // AOS.init({ duration: 1000 });
  const [inputValue, setInputValue] = useState<InputsValueModel>(initState);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const button = buttonRef.current;

  let getVar = (variable: any) => {
    if (!button) return;
    const computedStyle = getComputedStyle(button);
    computedStyle.getPropertyValue(variable);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = inputValue;
    if (name && email && message) {
      handleSubmit(inputValue);
      animationSubmit(button, gsap, getVar);
      setInputValue(initState);
    }
    
  };
  return (
    <form data-aos="zoom-in" className="form" name="form" onSubmit={onSubmit}>
      <h2 className="form__title text-mrg">
        Send&nbsp;
        <span className="form__title-span text-mrg">Email</span>
      </h2>
      <input
        className="form__input"
        type="text"
        name="name"
        placeholder="Name"
        required
        onChange={handleChange}
        value={inputValue.name}
      />
      <input
        className="form__input"
        type="email"
        name="email"
        placeholder="Your e-mail"
        required
        onChange={handleChange}
        value={inputValue.email}
      />
      <textarea
        className="form__input"
        name="message"
        id="message"
        placeholder="Message"
        rows={7}
        required
        onChange={handleChange}
        value={inputValue.message}
      ></textarea>

      <button className="button__submit submit" ref={buttonRef}>
        <span className="default">Send</span>
        <span className="success">Sent</span>
        <div className="left"></div>
        <div className="right"></div>
      </button>
    </form>
  );
};

export default Form;
