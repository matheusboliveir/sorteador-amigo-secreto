import { useRecoilValue } from "recoil";
import { resultadoDoAmigoSecreto } from "./../atom";
export function useResultadoSorteio() {
  return useRecoilValue(resultadoDoAmigoSecreto);
}
