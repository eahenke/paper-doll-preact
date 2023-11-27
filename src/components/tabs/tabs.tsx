import { ReactNode, useState } from 'preact/compat';
import cx from 'classnames';
import './tabs.css';

export type TabsProps = {
    tabs: {
        title: string;
        content: ReactNode;
    }[];
};

export function Tabs({ tabs }: TabsProps) {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className="tabs-titlebar">
                {tabs.map(({ title }, idx) => (
                    <button
                        className={cx('tabs-tab', { active: idx === tabIndex })}
                        key={title}
                        onClick={() => setTabIndex(idx)}
                    >
                        {title}
                    </button>
                ))}
            </div>
            <div className="tabs-content">{tabs[tabIndex].content}</div>
        </div>
    );
}
