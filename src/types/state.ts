import { AssetType } from './assets';
import { Item } from './items';

export type DollState = Record<AssetType, string | null>;

export type Action =
    | {
          type: 'ADD_ITEM';
          item: Item;
      }
    | {
          type: 'RESET';
      };
