import { IMG_ROUTES } from '../../../main/resources';

import './styles/styles.css';

export const Colletion1 = () => {
    return (
        <div className='collection1 my-3 mt-md-0'>
            <div className='collection1__wrapper'>
                <div className='row g-3'>
                    <div className='col-12 col-md-4'>
                        <img
                            src={IMG_ROUTES.collection1.img1}
                            loading='lazy'
                            alt='mujer con unos tacones negros, falda blanca y blusa negra'
                            className='img-fluid'
                        />
                    </div>

                    <div className='col-12 col-md-4 '>
                        <div className='row g-3 g-md-0 h-100'>
                            <div className='col-12 '>
                                <img
                                    src={IMG_ROUTES.collection1.img2}
                                    loading='lazy'
                                    alt='aretes color plata'
                                    className='img-fluid'
                                />
                            </div>
                            <div className='col-12  d-flex  align-items-end'>
                                <img
                                    src={IMG_ROUTES.collection1.img3}
                                    loading='lazy'
                                    alt='tacones negros'
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4'>
                        <img
                            src={IMG_ROUTES.collection1.img4}
                            loading='lazy'
                            alt='mujer con unos tacones negros, falda blanca y blusa negra'
                            className='img-fluid'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
