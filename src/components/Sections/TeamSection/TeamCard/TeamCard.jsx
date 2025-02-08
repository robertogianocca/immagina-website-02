import Image from "next/image";

export default function TeamCard({ name, description, picture }) {
  return (
    <div className="flex flex-col">
      <Image className="pb-6" src={picture} width={400} height={500} alt="Roberto Gianocca" />
      <div className="">
        <h2 className="text-lg font-courier font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
