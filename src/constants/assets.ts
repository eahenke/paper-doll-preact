import { AssetType } from '../types/assets';

export const ASSET_TYPE: Record<AssetType, AssetType> = {
    HAIR: 'HAIR',
    TOP: 'TOP',
    OUTERWEAR: 'OUTERWEAR',
    PANTS: 'PANTS',
    SOCKS: 'SOCKS',
    SHOES: 'SHOES'
} as const;
