export default class API {
    static getApiEndpoint() {
        return process.env.NODE_ENV === "production" ? "https://api.jhoangv.com" : "http://localhost:8000"
    }

    static async getAuthoInformation() {
        const url = `${API.getApiEndpoint()}/homepage/author-info`;
        return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        });
    }

}