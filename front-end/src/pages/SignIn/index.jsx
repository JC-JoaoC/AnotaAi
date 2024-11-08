import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import { Container, Form, Background } from "./style.js"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input/index.jsx"
import { Button } from "../../components/Button"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>Anota Ai</h1>
        <p>Aplicação para salvar e gerenciar suas anotações.</p>
        <h2>Bem vindo de volta!</h2>
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn}/>
        <div>
          <span>Não tem uma conta? &nbsp;</span>
          <Link to="/register">
            <u>Crie a sua conta aqui</u>
          </Link>
        </div>
      </Form>
      <Background />
    </Container>
  )
}
