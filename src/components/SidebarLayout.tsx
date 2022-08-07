import type { PropsWithChildren } from 'react';
import { type ItemListProps, ItemSidebar } from './ItemSidebar';
import type { findMember } from '~/util/model.server';
import { Navbar } from './Navbar';

export function SidebarLayout({
	packageName,
	data,
	children,
}: PropsWithChildren<Partial<ItemListProps & { data: { member: ReturnType<typeof findMember> } }>>) {
	return (
		<>
			<Navbar />
			<div className="flex flex-col lg:flex-row overflow-hidden max-w-full h-full max-h-full bg-white dark:bg-multiversus-gray">
				<div className="h-full w-full lg:max-w-[310px] lg:min-w-[310px]">
					{packageName && data ? (
						<ItemSidebar packageName={packageName} data={data} selectedMember={data.member?.name} />
					) : null}
				</div>
			<div className="h-full grow">{children}</div>
		</div></>
	);
}
