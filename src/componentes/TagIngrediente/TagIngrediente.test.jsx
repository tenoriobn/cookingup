import { render, screen, fireEvent } from "@testing-library/react";
import TagIngrediente from "./index";

describe("<TagIngrediente />", () => {
  const ingrediente = { nome: "Tomate" };

  test("renderiza o nome do ingrediente", () => {
    render(<TagIngrediente ingrediente={ingrediente} ativo={false} />);

    expect(screen.getByText("Tomate")).toBeInTheDocument();
  });

  test("chama onClick quando clicado", () => {
    const onClick = vi.fn();

    render(
      <TagIngrediente
        ingrediente={ingrediente}
        ativo={false}
        onClick={onClick}
      />
    );

    fireEvent.click(screen.getByText("Tomate"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("snapshot quando ativo = true", () => {
    const { container } = render(
      <TagIngrediente ingrediente={ingrediente} ativo={true} />
    );

    expect(container).toMatchSnapshot();
  });

  test("snapshot quando ativo = false", () => {
    const { container } = render(
      <TagIngrediente ingrediente={ingrediente} ativo={false} />
    );

    expect(container).toMatchSnapshot();
  });
});
