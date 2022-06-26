import { useRecoilValue } from "recoil";
import { erroState } from "./../atom";

export function UseMensagemDeErro() {
  const mensagem = useRecoilValue(erroState);
  return mensagem;
}
