import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Configuracao from ".";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return { useNavigate: () => mockNavigate };
});

describe("Config page", () => {
  test("Should be rendered correctly", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
