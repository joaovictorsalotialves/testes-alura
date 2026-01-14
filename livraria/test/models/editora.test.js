import Editora from '../../src/models/editora.js'

describe('Editora Model', () => {
  const objetoEditora = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'c@c.com',
  }

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objetoEditora)

    expect(editora).toEqual(expect.objectContaining(objetoEditora))
  })

  it.skip('Deve salvar editora no DB', () => {
    const editora = new Editora(objetoEditora)

    editora.salvar().then(dados => {
      expect(dados.nome).toBe(objetoEditora.nome)
    })
  })

  it('Deve salvar editora no DB usando a sintaxe moderna', async () => {
    const editora = new Editora(objetoEditora)

    const dados = await editora.salvar()

    const retornado = await Editora.pegarPeloId(dados.id)

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    )
  })
})
