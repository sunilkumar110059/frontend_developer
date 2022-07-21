import React from 'react';
import Layout from '../../layout/Layout';


function HomeIndex() {
    function randomFunc(){
        for(var i = 0; i < 2; i++){
          setTimeout(()=> console.log(i),1000);
        }
      }
      randomFunc(); 
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





export default HomeIndex
