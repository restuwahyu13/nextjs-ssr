// CSS Module Teritory
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/static/css/style.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Minimalize Modern Next Boilerplate</title>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<meta name='keywords' content='Nextjs CSA Boilerplate' />
				<meta name='description' content='Minimalize Modern Next Boilerplate 2021' />
				<link rel='stylesheet' href='public/static/css/style.css' type='text/css' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
