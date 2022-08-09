
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postSearchActionFn } from '../../../../redux/searchrdx/SearchSlice1';
import { Input } from '../../../shared/Forms/FormIndex';

function Post2() {

    let dispatch = useDispatch()
    const [CityState, SetCityFn] = useState({
        cityname: ""

    })
    const { cityname } = CityState

    const onChangeHandle = (evt) => {
        const { name, value } = evt.target;
        SetCityFn({
            [name]: value
        })
    }

    const submitHandle = (evt) => {
        evt.preventDefault()
        if (cityname !== "") {
            dispatch(postSearchActionFn(CityState))
            SetCityFn({
                cityname: "" 
            })
        }
    }

    return (
        <form onSubmit={(e) => submitHandle(e)}>
            <div className='cover'>
                <div className="row align-items-end">
                    <div className="col">
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Post City Name"
                            FormAddClass="border1 bordercolor2_4"

                            InputAddClass="p-2"
                            InputType="text"
                            InputName="cityname"
                            InputValue={cityname}
                            onChangeHandler={(e) => onChangeHandle(e)}
                        />
                    </div>
                    <div className="col-auto">
                    <button type='submit' className="bg4_1 color1 py-2 px-3 cursor-pointer">Post</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Post2;