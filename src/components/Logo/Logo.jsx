import Image from "next/image";
import { lazy } from "react";

export default function Logo({ logo }) {
  return <Image src={logo} width={190} height={190} alt="Logo IMMAGINA" loading="eager" />;
}
