import { NextPage, GetServerSideProps } from 'next'

interface TodoProps {
	todos: Record<string, any>[]
}

const Todos: NextPage<TodoProps> = ({ todos }) => {
	return (
		<>
			<h1>Todos Data From Server</h1>
			{JSON.stringify(todos)}
		</>
	)
}

export const getServerSideProps: GetServerSideProps<TodoProps> = async () => {
	const data = await fetch('http://localhost:3000/api/v1/todos')
	const todos: Record<string, any>[] = await data.json()
	return { props: { todos } }
}

export default Todos
