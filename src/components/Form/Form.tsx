import "./Form.scss";
import React, { FC, ChangeEvent, FormEvent, useState } from "react";

const Form: React.FC = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e)
    }
  return (
    <form className="form" name="form" onSubmit={handleSubmit}>
      <h2 className="form__title text-mrg">
        Send&nbsp;
        <span className="form__title-span text-mrg">Email</span>
      </h2>
      <input className="form__input" type="text" name="name" placeholder="Name" required/>
      <input className="form__input" type="email" name="email" placeholder="Your e-mail" required/>
      <textarea className="form__input" name="message" id="message" placeholder="Message" rows={7} required></textarea>
      <button className="form__submit" type="submit">Send</button>
     
    </form>
    
  );
};

export default Form;
