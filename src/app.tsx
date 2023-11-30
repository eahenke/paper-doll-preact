import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Editor } from './components/editor';
import { useDoll } from './state';
import { ItemSelector } from './components/item-selector';

import './app.css';

export function App() {
    const { dollState, addItem, reset, undo } = useDoll();

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="main-container">
                    <Editor addItem={addItem} dollState={dollState} reset={reset} undo={undo} />
                    <div>
                        <ItemSelector />
                    </div>
                </div>
            </DndProvider>
        </>
    );
}
