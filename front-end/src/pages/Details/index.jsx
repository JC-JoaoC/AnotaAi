import { Container, Links, Content } from "./style.js"

import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api.js"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { useEffect } from "react"

export function Details() {
  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja deletar a nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    } 
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      { data &&
        <main>
        <Content>
          <ButtonText title="Excluir Nota" onClick={handleRemove}/>

          <h1>{data.title}</h1>
          <p>
            {data.description}
          </p>

          { data.links &&
            <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
            </Links>
          </Section>}

          <Section title="Marcadores">
            <Tag title="Links úteis" />
            <Tag title="teste" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>}
    </Container>
  )
}
