import Image from "next/image";

export default function Logo({ logo }) {
  return <Image src={logo} width={190} height={190} alt="Logo IMMAGINA" />;
}
