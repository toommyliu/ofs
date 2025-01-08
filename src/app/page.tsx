"use client"

import { createUser } from "@/api/create-user"
import { getUsers } from "@/api/get-users"

export default function Page() {
  return (
    <>
      <button
        className="outline"
        onClick={async () => {
          const response = await getUsers()
          if (response.success) {
            console.log(response.data)
          } else {
            console.error(response.error)
          }
        }}
      >
        get users
      </button>
      <button
        className="outline"
        onClick={async () => {
          const response = await createUser()
          if (response.success) {
            console.log(response.data)
          } else {
            console.error(response.error)
          }
        }}
      >
        create user
      </button>
    </>
  );
}