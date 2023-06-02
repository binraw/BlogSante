import Head from "next/head.js";
import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<Head>
				<title>Accueil</title>
			</Head>
			<div>
				<Header />
				<h1>
					Un corps sain, une vie active : votre guide vers l'épanouissement
					féminin !
				</h1>
			</div>
		</>
	);
}
