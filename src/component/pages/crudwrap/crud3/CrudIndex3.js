import React, { useState } from 'react';
import Layout from '../../../layout/Layout';

import Post3 from '../crud3/Post3';
import Edit3 from '../crud3/Edit3';
import List3 from '../crud3/List3';


function CrudIndex3() {
    const [GetEditId, SetGetEditIdFn] = useState('')
    const getEditFn = (id) => {
        SetGetEditIdFn(id)
    }
    return (
        <Layout>
            <div className="cover bg2_5 px-3 py-1 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto">
                        <h1>Crud 3</h1>
                    </div>
                </div>
            </div>

            {GetEditId !== "" ?
                (<Edit3
                    GetEditId={GetEditId}
                    SetGetEditIdFn={SetGetEditIdFn} />
                )
                : (<Post3 />)}

            <List3 getEditFn={getEditFn} />
        </Layout>
    )
}

export default CrudIndex3