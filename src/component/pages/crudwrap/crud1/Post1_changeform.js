import React, { useState } from 'react';
import Layout from '../../../layout/Layout';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postUserActionFn } from '../../../../redux/crudrdx/crud1/UserSlice';

function Post1() {
    const navigate = useNavigate();
    const dispach = useDispatch()

    const userData = useSelector((state) => state.userdata)
    const { errors, status } = userData
    console.log(status)

    const [PostUser, SetPostUserFn] = useState({
        name: "Your Name",
        username: " User Name",
        email: " Email",
        phone: " Phone",
        website: " Website",
        address: {
            street: " Steet",
            suite: " Suit",
            city: "City",
            zipcode: "Zip Code",
            geo: {
                lat: "Lat",
                lng: "Lng",
            }
        },
        company: {
            name: "Company Name",
            catchPhrase: "Catch Phrase",
            bs: "Bs",
        }
    })


    const submitHandler = (e) => {
        e.preventDefault();
        dispach(postUserActionFn(PostUser))
        navigate("/crudwrap/crud1")
    }


    const onChangeHander = (e) => {
        const { name, value } = e.target;
        let data = { ...PostUser }
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
        SetPostUserFn(data)
    }


    return (
        <Layout>


            <div className='cover'>
                <div className='row'>
                    <div className='col'>
                        <div className='bg5_1 color1 py-2 px-3 d-inline-block cursor-pointer' onClick={() => navigate("/crudwrap/crud1")}>Back</div>
                    </div>
                    <div className='col-auto'><h1>Post Data</h1></div>
                </div>
            </div>

            <form>
                <div className='cover'>
                    <div className='row'>
                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Name</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='name'
                                value={PostUser.name}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.name !== "" && <div className='font10 color3_1'> {errors.name}</div>}


                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> User Name</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='username'
                                value={PostUser.username}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.username !== "" && <div className='font10 color3_1'> {errors.username}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Email</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='email'
                                value={PostUser.email}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.email !== "" && <div className='font10 color3_1'> {errors.email}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Phone</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='phone'
                                value={PostUser.phone}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.phone !== "" && <div className='font10 color3_1'> {errors.phone}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Website</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='website'
                                value={PostUser.website}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.website !== "" && <div className='font10 color3_1'> {errors.website}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Street</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='street'
                                value={PostUser.address.street}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.street !== "" && <div className='font10 color3_1'> {errors.street}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Suite</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='suite'
                                value={PostUser.address.suite}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.suite !== "" && <div className='font10 color3_1'> {errors.suite}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> City</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='city'
                                value={PostUser.address.city}
                                onChange={(e) => onChangeHander(e)}
                            />

                            {errors.city !== "" && <div className='font10 color3_1'> {errors.city}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Zip Code</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='zipcode'
                                value={PostUser.address.zipcode}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.zipcode !== "" && <div className='font10 color3_1'> {errors.zipcode}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Lat</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='lat'
                                value={PostUser.address.geo.lat}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.lat !== "" && <div className='font10 color3_1'> {errors.lat}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Lng</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='lng'
                                value={PostUser.address.geo.lng}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.lng !== "" && <div className='font10 color3_1'> {errors.lng}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Company Name</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='companyname'
                                value={PostUser.company.name}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.comapnyname !== "" && <div className='font10 color3_1'> {errors.comapnyname}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Catch Phrase</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='catchPhrase'
                                value={PostUser.company.catchPhrase}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.catchPhrase !== "" && <div className='font10 color3_1'> {errors.catchPhrase}</div>}
                        </div>
                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> BS</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='bs'
                                value={PostUser.company.bs}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {errors.bs !== "" && <div className='font10 color3_1'> {errors.bs}</div>}
                        </div>
                        <div className="col-md-3 my-3">
                            <div className='bg5_1 mt-4 color1 py-2 px-3 d-inline-block cursor-pointer' onClick={(e) => submitHandler(e)}>Submit</div>
                        </div>
                    </div>
                </div>
            </form>

        </Layout >
    )
}

export default Post1;