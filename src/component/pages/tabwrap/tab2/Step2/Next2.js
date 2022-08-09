import React from 'react';
import { SuccessButton } from '../../../../shared/Buttons/ButtonModuleIndex';

function Next2({ nextHandle, backHandle }) {
    return (
        <>
            <h1>Next Component 2 </h1>
            <div className='ovr mb-3'>
                text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
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

export default Next2