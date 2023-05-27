import axios from "axios";

class FilmService {

    #API_KEY
    #BASE_URL

    constructor() {
        // this.#API_KEY = '87b17c6b-0372-4a83-aa3a-11753642b82d'
        this.#API_KEY = 'df3bb6d4-17f5-45e8-b6ec-01ee406b00e6'
        this.#BASE_URL = 'https://kinopoiskapiunofficial.tech/api'
    }


    async fetchAllFilms(page = 1, order) {

        let orderParam = '';

        if (order.toLowerCase() !== 'none' && order.trim() !== '') {
            orderParam = `&order=${order}`;
        }

        const response = await axios.get(`${this.#BASE_URL}/v2.2/films?page=${page}&yearTo=2022${orderParam}`, {
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': this.#API_KEY
            }
        })
        return response.data
    }

    async fetchFilmById(id) {
        const response = await axios.get(`${this.#BASE_URL}/v2.2/films/${id}`, {
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': this.#API_KEY
            }
        })
        return response.data;
    }

    async fetchFilmAwardsById(id) {
        const response = await axios.get(`${this.#BASE_URL}/v2.2/films/${id}/awards`, {
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': this.#API_KEY
            }
        })
        return response.data;
    }

    async fetchFilmStaff(filmId) {
        const response = await axios.get(`${this.#BASE_URL}/v1/staff?filmId=${filmId}`, {
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': this.#API_KEY
            }
        })
        return response.data
    }

    async fetchFilmStaffById(staffId) {
        const response = await axios.get(`${this.#BASE_URL}/v1/staff/${staffId}`, {
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': this.#API_KEY
            }
        })
        return response.data
    }

    async fetchFilmImages(id) {
        const response = await axios.get(`${this.#BASE_URL}/v2.2/films/${id}/images?type=STILL`, {
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': this.#API_KEY
            }
        })
        return response.data.items
    }

    async fetchFilmByKeyword(keyword, page=1) {
        const response = await axios.get(`${this.#BASE_URL}/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`, {
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': this.#API_KEY
            }
        })
        return response.data
    }

}

export default new FilmService();