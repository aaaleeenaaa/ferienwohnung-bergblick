import Slideshow from "@/components/Slideshow";
import { StyledCardElement } from "@/components/StyledCardElement";

export default function Appartment() {
  return (
    <>
      <Slideshow />
      <StyledCardElement>
        <p>
          {" "}
          Die Ferienwohnung liegt abseits der Hauptstraße in einem ruhigen
          Wohngebiet. Sie hat einen eigenen Eingang und einen Parkplatz. Die
          Küche verfügt über einen Geschirrspüler, Kaffeemaschine, Wasserkocher,
          Toaster, Moskitonetz.
        </p>
        <p>
          Geschirrtücher und Spülmittel sind auch da. Badezimmer mit Dusche. Ein
          Fön, ein Bügeleisen und Schuhputzmittel sind vorhanden. Schlafzimmer
          mit Doppelbett. Bettwäsche und Handtücher werden gestellt. Die
          Terrassentüre zum Schlafzimmer hinaus hat auch ein Moskitonetz.
        </p>
        <p>
          Unsere Ferienwohnung hat im Wohn- und Schlafzimmer Holzfußböden, in
          der Küche und im Bad Fliesen. Hunde sind nicht gestattet.
          WLAN-Anschluss. TV. Nichtraucher. Vor dem Wohnzimmer hat sie eine
          Terrasse mit Gartenstühlen, Tisch, Pergola und einem kleinen Grill.
          Neben der Terrasse zum Schlafzimmer hinaus steht eine kleine
          Gartensauna (Zusatzgebühr).
        </p>
      </StyledCardElement>
    </>
  );
}
