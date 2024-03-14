export function ShowPlanetLink() {
  return (
    <>
      <a
        onClick={() => {
          localStorage.removeItem("type");
        }}
        href="/planetas/tierra"
        className="rounded-full bg-white px-10 py-2 text-black shadow-sm shadow-white transition-colors hover:bg-transparent hover:text-white"
      >
        Ver planeta
      </a>
    </>
  );
}
