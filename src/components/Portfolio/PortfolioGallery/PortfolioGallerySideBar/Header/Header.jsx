import Link from "next/link";
import Button from "@/components/Buttons/Button";

export default function Header({
  title,
  path,
  pathBack,
  shortDescription,
  longDescription,
  setIsVisible,
}) {
  // --------------------------------- PATHS ---------------------------------

  const pathList = path.slice(0, -1).map((item, index) => {
    return (
      <li key={index} className="mr-1">
        <Link
          href={`/${pathBack
            .slice(0, 2 + index)
            .join("/")
            .toLowerCase()}`}
        >
          <h3 className="text-base">
            {path.slice(0, -1).length - 1 == index ? item + "" : item + " /"}
          </h3>
        </Link>
      </li>
    );
  });

  // --------------------------------- READ MORE ---------------------------------

  function openTextBox() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div className="text-stone-600 mb-4">
      <ul className="flex">{pathList}</ul>
      <div className="mt-1 mb-46 border-t-4 border-red-600">
        <h2 className="text-lg pb-2 pt-1 font-[600]">{title}</h2>
        <p className="link text-xs pb-2" dangerouslySetInnerHTML={{ __html: shortDescription }} />
        <Button onClick={openTextBox} addClass="p-1 px-2 text-stone-600 text-xs">
          {"Read more >"}
        </Button>
      </div>
    </div>
  );
}
