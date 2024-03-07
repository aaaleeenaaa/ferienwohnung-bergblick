import { useState } from "react";
import styled from "styled-components";
import { StyledCardElement } from "./StyledCardElement";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

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
  align-items: stretch;
  width: 20rem;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  resize: vertical;
  height: 10rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SmallP = styled.p`
  font-size: 0.8rem;
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

  const [state, handleSubmit] = useForm("xrgnkdrp");
  if (state.succeeded) {
    return <p>Vielen Dank für Ihre Nachricht!</p>;
  }

  return (
    <StyledCardElement width={"35%"}>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Kontaktieren Sie uns</h2>
        <p>
          Sie haben Fragen, Wünsche, Anregungen oder sind an einer Buchung
          interessiert? Hinterlassen Sie uns gerne eine Nachricht und wir melden
          uns bei Ihnen!
        </p>
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
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
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </StyledLabel>
        <SmallP>
          Ja, ich habe die{" "}
          <Link href="/privacystatement">Datenschutzerklärung</Link> zur
          Kenntnis genommen und bin damit einverstanden, dass die von mir
          angegebenen Daten elektronisch erhoben und gespeichert werden. Meine
          Daten werden dabei nur streng zweckgebunden zur Bearbeitung und
          Beantwortung meiner Anfrage benutzt. Mit dem Absenden des
          Kontaktformulars erkläre ich mich mit der Verarbeitung einverstanden.
        </SmallP>
        <StyledButtonContainer>
          <button type="submit" disabled={state.submitting}>
            Absenden
          </button>
        </StyledButtonContainer>
      </StyledForm>
    </StyledCardElement>
  );
}
