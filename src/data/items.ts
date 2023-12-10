import { FULL_SIZE_SOURCES, SMALL_SIZE_SOURCES } from './asset-sources.dev';
import { ASSET_TYPE } from '../constants/assets';
import { Item } from '../types/items';
import { Z_INDICES } from '../constants/z-indices';

export const HAIRS = {
    hair1: {
        id: 'hair1',
        type: ASSET_TYPE.HAIR,
        src: FULL_SIZE_SOURCES.hair1,
        srcSmall: SMALL_SIZE_SOURCES.hair1,
        style: {
            zIndex: Z_INDICES.TOP + 1
        }
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

export const MIDDLEWEAR = {
    sweater1: {
        id: 'sweater1',
        type: ASSET_TYPE.MIDDLEWEAR,
        src: FULL_SIZE_SOURCES.sweater1,
        srcSmall: SMALL_SIZE_SOURCES.sweater1
    }
};

export const OUTERWEAR = {
    jacket1: {
        id: 'jacket1',
        type: ASSET_TYPE.OUTERWEAR,
        src: FULL_SIZE_SOURCES.jacket1,
        srcSmall: SMALL_SIZE_SOURCES.jacket1
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
    ...MIDDLEWEAR,
    ...OUTERWEAR,
    ...PANTS,
    ...SOCKS,
    ...SHOES
};
