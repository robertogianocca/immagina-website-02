import Link from "next/link";
import Button from "@/components/Buttons/Button";
import { FaArrowLeft } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

interface typeProps {
  pathTree: string[];
}

export default function BackBar({ pathTree }: typeProps) {
  return (
    <div className="flex flex-row gap-5 pb-4">
      <Link href={`/cultura/${pathTree.join("/")}`}>
        <Button addClass="p-2 text-slate-400">
          <FaArrowLeft size={25} />
        </Button>
      </Link>
      <Link href="/cultura">
        <Button addClass="p-2 text-slate-400">
          <TiHome size={25} />
        </Button>
      </Link>
    </div>
  );
}
