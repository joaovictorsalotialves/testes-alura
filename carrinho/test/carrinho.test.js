import Carrinho from '../src/carrinho.js'
import Item from '../src/item.js'

describe('Testes do Carrinho de Compras', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho()
    expect(carrinho.subtotal).toBeNull()
  })

  it('Deve ter itens no carrinho', () => {
    const item1 = new Item('Banana', 2, 5)
    const item2 = new Item('Maçã', 0.5, 1)

    const carrinho = new Carrinho()
    carrinho.adiciona(item1)
    carrinho.adiciona(item2)

    expect(typeof carrinho).toBe('object')
    expect(carrinho.itens[0]).toBe(item1)
    expect(carrinho.itens[1]).toBe(item2)

    expect(carrinho.itens).toContain(item1)
    expect(carrinho.itens).toContain(item2)
  })

  it('Deve ter a propriedade total na inicialização', () => {
    const carrinho = new Carrinho()

    expect(carrinho).toHaveProperty('total')
  })
})
