import { COPYS_ES, IMG_ROUTES } from '../../../main/resources';
import { SLIDES_2 } from '../../../main/slides';
import { CustomButton } from '../../components/buttons';
import { Slider } from '../../components/slider';

import './styles/styles.css';

export const Section2 = () => {
    return (
        <div className='section2 mt-3 mt-lg-4'>
            <div className='section2__wrapper'>
                <div className='section2__content d-flex gap-md-5 flex-column flex-md-row gap-3 justify-content-center '>
                    <div className='section2__slide'>
                        <Slider
                            slidesList={SLIDES_2}
                            name='section2'
                            classNames=''
                        />
                    </div>

                    <div className='section2__main position-relative'>
                        <img
                            src={IMG_ROUTES.section2.img1}
                            className='img-fluid'
                            alt='bolso de la nueva colección satín'
                            loading='lazy'
                        />

                        <CustomButton
                            title={COPYS_ES.buttons.buy_now}
                            classNames='section2__button '
                        />
                    </div>
                </div>

                <div className='section2__box mt-3 p-4 py-0 p-md-0'>
                    <p className='section2__text text-center '>
                        {COPYS_ES.section2.text}{' '}
                        <span className='fw-bold'>
                            {COPYS_ES.section2.highlight}
                        </span>{' '}
                        {COPYS_ES.section2.text2}
                    </p>
                </div>
            </div>
        </div>
    );
};
