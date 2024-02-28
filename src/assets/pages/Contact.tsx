import React, { useState } from "react";
import axios from "axios";

const Contact: React.FC = () => {
  const [to, setTo] = useState<string>("");

  const [text, setText] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/send-email", {
        from: to,
        text,
        html: text,
        firstName,
        lastName,
      });
      // Clear all fields
      setTo("");
      setText("");
      setFirstName("");
      setLastName("");

      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
    <>
      <h1 className="mb-4" style={{ fontSize: "50px", fontWeight: "800" }}>
        Get in Touch
      </h1>
      <form onSubmit={sendEmail} method="POST">
        <div className="mb-3">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <p className="mb-2 fs-6  fw-medium text-dark">Firstname</p>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="John"
                  style={{ height: "55px" }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <p className="mb-2 fs-6  fw-medium text-dark">Lastname</p>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Doe"
                  style={{ height: "55px" }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="email">
            <p className="mb-2 fs-6  fw-medium text-dark">Email</p>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{ height: "55px" }}
              required
            />
          </div>
        </div>

        <div className="form-floating mb-3">
          <p className="mb-2 fs-6  fw-medium text-dark">Message</p>
          <textarea
            className="form-control "
            style={{ height: "150px" }}
            placeholder="Leave a comment here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="btnsub d-flex">
          <button
            type="submit"
            className="btn btn-dark fw-semibold fs-5 w-100 py-3"
          >
            Send a Message
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
