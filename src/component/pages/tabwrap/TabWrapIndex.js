import React from 'react';
import Layout from '../../layout/Layout';
import { Link } from "react-router-dom";
function TabWrapIndex() {

    const tabList = [
        { name: "Tab 1", path: "/tabwrap/tab1" },
        { name: "Tab 2", path: "/tabwrap/tab2" },
        { name: "Tab 3", path: "/tabwrap/tab3" },
        { name: "Tab 4", path: "/tabwrap/tab4" },
        { name: "Tab 5", path: "/tabwrap/tab5" },
    ]
    
    return (
        <Layout>
            <div className='cover navwrap'>
                <div className='row'>
                    {tabList.map((curElem, index) => (
                        <div className="col-auto" key={index} >
                            <Link to={curElem.path}> {curElem.name} </Link>
                        </div>
                    ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default TabWrapIndex