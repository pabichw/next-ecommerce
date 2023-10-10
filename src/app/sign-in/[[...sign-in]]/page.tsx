import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
	return (
		<main className="column-wrapper">
			<SignIn />
		</main>
	);
}