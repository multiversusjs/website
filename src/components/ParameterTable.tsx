import { HyperlinkedText } from './HyperlinkedText';
import { Table } from './Table';
import type { ParameterDocumentation } from '~/util/parse.server';

interface ParameterDetailProps {
	data: ParameterDocumentation[];
	className?: string | undefined;
}

export function ParameterTable({ data, className }: ParameterDetailProps) {
	const rows = data.map((param) => ({
		Name: param.name,
		Type: <HyperlinkedText tokens={param.tokens} />,
		Optional: param.isOptional ? 'Yes' : 'No',
		Description: 'None',
	}));

	const columnStyles = {
		Name: 'font-mono',
		Type: 'font-mono',
	};

	return (
		<Table
			className={className}
			columns={['Name', 'Type', 'Optional', 'Description']}
			rows={rows}
			columnStyles={columnStyles}
		/>
	);
}
