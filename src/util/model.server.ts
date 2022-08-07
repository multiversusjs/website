import {
	ApiClass,
	ApiDeclaredItem,
	ApiEntryPoint,
	ApiItemKind,
	ApiModel,
	ApiTypeAlias,
} from '@microsoft/api-extractor-model';
import { findPackage } from './parse.server';
import { DocClass } from '../DocModel/DocClass';
import { DocItem } from '../DocModel/DocItem';
import { DocTypeAlias } from '../DocModel/DocTypeAlias';

export interface ReferenceData {
	name: string;
	path: string;
}

export function findMember(model: ApiModel, packageName: string, memberName: string): DocItem | undefined {
	const pkg = findPackage(model, packageName)!;
	const member = (pkg.members[0] as ApiEntryPoint).findMembersByName(memberName)[0];

	if (!(member instanceof ApiDeclaredItem)) {
		return undefined;
	}

	switch (member.kind) {
		case ApiItemKind.Class:
			return new DocClass(model, member as ApiClass);
		case ApiItemKind.TypeAlias:
			return new DocTypeAlias(model, member as ApiTypeAlias);
		default:
			return new DocItem(model, member);
	}

	// return {
	// 	name: resolveName(member),
	// 	kind: member.kind,
	// 	summary: resolveDocComment(member),
	// 	excerpt: member.excerpt.text,
	// 	tokens: member.excerpt.spannedTokens.map((token) => genToken(model, token)),
	// 	refs: [...findReferences(model, member.excerpt).values()].map(genReference),
	// 	members: getProperties(member).map((member) => ({
	// 		tokens: member.excerpt.spannedTokens.map((token) => genToken(model, token)),
	// 		summary: resolveDocComment(member),
	// 	})),
	// 	parameters: member instanceof ApiFunction ? member.parameters.map((param) => genParameter(model, param)) : [],
	// 	foo: excerpt.spannedTokens.map((token) => genToken(model, token)),
	// };
}
