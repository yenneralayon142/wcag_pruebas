import { useEffect, useState, useRef} from 'react'

export  function useSearch () {
    const [search,updateSearch] = useState('')
    const [error,setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if(isFirstInput.current) {
        isFirstInput.current = search === '' //true
        return
      }
      if(search === '') {
        setError('No se puede buscar una url vacia')
        return
      }
      if(search.length < 3) {
        setError('La búsqueda debe ser una url')
        return
      }
      const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
      '((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|' + // dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP (v4) dirección
      '(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*' + // puerto y ruta
      '(\\?[;&a-zA-Z0-9%_.~+=-]*)?' + // consulta
      '(\\#[-a-zA-Z0-9_]*)?$','i'); // fragmento

    if (!urlPattern.test(search)) {
      setError('La URL no es válida');
      return;
    }
      setError(null)
    },[search])
    return {search,updateSearch,error};
  }


  