import { FiPower } from "react-icons/fi"

import { api } from "../../services/api.js"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Profile, Logout } from "./style"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut()}>
        <FiPower />
      </Logout>
    </Container>
  )
}
