import React, { useState } from 'react'
import Layout from '../../../shared/layout/Layout';
import FilterBar2 from './FilterBar2';
import Post2 from './Post2';
import SearchList2 from './Listing2';

function SearchIndex2() {

    const [FiterStateValue, SetFiterFn] = useState('')
    const getFilterValueFn = (val) => {
        SetFiterFn(val)
    }

    return (
        <Layout>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1">
                        <h1>Search 2 </h1>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4">
                        <div> indexOf(value) Method</div>
                    </div>

                </div>
            </div>
            <div className='cover'>

                <div className='row'>
                    <div className="col-8">
                        <FilterBar2
                            getFilterValueFn={getFilterValueFn}
                        />
                        <div className='cover'>
                            <SearchList2
                                FiterStateValue={FiterStateValue}
                            />
                        </div>
                    </div>


                    <div className="col-4">
                        <Post2 />
                    </div>
                </div>


            </div>

        </Layout>
    )
}

export default SearchIndex2