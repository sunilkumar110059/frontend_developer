import React from 'react';
function DangerButton({ ButtonType, ButtonText, onClickHandle }) {
    return (
        <button
            onClick={onClickHandle}
            className="bg3_1 color1 py-2 px-3 cursor-pointer"
            type={ButtonType}>
            {ButtonText}
        </button>
    )
}

//  <DangerButton
// onClickHandle={() => stepHandler()}
// ButtonType='submit'
// ButtonText='Next'
// ButtonAddClass="hello"
// /> 

export default DangerButton
