import { useSetRecoilState } from "recoil";
import realizarSorteio from "../helpers/realizarSorteio";
import { resultadoDoAmigoSecreto } from "./../atom";
import { useListaDeParticipantes } from "./useListaDeParticipantes";

export function useSorteador() {
  const participantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
}
