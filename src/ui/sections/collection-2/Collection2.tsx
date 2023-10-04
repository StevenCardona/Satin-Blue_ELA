import { COPYS_ES, IMG_ROUTES } from '../../../main/resources';
import { CustomButton } from '../../components/buttons';
import './styles/styles.css';

export const Collection2 = () => {
    return (
        <div className='collection2 pb-3'>
            <div className='collection2__wrapper d-flex flex-column flex-md-row justify-content-md-center '>
                <div className='collection2__main'>
                    <img
                        src={IMG_ROUTES.collection2.img1}
                        className='collection2__img '
                        loading='lazy'
                        alt='mujer con todo un set de piezas de ela, nueva colección satín'
                    />
                </div>

                <div className='collection2__content d-flex flex-column p-md-4 justify-content-center align-items-center align-items-md-start'>
                    <p className='collection2__text text-center text-md-start p-4 py-3 p-md-0 py-md-0'>
                        {COPYS_ES.collection2.text}{' '}
                        <span className='fw-bold'>
                            {COPYS_ES.collection2.highlight}{' '}
                        </span>
                        {COPYS_ES.collection2.text2}
                    </p>

                    <img
                        src={IMG_ROUTES.collection2.img2}
                        className='collection2__thumbnail mt-2'
                        loading='lazy'
                        alt='bolso de la nueva colección'
                    />

                    <CustomButton
                        title={COPYS_ES.buttons.buy_now}
                        classNames='collection2__button mt-3'
                    />
                </div>
            </div>
        </div>
    );
};
