import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../../shared/layout/Layout';
import { ConfirmationModal } from '../../../shared/modals/ModalIndex';

import { getUserActionFn, deletetUserActionFn, deletetManyUserActionFn } from '../../../../redux/crudrdx/crud1/UserSlice';


function CrudIndex1() {
    const dispach = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const userData = useSelector((state) => state.userdata)
    const { users, status } = userData

    const [GetUsers, SetGetUsersFn] = useState(users)
    const [GetId, SetGetIdFn] = useState([])
    const [IsBoolean, SetIsBooleanFn] = useState(false)

    const [GetDeleteId, SetGetDeleteIdFn] = useState('')

    // single id delete === start
    const deleteHandler = (id) => {
        SetGetDeleteIdFn(id)
    }

    const confirmModal = (param) => {
        if (param === "continue") {
            dispach(deletetUserActionFn(GetDeleteId))
            SetGetIdFn([])
            SetIsBooleanFn(false)
        }
        SetGetDeleteIdFn('')
    }
    // single id delete === end





    // all id select in (SetGetIdFn) === start
    const selectAlId = () => {

        if (IsBoolean === false) {
            let getAllId = GetUsers.map((usr) => usr._id)
            SetGetIdFn(getAllId)
        }
        else { SetGetIdFn([]) }
        let allFalseCheck = GetUsers.map((usr) => ({ ...usr, isCheck: !IsBoolean }))

        SetIsBooleanFn(!IsBoolean)
        SetGetUsersFn(allFalseCheck)
    }
    // all id select in (SetGetIdFn) === end


    // manual id select in (SetGetIdFn) === start
    const selectId = (id, isvalue) => {
        let changeIscheck = GetUsers.map((usr) => usr._id === id ? { ...usr, isCheck: !isvalue } : usr)
        SetGetUsersFn(changeIscheck)

        SetIsBooleanFn(false)
        if (isvalue === false) {
            SetGetIdFn([...GetId, id])
        }
        else {
            SetGetIdFn(GetId.filter((usrId) => usrId !== id))
        }
    }
    // manual id select in (SetGetIdFn) === end


    // selected all id delete === start
    const deleteAll = () => {
        SetGetIdFn([])
        SetIsBooleanFn(false)
        dispach(deletetManyUserActionFn(GetId))
    }
    // selected all id delete === end


    useEffect(() => {
        SetGetUsersFn(users)
    }, [users])

    useEffect(() => {
        dispach(getUserActionFn())
    }, [dispach])

    return (
        <Layout>
            <div className="cover bg2_5 px-3 py-1 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto">
                        <h1>Crud 1</h1>
                    </div>
                </div>
            </div>

            <div className='wrapper'>
                <div className='cover'>
                    <div className='row'>

                        {GetId.length > 0 && (
                            <div className='col-auto' onClick={() => deleteAll()}>
                                <div className='bg3_1 color1 py-2 px-3  cursor-pointer'>Delete All</div>
                            </div>
                        )}
                        <div className='col'></div>

                        <div className='col-auto'>
                            <div className='bg4_1 color1 py-2 px-3 d-inline-block cursor-pointer'
                                onClick={() => navigate(`${pathname}/post1`)}>Add New Post {GetUsers.length > 0 ? GetUsers.length : "no"}</div>
                        </div>
                    </div>
                </div>

                <div className='cover'>
                    <table className='d-table-collapse w-100 border1 bordercolor2_5'>
                        <thead className='bg2_1 color1'>
                            <tr>
                                {GetUsers.length >= 1 ? (
                                    <td className="py-1 px-3" style={{ width: "30px" }} onClick={() => selectAlId()} >
                                        <div className={`p-2 ${IsBoolean ? 'bg5_1' : 'bg4_1'}`}></div>
                                    </td>
                                ) : (
                                    <td className="py-1 px-3" style={{ width: "30px" }}></td>
                                )}
                                <td className='py-1 px-3'>key</td>
                                <td className='py-1 px-3'>Name</td>
                                <td className='py-1 px-3'>User Name</td>
                                <td className='py-1 px-3'>Email</td>
                                <td className='py-1 px-3'>Ph</td>
                                <td className='py-1 px-3' style={{ width: "200px" }}>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {GetUsers.length >= 1 && (
                                GetUsers.map((curElm, index) => {
                                    let { _id, name, username, email, phone, isCheck } = curElm
                                    return (
                                        < tr className={`${index % 2 === 0 ? "bg2_5" : ""}`} key={_id}>
                                            <td className={`py-2 px-3 ${isCheck ? 'bg5_1' : 'bg4_1'}`} onClick={() => selectId(_id, isCheck)} >
                                                {index + 1}
                                            </td>
                                            <td className='py-2 px-3'>{_id}</td>
                                            <td className='py-2 px-3'>{name}</td>
                                            <td className='py-2 px-3'>{username}</td>
                                            <td className='py-2 px-3'>{email}</td>
                                            <td className='py-2 px-3'>{phone}</td>
                                            <td className='py-2 px-3'>

                                                <div className='row g-0'>
                                                    <div className='col py-1 bg2_1 bold text-center color1 cursor-pointer' onClick={() => navigate(`${pathname}/view1/${_id}`)}>View</div>
                                                    <div className='col py-1 bg4_1 text-center color1 cursor-pointer' onClick={() => navigate(`${pathname}/edit1/${_id}`)}>Edit</div>
                                                    <div className='col py-1 bg3_1 text-center color1 cursor-pointer' onClick={() => deleteHandler(_id)}>Delete</div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                <h1> {GetUsers.length < 1 && "Data Not Found"}</h1>
                <h1> {status === "getLoad" && "Loading"}</h1>
                <h1> {status === "getFailed" && "Try Again"}</h1>
            </div>

            {
                GetDeleteId !== "" &&
                <ConfirmationModal
                    message="Are You Want Delete User?"
                    confirmModal={confirmModal}
                />
            }

        </Layout >
    )
}

export default CrudIndex1