import React, { useState } from 'react';
import Layout from '../../../layout/Layout';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postUserActionFn } from '../../../../redux/crudrdx/crud1/UserSlice';

function Post1() {
    const navigate = useNavigate();
    const dispach = useDispatch()

    const userData = useSelector((state) => state.userdata)
    const { errors } = userData

    const [PostUser, SetPostUserFn] = useState({
        name: "Your Name",
        username: "User Name",
        email: "Email",
        phone: "Phone",
        website: "Website",
        street: "Steet",
        suite: "Suit",
        city: "City",
        zipcode: "Zip Code",
        lat: "Lat",
        lng: "Lng",
        companyname: "Company Name",
        catchPhrase: "Catch Phrase",
        bs: "Bs",
    })

    const { name, username, email, phone, website, street, suite, city, zipcode, lat, lng, companyname, catchPhrase, bs } = PostUser

    let disObj = {
        name: name, username: username, email: email, phone: phone, website: website,
        address: {
            street: street, suite: suite, city: city, zipcode: zipcode,
            geo: { lat: lat, lng: lng }
        },
        company: { name: companyname, catchPhrase: catchPhrase, bs: bs }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        dispach(postUserActionFn(disObj))

        if (name !== "" && username !== "" && email !== "" && phone !== "" && website !== "" &&
            street !== "" && suite !== "" && city !== "" && zipcode !== "" && lat !== "" && lng !== "" &&
            companyname !== "" && catchPhrase !== "" && bs !== "") {
            navigate("/crudwrap/crud1")
        }
    }
    const onChangeHander = (e) => {
        const { name, value } = e.target;
        SetPostUserFn({
            ...PostUser,
            [name]: value
        })
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
                                value={name}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {name === "" && <div className='font10 color3_1'> {name === "" && errors.name}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> User Name</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='username'
                                value={username}
                                onChange={(e) => onChangeHander(e)}
                            />

                            {username === "" && <div className='font10 color3_1'> {username === "" && errors.username}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Email</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='email'
                                value={email}
                                onChange={(e) => onChangeHander(e)}
                            />

                            {email === "" && <div className='font10 color3_1'> {email === "" && errors.email}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Phone</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='phone'
                                value={phone}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {phone === "" && <div className='font10 color3_1'> {phone === "" && errors.phone}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Website</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='website'
                                value={website}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {website === "" && <div className='font10 color3_1'> {website === "" && errors.website}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Street</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='street'
                                value={street}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {street === "" && <div className='font10 color3_1'> {street === "" && errors.street}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Suite</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='suite'
                                value={suite}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {suite === "" && <div className='font10 color3_1'> {suite === "" && errors.suite}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> City</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='city'
                                value={city}
                                onChange={(e) => onChangeHander(e)}
                            />


                            {city === "" && <div className='font10 color3_1'> {city === "" && errors.city}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Zip Code</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='zipcode'
                                value={zipcode}
                                onChange={(e) => onChangeHander(e)}
                            />

                            {zipcode === "" && <div className='font10 color3_1'> {zipcode === "" && errors.zipcode}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Lat</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='lat'
                                value={lat}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {lat === "" && <div className='font10 color3_1'> {lat === "" && errors.lat}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Lng</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='lng'
                                value={lng}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {lng === "" && <div className='font10 color3_1'> {lng === "" && errors.lng}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Company Name</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='companyname'
                                value={companyname}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {companyname === "" && <div className='font10 color3_1'> {companyname === "" && errors.companyname}</div>}


                        </div>

                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> Catch Phrase</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='catchPhrase'
                                value={catchPhrase}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {catchPhrase === "" && <div className='font10 color3_1'> {catchPhrase === "" && errors.catchPhrase}</div>}
                        </div>
                        <div className="col-md-3 my-3">
                            <div className='ovr mb-1 fw-bold'> BS</div>
                            <input
                                className='p-2 border1 bordercolor2_4 w-100'
                                type="text"
                                name='bs'
                                value={bs}
                                onChange={(e) => onChangeHander(e)}
                            />
                            {bs === "" && <div className='font10 color3_1'> {bs === "" && errors.bs}</div>}
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