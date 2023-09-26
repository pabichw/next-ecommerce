import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<Image src="/shopify_logo.svg" alt="shop" width={50} height={50} />
		</Link>
	);
}

export default Logo;
