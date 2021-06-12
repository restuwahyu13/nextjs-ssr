// CSS Module Teritory
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/static/css/style.css'
import { Head } from 'next/document'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Minimalize Modern Next Boilerplate</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
