import { Routes, Route, Navigate } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export function AuthRoutes() {

  const user = localStorage.getItem("@AnotaAI:user")
  
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      // quando a rota não for encontrada
      {!user && <Route path="*" element={<Navigate to="/"/>} />}
    </Routes>
  )
}
