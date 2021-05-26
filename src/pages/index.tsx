import { NextPage, GetServerSideProps } from 'next'

interface UserProps {
	users: Record<string, any>[]
}

const Users: NextPage<UserProps> = ({ users }) => {
	return (
		<>
			<h1 style={{ color: 'blue' }}>Users Data From Server</h1>
			{JSON.stringify(users)}
		</>
	)
}

export const getServerSideProps: GetServerSideProps<UserProps> = async () => {
	const data = await fetch('http://localhost:3000/api/v1/users')
	const users: Record<string, any>[] = await data.json()
	return { props: { users } }
}

export default Users
