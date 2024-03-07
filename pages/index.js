import Image from "next/image";
import { StyledCardElement } from "@/components/StyledCardElement";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 10px;

  @media (max-width: 768px) {
    /* Adjust the width and height for mobile devices */
    width: 200px;
    height: 300px;
  }
`;

export default function HomePage() {
  return (
    <>
      <StyledCardElement>
        <h1>Willkommen in der Ferienwohnung Bergblick in Kochel/Ried!</h1>
        <p>
          Verbringen Sie unvergessliche Tage inmitten der atemberaubenden
          Schönheit der bayerischen Alpen. Unsere gemütliche Ferienwohnung in
          Kochel bietet Ihnen die perfekte Basis, um die idyllische bergige
          Landschaft und die zahlreichen Seen in der Umgebung wie den
          malerischen Walchensee zu erkunden. Die Lage unserer Ferienwohnung ist
          einfach unschlagbar.
        </p>
        <p>
          Unsere Ferienwohnung bietet Ihnen natürlich auch den Komfort und die
          Annehmlichkeiten, die Sie für einen erholsamen Aufenthalt benötigen.
          Mit liebevoll gestalteten Räumen, einer voll ausgestatteten Küche und
          einer gemütlichen Terrasse können Sie die Seele baumeln lassen. Gönnen
          Sie sich eine Auszeit vom Alltag und lassen Sie sich von der Schönheit
          dieser Gegend verzaubern. Wir freuen uns darauf, Sie bald bei uns
          willkommen zu heißen!
        </p>
        <p>Herzlichst, Ihre Gastgeber - Susanne und Christian Röthlein</p>
        <StyledImage
          src="/SusanneChristian.jpeg"
          alt="Susanne und Christian"
          width={300}
          height={400}
        />
      </StyledCardElement>
    </>
  );
}
