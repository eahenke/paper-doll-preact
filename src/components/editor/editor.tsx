import cx from 'classnames';
import { useDrop } from 'react-dnd';
import body1 from '../../assets/bodies/body-1.png';
import { Item } from '../../types/items';
import { DollState } from '../../types/state';
import { ALL_ITEMS } from '../../data/items';
import { ASSET_TYPE } from '../../constants/assets';
import './editor.css';
import { useExternalSettings } from '../../state';
import { Z_INDICES } from '../../constants/z-indices';

export type EditorProps = {
    dollState: DollState;
    addItem: (item: Item) => void;
    reset: () => void;
    undo: () => void;
};

const isId = (x: string | null): x is string => !!x;

const getStyle = (item: Item) => ({
    zIndex: Z_INDICES[item.type],
    ...item.style
});

export function Editor({ dollState, addItem, reset, undo }: EditorProps) {
    const external = useExternalSettings();

    const pieces = Object.values(dollState)
        .filter(isId)
        .map(id => ALL_ITEMS[id]);

    const [_, dropRef] = useDrop(() => ({
        accept: Object.values(ASSET_TYPE),
        drop: (item: Item) => {
            addItem(item);
        }
    }));

    return (
        <section className="editor">
            <div className="doll-frame" ref={dropRef}>
                {pieces.map(piece => (
                    <img
                        alt={piece.id}
                        className="added-piece"
                        key={piece.id}
                        src={piece.src}
                        style={getStyle(piece)}
                    />
                ))}
                <img alt="body" className="" src={body1} />
            </div>
            <div className="editor-button-row">
                <button className={cx(external.linkClass, 'link-button')} onClick={reset}>
                    Reset
                </button>
                <button className={cx(external.linkClass, 'link-button')} onClick={undo}>
                    Undo
                </button>
            </div>
        </section>
    );
}
