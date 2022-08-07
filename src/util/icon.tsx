import { VscSymbolClass, VscSymbolVariable } from 'react-icons/vsc';

export function generateIcon(kind: string, className?: string) {
	const icons = {
		Class: <VscSymbolClass className={className} />,
		TypeAlias: <VscSymbolVariable className={className} />,
	};

	return icons[kind as keyof typeof icons];
}
