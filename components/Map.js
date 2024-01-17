import React from "react";
import { StyledCardElement } from "./StyledCardElement";

const Map = () => {
  return (
    <StyledCardElement width={"90%"}>
      <h2>Hier finden Sie uns</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10741.586992374401!2d11.397714291536873!3d47.69613436172272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dbdd33f750a95%3A0x9a41bf4abbb92a2e!2sFerienwohnung%20Bergblick!5e0!3m2!1sde!2sde!4v1694607494989!5m2!1sde!2sde"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </StyledCardElement>
  );
};

export default Map;
