import './App.css';
import { MainBanner } from './banners/main-banner';
import { Colletion1 } from './sections/collection-1';
import { Section1 } from './sections/section-1';

function App() {
    return (
        <div className='App'>
            <MainBanner />
            <Section1 />
            <Colletion1 />
        </div>
    );
}

export default App;
