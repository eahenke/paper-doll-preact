import { AssetType } from './assets';

export type Item = {
    src: string;
    srcSmall: string;
    type: AssetType;
    id: string;
    style?: Record<string, unknown>;
};
