import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoActionFn, deletetTodoActionFn, editObjectPassFn } from '../../../../redux/crudrdx/crud1/TodoSlice';


import { ConfirmationModal } from '../../../constant/modals/ModalIndex';




const List2 = () => {
    let dispatch = useDispatch()


    let todolist = useSelector((state) => state.tododata)
    let { todos } = todolist

    const [TodoList, SetTodoListFn] = useState(todos)
    const [GetDeleteId, SetGetDeleteIdFn] = useState('')

    // delete with modal start
    const deleteHandle = (id) => {
        SetGetDeleteIdFn(id)
    }
    const confirmModal = (param) => {
        if (param === "continue") {
            dispatch(deletetTodoActionFn(GetDeleteId))
        }
        SetGetDeleteIdFn('')
    }
    // delete with modal end    


    const editHandle = (id) => {
        let editfltr = TodoList.find((todo) => todo._id === id)
        dispatch(editObjectPassFn(editfltr))
    }

    useEffect(() => {
        SetTodoListFn(todos)
    }, [todos])

    useEffect(() => {
        dispatch(getTodoActionFn())
    }, [dispatch])
    return (
        <Fragment>
            <div className="wrapper mt-3">
                 <h1>{ TodoList.length}</h1>
                <div className="row">
                    {TodoList && TodoList.map((curElem, index) => (
                        <div className="col-3 mb-4" key={index}>
                            <div className="cover border1 bordercolor2_4 p-2">
                                <div className="ovr display-6 fw-bold"> {curElem.name}</div>
                                <div className="ovr"> {curElem.email}</div>
                                <div className="ovr"> {curElem._id}</div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <div className="bg2_1 color1 py-1 px-3 d-inline-block cursor-pointer">{index + 1}</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="bg5_1 color1 py-1 px-3 cursor-pointer" onClick={() => editHandle(curElem._id)}>Edit</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="bg3_1 color1 py-1 px-3 cursor-pointer" onClick={() => deleteHandle(curElem._id)}>Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {
                GetDeleteId !== "" &&
                <ConfirmationModal
                    message="Are You Want Delete User?"
                    confirmModal={confirmModal}
                />
            }
        </Fragment>
    )
}

export default List2