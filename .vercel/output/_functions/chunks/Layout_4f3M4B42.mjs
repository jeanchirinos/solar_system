import { c as createComponent, r as renderTemplate, d as addAttribute, b as createAstro, a as renderComponent, f as renderHead, g as renderSlot } from './astro/server_Bh5OJ4ao.mjs';
/* empty css                                */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Jean/Desktop/Projects/solar_system/node_modules/.pnpm/astro@4.12.3_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Metadata = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Metadata;
  const { title, description, image = "" } = Astro2.props;
  const defaultTitle = "Sistema Solar";
  const myTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const defaultDescription = "";
  const myDescription = description ? `${description}. ${defaultDescription}` : defaultDescription;
  const myImage = image;
  const imageType = "image/png";
  const imageWidth = "1200";
  const imageHeight = "630";
  return renderTemplate`<title>${myTitle}</title><meta name="description"${addAttribute(myDescription, "content")}><meta property="og:title"${addAttribute(myTitle, "content")}><meta property="og:description"${addAttribute(myDescription, "content")}><meta property="og:image:type"${addAttribute(imageType, "content")}><meta property="og:image:width"${addAttribute(imageWidth, "content")}><meta property="og:image:height"${addAttribute(imageHeight, "content")}><meta property="og:image"${addAttribute(myImage, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(myTitle, "content")}><meta property="twitter:description"${addAttribute(myDescription, "content")}><meta property="twitter:image:type"${addAttribute(imageType, "content")}><meta property="twitter:width"${addAttribute(imageWidth, "content")}><meta property="twitter:height"${addAttribute(imageHeight, "content")}><meta name="twitter:image"${addAttribute(myImage, "content")}>`;
}, "C:/Users/Jean/Desktop/Projects/solar_system/src/components/Metadata.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "Metadata", $$Metadata, { ...Astro2.props })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Jean/Desktop/Projects/solar_system/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
