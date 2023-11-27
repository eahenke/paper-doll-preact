import cx from 'classnames';
import body1 from '../../assets/bodies/body-1.png';
import { Item } from '../../types/items';
import { DollState } from '../../types/state';
import { ALL_ITEMS } from '../../data/items';
import { ASSET_TYPE } from '../../constants/assets';
import { AssetType } from '../../types/assets';
import './editor.css';

export type EditorProps = {
    dollState: DollState;
    addItem: (item: Item) => void;
    reset: () => void;
    undo: () => void;
};

const isId = (x: string | null): x is string => !!x;

const itemClassnames = {
    [ASSET_TYPE.HAIR]: 'hair',
    [ASSET_TYPE.TOP]: 'top',
    [ASSET_TYPE.OUTERWEAR]: 'outerwear',
    [ASSET_TYPE.PANTS]: 'pants',
    [ASSET_TYPE.SOCKS]: 'socks',
    [ASSET_TYPE.SHOES]: 'shoes'
};

const getClassname = (type: AssetType) => itemClassnames[type] || '';

export function Editor({ dollState, addItem, reset, undo }: EditorProps) {
    const pieces = Object.values(dollState)
        .filter(isId)
        .map(id => ALL_ITEMS[id]);

    return (
        <section className="editor">
            <div className="doll-frame">
                {pieces.map(piece => (
                    <img
                        alt={piece.id}
                        className={cx('added-piece', getClassname(piece.type))}
                        key={piece.id}
                        src={piece.src}
                    />
                ))}
                <img alt="body" className="" src={body1} />
            </div>
            <button className="link-button" onClick={reset}>
                Reset
            </button>
            <button className="link-button" onClick={undo}>
                Undo
            </button>
        </section>
    );
}