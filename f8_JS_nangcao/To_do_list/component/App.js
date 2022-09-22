import html from '../core.js';
import Header from '../component/Header.js';
import TodoList from '../component/TodoList.js';

function App() {
    return html`
        <section class="todoapp">
            ${Header()}
            ${TodoList()}
            
        </section>
    `
}
export default App
