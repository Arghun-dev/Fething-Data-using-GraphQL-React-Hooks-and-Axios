import { useQuery, useMutation } from "@apollo/client";
import { TODOS } from '../GraphQL/Queries';
import { UPDATE_TODO } from "../GraphQL/Mutations";

const Todos = () => {
  const { data, loading, error } = useQuery(TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <div>loading...</div>;

  if (error) return <div>something went wrong...</div>;

  const { todos } = data;

  return todos.map(({ id, description, done }) => {
    return <p key={id} onClick={() => updateTodo({ variables: { id, done: !done } })}>{description}</p>
  })
}

export default Todos;