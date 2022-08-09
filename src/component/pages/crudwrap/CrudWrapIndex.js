import React from 'react';
import Layout from '../../shared/layout/Layout';
import { Link } from "react-router-dom";

function CrudWrapIndex() {

    const crudList = [
        { name: "Crud1", path: "/crudwrap/crud1" },
        { name: "Crud2", path: "/crudwrap/crud2" },
        { name: "Crud3", path: "/crudwrap/crud3" },
    ]

    return (
        <Layout>
            <div className='cover navwrap'>
                <div className='row'>
                    {crudList.map((curElem, index) => (
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

export default CrudWrapIndex