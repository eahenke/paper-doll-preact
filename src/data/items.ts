import { FULL_SIZE_SOURCES, SMALL_SIZE_SOURCES } from './asset-sources.dev';
import { ASSET_TYPE } from '../constants/assets';
import { Item } from '../types/items';

export const HAIRS = {
    hair1: {
        id: 'hair1',
        type: ASSET_TYPE.HAIR,
        src: FULL_SIZE_SOURCES.hair1,
        srcSmall: SMALL_SIZE_SOURCES.hair1
    },
    hair2: {
        id: 'hair2',
        type: ASSET_TYPE.HAIR,
        src: FULL_SIZE_SOURCES.hair2,
        srcSmall: SMALL_SIZE_SOURCES.hair2
    },
    hair3: {
        id: 'hair3',
        type: ASSET_TYPE.HAIR,
        src: FULL_SIZE_SOURCES.hair3,
        srcSmall: SMALL_SIZE_SOURCES.hair3
    }
};

export const TOPS = {
    top1: {
        id: 'top1',
        type: ASSET_TYPE.TOP,
        src: FULL_SIZE_SOURCES.top1,
        srcSmall: SMALL_SIZE_SOURCES.top1
    },
    top2: {
        id: 'top2',
        type: ASSET_TYPE.TOP,
        src: FULL_SIZE_SOURCES.top2,
        srcSmall: SMALL_SIZE_SOURCES.top2
    }
};

export const OUTERWEAR = {
    outerwear1: {
        id: 'outerwear1',
        type: ASSET_TYPE.OUTERWEAR,
        src: FULL_SIZE_SOURCES.outerwear1,
        srcSmall: SMALL_SIZE_SOURCES.outerwear1
    },
    outerwear2: {
        id: 'outerwear2',
        type: ASSET_TYPE.OUTERWEAR,
        src: FULL_SIZE_SOURCES.outerwear2,
        srcSmall: SMALL_SIZE_SOURCES.outerwear2
    }
};

export const PANTS = {
    pants1: {
        id: 'pants1',
        type: ASSET_TYPE.PANTS,
        src: FULL_SIZE_SOURCES.pants1,
        srcSmall: SMALL_SIZE_SOURCES.pants1
    },
    pants2: {
        id: 'pants2',
        type: ASSET_TYPE.PANTS,
        src: FULL_SIZE_SOURCES.shorts1,
        srcSmall: SMALL_SIZE_SOURCES.shorts1
    }
};

export const SOCKS = {
    sock1: {
        id: 'sock1',
        type: ASSET_TYPE.SOCKS,
        src: FULL_SIZE_SOURCES.socks1,
        srcSmall: SMALL_SIZE_SOURCES.socks1
    }
};

export const SHOES = {
    shoes1: {
        id: 'shoes1',
        type: ASSET_TYPE.SHOES,
        src: FULL_SIZE_SOURCES.shoes1,
        srcSmall: SMALL_SIZE_SOURCES.shoes1
    },
    shoes2: {
        id: 'shoes2',
        type: ASSET_TYPE.SHOES,
        src: FULL_SIZE_SOURCES.shoes2,
        srcSmall: SMALL_SIZE_SOURCES.shoes2
    }
};

export const ALL_ITEMS: Record<string, Item> = {
    ...HAIRS,
    ...TOPS,
    ...OUTERWEAR,
    ...PANTS,
    ...SOCKS,
    ...SHOES
};
