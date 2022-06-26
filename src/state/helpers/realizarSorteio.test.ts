import realizarSorteio from "./realizarSorteio";

describe("When doing a secret friend giveaway", () => {
  test("each participant does not draw themselves", () => {
    const participantes = [
      "Ana",
      "catarina",
      "Roberto",
      "Ademastor",
      "Maria",
      "Roberta",
    ];
    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
