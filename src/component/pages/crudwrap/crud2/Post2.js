import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTodoActionFn, editTodoActionFn } from '../../../../redux/crudrdx/crud1/TodoSlice';
import { Input } from '../../../constant/Forms/FormIndex';

function Post2() {
    let dispatch = useDispatch()

    let todolist = useSelector((state) => state.tododata)
    let { editTodos } = todolist

    const [TodoPost, SetTodoPostFn] = useState({
        name: "",
        email: "",
    })
    const { name, email } = TodoPost


    const [EditToggle, SetEditToggleFn] = useState(false)
    const [Validation, SetValidationFn] = useState('')
    const [SuccessPost, SetSuccessPost] = useState('')


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
                email: ""
            })
            SetValidationFn("")
            SetSuccessPost("SubmitSuccess")
            setTimeout(() => {
                SetSuccessPost('')
            }, 1000);
        }
        else { SetValidationFn(TodoPost) }
    }

    const editHandler = () => {
        if (name !== "" && email !== "") {
            dispatch(editTodoActionFn(TodoPost))
            SetEditToggleFn(false)
            SetTodoPostFn({
                name: "",
                email: ""
            })
            SetValidationFn("")

            SetSuccessPost("EditSuccess")
            setTimeout(() => {
                SetSuccessPost('')
            }, 1000);
        }
        else { SetValidationFn(TodoPost) }
    }

    useEffect(() => {
        if (Validation !== "") {
            SetValidationFn(TodoPost)
        }
    }, [Validation, TodoPost])


    useEffect(() => {
        if (Object.keys(editTodos).length > 1 && editTodos.constructor === Object) {
            SetTodoPostFn({
                ...editTodos,
                name: editTodos.name,
                email: editTodos.email
            })
            SetEditToggleFn(true)
        }

    }, [editTodos])


    return (
        <div className="cover">
            {SuccessPost === "SubmitSuccess" && <h1 className='color4_1'> Post Has Success</h1>}
            {SuccessPost === "EditSuccess" && <h1 className='color4_1'> Post Has Edit</h1>}
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
                        {EditToggle === false ? (
                            <div className="bg4_1 color1 py-2 px-4 cursor-pointer" onClick={() => submitHandler()}> ADD</div>)
                            : (<div className="bg4_1 color1 py-2 px-4 cursor-pointer" onClick={() => editHandler()}>Edit</div>)
                        }


                    </div>
                </div>
            </form>
        </div>
    )
}

export default Post2;