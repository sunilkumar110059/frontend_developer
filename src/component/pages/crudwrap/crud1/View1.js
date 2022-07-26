import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Layout from '../../../layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { getUserActionFn } from '../../../../redux/crudrdx/crud1/UserSlice';
import { useNavigate } from 'react-router-dom';

function View1() {
    let { viewID } = useParams();
    const dispach = useDispatch()
    const navigate = useNavigate();

    const userData = useSelector((state) => state.userdata)
    const { users, status } = userData
    const [UserView, SetUserViewFn] = useState(null)

    console.log(status)

    const backHandler = () => {
        navigate("/crudwrap/crud1")
    }



    useEffect(() => {
        const userFind = users.find((user) => user._id === viewID)
        SetUserViewFn(userFind)
    }, [viewID, users])

    useEffect(() => {
        dispach(getUserActionFn())
    }, [dispach])

    return (
        <Layout>
            <div className='cover'>
                <div className='row'>

                    <div className='col-auto'> <div className='bg5_1 color1 py-2 px-3 d-inline-block cursor-pointer' onClick={() => backHandler()}>Back</div></div>
                    <div className='col'>
                        <div className='bg5_1 color1 py-2 px-3 d-inline-block cursor-pointer' onClick={navigate(`/crudwrap/crud1/edit1/${viewID}`)}>Edit</div>
                    </div>
                    <div className='col-auto'><h1>View Data</h1></div>
                </div>
            </div>

            {status === "getSuccess" &&
                <div className='cover'>
                    <div className="row">
                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Name</div>
                            <div className='ovr'>{UserView && UserView.name}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> User Name</div>
                            <div className='ovr'>{UserView && UserView.username}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Email</div>
                            <div className='ovr'>{UserView && UserView.email}</div>
                        </div>
                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Phone</div>
                            <div className='ovr'>{UserView && UserView.phone}</div>
                        </div>
                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Website</div>
                            <div className='ovr'>{UserView && UserView.website}</div>
                        </div>
                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Company Name</div>
                            <div className='ovr'>{UserView && UserView.company.Name}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> BS</div>
                            <div className='ovr'>{UserView && UserView.company.bs}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Catch Phrase</div>
                            <div className='ovr'>{UserView && UserView.company.catchPhrase}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> City</div>
                            <div className='ovr'>{UserView && UserView.address.city}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'>Street</div>
                            <div className='ovr'>{UserView && UserView.address.street}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'>Suit</div>
                            <div className='ovr'>{UserView && UserView.address.suit}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> ZipCode</div>
                            <div className='ovr'>{UserView && UserView.address.zipcode}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Latitude</div>
                            <div className='ovr'>{UserView && UserView.address.geo.lat}</div>
                        </div>

                        <div className="col-md-3 my-2 py-1 border1 bordercolor2_4">
                            <div className='ovr mb-1 fw-bold'> Langitude</div>
                            <div className='ovr'>{UserView && UserView.address.geo.lng}</div>
                        </div>
                    </div>
                </div>
            }

            <h1> {status === "getLoad" && "Loading"}</h1>
            <h1> {status === "getFailed" && "Try Again"}</h1>
        </Layout>
    )
}

export default View1;