import * as ITEMS from '../../data/items';
import { Item as ItemType } from '../../types/items';
import { Item } from '../item';
import { Tabs } from '../tabs';
import './item-selector.css';

type ItemGroup = {
    title: string;
    items: ItemType[];
};
type ItemGroups = Record<string, ItemGroup>;

const itemGroups: ItemGroups = {
    hairs: {
        title: 'Hair',
        items: Object.values(ITEMS.HAIRS)
    },
    tops: {
        title: 'Tops',
        items: [...Object.values(ITEMS.TOPS), ...Object.values(ITEMS.MIDDLEWEAR), ...Object.values(ITEMS.OUTERWEAR)]
    },
    pants: {
        title: 'Pants',
        items: Object.values(ITEMS.PANTS)
    },
    socks: {
        title: 'Socks',
        items: Object.values(ITEMS.SOCKS)
    },
    shoes: {
        title: 'Shoes',
        items: Object.values(ITEMS.SHOES)
    }
};

type TabContentProps = {
    selectionGroup: ItemGroup;
};

function TabContent({ selectionGroup }: TabContentProps) {
    return (
        <section className="selection-section" key={selectionGroup.title}>
            <div className="selection-items">
                {selectionGroup.items.map(item => (
                    <Item item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
}

export function ItemSelector() {
    const tabs = Object.values(itemGroups).map(itemGroup => ({
        title: itemGroup.title,
        content: <TabContent selectionGroup={itemGroup} />
    }));

    return <Tabs tabs={tabs} />;
}
