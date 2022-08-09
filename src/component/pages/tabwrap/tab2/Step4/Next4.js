import React from 'react';
import { SuccessButton } from '../../../../shared/Buttons/ButtonModuleIndex';

function Next4({ nextHandle, backHandle }) {
    return (
        <>
            <h1>Next Component 4 </h1>
            <div className='ovr mb-3'>
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing
            </div>

            <div className="row">
                <div className="col-auto">
                    <SuccessButton
                        onClickHandle={nextHandle}
                        ButtonText='Next'
                    />
                </div>
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

export default Next4