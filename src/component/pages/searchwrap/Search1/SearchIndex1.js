import React, { useState } from 'react'
import Layout from '../../../layout/Layout';
import FilterBar1 from './FilterBar1';
import Post1 from './Post1';
import SearchList1 from './Listing1';

function SearchIndex1() {

    const [FiterStateValue, SetFiterFn] = useState('')
    const getFilterValueFn = (val) => {
        SetFiterFn(val)
    }

    return (
        <Layout>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1">
                        <h1>Search 1 </h1>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4">
                        <div> startsWith() Method</div>
                    </div>

                </div>
            </div>
            <div className='cover'>

                <div className='row'>
                    <div className="col-8">
                        <FilterBar1
                            getFilterValueFn={getFilterValueFn}
                        />
                        <div className='cover'>
                            <SearchList1
                                FiterStateValue={FiterStateValue}
                            />
                        </div>
                    </div>


                    <div className="col-4">
                        <Post1 />
                    </div>
                </div>


            </div>

        </Layout>
    )
}

export default SearchIndex1