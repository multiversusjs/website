import { HyperlinkedText } from './HyperlinkedText';
import { Table } from './Table';
import type { TypeParameterData } from '~/util/parse.server';

export interface TableProps {
	data: TypeParameterData[];
	className?: string;
}

export function TypeParamTable({ data, className }: TableProps) {
	const rows = data.map((typeParam) => ({
		Name: typeParam.name,
		Constraints: <HyperlinkedText tokens={typeParam.constraintTokens} />,
		Optional: typeParam.optional ? 'Yes' : 'No',
		Default: <HyperlinkedText tokens={typeParam.defaultTokens} />,
		Description: 'None',
	}));

	const rowElements = {
		Name: 'font-mono',
		Constraints: 'font-mono',
		Default: 'font-mono',
	};

	return (
		<Table
			className={className}
			columns={['Name', 'Constraints', 'Optional', 'Default', 'Description']}
			rows={rows}
			columnStyles={rowElements}
		/>
	);
}
