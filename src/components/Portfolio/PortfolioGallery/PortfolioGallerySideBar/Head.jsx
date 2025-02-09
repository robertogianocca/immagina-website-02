import ArrowButton from "@/components/Buttons/ArrowButton";

export default function Head({ title, shortDescription, toggleTextBox }) {
  return (
    <div className="border-t-4 border-red-600">
      <h1 className="text-lg font-bold font-courier pt-1 pb-5">{title}</h1>
      <div className="text-xs pb-4">{shortDescription}</div>
      <ArrowButton onClick={toggleTextBox} addClass="p-1 px-2 text-xs">
        {"Read more"}
      </ArrowButton>
    </div>
  );
}
