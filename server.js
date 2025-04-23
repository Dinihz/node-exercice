// GET -> busca informacao
// POST -> criacao
// PUT -> edicao
// DELETE -> delete

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

// Request Body

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body 

    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    const videos = database.list()

    console.log(videos)

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', () => {
    return 'delete'
})

server.listen({
    port: 3000,
})