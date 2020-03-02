import { CardFullInfo } from '../dto/card-full-info';
import { CardInfo } from '../dto/card-info';

export class CardInfoMapper {
	public static fromCardFullInfo(info: CardFullInfo): CardInfo {
		return {
			id: info.id,
			name: info.name,
			text: info.text,
			setName: info.set.name,
			type: info.type,
			imageUrl: info.imageUrl
		};
	}
}
