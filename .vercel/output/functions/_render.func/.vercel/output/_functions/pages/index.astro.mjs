/* empty css                                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_Bh5OJ4ao.mjs';
import { g as getPlanets } from '../chunks/getPlanets_DPFaf5or.mjs';
import { $ as $$Layout } from '../chunks/Layout_4f3M4B42.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_P01NiWAF.mjs';
import { jsx, Fragment } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { $ as $$Header } from '../chunks/Header_Um1E3oDI.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function ShowPlanetLink() {
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
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "a",
    {
      onClick: () => {
        localStorage.removeItem("type");
      },
      href: "/planetas/tierra",
      className: "rounded-full bg-white px-10 py-2 text-black shadow-sm shadow-white transition-colors hover:bg-transparent hover:text-white",
      children: "Ver planeta"
    }
  ) });
}

var PlanetName = /* @__PURE__ */ ((PlanetName2) => {
  PlanetName2["Eris"] = "Eris";
  PlanetName2["Haumea"] = "Haumea";
  PlanetName2["Júpiter"] = "Júpiter";
  PlanetName2["Makemake"] = "Makemake";
  PlanetName2["Marte"] = "Marte";
  PlanetName2["Neptuno"] = "Neptuno";
  PlanetName2["Plutón"] = "Plutón";
  PlanetName2["Saturno"] = "Saturno";
  PlanetName2["Tierra"] = "Tierra";
  PlanetName2["Urano"] = "Urano";
  return PlanetName2;
})(PlanetName || {});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { planets } = await getPlanets();
  const earth = planets.find((planet) => planet.name === PlanetName.Tierra);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto grid h-dvh max-h-[1000px] min-h-[500px] max-w-[1600px] grid-cols-1 grid-rows-[auto_minmax(0,1fr)] gap-y-12 px-4 pb-2"> ${renderComponent($$result2, "Header", $$Header, {})} <div class="flex flex-col items-center gap-y-10"> <section class="flex flex-col items-center gap-y-4"> <div class="text-center"> <span class="text-xl font-light uppercase sm:text-2xl">Planeta</span> <h2 class="text-4xl font-black uppercase sm:text-6xl"${addAttribute(renderTransition($$result2, "p6ohglvk", "", "planet_name"), "data-astro-transition-scope")}> ${earth.name} </h2> </div> <p class="max-w-prose">${earth.description}</p> ${renderComponent($$result2, "ShowPlanetLink", ShowPlanetLink, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ShowPlanetLink", "client:component-export": "ShowPlanetLink" })} </section> ${renderComponent($$result2, "Image", $$Image, { "src": earth.webp, "alt": earth.name, "inferSize": true, "data-astro-transition-scope": renderTransition($$result2, "zilu5vqt", "", "planeta_initial") })} </div> </main> ` })}`;
}, "C:/Users/Jean/Desktop/Projects/solar_system/src/pages/index.astro", "self");

const $$file = "C:/Users/Jean/Desktop/Projects/solar_system/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
