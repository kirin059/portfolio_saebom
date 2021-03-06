import React from 'react';
import './Skills.scss';

const Skills = () => {

    return (
        <div className='skills'>
            <div className="header">
                <h4>Skills</h4>
            </div>

            <div className="stack">
                <div className="stack_box front-end">
                    <h3>Front-end</h3>
                    <div className="icon html-css-js"></div>
                    <div style={{ display: "flex", padding: "30px 0" }}>
                        <div className="icon ts"></div>
                        <div className="icon sass"></div>
                        <div className="icon styled"></div>
                    </div>
                    <div className="icon react"></div>
                    <div className="icon redux"></div>
                    <div className="icon svelte"></div>   
                </div>
                
                <div className="side-skills">
                    <div className="stack_box version-control">
                        <h3>Version Control</h3>
                        <div style={{ display: "flex" }}>
                            <div className="icon git"></div>
                            <div className="icon github"></div>
                        </div>
                        <div className="icon tree"></div>
                    </div>
                    <div className="stack_box deployment">
                        <h3>Deployment</h3>
                        <div className="icon amazon"></div>
                        <div className="icon netlify"></div>
                    </div>
                </div>
                <div className="stack_box communication">
                    <h3>Communication</h3>
                    <div className="icon zeplin"></div>
                    <div className="icon asana"></div>
                    <div className="icon figma"></div>
                    <div className="icon slack"></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;


{/* <div className="stack">
                <div className="stack_box">
                    <div className="icon html"></div>
                    <div className="content">
                        <p className="title"><strong>HTML5</strong></p>
                        <p>???????????? ????????? ????????? ??? ??????????????? ???????????? ???????????? ?????????.</p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon css"></div>
                    <div className="content">
                        <p className="title"><strong>CSS3</strong></p>
                        <p>CSS????????? ???????????? ????????? ????????? ?????? ???????????? ????????? ??? ?????????, ?????????????????? ???????????? ????????? ?????? ????????? ??? ????????????.</p>
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon javascript"></div>
                    <div className="content">
                        <p className="title"><strong>Javascript</strong></p>
                        <p>ES6 ?????? Javascript??? ????????? ?????? ??? ????????????. ????????? ??????????????? ????????? ????????? ????????? ??? ????????????.</p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon react"></div>
                    <div className="content">
                        <p className="title"><strong>React</strong></p>
                        <p>SPA Framework??? ?????? ?????? ????????? ????????? React Hook ??? React Router Hook??? ????????? ?????? ????????? ????????????. </p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon redux"></div>
                    <div className="content">
                        <p className="title"><strong>Redux</strong></p>
                        <p>Redux ?????? ?????? ?????? ????????? ??? ???????????? ???????????? ????????? ??? ????????? ????????????. </p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon svelte"></div>
                    <div className="content">
                        <p className="title"><strong>Svelte</strong></p>
                        <p>svelte ?????? ????????? ????????? ??? ?????????, svelte ??? ???????????? ?????? ????????? ????????????. </p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon sass"></div>
                    <div className="content">
                        <p className="title"><strong>Sass</strong></p>
                        <p>Nesting, Mixin ?????? ?????? ???????????? ??????????????? ??????????????? ??????????????? ????????? ?????? ?????? ????????? ???????????????.</p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon styled"></div>
                    <div className="content">
                        <p className="title"><strong>Styled Components</strong></p>
                        <p>Styled Components??? ?????? CSS pre-processor ????????? ???????????????.</p>
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon git"></div>
                    <div className="content">
                        <p className="title"><strong>Git & Github</strong></p>
                        <p>Github??? Git??? ???????????? ???????????? ????????????. Commit??????, Merge??? ?????? branch?????? ??? ???????????? ????????? ?????? ??? ????????????. </p>
                        <p>Git, Github??? ????????? ???????????? ???????????? ????????? ???????????????.</p>
                    </div>
                </div>  
            </div> */}