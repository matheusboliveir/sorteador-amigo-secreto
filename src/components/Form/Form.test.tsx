import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from ".";

describe("Form.tsx behavior", () => {
  test("When the input is empty, new participants cannot be added", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    //Input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Botão
    const botao = screen.getByRole("button");
    //Garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //Garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("Add a participant if there is a name in the input", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    //Input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Botão
    const botao = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    //clicar no botão de submeter
    fireEvent.click(botao);
    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("Duplicate names cannot be added to the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    //Input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Botão
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });
  test("Error message should disappear after timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    //Input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Botão
    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole("alert");

    expect(mensagemDeErro).toBeInTheDocument();
    // espera N segundos
    act(() => {
      jest.runAllTimers();
    });
    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
