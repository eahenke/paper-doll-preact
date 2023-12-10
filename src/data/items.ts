import { FULL_SIZE_SOURCES, SMALL_SIZE_SOURCES } from './asset-sources.dev';
import { ASSET_TYPE } from '../constants/assets';
import { Item } from '../types/items';
import { Z_INDICES } from '../constants/z-indices';
import { AssetType } from '../types/assets';

const idPrefixToAssetTypes: Record<string, AssetType> = {
    hair: ASSET_TYPE.HAIR,
    shoes: ASSET_TYPE.SHOES,
    jacket: ASSET_TYPE.OUTERWEAR,
    sweater: ASSET_TYPE.MIDDLEWEAR,
    shirt: ASSET_TYPE.TOP,
    pants: ASSET_TYPE.PANTS,
    shorts: ASSET_TYPE.PANTS,
    socks: ASSET_TYPE.SOCKS
};

const filterItems = (items: Record<string, Item>, assetType: AssetType) =>
    Object.fromEntries(Object.entries(items).filter(([_id, item]) => item.type === assetType));

const splitCamelCase = (str: string) => str.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ');

const getAssetType = (id: string): AssetType => {
    const [type] = splitCamelCase(id);

    return idPrefixToAssetTypes[type];
};

const getStyles = (id: string) => {
    if (id.toLowerCase().includes('pigtail')) {
        return {
            zIndex: Z_INDICES.TOP + 1
        };
    }

    return undefined;
};

const createItems = () => {
    const smallSrc = SMALL_SIZE_SOURCES as Record<string, string>;
    const items = Object.entries(FULL_SIZE_SOURCES).reduce(
        (accum, [id, src]) => {
            accum[id] = {
                id,
                type: getAssetType(id),
                src,
                srcSmall: smallSrc[id],
                style: getStyles(id)
            };

            return accum;
        },
        {} as Record<string, Item>
    );

    return items;
};

export const ALL_ITEMS: Record<string, Item> = createItems();

export const HAIRS = filterItems(ALL_ITEMS, ASSET_TYPE.HAIR);
export const TOPS = filterItems(ALL_ITEMS, ASSET_TYPE.TOP);
export const MIDDLEWEAR = filterItems(ALL_ITEMS, ASSET_TYPE.MIDDLEWEAR);
export const OUTERWEAR = filterItems(ALL_ITEMS, ASSET_TYPE.OUTERWEAR);
export const PANTS = filterItems(ALL_ITEMS, ASSET_TYPE.PANTS);
export const SOCKS = filterItems(ALL_ITEMS, ASSET_TYPE.SOCKS);
export const SHOES = filterItems(ALL_ITEMS, ASSET_TYPE.SHOES);
