import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./EntryModal.css";

import {AuthContext} from "../../../contexts/AuthContext";

const EntryModal = props => {
  //Contexts 
  const {loginUser, registerUser, loginWithGoogle} = useContext(AuthContext);

  //Local state
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formState;

  const onChangeForm = event => setFormState({...formState, [event.target.name]: event.target.value})
  
  const login =  async event => {
		event.preventDefault();

		try {
			const loginData = await loginUser(formState);
			if (!loginData.success) {
				console.log("Login failed");
			}
		} catch (error) {
			console.log(error);
		}
	}

  const loginViaGoogle = async () => await loginWithGoogle();

  const register =  async event => {
		event.preventDefault();

		try {
			const registerData = await registerUser(formState);
			if (!registerData.success) {
				console.log("Register failed");
			}
		} catch (error) {
			console.log(error);
		}
	}

  let onSubmitForm;
  if(props.entryType==="Login") 
    onSubmitForm = login;
  else 
    onSubmitForm = register;
  
  return (
    <div
      className={
        props.showModal
          ? "entry_modal__container show"
          : "entry_modal__container"
      }
    >
      <div className="entry_modal__wrapper">
        <div className="entry_modal__content">
          <div
            className={props.showModal ? "entry__modal show" : "entry__modal"}
            id={props.id}
          >
            <div className="entry_modal__header">
              <h1 className="entry_modal__title">{props.entryType}</h1>
              <div className="entry__variants">
                <button className="btn entry_modal__transparent_btn" onClick={loginWithGoogle}>
                  <FcGoogle className="btn__icon" /> {props.entryType} via
                  Google
                </button>
                <button className="btn entry_modal__transparent_btn">
                  <FaApple className="btn__icon" /> {props.entryType} via Apple
                </button>
              </div>
            </div>
            <div className="entry_modal__body">
              <p className="entry_modal__details">
                Or continue with email & password
              </p>
              <form className="entry_modal__form" onSubmit={onSubmitForm}>
                <input
                  className="home__input entry_modal__input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={onChangeForm}
                ></input>
                <input
                  className="home__input entry_modal__input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={onChangeForm}
                ></input>
                <input
                  className="home__input entry_modal__input"
                  type="submit"
                  value={props.entryType}
                ></input>
              </form>
            </div>
            <div className="entry_modal__footer">
              <button
                className="entry_modal__close_btn"
                onClick={() => props.setShowModal(false)}
              >
                <IoClose
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryModal;
