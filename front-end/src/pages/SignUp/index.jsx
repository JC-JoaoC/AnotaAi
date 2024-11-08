import { useState } from "react"

import { Container, Form, Background } from "./style.js"
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { api } from "../../services/api.js"

import { Link, useNavigate } from "react-router-dom"

import { Input } from "../../components/Input/index.jsx"
import { Button } from "../../components/Button"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return window.alert("Preencha todos os campos!")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Tente novamente mais tarde!")
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Anota Ai</h1>
        <p>Aplicação para salvar e gerenciar suas anotações.</p>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          required
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          required
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          required
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <div>
          <span>Você já tem uma conta? &nbsp;</span>
          <Link to="/">
            <u>Fazer login</u>
          </Link>
        </div>
      </Form>
    </Container>
  )
}
