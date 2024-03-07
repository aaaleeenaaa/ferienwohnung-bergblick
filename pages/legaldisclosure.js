import Link from "next/link";
import { StyledCardElement } from "@/components/StyledCardElement";

export default function LegalDisclosure() {
  return (
    <StyledCardElement>
      <h2>Impressum</h2>

      <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
      <p>Susanne und Christian R&ouml;thlein </p>
      <p>Niedmannweg 13</p>
      <p>82431 Kochel am See</p>

      <h3>Kontakt</h3>
      <p>Telefon: +49 176 45659698 </p>
      <p>E-Mail: ferienwohnung-bergblick@kochel-ried.de</p>

      <h3>Bilder</h3>
      <p>Alle genutzten Bilder © Susanne und Christian Röthlein</p>

      <p>
        Quelle: <Link href="https://www.e-recht24.de">e-recht24.de</Link>
      </p>
    </StyledCardElement>
  );
}
