import { AssetType } from '../types/assets';
import { ASSET_TYPE } from './assets';

export const Z_INDICES = {
    [ASSET_TYPE.TOP]: 1,
    [ASSET_TYPE.HAIR]: 2,
    [ASSET_TYPE.SOCKS]: 3,
    [ASSET_TYPE.PANTS]: 4,
    [ASSET_TYPE.MIDDLEWEAR]: 5,
    [ASSET_TYPE.OUTERWEAR]: 6,
    [ASSET_TYPE.SHOES]: 7
} as Record<AssetType, number>;
