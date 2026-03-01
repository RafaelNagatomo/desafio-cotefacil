const AUTH_URL = "/auth"
const APP_URL = "/app"
const API_URL = "/api"

export const Constants = Object.freeze({
    auth: {},

    app: {
        COUNTER: APP_URL.concat("/counter"),
        STOPWATCH: APP_URL.concat("/stopwatch"),
        CLOCK: APP_URL.concat("/clock"),

        NOT_FOUND: APP_URL.concat("/not-found"),
    },

    api: {},
})
