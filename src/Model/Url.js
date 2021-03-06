export async function requisicao() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );

  const dados = await response.json();

  return dados.drinks;
}

export async function requisicaoBuscar(bebida) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida}`
  );

  const dados = await response.json();

  return dados.drinks;
}
