import React, { useState, useEffect } from 'react'
import { todosPersonajes } from '../funciones/funciones'

const CmirApi = () => {

  const [personajes, setPersonajes] = useState([])


  const getPersonajes = async () => {
    const xD = await todosPersonajes()
    setPersonajes(xD)
  }
  useEffect(() => {
    getPersonajes()
  }, [])

  console.log('valor:',personajes !== null);

  return (
    <>
      {personajes === null ? ('no hay personajes') :
        personajes.map(personajes => (
          <div key={personajes.id}>
            <a href={`/personajes/${personajes.id}`}>{personajes.name}</a>
            <img src={personajes.image} alt='' />
          </div>
        ))}

    </>

  )
}

export default CmirApi