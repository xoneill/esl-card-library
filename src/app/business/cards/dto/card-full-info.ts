export interface CardFullInfo {
	id: string;
	name: string;
	rarity: RarityType;
	type: CardType;
	subtypes: CardSubtype[];
	cost: number;
	power: number;
	health: number;
	set: CardSetInfo;
	collectible: boolean;
	soulSummon: number;
	soulTrap: number;
	text: string;
	attributes: CardAttributeType[];
	unique: boolean;
	imageUrl: string;
}

export interface CardSetInfo {
	id: string;
	name: string;
	_self: string; // url
}

export enum RarityType {
	Common = 'Common',
	Epic = 'Epic',
	Rare = 'Rare',
	Legendary = 'Legendary'
}

export enum CardType {
	Action = 'Action',
	Creature = 'Creature',
	Item = 'Item',
	Support = 'Support'
}

export enum CardSubtype {
	Argonian = 'Argonian',
	Dragon = 'Dragon',
	Imperial = 'Imperial'
}

export enum CardAttributeType {
	Agility = 'Agility',
	Endurance = 'Endurance',
	Intelligence = 'Intelligence'
}
