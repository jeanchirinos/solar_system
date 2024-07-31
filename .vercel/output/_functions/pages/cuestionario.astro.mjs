/* empty css                                        */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bh5OJ4ao.mjs';
import { $ as $$Header } from '../chunks/Header_Um1E3oDI.mjs';
import { $ as $$Layout } from '../chunks/Layout_4f3M4B42.mjs';
export { renderers } from '../renderers.mjs';

async function getQuestions() {
  const response = await fetch(
    `https://api-sistemasolar.nijui.site/api/questions?limit=5&random=true`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

async function sendAnswers(answersIds) {
  const response = await fetch(
    `https://api-sistemasolar.nijui.site/api/get-answer/${answersIds}`
  );
  const data = await response.json();
  return data;
}

const $$Astro = createAstro();
const $$Cuestionario = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cuestionario;
  const { questions } = await getQuestions();
  let result = null;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const entries = Object.fromEntries(data.entries());
      const values = Object.values(entries).join(",");
      result = await sendAnswers(values);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="mx-auto w-[1600px] max-w-full px-4 py-10"> <h2 class="mb-4 text-2xl font-bold">Cuestionario</h2> ${result ? renderTemplate`<div class="flex flex-col items-center gap-y-10 text-center"> <div class="flex w-52 flex-col gap-y-10 rounded-md bg-neutral-700/50 p-4"> <div> <span>Tu resultado: </span> <div class="text-2xl font-bold">${result.percent}</div> </div> <div class="flex flex-col gap-y-2 text-neutral-300"> <div> <span class="text-neutral-400">Correctas : </span> <span>${result.score}</span> </div> <div> <span class="text-neutral-400">Total :</span> <span>${result.totalQuestions} preguntas</span> </div> </div> </div> <a href="/cuestionario" class="w-36 max-w-full rounded-lg bg-white py-1 text-black hover:opacity-85">
Repetir
</a> </div>` : renderTemplate`<form method="POST" class="space-y-5"> <ul class="list-decimal space-y-6 pl-4"> ${questions.map((question) => renderTemplate`<li> <span class="block">${question.question}</span> ${question.options.map((option) => renderTemplate`<label class="flex gap-x-2"> <input required type="radio"${addAttribute(question.id.toString(), "name")}${addAttribute(option.id, "value")}> <span class="text-neutral-300">${option.option}</span> </label>`)} </li>`)} </ul> <button class="w-36 max-w-full rounded-lg bg-white py-1 text-black hover:opacity-85 focus:animate-pulse">
Enviar
</button> </form>`} </main> ` })}`;
}, "C:/Users/Jean/Desktop/Projects/solar_system/src/pages/cuestionario.astro", void 0);

const $$file = "C:/Users/Jean/Desktop/Projects/solar_system/src/pages/cuestionario.astro";
const $$url = "/cuestionario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cuestionario,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
