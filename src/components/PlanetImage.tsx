import type { Planet } from "@/types/Planet";
import { useState, useEffect } from "react";

type Props = {
  prevPlanet: Planet | null;
  nextPlanet: Planet | null;
  prev?: any;
  next?: any;
};

export function PlanetImage(props: Props) {
  const { prevPlanet, nextPlanet, prev, next } = props;

  const [isGoingTo, setIsGoingTo] = useState<
    null | "unknown" | "prev" | "next"
  >(null);

  useEffect(() => {
    const localType = localStorage.getItem("type");

    if (!localType || (localType !== "prev" && localType !== "next")) {
      return setIsGoingTo("unknown");
    }

    setIsGoingTo(localType);
  }, []);

  function handleNavigation(type: "prev" | "next") {
    setIsGoingTo(type);
    localStorage.setItem("type", type);
  }

  return (
    <>
      {/* TODO: Avoid flex */}
      <section className="flex grow items-center justify-center">
        <div
          className={
            isGoingTo === "prev"
              ? "flex items-center justify-center"
              : "size-0 opacity-0"
          }
        >
          {prev}
        </div>
        <div
          className={
            isGoingTo === "next" || isGoingTo === "unknown"
              ? "flex items-center justify-center"
              : "size-0 opacity-0"
          }
        >
          {next}
        </div>
      </section>

      <footer>
        <div className="flex justify-between text-lg">
          {prevPlanet && (
            <a
              onClick={() => handleNavigation("prev")}
              href={`/planetas/${prevPlanet?.name.toLowerCase()}`}
              className="flex items-center gap-x-2 transition-transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 20 20"
                className="text-neutral-400"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <img
                src={prevPlanet.webp!}
                alt={prevPlanet.name}
                width={100}
                height={100}
              />
              <span>{prevPlanet?.name}</span>
            </a>
          )}

          {nextPlanet && (
            <a
              onClick={() => handleNavigation("next")}
              href={`/planetas/${nextPlanet?.name.toLowerCase()}`}
              className="ml-auto flex items-center gap-x-2 transition-transform hover:scale-105"
            >
              <span>{nextPlanet?.name}</span>
              <img
                src={nextPlanet.webp!}
                alt={nextPlanet.name}
                width={100}
                height={100}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 20 20"
                className="text-neutral-400"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10L8.22 6.28a.75.75 0 0 1 0-1.06"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </footer>
    </>
  );
}