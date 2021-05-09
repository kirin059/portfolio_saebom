import React, { useState } from 'react';
import ModalHtml from '../../Components/Modal/ModalHtml/ModalHtml';
import ModalCss from '../../Components/Modal/ModalCss/ModalCss';
import ModalJavascript from '../Modal/ModalJavascript/ModalJavascript';
import ModalReact from '../Modal/ModalReact/ModalReact';
import ModalRedux from '../Modal/ModalRedux/ModalRedux';
import ModalSass from '../Modal/ModalSass/ModalSass';
import './Home.scss';
import ModalStyled from '../Modal/ModalStyled/ModalStyled';

const Home = () => {

    // function linkToGithub() {
    //     let link = "https://github.com/kirin059";
    //     window.open(link, '_blank')
    // }

    let [htmlAlert, sethtmlAlert] = useState(false);
    let [cssAlert, setcssAlert] = useState(false);
    let [javascriptAlert, setjavascriptAlert] = useState(false);
    let [reactAlert, setreactAlert] = useState(false);
    let [reduxAlert, setreduxAlert] = useState(false);
    let [sassAlert, setsassAlert] = useState(false);
    let [styledAlert, setstyledAlert] = useState(false);

    return (
        <div className="home">
            <div className="contents">
                <div className="main">
                    <span>함께 일하고 싶은 &nbsp;&nbsp;</span>
                    <span className="pink">FRONT-END DEVELOPER</span>
                </div>
                
                <div className="story">
                    <p>새로운 기술스택을 <span className="pinks">효율적</span>으로 받아들이고 <span className="pinks">성장</span>하는 것을 추구합니다.</p>
                    <p>긍정적인 에너지를 나누며, 남들과 함께할 때 <span className="pinks">시너지</span>를 낼 줄 아는 사람입니다.</p>
                </div>

                <div className="icons">
                    {
                         htmlAlert === true
                        ? <ModalHtml sethtmlAlert={sethtmlAlert}/>
                        : null
                    }
                    {
                         cssAlert === true
                        ? <ModalCss setcssAlert={setcssAlert}/>
                        : null
                    }
                    {
                         javascriptAlert === true
                        ? <ModalJavascript setjavascriptAlert={setjavascriptAlert}/>
                        : null
                    }
                    {
                         reactAlert === true
                        ? <ModalReact setreactAlert={setreactAlert}/>
                        : null
                    }
                    {
                         reduxAlert === true
                        ? <ModalRedux setreduxAlert={setreduxAlert}/>
                        : null
                    }
                    {
                         sassAlert === true
                        ? <ModalSass setsassAlert={setsassAlert}/>
                        : null
                    }
                    {
                         styledAlert === true
                        ? <ModalStyled setstyledAlert={setstyledAlert}/>
                        : null
                    }
                    <div className="stack">
                        <div className="styled" onClick={() => {
                            setstyledAlert(true)
                        }}></div>
                        <div className="sass" onClick={() => {
                            setsassAlert(true)
                        }}></div>
                        <div className="redux" onClick={() => {
                            setreduxAlert(true)
                        }}></div>
                        <div className="react" onClick={() => {
                            setreactAlert(true)
                        }}></div>
                        <div className="javascript" onClick={() => {
                            setjavascriptAlert(true)
                        }}></div>
                        <div className="css" onClick={() => {
                            setcssAlert(true)
                        }}></div>
                        <div className="html" onClick={() => {
                            sethtmlAlert(true)
                        }}></div>

                    </div>
                    <div className="link">
                        <div className="velog" onClick={() => {
                            window.open('https://velog.io/@kirin', '_blank')
                        }}></div>
                        <div className="github"  onClick={() => {
                            window.open('https://github.com/kirin059', '_blank')
                        }}></div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Home;