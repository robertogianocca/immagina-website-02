export default function Triangle({ color = "border-l-customRed" }) {
  return (
    <div
      className={`border-l-[19px] border-b-[19px] border-b-transparent border-t-transparent ${color}`}
    ></div>
  );
}
