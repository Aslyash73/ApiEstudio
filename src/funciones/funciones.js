import axios from 'axios'

const todosPersonajes = async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')

    console.log('la data', data.results);

    return data.results
}
export {
    todosPersonajes
}

