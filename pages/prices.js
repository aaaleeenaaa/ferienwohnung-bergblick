import styled from "styled-components";
import { StyledCardElement } from "@/components/StyledCardElement";

const StyledHeading = styled.h2`
  display: block;
  margin-bottom: 1rem;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export default function Prices() {
  return (
    <>
      <StyledContainer>
        <StyledCardElement width={"40%"}>
          <StyledHeading>Preise</StyledHeading>{" "}
          <p>Sie können die Wohnung ab vier Nächten buchen.</p>
          <p>
            Preis pro Nacht 95,-€ für sieben Nächte. Ab der achten Nacht 90,- €
            pro Nacht.{" "}
          </p>
          <p>
            Zuzüglich 2,-€ Kurtaxe pro Person und Tag und 40,-€ Endreinigung.
          </p>
        </StyledCardElement>

        <StyledCardElement width={"40%"}>
          {" "}
          <StyledHeading>Allgemeine Buchungsbedingungen</StyledHeading>
          <p>Am Anreisetag können Sie die Ferienwohnung ab 15 Uhr beziehen. </p>
          <p>Checkout am Abreisetag ist 10:30 Uhr.</p>
          <p>
            Bei einer festen Buchung fallen 30% der Gesamtsumme als Anzahlung
            an.
          </p>
          <p>
            Die restliche Summe überweisen Sie bitte eine Woche vor Ihrer
            Anreise.
          </p>
        </StyledCardElement>

        <StyledCardElement width={"40%"}>
          <StyledHeading>Stornobedingungen</StyledHeading>
          <p>Stornierung bis 45 Tage vor dem Anreisetag: 30% Stornokosten</p>
          <p>Stornierung bis 30 Tage vor dem Anreisetag: 50% Stornokosten</p>
          <p>Nichterscheinen: 90% Stornokosten</p>
        </StyledCardElement>
      </StyledContainer>
    </>
  );
}
