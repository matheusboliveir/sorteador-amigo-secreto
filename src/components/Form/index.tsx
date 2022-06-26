import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { UseMensagemDeErro } from "../../state/hooks/useMensagemDeErro";
import styles from "./Form.module.scss";

export default function Form() {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = UseMensagemDeErro();

  function adicionarParticipante(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <div className={styles["grupo-input-btn"]}>
        <input
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemDeErro && (
        <p className={`${styles.alerta} ${styles.erro}`} role="alert">
          {mensagemDeErro}
        </p>
      )}
    </form>
  );
}
