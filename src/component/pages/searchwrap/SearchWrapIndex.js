import React from 'react';
import Layout from '../../layout/Layout';
import { Link } from "react-router-dom";
function SearchWrapIndex() {
    const crudList = [
        { name: "Search 1", path: "/searchwrap/search1" },
        { name: "Search 2", path: "/searchwrap/search2" },
        { name: "Search 3", path: "/searchwrap/search3" },
        { name: "Search 4", path: "/searchwrap/search4" },
        { name: "Search 5", path: "/searchwrap/search5" },
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

export default SearchWrapIndex