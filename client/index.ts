import type { HelloResponse } from '../types/model.js'
import { getDefaultTheme, getSystemTheme } from './defaults/theme.js'

const messageContainer = document.getElementById('message-container')!

async function main() {
    const response = await fetch('/api')
    const data = await response.json() as HelloResponse

    getDefaultTheme()

    messageContainer.textContent = data.message
}

main()