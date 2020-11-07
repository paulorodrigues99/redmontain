import React from 'react'
import Head from 'next/head'

import { Container, FormInput } from '../styles/pages/Home'

const Home: React.FC = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <FormInput onsubmit={handleSubmit}>
        <p>Site de Captura</p>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" name="sobrenome" id="sobrenome" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" />
        <label htmlFor="cep">Cep</label>
        <input type="text" name="cep" id="cep" />
        <label htmlFor="igusername">Usuário do instagram</label>
        <input type="text" name="igusername" id="igusername" />
        <label htmlFor="dtnascimento">Data de nascimento</label>
        <input type="data" name="dtnascimento" id="dtnascimento" />
        <label htmlFor="qtditens">Quantidade de itens</label>
        <input type="number" name="qtditens" id="qtditens" />
        <input type="submit" value="Submit" />
      </FormInput>
    </Container>
  )
}

export default Home
