import React, { useState, useEffect } from 'react';
import { Input } from '../../../shared/Forms/FormIndex';
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


    const [EditUser, SetEditUserFn] = useState({
        _id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        lat: "",
        lng: "",
        companyname: "",
        catchPhrase: "",
        bs: "",
    })
    const { _id, name, username, email, phone, website, street, suite, city, zipcode, lat, lng, companyname, catchPhrase, bs } = EditUser;

    let disObj = {
        _id: _id, name: name, username: username, email: email, phone: phone, website: website,
        address: {
            street: street, suite: suite, city: city, zipcode: zipcode,
            geo: { lat: lat, lng: lng }
        },
        company: { name: companyname, catchPhrase: catchPhrase, bs: bs }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispach(editUserActionFn(disObj))
        navigate("/crudwrap/crud1")
    }

    const onChangeHander = (e) => {
        const { name, value } = e.target;
        SetEditUserFn({
            ...EditUser,
            [name]: value
        })
    }



    useEffect(() => {
        if (userFind) {
            SetEditUserFn({
                _id: userFind && userFind._id,
                name: userFind && userFind.name,
                username: userFind && userFind.username,
                email: userFind && userFind.email,
                phone: userFind && userFind.phone,
                website: userFind && userFind.website,
                street: userFind?.address?.street,
                suite: userFind && userFind.address.suite,
                city: userFind && userFind.address.city,
                zipcode: userFind && userFind.address.zipcode,
                lat: userFind && userFind.address.geo.lat,
                lng: userFind && userFind.address.geo.lng,
                companyname: userFind && userFind.company.name,
                catchPhrase: userFind && userFind.company.catchPhrase,
                bs: userFind && userFind.company.bs,
            })
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
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className='cover'>
                        <div className='row'>
                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Name"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="name"
                                    InputValue={name}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="User Name"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="username"
                                    InputValue={username}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Email"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="email"
                                    InputValue={email}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Phone"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="phone"
                                    InputValue={phone}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />

                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Website"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="website"
                                    InputValue={website}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Street"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="street"
                                    InputValue={street}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Suite"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="suite"
                                    InputValue={suite}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="City"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="city"
                                    InputValue={city}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />

                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Zip Code"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="zipcode"
                                    InputValue={zipcode}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Lat"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="lat"
                                    InputValue={lat}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Lng"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="lng"
                                    InputValue={lng}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Company Name"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="companyname"
                                    InputValue={companyname}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>

                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="Catch Phrase"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="catchPhrase"
                                    InputValue={catchPhrase}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>
                            <div className="col-md-3 my-3">
                                <Input
                                    LabelAddClass="d-block mb-1 fw-bold"
                                    LabelText="BS"
                                    FormAddClass="border1 bordercolor2_4"
                                    InputAddClass="p-2"
                                    InputType="text"
                                    InputName="bs"
                                    InputValue={bs}
                                    onChangeHandler={(e) => onChangeHander(e)}
                                />
                            </div>
                            <div className="col-md-3 my-3">
                                <button type='submit' className='bg5_1 mt-4 color1 py-2 px-3 d-inline-block cursor-pointer'>Submit</button>
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