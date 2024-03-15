import { useEffect } from "react";

export function ShowPlanetLink() {
  useEffect(() => {
    localStorage.removeItem("type");

    function handleScroll() {
      scrollTo(0, 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
