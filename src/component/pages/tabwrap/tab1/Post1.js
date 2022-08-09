import React, { useState } from 'react'
import { Input, SelectBox, TextArea } from '../../../shared/Forms/FormIndex';
import { useDispatch } from "react-redux";
import { postTabActionFn } from '../../../../redux/tabrdx/TabAction';


function Post1() {
    let dispatch = useDispatch()
    const [MenuState, SetMenuStateFn] = useState({
        name: "Sabji",
        category: "Dinner",
        price: "100",
        image: "profile.jpg",
        description: "Lorean Lipsum sum",

    })
    const { name, category, price, description } = MenuState


    const onChangeHandle = (evt) => {
        const { name, value } = evt.target;
        SetMenuStateFn({
            ...MenuState,
            [name]: value
        })
    }

    const submitHandle = (evt) => {
        evt.preventDefault()
        // let updateMenuState = MenuState.image === "" ? ({ ...MenuState }, delete MenuState.image) : MenuState
        let updateMenuState = [MenuState].find((urs) => urs.image === "" ? delete MenuState.image : MenuState)

        if (name !== "" && category !== "" && price !== "" && description !== "") {
            dispatch(postTabActionFn(updateMenuState))
        }
    }

    const uploadHandle = (e) => {

        SetMenuStateFn({
            ...MenuState,
            image: e.target.files[0]
        })
    }

    return (
        <form onSubmit={(e) => submitHandle(e)}>
            <div className='cover'>
                <div className="row align-items-end">
                    <div className="col-3 mb-3">
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Menu Name"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="name"
                            InputValue={name}
                            onChangeHandler={(e) => onChangeHandle(e)}
                        />
                    </div>

                    <div className="col-3 mb-3">
                        <SelectBox
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Category"
                            FormAddClass="border1 bordercolor2_4"
                            SelectName="category"
                            SelectValue={category}
                            SelectOption={["Lunch", "Dinner", "Breakfast", "Evening"].map((arr, ind) => (
                                <option value={arr} key={ind}> {arr} </option>
                            ))
                            }
                            onChangeHandler={(e) => onChangeHandle(e)}
                        />
                    </div>

                    <div className="col-3 mb-3">
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Price"
                            FormAddClass="border1 bordercolor2_4"
                            InputAddClass="p-2"
                            InputType="text"
                            InputName="price"
                            InputValue={price}
                            onChangeHandler={(e) => onChangeHandle(e)}
                        />
                    </div>
                    <div className="col-3 mb-3">
                        <input
                            accept='image/*'
                            id="imageUpload"
                            multiple
                            type="file"
                            onChange={(e) => uploadHandle(e)}
                        />
                    </div>

                    <div className="col-12 mb-3">
                        <TextArea
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Description"
                            FormAddClass="border1 bordercolor2_4"
                            TeraAddClass="p-2"
                            TeraName="description"
                            TeraValue={description}
                            onChangeHandler={(e) => onChangeHandle(e)}
                        />
                    </div>

                  
                    <div className="col-auto mb-3">
                        <button type='submit' className="bg4_1 color1 py-2 px-3 cursor-pointer">Post</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Post1