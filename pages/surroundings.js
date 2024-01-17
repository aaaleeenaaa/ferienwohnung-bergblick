import Link from "next/link";
import styled from "styled-components";
import { StyledCardElement } from "@/components/StyledCardElement";
import Image from "next/image";

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ResponsiveImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export default function Surroundings() {
  return (
    <>
      <StyledContainer>
        <StyledCardElement>
          <p>
            Kochel/Ried (Landkreis Bad Tölz - Wolfratshausen) liegt im schönen
            Oberbayern. Hier gibt es eine Menge zu sehen und zu erleben. Es ist
            für jeden Geschmack etwas dabei, sei es sportlich aktiv, kulturell
            oder lieber ruhiger. Selbstverständlich stehen wir Ihnen jederzeit
            mit Tipps zur Seite.
          </p>
          <p>
            Der berühmte Walchensee, mit seinem kristallklaren Wasser und den
            umgebenden Bergen, liegt nur eine kurze Autofahrt entfernt. Hier
            können Sie sich beim Schwimmen, Segeln oder Angeln erfrischen und
            den Blick über die majestätische Kulisse schweifen lassen. Die
            umliegende Gegend lädt zu Outdoor-Abenteuern ein. Erkunden Sie die
            Wanderwege, die sich durch saftige Wiesen und bewaldete Hügel
            schlängeln. Mit jeder Wegbiegung werden Sie von den spektakulären
            Aussichten auf die umgebenden Gipfel belohnt. Ob Sie ein erfahrener
            Wanderer oder ein Neuling sind, es gibt Routen für jedes Niveau.
          </p>
          <p>
            Aber es gibt noch mehr zu entdecken! Die Seenlandschaft rund um den
            Walchensee ist einfach bezaubernd. Unternehmen Sie Tagesausflüge zu
            den umliegenden Seen, wie dem Kochelsee und dem Staffelsee. Hier
            können Sie Boot fahren, am Ufer picknicken oder einfach die Ruhe und
            Natur genießen.
          </p>
        </StyledCardElement>
        <ResponsiveImage
          src="/WalchenseeUnsplash.jpg"
          alt="Walchensee"
          width={400}
          height={267}
        />
        <ResponsiveImage
          src="/JochbergUnsplash.jpg"
          alt="Jochberg"
          width={400}
          height={267}
        />
        <StyledCardElement>
          <p>Hier schon einmal ein paar Inspirationen:</p>
          <StyledLinks>
            <Link href="https://www.Walchensee-Kochelsee.de">
              Ausflug zu Walchensee & Kochelsee
            </Link>
            <Link href="https://www.BAYregio.de/Freizeit/Brauneck">
              Ski und Wandern am Brauneck
            </Link>
            <Link href="https://www.BAYregio-Muenchen.de">
              Ausflug nach München, z.B. für Messebesuch, Stadtbesichtigung oder
              Oktoberfest:
            </Link>
            <Link href="https://www.BAYregio-Starnberger-See.de">
              Ausflug zum Starnberger See
            </Link>
            <Link href="https://www.Walchensee-Kochelsee.de/tipps/Webcam.php">
              Webcams rund um Walchensee & Kochelsee
            </Link>
            <Link href="https://www.BAYregio.de/Freizeit/Trimini">
              Ausflug in das Schwimmbad Trimini in Kochel am Kochelsee
            </Link>
            <Link href="https://www.Walchensee-Kochelsee.de/tipps/Radtour-Walchensee.php">
              Fahrrad-Tour / Wanderung rund um den Walchensee
            </Link>
            <Link href="https://www.Walchensee-Kochelsee.de/tipps/Herzogstand-Heimgarten.php">
              Wanderung vom Walchensee über Herzogstand und Heimgarten nach
              Ohlstadt
            </Link>
            <Link href="https://www.BAYregio.de/freizeit/Radtour-Benediktbeuern-Kochelsee">
              Radtour von Benediktbeuern zum Kochelsee
            </Link>
            <Link href="https://www.BAYregio.de/freizeit/Radtour-Benediktbeuern-Sindelsdorf-Grossweil-Kochel">
              Beschreibung einer Radtour durch das Naturschutzgebiet nördlich
              des Kochelsee
            </Link>
            <Link href="https://www.Walchensee-Kochelsee.de/tipps/Surfen-Segeln.php">
              Windsurfen, Segeln & Kitesurfen auf dem Walchensee & Kochelsee
            </Link>
            <Link href="https://www.BAYregio.de/Freizeit/Brauneck-Benediktenwand-Walchensee">
              Zwei Tage Bergsteigen Lenggries-Walchensee
            </Link>
            <Link href="https://www.BAYregio-TOEL.de/tourismus/ausflug.htm">
              Weitere Ausflugsziele und Sehenswürdigkeiten im Tölzer Land
            </Link>
            <Link href="https://www.BAYregio-TOEL.de/Branchenuebersicht">
              Golf, Fahrräder, Boote & Sportschulen in unserem Verzeichnis
            </Link>
            <Link href="https://www.BAYregio-TOEL.de/Tourismus">
              Allgemeines, WebCams und Bilder zum Landkreis Bad
              Tölz/Wolfratshausen
            </Link>
          </StyledLinks>
        </StyledCardElement>
      </StyledContainer>
    </>
  );
}
