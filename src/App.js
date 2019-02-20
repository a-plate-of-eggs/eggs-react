import React, { Component } from 'react';
import sampleThumb from './images/eggs_sampleImage.jpg';
import emartLogo from './images/emart-logo.png';
import homeplusLogo from './images/homeplus-logo.png';
import lottemartLogo from './images/lottemart-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="eggsBox" className="layout">
        <div className="header"> 
            <div className="hd_area">
                <div className="logo_area">
                    <h1 className="logo">
                        <a href="eggs.html">logo계란한판</a>
                    </h1>
                </div>
            </div>
        </div>
        <div className="content">
            {/*<span className="deco_egg"></span>*/}
            <div className="top_title">
                <p>계란, 살까?말까?</p>
            </div>
            <div className="content_box">
                <p className="main_title">우리집 신선계란 30 개입 대란</p>
                <div className="cnt_area">
                    <div className="info_left">
                        <div className="info_wrap">
                            <div className="img_area">
                                <img src={sampleThumb} alt="대표이미지 계란30구" />
                                <p>이미지출처: 이마트몰</p>
                            </div>
                            <div className="list_area">
                                <p className="top_price">최저가 <span>5,780</span><em>원</em></p>
                                <div className="list_wrap">
                                  <table className="info_list">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={emartLogo} alt="이마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>우리집 신선계란 30 개입 대란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={homeplusLogo} alt="홈플러스"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>양란 30개입 특란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>어린닭이 낳은 꼬마계란 30개입</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>일판란 1,800g(30구/특란)</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo"> 
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>국산 하얀달걀 (30구/대란)</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>[경기용인] 산지직송 무항생제 유정란 30구</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>우리집 신선계란 30 개입 대란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>우리집 신선계란 30 개입 대란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>우리집 신선계란 30 개입 대란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>우리집 신선계란 30 개입 대란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>우리집 신선계란 30 개입 대란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <span className="type_logo">
                                                      <img src={lottemartLogo} alt="롯데마트"/>
                                                  </span>
                                              </td>
                                              <td>
                                                  <span>우리집 신선계란 30 개입 대란</span>
                                              </td>
                                              <td>
                                                  <p className="price"><span>5,780</span>원</p>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info_rgt">
                        <p className="title">최저가 추이</p>
                        <div className="info_graph">
                            <div className="graph_tab">
                                <ul className="slc_period">
                                    <li className="on"><span className="ico_chk"></span>1개월</li>
                                    <li><span className="ico_chk"></span>3개월</li>
                                    <li><span className="ico_chk"></span>6개월</li>
                                    <li><span className="ico_chk"></span>12개월</li>
                                </ul>
                            </div>
                            <div className="graph_area">
                            </div>
                            <p>(2019.01.30)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="ft_area">
                <p className="txt_copyright">&copy; a plate of eggs 2019</p>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
