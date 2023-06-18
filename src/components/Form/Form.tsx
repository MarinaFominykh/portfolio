import "./Form.scss";
import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import AOS from "aos";
import { InputsValueModel } from "../../models/InputsValueModel";

interface FormProps {
  handleSubmit: (data: InputsValueModel) => void;
}
const Form: React.FC<FormProps> = ({ handleSubmit }) => {
  AOS.init({ duration: 1000 });
  const [inputValue, setInputValue] = useState<InputsValueModel>({
    name: "",
    email: "",
    message: "sdfsdfsd",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        // onChange={handleChange}
        value={inputValue.message}
      ></textarea>
      <button className="form__submit" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
