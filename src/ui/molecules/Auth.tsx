"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Auth() {
	return (
		<div className="w-16 hover:underline">
			<SignedIn>
				<UserButton userProfileMode="navigation" />
			</SignedIn>
			<SignedOut >
				<SignInButton />
			</SignedOut>
		</div>
	);
}

export default Auth;
