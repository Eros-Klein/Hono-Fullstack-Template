import type { HelloResponse } from '../types/model.js'

const messageContainer = document.getElementById('message-container')!

async function main() {
    const response = await fetch('/api')
    const data = await response.json() as HelloResponse

    messageContainer.textContent = data.message
}

main()