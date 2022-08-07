import Link from 'next/link';

export function Navbar() {
	return <div className="flex h-[65px] sticky top-0 border-b border-transparent justify-center px-10 bg-white dark:bg-multiversus-gray">
		<div className="flex items-center w-full max-w-[1100px] justify-between">
			<Link href="/" passHref>
				<a className="no-underline text-dark-100 dark:text-gray-300 font-semibold">multiversus.js</a>
			</Link>
			<div className="flex flex-row space-x-8">
				<Link href="/docs" passHref>
					<a className="no-underline text-dark-100 dark:text-gray-300 font-semibold">Docs</a>
				</Link>
			</div>
		</div>
	</div>;
}