// UUID: Universal Unique ID
import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()
    
    list() {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = video[0]
            const data = video[1]

            return {
                id,
                ...data,
            }
        })
    }

    create(video) {
        const videoId = randomUUID()

       this.#videos.set(videoId, video) 
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}