import { useState } from "react";
import styled from "styled-components";
import { StyledCardElement } from "./StyledCardElement";

const StyledForm = styled.form`
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, telephone, message } = formData;
    const data = { name, email, telephone, message };

    // Make a POST request to your serverless function
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          // Email sent successfully, you can display a success message
          console.log("Email sent successfully");
          // You might also want to reset the form here
          setFormData({ name: "", email: "", telephone: "", message: "" });
        } else {
          // Handle other response statuses (e.g., 500 for server error)
          console.error("Email could not be sent");
        }
      })
      .catch((error) => {
        // Handle fetch errors (e.g., network error)
        console.error("Error sending email:", error);
      });
  }

  return (
    <StyledCardElement width={"35%"}>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Kontaktieren Sie uns</h2>
        <StyledLabel>
          Name:
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength="3"
          />
        </StyledLabel>
        <StyledLabel>
          Email-Adresse:
          <StyledInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            minLength="4"
          />
        </StyledLabel>
        <StyledLabel>
          Telefonnummer:{" "}
          <StyledInput
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            minLength="3"
            pattern="0[0-9]*"
          />
        </StyledLabel>
        <StyledLabel>
          Ihre Nachricht an uns:
          <StyledTextarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength="3"
          />
        </StyledLabel>
        <StyledButtonContainer>
          <button type="submit">Absenden</button>
        </StyledButtonContainer>
      </StyledForm>
    </StyledCardElement>
  );
}
