import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodoActionFn } from '../../../../redux/crudrdx/crud1/TodoSlice';
import { Input } from '../../../constant/Forms/FormIndex';


function Edit3({ GetEditId, SetGetEditIdFn }, props) {


  let dispatch = useDispatch()
  let todolist = useSelector((state) => state.tododata)
  let { todos } = todolist

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

  const editHandler = () => {
    if (name !== "" && email !== "") {
      dispatch(editTodoActionFn(TodoPost))
      SetGetEditIdFn("")
    }
    else {
      SetValidationFn(TodoPost)
    }
  }

  useEffect(() => {
    let findObj = todos.find((usr) => usr._id === GetEditId)
    SetTodoPostFn({
      ...findObj,
      name: findObj.name,
      email: findObj.email
    })

  }, [GetEditId, todos])


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
          <div className="col-auto"> <div className="bg4_1 color1 py-2 px-4 cursor-pointer" onClick={() => editHandler()}>Edit</div></div>
        </div>
      </form>
    </div>
  )
}

export default Edit3
