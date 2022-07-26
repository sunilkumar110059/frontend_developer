import React, { useState } from 'react';
import { Input } from '../../../constant/Forms/FormIndex';
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
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Name"
                                FormAddClass={`border1 ${name === "" && errors.name ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="name"
                                InputValue={name}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {name === "" && <div className='font10 color3_1'> {name === "" && errors.name}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="User Name"
                                FormAddClass={`border1 ${username === "" && errors.username ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="username"
                                InputValue={username}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {username === "" && <div className='font10 color3_1'> {username === "" && errors.username}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Email"
                                FormAddClass={`border1 ${email === "" && errors.email ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="email"
                                InputValue={email}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {email === "" && <div className='font10 color3_1'> {email === "" && errors.email}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Phone"
                                FormAddClass={`border1 ${phone === "" && errors.phone ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="phone"
                                InputValue={phone}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {phone === "" && <div className='font10 color3_1'> {phone === "" && errors.phone}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Website"
                                FormAddClass={`border1 ${website === "" && errors.website ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="website"
                                InputValue={website}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {website === "" && <div className='font10 color3_1'> {website === "" && errors.website}</div>}

                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Street"
                                FormAddClass={`border1 ${street === "" && errors.street ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="street"
                                InputValue={street}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {street === "" && <div className='font10 color3_1'> {street === "" && errors.street}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Suite"
                                FormAddClass={`border1 ${suite === "" && errors.suite ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="suite"
                                InputValue={suite}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {suite === "" && <div className='font10 color3_1'> {suite === "" && errors.suite}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="City"
                                FormAddClass={`border1 ${city === "" && errors.city ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="city"
                                InputValue={city}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {city === "" && <div className='font10 color3_1'> {city === "" && errors.city}</div>}
                        </div>

                        <div className="col-md-3 my-3">
                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Zip Code"
                                FormAddClass={`border1 ${zipcode === "" && errors.zipcode ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="zipcode"
                                InputValue={zipcode}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {zipcode === "" && <div className='font10 color3_1'> {zipcode === "" && errors.zipcode}</div>}
                        </div>

                        <div className="col-md-3 my-3">

                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Lat"
                                FormAddClass={`border1 ${lat === "" && errors.lat ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="lat"
                                InputValue={lat}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {lat === "" && <div className='font10 color3_1'> {lat === "" && errors.lat}</div>}
                        </div>

                        <div className="col-md-3 my-3">

                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Lng"
                                FormAddClass={`border1 ${lng === "" && errors.lng ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="lng"
                                InputValue={lng}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {lng === "" && <div className='font10 color3_1'> {lng === "" && errors.lng}</div>}
                        </div>

                        <div className="col-md-3 my-3">

                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Company Name"
                                FormAddClass={`border1 ${companyname === "" && errors.companyname ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="companyname"
                                InputValue={companyname}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {companyname === "" && <div className='font10 color3_1'> {companyname === "" && errors.companyname}</div>}


                        </div>

                        <div className="col-md-3 my-3">

                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="Catch Phrase"
                                FormAddClass={`border1 ${catchPhrase === "" && errors.catchPhrase ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="catchPhrase"
                                InputValue={catchPhrase}
                                onChangeHandler={(e) => onChangeHander(e)}
                            />
                            {catchPhrase === "" && <div className='font10 color3_1'> {catchPhrase === "" && errors.catchPhrase}</div>}
                        </div>
                        <div className="col-md-3 my-3">

                            <Input
                                LabelAddClass="d-block mb-1 fw-bold"
                                LabelText="BS"
                                FormAddClass={`border1 ${bs === "" && errors.bs ? "bordercolor3_1" : "bordercolor2_4"}`}
                                InputAddClass="p-2"
                                InputType="text"
                                InputName="bs"
                                InputValue={bs}
                                onChangeHandler={(e) => onChangeHander(e)}
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