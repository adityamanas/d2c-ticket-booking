
const deploy = "pro"
export const baseURL = deploy == "dev" ? "http://127.0.0.1:3001" : "https://typical-denim-krypton.glitch.me"

export const booking_api = `${baseURL}/book`
export const _availableSeats = `${baseURL}/seats`