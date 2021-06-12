import { Html, Head, NextScript } from 'next/document'

export default function Document() {
	return (
		<>
			<Html lang='id'>
				<Head>
					<title>Minimalize Modern Next Boilerplate</title>
					<meta charSet='utf-8' />
					<meta http-equiv='X-UA-Compatible' content='IE=edge' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta name='theme-color' content='#000000' />
					<meta name='keywords' content='Nextjs CSA Boilerplate' />
					<meta name='description' content='Minimalize Modern Next Boilerplate 2021' />
				</Head>
				<body>
					<NextScript />
				</body>
			</Html>
		</>
	)
}
