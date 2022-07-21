import React from 'react'
import { Input } from '../../../constant/Forms/FormIndex';

function FilterBar3({ getFilterValueFn }) {
    const onChangeHandle = (evt) => {
        getFilterValueFn(evt.target.value)
    }

    return (
        <Input
            LabelAddClass="d-block mb-1 fw-bold"
            LabelText="City Name"
            FormAddClass="border1 bordercolor2_4"

            InputAddClass="p-2"
            InputType="text"
            onChangeHandler={(e) => onChangeHandle(e)}
        />
    )
}

export default FilterBar3