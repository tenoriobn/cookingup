import { render } from "@testing-library/react";
import Rodape from "./index";

describe("Rodape Component", () => {
  it("deve renderizar o texto do rodapé corretamente", () => {
    const { getByText } = render(<Rodape />);

    const texto = getByText(/Desenvolvido por Alura \| 2023 - Projeto fictício sem fins comerciais\./i);

    expect(texto).toBeInTheDocument();
  });
});
