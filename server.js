// GET -> busca informacao
// POST -> criacao
// PUT -> edicao
// DELETE -> delete

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

server.post('/videos', () => {
    return 'Hello World'
})

server.get('/videos', () => {
    return 'Hello Dinihz Server!'
})

server.put('/videos/:id', () => {
    return 'edit'
})

server.delete('/videos/:id', () => {
    return 'delete'
})

server.listen({
    port: 3000,
})