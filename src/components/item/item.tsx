import { useDrag } from 'react-dnd';
import { Item as ItemType } from '../../types/items';
import './item.css';

export type ItemProps = {
    item: ItemType;
};

export function Item({ item }: ItemProps) {
    const [_, dragRef] = useDrag(() => ({
        type: item.type,
        item: item,
        id: item.id
    }));

    return (
        <div className="item">
            <img alt={item.id} ref={dragRef} src={item.srcSmall} />
        </div>
    );
}
