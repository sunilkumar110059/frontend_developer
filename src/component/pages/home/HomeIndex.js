import React from 'react';
import Layout from '../../shared/layout/Layout';


function HomeIndex() {

    let factfun = (num) => {
        let int = num.toString().split("").reverse().join("")

        if (int.endsWith("-")) {
            int = "-" + int

        }
        console.log(mc)

    }

    factfun(-123)


    return (
        <Layout>
            <div className="cover bg2_5 px-3 py-1 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col-auto">
                        <h1>Home </h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


// Using call() method to Chain Constructors


export default HomeIndex
