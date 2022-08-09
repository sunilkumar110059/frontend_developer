import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { postTodoActionFn } from '../../../../redux/crudrdx/crud1/TodoSlice';
import { Input } from '../../../shared/Forms/FormIndex';

function Post3() {
    let dispatch = useDispatch()
    const [Validation, SetValidationFn] = useState('')
    const [TodoPost, SetTodoPostFn] = useState({
        name: "",
        email: "",
    })
    const { name, email } = TodoPost

    const onChangeHandle = (evt) => {
        const { name, value } = evt.target;
        SetTodoPostFn({
            ...TodoPost,
            [name]: value
        })
    }

    const submitHandler = () => {
        if (name !== "" && email !== "") {
            dispatch(postTodoActionFn(TodoPost))
            SetTodoPostFn({
                name: "",
                email: "",
            })
        }
        else {
            SetValidationFn(TodoPost)
        }
    }

    return (
        <div className="cover">
            <form >
                <div className="row">
                    <div className="col">
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Name"
                            FormAddClass="border1 bordercolor2_4"

                            InputAddClass="p-2"
                            InputType="text"
                            InputName="name"
                            InputValue={name}
                            onChangeHandler={(e) => onChangeHandle(e)}
                        />
                        {Validation.name === "" && <div className='font10 color3_1'> {name === "" && "Name filled is required"}</div>}
                    </div>

                    <div className="col">
                        <Input
                            LabelAddClass="d-block mb-1 fw-bold"
                            LabelText="Email"
                            FormAddClass="border1 bordercolor2_4"

                            InputAddClass="p-2"
                            InputType="text"
                            InputName="email"
                            InputValue={email}
                            onChangeHandler={(e) => onChangeHandle(e)}
                        />
                        {Validation.email === "" && <div className='font10 color3_1'> {email === "" && "Email filled is required"}</div>}
                    </div>




                    <div className="col-auto">
                        <div className="bg4_1 color1 py-2 px-4 cursor-pointer" onClick={() => submitHandler()}> ADD</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Post3;