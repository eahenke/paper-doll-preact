import { Editor } from './components/editor';
import { useDoll } from './state';
import { ItemSelector } from './components/item-selector';
import './app.css';

/**
 * TODO:
 * Break out editor into own component
 * keep track of pieces in editor via a data structure
 * make editor a drop target, on drop add piece
 * render current pieces in editor (snap to position? depends on assets)
 * OR just set position style on drag and drop? - above is better because we can make small versions of assets
 * that get big when you add them? Ask Isabel exactly how she wants the dragging to work, or if even just selecting the
 * piece is good enough, no dragging?
 */

export function App() {
    const { dollState, addItem, reset, undo } = useDoll();
    console.log('dollState', dollState);

    return (
        <>
            <h1>Paper Doll</h1>
            <div className="main-container">
                <Editor addItem={addItem} dollState={dollState} reset={reset} undo={undo} />
                <div>
                    <ItemSelector addItem={addItem} />
                </div>
            </div>
        </>
    );
}
