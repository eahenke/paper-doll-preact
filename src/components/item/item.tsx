import './item.css';
import { Item as ItemType } from '../../types/items';

export type ItemProps = {
    item: ItemType;
    addItem: (item: ItemType) => void;
};

export function Item({ item, addItem }: ItemProps) {
    return (
        <div className="item">
            <img
                alt={item.id}
                onClick={() => {
                    addItem(item);
                }}
                src={item.srcSmall}
            />
        </div>
    );
}
