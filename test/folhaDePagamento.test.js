import { calculaDescontos, somaHorasExtras } from "../src/index"

describe('Testes dos calculos de folha de pagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500
    const retornado = somaHorasExtras(2000, 500)

    expect(retornado).toBe(esperado)
  })

  it('Deve descontar o valor das horas extras', () => {
    const esperado = 2300
    const retornado = calculaDescontos(2500, 200)

    expect(retornado).toBe(esperado)
  })
})
