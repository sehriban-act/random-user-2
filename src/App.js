import React, { useState, useEffect } from "react";

import cw from "./assets/cw.svg";
import design from "./assets/design.svg";
import gum from "./assets/growing-up-man.svg";
import guw from "./assets/growing-up-woman.svg";
import mail from "./assets/mail.svg";
import man from "./assets/man.svg";
import map from "./assets/map.svg";
import padlock from "./assets/padlock.svg";
import phone from "./assets/phone.svg";
import woman from "./assets/woman.svg";



const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
 

 

  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("random person");
  const [title, setTitle] = useState("name");
  const [perGender, setPerGender] = useState(" ");

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const { gender } = person;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
      gender,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
    setPerGender(newPerson.gender);
    console.log(setPerson(newPerson));
  };

  useEffect(() => {
    getPerson();
  }, []);
  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  const handleClick = () => {
    return alert ("table ekleyemiyoruuum")
  };

  return (
    <main>
      <div className="block bcg-black">
        <img className="logo" src={cw} alt="cw" />
      </div>

      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <img
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
              src={perGender === "male" ? man : woman} alt="gender"
            />

            <img
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
              src={mail} alt="mail"
            />

            <img
              className="icon"
              data-label="age"
              onMouseOver={handleValue}
              src={perGender === "male" ? gum : guw} alt="gender"
            />

            <img
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
              src={map} alt="map"
            />

            <img
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
              src={phone} alt="phone"
            />

            <img
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
              src={padlock} alt="password"
            />
          </div>
          <div className="buttons">
            <button className="btn" type="button" onClick={getPerson}>
              {loading ? "loading..." : "new user"}
            </button>
           <button className="btn" type="button" onClick={handleClick}>
  {loading ? "loading..." : "add user"}
            </button>
          </div>
         
        </div>
      </div>
      <img src={design} alt="design"/>
    </main>
  );
  }

export default App;
