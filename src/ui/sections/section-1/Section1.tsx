import { COPYS_ES, IMG_ROUTES } from '../../../main/resources';
import { SLIDES_1 } from '../../../main/slides';
import { Slider } from '../../components/slider';

import './styles/styles.css';

export const Section1 = () => {
    return (
        <div className='section1 mt-3 mt-lg-4'>
            <div className='section1__wrapper d-flex flex-column flex-md-row gap-2 gap-md-4 justify-content-md-center '>
                <div className='section1__main '>
                    <img
                        loading='lazy'
                        className='section1__img '
                        src={IMG_ROUTES.section1.img}
                        alt='bluza satín azul siendo usada por una mujer, acompañado de un jean color negro'
                    />
                </div>

                <div className='slide1 d-flex flex-md-column flex-column-reverse'>
                    <Slider slidesList={SLIDES_1} name='section1' classNames='' />

                    <div className='text-center mt-3'>
                        <h3 className='slide1__title text-blue fw-bold mb-0 '>
                            {COPYS_ES.section1.title}
                        </h3>
                        <p className='slide1__subtitle text-blue fw-light '>
                            {COPYS_ES.section1.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
