import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useAction'

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  )
}

export default UserList
