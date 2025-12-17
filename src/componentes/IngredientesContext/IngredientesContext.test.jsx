import { render, screen, fireEvent } from '@testing-library/react';
import { IngredientesProvider, IngredientesContext } from './index';
import { useContext } from 'react';

const TestComponent = () => {
  const { 
    ingredientesSelecionados, alternarIngrediente, ingredienteEstaSelecionado 
  } = useContext(IngredientesContext);

  const ingredienteMock = { id: 1, nome: 'Queijo' };

  return (
    <div>
      <span data-testid="quantidade">
        {ingredientesSelecionados.length}
      </span>

      <span data-testid="esta-selecionado">
        {ingredienteEstaSelecionado(ingredienteMock) ? 'sim' : 'nao'}
      </span>

      <button onClick={() => alternarIngrediente(ingredienteMock)}>
        Alternar ingrediente
      </button>
    </div>
  );
};

describe('IngredientesProvider', () => {
  test('deve adicionar um ingrediente ao selecionar', () => {
    render(
      <IngredientesProvider>
        <TestComponent />
      </IngredientesProvider>
    );

    const botao = screen.getByText('Alternar ingrediente');

    // Estado inicial
    expect(screen.getByTestId('quantidade')).toHaveTextContent('0');
    expect(screen.getByTestId('esta-selecionado')).toHaveTextContent('nao');

    // Clica para adicionar
    fireEvent.click(botao);

    expect(screen.getByTestId('quantidade')).toHaveTextContent('1');
    expect(screen.getByTestId('esta-selecionado')).toHaveTextContent('sim');
  });

  test('deve alternar o ingrediente ao chamar alternarIngrediente', () => {
    render(
      <IngredientesProvider>
        <TestComponent />
      </IngredientesProvider>
    );

    const botao = screen.getByText('Alternar ingrediente');
    const quantidade = screen.getByTestId('quantidade');
    const estaSelecionado = screen.getByTestId('esta-selecionado');

    // Estado inicial
    expect(quantidade).toHaveTextContent('0');
    expect(estaSelecionado).toHaveTextContent('nao');

    // 1º clique → adiciona
    fireEvent.click(botao);
    expect(quantidade).toHaveTextContent('1');
    expect(estaSelecionado).toHaveTextContent('sim');

    // 2º clique → remove
    fireEvent.click(botao);
    expect(quantidade).toHaveTextContent('0');
    expect(estaSelecionado).toHaveTextContent('nao');
  });


  test('deve remover um ingrediente ao selecionar novamente', () => {
    render(
      <IngredientesProvider>
        <TestComponent />
      </IngredientesProvider>
    );

    const botao = screen.getByText('Alternar ingrediente');

    // Adiciona
    fireEvent.click(botao);
    expect(screen.getByTestId('quantidade')).toHaveTextContent('1');

    // Remove
    fireEvent.click(botao);
    expect(screen.getByTestId('quantidade')).toHaveTextContent('0');
    expect(screen.getByTestId('esta-selecionado')).toHaveTextContent('nao');
  });
});
