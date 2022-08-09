import React from 'react';
function SuccessButton({ ButtonType, ButtonText, onClickHandle }) {
    return (
        <button
            onClick={onClickHandle}
            className="bg4_1 color1 py-2 px-3 cursor-pointer"
            type={ButtonType}>
            {ButtonText}
        </button>
    )
}

//  <SuccessButton
// onClickHandle={() => stepHandler()}
// ButtonType='submit'
// ButtonText='Next'
// ButtonAddClass="hello"
// /> 
export default SuccessButton
