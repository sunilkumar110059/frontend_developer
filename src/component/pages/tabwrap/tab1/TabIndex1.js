import React  from 'react'
import Layout from '../../../layout/Layout';
import Post1 from '../tab1/Post1';

function TabIndex1() {



    return (
        <Layout>
            <div className="cover bg2_5 px-3 py-1 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto">
                        <h1>Tab 1 </h1>
                    </div>
                </div>
            </div>

            <Post1 />

        </Layout>



    )
}

export default TabIndex1