export const config = {
    apiKey: process.env.WETHER_API_KEY,
    getUrl: (path, query) => {
        if (config.apiKey) {
            return `${process.env.WETHER_API_URL}${path}?key=${config.apiKey}&lang=ru&q=${query}`
        }

        throw new Error('Нет ключа')
    },
}