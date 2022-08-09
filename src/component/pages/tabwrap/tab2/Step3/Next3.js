import React from 'react';
import { SuccessButton } from '../../../../shared/Buttons/ButtonModuleIndex';

function Next3({ nextHandle, backHandle }) {

    return (
        <>
            <h1>Next Component 3 </h1>
            <div className='ovr mb-3'>
                survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in
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

export default Next3