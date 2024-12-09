import React, { useState } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlinePhoneForwarded } from "react-icons/md";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const updateData = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);
  };

  return (
    <div className="form">
      <div className="left">
        <div className="button">
          <Button
            text="Via Support Chat"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button
            // className="but"
            text="Via Call"
            icon={<MdOutlinePhoneForwarded fontSize="24px" />}
          />
        </div>

        <div className="but2">
          <Button
            // isOutline={true}
            text="Via Support Chat"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
        </div>

        <div>
          <form action="" onSubmit={updateData}>
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Email" />
            <textarea name="" id="" placeholder="Text"></textarea>

            <div className="submit">
              <Button text="Submit Now" />
            </div>
          </form>
        </div>

        <div>{name + " " + email + " " + message}</div>

      </div>

      <div className="right">
        <img
          src="https://wpvip.edutopia.org/wp-content/uploads/2023/06/hero_blog_technology-integration_middle-school_high-school_photo_iStock_1454448148_FatCamera.jpg?w=2880&quality=85"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContactForm;
