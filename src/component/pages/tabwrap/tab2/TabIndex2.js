import React, { useState } from 'react'
import Layout from '../../../shared/layout/Layout';

import Next1 from './Step1/Next1'
import Next2 from './Step2/Next2'
import Next3 from './Step3/Next3'
import Next4 from './Step4/Next4'
import Next5 from './Step5/Next5'

const nextTabs = {
    1: Next1,
    2: Next2,
    3: Next3,
    4: Next4,
    5: Next5,
}

function TabIndex2() {

    const [StateNext, SetStateNextFun] = useState(1)

    const CompStep = nextTabs[StateNext]

    const nextHandle = () => {
        if (StateNext < 5) {
            SetStateNextFun(StateNext + 1)
        }
    }

    const backHandle = () => {
        if (StateNext > 1) {
            SetStateNextFun(StateNext - 1)
        }
    }


    return (
        <Layout>
            <div className="cover bg2_5 px-3 border1 bordercolor2_4 mb-4">
                <div className="row">
                    <div className="col py-1">
                        <h1>Tab 2</h1>
                    </div>
                    <div className="col-auto py-1 border_left1 bordercolor2_4 d-flex align-items-center">
                    <div> Next Component From Object and Button in Child Components</div>
                    </div>

                </div>
            </div>


            <div className="cover">
                <div className="row justify-content-center">
                    <div className="col-3 bg2_5 p-4 border1 bordercolor2_4">
                        <CompStep
                            nextHandle={nextHandle}
                            backHandle={backHandle}
                        />
                    </div>
                </div>

            </div>


        </Layout>
    )
}

export default TabIndex2