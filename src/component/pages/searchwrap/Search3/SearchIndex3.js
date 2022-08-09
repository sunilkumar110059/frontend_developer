import React, { useState } from 'react'
import Layout from '../../../shared/layout/Layout';
import FilterBar3 from './FilterBar3';
import Post3 from './Post3';
import SearchList3 from './Listing3';

function SearchIndex3() {

    const [FiterStateValue, SetFiterFn] = useState('')
    const getFilterValueFn = (val) => {
        SetFiterFn(val)
    }

    return (
        <Layout>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1">
                        <h1>Search 3 </h1>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4">
                        <div> Bold Text
                        </div>
                    </div>

                </div>
            </div>
            <div className='cover'>

                <div className='row'>
                    <div className="col-8">
                        <FilterBar3
                            getFilterValueFn={getFilterValueFn}
                        />
                        <div className='cover'>
                            <SearchList3
                                FiterStateValue={FiterStateValue}
                            />
                        </div>
                    </div>


                    <div className="col-4">
                        <Post3 />
                    </div>
                </div>


            </div>

        </Layout>
    )
}

export default SearchIndex3