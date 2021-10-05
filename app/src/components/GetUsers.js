import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

const GetUsers = () => {
  const {error, loading, data} = useQuery(LOAD_USERS);

  if (loading) return <div>loading...</div>

  if (error) return <div>something went wrong...</div>

  const { users } = data;

  if (users.length === 0) return null;

  return users.map(({ id, name }) => {
    return (
      <div id={id}>
        <p>{name}</p>
      </div>
    )
  })
}

export default GetUsers;