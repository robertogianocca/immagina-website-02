export default function Wrapper({ children }) {
  return (
    <main className="min-h-space w-full overflow-hidden mt-[60px] pt-4 xl:pt-8 px-4 lg:px-6 xl:pl-14 xl:pr-24 bg-customGrey">
      {children}
    </main>
  );
}
