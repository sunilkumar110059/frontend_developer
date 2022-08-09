import React from 'react';
import Layout from '../../../shared/layout/Layout';

import Post2 from '../crud2/Post2';
import List2 from '../crud2/List2';

function CrudIndex2() {
    return (
        <Layout>
              <div className="cover bg2_5 px-3 py-1 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto">
                        <h1>Crud 2</h1>
                    </div>
                </div>
            </div> 
            <Post2 />
            <List2 />
        </Layout>
    )
}

export default CrudIndex2