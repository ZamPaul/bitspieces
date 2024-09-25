"use client"
import Dashboard from "@/components/dashboard/Dashboard"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()
  if (session) {
    return (
      <Dashboard/>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}