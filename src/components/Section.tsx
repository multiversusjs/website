import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode } from 'react';

export interface SectionProps {
	children: ReactNode;
	title: string;
	className?: string | undefined;
	defaultClosed?: boolean;
	iconElement?: JSX.Element;
}

export function Section({
	title,
	children,
	className,
	iconElement,
}: SectionProps) {

	return (
		<div className={className}>
			<h3
				className="flex gap-2 whitespace-pre-wrap font-semibold dark:text-white"
			>
				{iconElement ?? null}
				{title}
			</h3>
			<AnimatePresence initial={false} exitBeforeEnter>
				<>
					<motion.div
						transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: {
								opacity: 1,
								height: 'auto',
								paddingLeft: '1.75rem',
								paddingRight: '1.75rem',
							},
							collapsed: { opacity: 0, height: 0, paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingBottom: 0 },
						}}
					>
						{children}
					</motion.div>
				</>
			</AnimatePresence>
		</div>
	);
}
