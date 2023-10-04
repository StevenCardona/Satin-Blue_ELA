import { MainBanner } from './banners/main-banner';
import { Colletion1 } from './sections/collection-1';
import { Collection2 } from './sections/collection-2';
import { Section1 } from './sections/section-1';
import { Section2 } from './sections/section-2';

function App() {
    return (
        <div className='App'>
            <MainBanner />
            <Section1 />
            <Colletion1 />
            <Section2 />
            <Collection2 />
        </div>
    );
}

export default App;
