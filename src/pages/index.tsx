import Link from 'next/link';
import { forwardRef, MouseEventHandler, Ref } from 'react';
import text from '../text.json';
import { Navbar } from '../components/Navbar';

interface ButtonProps {
	label: string;
	href?: string;
	ref?: Ref<HTMLAnchorElement>;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

// eslint-disable-next-line react/display-name
const LinkButton = forwardRef<HTMLAnchorElement, ButtonProps>(({ label, onClick, href }: ButtonProps, ref) => (
	<a
		href={href}
		onClick={onClick}
		ref={ref}
		className="no-underline max-h-[70px] bg-dark-100 dark:bg-gray-300 px-3 py-4 rounded-lg font-semibold text-gray-300 dark:text-dark-100"
	>
		{label}
	</a>
));

export default function IndexRoute() {
	return (
		<main className="w-full max-w-full max-h-full h-full flex-col bg-white dark:bg-multiversus-gray overflow-y-auto">
			<Navbar/>
			<div className="xl:flex xl:flex-col xl:justify-center w-full max-w-full box-border p-10">
				<div className="flex flex-col xl:flex-row grow max-w-[1100px] pb-10 space-y-10 xl:space-x-20 place-items-center place-self-center">
					<div className="flex flex-col max-w-[800px] lt-xl:items-center">
						<h1 className="font-bold text-6xl text-dark-100 dark:text-gray-300 my-2 text-align">{text.heroTitle}</h1>
						<p className="text-xl text-dark-100 dark:text-gray-300">{text.heroDescription}</p>
					</div>
				</div>
			</div>
		</main>
	);
}
