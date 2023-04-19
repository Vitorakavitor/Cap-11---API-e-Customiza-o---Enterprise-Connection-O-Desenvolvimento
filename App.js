import React, { useState } from 'react'

const SobreVoce = () => {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')

  const buscarEndereco = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      if (response.ok) {
        setEndereco(
          `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`
        )
      } else {
        setEndereco('Endereço não encontrado.')
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error)
    }
  }

  return (
    <div className="container">
      <h1 className="title">Sobre você</h1>
      <p className="cep">CEP: {cep}</p>
      {endereco && <p className="endereco">Endereço: {endereco}</p>}
      <input
        type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={e => setCep(e.target.value)}
        className="input"
      />
      <button onClick={buscarEndereco} className="button">
        Buscar Endereço
      </button>
    </div>
  )
}

export default SobreVoce
