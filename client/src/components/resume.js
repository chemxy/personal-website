import React from 'react';
import Heading from './heading';

class Work extends React.Component {
    render() {
        return (
           <></>
        )
    }
};

class Resume extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { date: new Date() };
    // }

    componentDidMount() {
        document.title = "Work Experience";
    }

    render() {
        return (
            <>
                <Heading content="Work experience" />

                <div class="main">
                    <div class="container">
                        <div class="row">

                            <div class="col-sm-8">
                              
                                <div class=" container ">
                                    <div id="work-exp-2">
                                        <h3 class="text-capitalize">Product Designer & Developer Co-op</h3>
                                        <h5 class="font-weight-normal">FROMASTERA DESIGN LTD, Vancouver, BC</h5>
                                        <h6 class="font-weight-normal font-italic">Sep 2020 – Jan 2021 </h6>
                                        <p>
                                            <li>
                                                Designed and implemented hardware products related to embedded systems such as full
                                                electronic circuits.
                                            </li>
                                            <li>
                                                Developed and implemented relevant software products such as control systems and
                                                bluetooth support applications.
                                            </li>
                                            <li>Main technologies and programming languages used are C, JavaScript, XML and Kotlin.
                                            </li>
                                        </p>
                                    </div>
                                    <hr />
                                    <br />
                                </div>

                                <div class=" container ">
                                    <div id="work-exp-1">
                                        <h3 class="text-capitalize">software developer co-op</h3>
                                        <h5 class="font-weight-normal">LIJIN TECHNOLOGY DEVELOPMENT CO., LTD, China</h5>
                                        <h6 class="font-weight-normal font-italic"> May 2020 – Sep 2020</h6>
                                        <p>
                                            <li>
                                                Designed and developed a web-based Wechat mini-program from scratch and connected it
                                                to the Wechat cloud database.
                                            </li>
                                            <li>
                                                Main technologies used are Wechat developer tools, WXML, WXSS, JSON and JavaScript.
                                            </li>
                                        </p>
                                    </div>
                                    <hr />
                                    <br />
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            </>
        );
    };

};
export default Resume;