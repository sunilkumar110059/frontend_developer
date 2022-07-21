import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchActionFn } from '../../../../redux/searchrdx/SearchSlice1'

function SearchList3
    ({ FiterStateValue }) {

    let dispatch = useDispatch()
    const searchdata = useSelector((state) => state.searchdata)
    let { data } = searchdata;
    const [CityState, SetCityFn] = useState(data)

    useEffect(() => {
        if (FiterStateValue !== "") {

            // let fltr = data.filter((urs) => urs.cityname.toLowerCase().includes(FiterStateValue.toLowerCase().trim().replace(/\s/g, "")))
            // let fltr = data.filter((urs) => urs.cityname.toLowerCase().includes(FiterStateValue.toLowerCase())).slice(0, 2)
            let fltr = data.filter((urs) => urs.cityname.toLowerCase().indexOf(FiterStateValue.toLowerCase()) !== -1)

            SetCityFn(fltr)
        }
        else {
            SetCityFn(data)
        }
    }, [data, FiterStateValue])

    useEffect(() => {
        dispatch(getSearchActionFn())
    }, [dispatch])

    return (
        <Fragment>

            <div className='row'>
                {CityState.map((cty, index) => (
                    <div className='col-2 my-2' key={index}>
                        <div className='ovr p-2 bg2_5 border1 bordercolor2_4'>
                            {cty.cityname}
                        </div>
                    </div>
                ))}
            </div>


            {CityState.length < 1 && (
                <h1>NO Data</h1>
            )}
        </Fragment>
    )
}

export default SearchList3
