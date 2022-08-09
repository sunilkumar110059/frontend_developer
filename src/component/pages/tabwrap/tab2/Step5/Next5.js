import React from 'react';
import { SuccessButton } from '../../../../shared/Buttons/ButtonModuleIndex';

function Next5({ backHandle }) {

    return (
        <>
            <h1>Next Component 5 </h1>
            <div className='ovr mb-3'>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution
            </div>

            <div className="row">
                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={backHandle}
                        ButtonText='Back'
                    />
                </div>
            </div>
        </>
    )
}

export default Next5