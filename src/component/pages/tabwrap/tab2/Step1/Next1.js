import React from 'react';
import { SuccessButton } from '../../../../shared/Buttons/ButtonModuleIndex';

function Next1({ nextHandle }) {
    return (
        <>
            <h1>Next Component 1 </h1>
            <div className='ovr mb-3'>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </div>

            <div className="row">
                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={nextHandle}
                        ButtonText='Next'
                    />
                </div>
            </div>
        </>

    )
}

export default Next1