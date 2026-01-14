import request from 'supertest'
import app from '../../src/app.js'

let server

beforeEach(() => {
  const port = 3000
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})

describe('GET /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    const resposta = await request(app)
      .get('/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200)

    expect(resposta.body[0].email).toEqual('e@e.com')
  })
})

let idResposta
describe('POST /editoras', () => {
  it('Deve adicionar uma nova editora', async () => {
    const resposta = await request(app)
      .post('/editoras')
      .send({
        nome: 'Editora Teste',
        cidade: 'Cidade Teste',
        email: 't@t.com',
      })
      .expect(201)

    idResposta = resposta.body.content.id
  })
})

describe('DELETE /editoras/:id', () => {
  it('Deve deletar uma editora pelo id', async () => {
    await request(app).delete(`/editoras/${idResposta}`).expect(200)
  })
})

describe('GET /editoras/:id', () => {
  it('Deve retorna uma editora pelo id', async () => {
    await request(app).get(`/editoras/${idResposta}`).expect(200)
  })
})
