import { useState } from 'react'
import Head from '../src/infra/components/Head'
import { Section, TitlePage } from '../src/components/index'
import { Main, Form } from "../styles/contact.style"; 
import { useRouter } from 'next/router'
import { ContainerMotion } from '../src/components'

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    project: "",
    description: ""
  })
  const handleChange = (e) => {
    const value = e.target.value;
     setState({
      ...state,
      [e.target.name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let msgDev = `Olá, Eu me chamo *${state.name}* e estou a procura de um desenvolvedor!
          
    ## Informações do projeto e do cliente
        º Nome: ${state.name}
        º Email: ${state.email}
        º Titulo: _${state.project}_ \n
        º Descrição: _${state.description}_
            
    Portfólio `
    msgDev = window.encodeURIComponent(msgDev);
    let url = `https://api.whatsapp.com/send?phone=5521988255634&text=${msgDev}`;
    window.open(url, '_blank');

  }
  const router = useRouter()
  return (
    <ContainerMotion>
      <Head title="Patrick Reis | Desenvolvedor Frontend"/>
      <Main>
        <TitlePage>Contate-me</TitlePage>
        <Form>
          <input 
            required
            placeholder='Nome'
            name="name" 
            value={state.name} 
            onChange={handleChange}
            type="text"
          />
          <input 
            required
            placeholder='Email' 
            name="email" 
            value={state.email} 
            onChange={handleChange}
            type="email"
          />
          <input 
            required
            placeholder='Titulo do Projeto' 
            name="project" 
            value={state.project} 
            onChange={handleChange}
            type="text"
          />
          <input 
            required
            placeholder='Descrição' 
            name="description" 
            value={state.description} 
            onChange={handleChange}
            type="text"
          />
          <button 
            onClick={handleSubmit}
            type="submit"
          >
            Enviar
          </button>
        </Form>
      </Main>
      <Section>
      </Section>
    </ContainerMotion>

  );
}