import React, { useState, useEffect } from 'react';
import Layout from '../../../shared/layout/Layout';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUserActionFn, editUserActionFn } from '../../../../redux/crudrdx/crud1/UserSlice';

function Edit1() {
    const navigate = useNavigate();
    const dispach = useDispatch()
    let { editID } = useParams();

    const userData = useSelector((state) => state.userdata)
    const { users, status } = userData

    const userFind = users.find((user) => user._id === editID)
    const [EditUser, SetEditUserFn] = useState(userFind || "")
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispach(editUserActionFn(EditUser))
         navigate("/crudwrap/crud1")
    }

    const onChangeHander = (e) => {
        const { name, value } = e.target;
        let data = { ...EditUser }
        if (name === "name" || name === "username" || name === "email" || name === "phone" || name === "website") {
            data = { ...data, [name]: value }
        }
        else if (name === "street" || name === "suite" || name === "city" || name === "zipcode") {
            data = {
                ...data,
                address: {
                    ...data.address,
                    [name]: value
                }
            }
        }
        else if (name === "lat" || name === "lng") {
            data = {
                ...data,
                address: {
                    ...data.address,
                    geo: {
                        ...data.address.geo,
                        [name]: value
                    }
                }
            }
        }

        else if (name === "companyname") {
            data = {
                ...data,
                company: {
                    ...data.company,
                    name: value
                }
            }
        }

        else if (name === "catchPhrase" || name === "bs") {
            data = {
                ...data,
                company: {
                    ...data.company,
                    [name]: value
                }
            }
        }
        SetEditUserFn(data)
    }



    useEffect(() => {
        if (userFind) {
            SetEditUserFn(userFind)
        }
    }, [userFind])

    useEffect(() => {
        dispach(getUserActionFn())
    }, [dispach])


    return (
        <Layout>

            <div className='cover'>
                <div className='row'>
                    <div className='col'>
                        <div className='bg5_1 color1 py-2 px-3 d-inline-block cursor-pointer' onClick={() => navigate("/crudwrap/crud1")}>Back</div>
                    </div>
                    <div className='col-auto'><h1>Edit Data {editID}</h1></div>
                </div>
            </div>

            {
                (status === "getSuccess" || status === "editSuccess") &&
                <form>
                    <div className='cover'>
                        <div className='row'>
                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Name</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='name'
                                    value={EditUser && EditUser.name}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> User Name</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='username'
                                    value={EditUser && EditUser.username}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Email</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='email'
                                    value={EditUser && EditUser.email}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Phone</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='phone'
                                    value={EditUser && EditUser.phone}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Website</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='website'
                                    value={EditUser && EditUser.website}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Street</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='street'
                                    value={EditUser && EditUser.address.street}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Suite</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='suite'
                                    value={EditUser && EditUser.address.suite}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> City</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='city'
                                    value={EditUser && EditUser.address.city}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Zip Code</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='zipcode'
                                    value={EditUser && EditUser.address.zipcode}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Lat</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='lat'
                                    value={EditUser && EditUser.address.geo.lat}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Lng</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='lng'
                                    value={EditUser && EditUser.address.geo.lng}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Company Name</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='companyname'
                                    value={EditUser && EditUser.company.name}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> Catch Phrase</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='catchPhrase'
                                    value={EditUser && EditUser.company.catchPhrase}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>
                            <div className="col-md-3 my-3">
                                <div className='ovr mb-1 fw-bold'> BS</div>
                                <input
                                    className='p-2 border1 bordercolor2_4 w-100'
                                    type="text"
                                    name='bs'
                                    value={EditUser && EditUser.company.bs}
                                    onChange={(e) => onChangeHander(e)}
                                />
                            </div>
                            <div className="col-md-3 my-3">
                                <div className='bg5_1 mt-4 color1 py-2 px-3 d-inline-block cursor-pointer' onClick={(e) => submitHandler(e)}>Submit</div>
                            </div>
                        </div>
                    </div>
                </form>

            }
            <h1> {status === "getLoad" && "Loading"}</h1>
            <h1> {status === "getFailed" && "Try Again"}</h1>
        </Layout >
    )
}

export default Edit1;