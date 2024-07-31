async function getPlanets() {
  const response = await fetch(
    "https://api-sistemasolar.nijui.site/api/planets",
    {
      cache: "force-cache"
    }
  );
  const data = await response.json();
  return data;
}

export { getPlanets as g };
