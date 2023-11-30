import Link from "next/link";
import styled from "styled-components";

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Surroundings() {
  return (
    <>
      <article>
        Kochel/Ried (Landkreis Bad Tölz - Wolfratshausen) liegt im schönen
        Oberbayern. Hier gibt es eine Menge zu sehen und zu erleben. Es ist für
        jeden Geschmack etwas dabei, sei es sportlich aktiv, kulturell oder
        lieber ruhiger. Selbstverständlich stehen wir Ihnen jederzeit mit Tipps
        zur Seite. Hier schon einmal ein paar Inspirationen:
      </article>
      <StyledLinks>
        <Link href="www.Walchensee-Kochelsee.de">
          Ausflug zu Walchensee & Kochelsee
        </Link>
        <Link href="www.BAYregio.de/Freizeit/Brauneck">
          Ski und Wandern am Brauneck
        </Link>
        <Link href="www.BAYregio-Muenchen.de">
          Ausflug nach München, z.B. für Messebesuch, Stadtbesichtigung oder
          Oktoberfest:
        </Link>
        <Link href="www.BAYregio-Starnberger-See.de">
          Ausflug zum Starnberger See
        </Link>
        <Link href="www.Walchensee-Kochelsee.de/tipps/Webcam.php">
          Webcams rund um Walchensee & Kochelsee
        </Link>
        <Link href="www.BAYregio.de/Freizeit/Trimini">
          Ausflug in das Schwimmbad Trimini in Kochel am Kochelsee
        </Link>
        <Link href="www.Walchensee-Kochelsee.de/tipps/Radtour-Walchensee.php">
          Fahrrad-Tour / Wanderung rund um den Walchensee
        </Link>
        <Link href="www.Walchensee-Kochelsee.de/tipps/Herzogstand-Heimgarten.php">
          Wanderung vom Walchensee über Herzogstand und Heimgarten nach Ohlstadt
        </Link>
        <Link href="www.BAYregio.de/freizeit/Radtour-Benediktbeuern-Kochelsee">
          Radtour von Benediktbeuern zum Kochelsee
        </Link>
        <Link href="www.BAYregio.de/freizeit/Radtour-Benediktbeuern-Sindelsdorf-Grossweil-Kochel">
          Beschreibung einer Radtour durch das Naturschutzgebiet nördlich des
          Kochelsee
        </Link>
        <Link href="www.Walchensee-Kochelsee.de/tipps/Surfen-Segeln.php">
          Windsurfen, Segeln & Kitesurfen auf dem Walchensee & Kochelsee
        </Link>
        <Link href="www.BAYregio.de/Freizeit/Brauneck-Benediktenwand-Walchensee">
          Zwei Tage Bergsteigen Lenggries-Walchensee
        </Link>
        <Link href="www.BAYregio-TOEL.de/tourismus/ausflug.htm">
          Weitere Ausflugsziele und Sehenswürdigkeiten im Tölzer Land
        </Link>
        <Link href="www.BAYregio-TOEL.de/Branchenuebersicht">
          Golf, Fahrräder, Boote & Sportschulen in unserem Verzeichnis
        </Link>
        <Link href="www.BAYregio-TOEL.de/Tourismus">
          Allgemeines, WebCams und Bilder zum Landkreis Bad Tölz/Wolfratshausen
        </Link>
      </StyledLinks>
    </>
  );
}
