import React from 'react';
import './App.css';
import { data  as mail} from './data.js';

function OneBar() {
  return (<one-bar><header className="one-bar gb_ja gb_Pa gb_Ae gb_pc" id="gb" role="banner" style={{backgroundColor:'transparent'}}>
  <div className="gb_xd gb_Od gb_Fd">
    <div className="gb_Dc gb_Kc gb_Lc" style={{minWidth: '238px'}}>
      <div className="gb_cc" aria-expanded="true" aria-label="Main menu" role="button" tabIndex="0"><svg focusable="false"
          viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg></div>
      <div className="gb_cc gb_fc gb_va" aria-label="Go back" role="button" tabIndex="0"><svg focusable="false"
          viewBox="0 0 24 24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </svg></div>
      <div className="gb_cc gb_gc gb_va" aria-label="Close" role="button" tabIndex="0"><svg viewBox="0 0 24 24">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
          </path>
        </svg></div>
      <div className="gb_6b">
        <div className="gb_7b gb_6d"><a className="gb_5d gb_8b gb_3d" href="#inbox" title="Gmail"><img className="gb_la"
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
              srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x.png 2x "
              style={{width:'109px', height:'40px'}} /></a></div>
      </div>
      <div className="gb_Dc gb_va gb_Ic gb_Jc"><span className="gb_Mc" aria-level="1" role="heading"></span></div>
    </div>
    <div className="gb_Dc gb_Jd gb_xe gb_ne gb_ue">
      <div className="gb_be gb_ae"></div>
      <div className="gb_pe">
        <form className="gb_Be gb_af" method="get" role="search" id="aso_search_form_anchor">
          <button className="gb_8e gb_7e" aria-label="Close search" type="button"><svg focusable="false" height="24px"
              viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg></button>
          <div className="gb_df gb_7e" gh="sb">
            <table cellSpacing="0" cellPadding="0" className="gstl_50 gstt" role="presentation" style={{height: '28px'}}>
              <tbody>
                <tr>
                  <td>
                    <table cellSpacing="0" cellPadding="0" style={{width: '100%'}}>
                      <tbody>
                        <tr>
                          <td className="gsib_a gb_We">
                            <div id="gs_lc50" style={{position: 'relative'}}><input className="gb_We" aria-label="Search mail"
                                autoComplete="off" placeholder="Search mail" defaultValue="" name="q" type="text"
                                style={{border: 'none', padding: '0px', margin: '0px', height: 'auto', width: '100%', background: 'url(&quot;data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D&quot;) transparent', position: 'absolute', zIndex: '6', left: '0px'}}
                                dir="ltr" spellCheck="false" aria-haspopup="true" aria-live="off"
                                aria-owns="gs_sbt50" /><input disabled="" autoComplete="off" autoCapitalize="off"
                                id="gs_taif50" className="gb_We" dir="ltr"
                                style={{border: 'none', padding: '0px', margin: '0px', height: 'auto', width: '100%', position: 'absolute', zIndex: '1', backgroundColor: 'transparent', WebkitTextFillColor: 'silver', color: 'silver', left: '0px', visibility: 'hidden'}} />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div><button className="gb_cf" type="button" gh="sda" role="button" data-tooltip="Show search options"
            aria-label="Advanced search options"><svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg></button><button className="gb_9e" aria-label="Clear search" type="button"><svg focusable="false"
              height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
              </path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg></button><button className="gb_6e gb_7e" aria-label="Search Mail" role="button"><svg focusable="false"
              height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z">
              </path>
              <path d="M0,0h24v24H0V0z" fill="none"></path>
            </svg></button>
          <table cellSpacing="0" cellPadding="0" className="gstl_50 gssb_c"
            style={{width: '100%', display: 'none', position: 'relative'}}>
            <tbody>
              <tr>
                <td className="gssb_f"></td>
                <td className="gssb_e" style={{width: '100%'}}></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className="gb_ce gb_ae">
        <div className="zo " data-tooltip="Support"><a className="gb_fe gb_de gb_jb t6" id="lZwQje" tabIndex="0"
            aria-label="Support" role="button" aria-expanded="false" aria-haspopup="true" aria-controls="M842Cd"><svg
              className="t7" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
              fill="#000000" focusable="false">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
              </path>
            </svg></a></div>
        <div id="M842Cd" className="t9" role="menu" tabIndex="0" aria-hidden="true"
          style={{display: 'none', left: '990px', top: '52px'}}>
          <div className="ua" aria-label="Help" tabIndex="-1" role="menuitem" jsname="j7LFlb">Help</div>
          <div className="ua" aria-label="Training" tabIndex="-1" role="menuitem" jsname="j7LFlb">Training</div>
          <div className="ua" aria-label="Updates" tabIndex="-1" role="menuitem" jsname="j7LFlb">Updates</div>
          <div className="ub" role="separator" aria-hidden="true"></div>
          <div className="ua" aria-label="Send feedback" tabIndex="-1" role="menuitem" jsname="j7LFlb">Send feedback</div>
        </div>
      </div>
    </div>
    <div className="gb_Ec gb_La gb_Dc gb_Md" data-ogsr-up="">
      <div className="gb_Fc">
        <div className="gb_vc">
          <div className="gb_w gb_Zc gb_f gb_sf" data-ogsr-alt="" id="gbwa">
            <div className="gb_rf"><a className="gb_x" aria-label="Google apps"
                href="https://www.google.com/intl/en/about/products?tab=mh0" aria-expanded="false" role="button"
                tabIndex="0"><svg className="gb_De" focusable="false" viewBox="0 0 24 24">
                  <path
                    d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z">
                  </path>
                </svg></a>
              <div className="gb_Sa"></div>
              <div className="gb_Ra"></div>
            </div>
          </div>
        </div>
        <div className="gb_Fa gb_Zc gb_jg gb_f gb_sf">
          <div className="gb_rf gb_Ka gb_jg gb_f"><a className="gb_x gb_Ea gb_f" aria-label="Google Account: Frankie Fu
  (frankiefu@gmail.com)"
              href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://mail.google.com/mail&amp;service=mail"
              role="button" tabIndex="0" aria-expanded="false"><span className="gb_xa gbii" aria-hidden="true"></span></a>
            <div className="gb_Sa"></div>
            <div className="gb_Ra"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="gb_A gb_z gb_U gb_B" aria-label="Google apps" aria-hidden="true" role="region"
      style={{maxHeight: '1006px', height: '596px'}}>
      <ul className="gb_C gb_u" aria-dropeffect="move">
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:0"><a className="gb_c" data-pid="192" draggable="false"
            href="https://myaccount.google.com/?utm_source=OGB&amp;tab=mk0&amp;utm_medium=app" id="gb192"
            rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_l"
              style={{backgroundImage:"url('https://lh3.googleusercontent.com/-z25R9grmylc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf7n0E-c8tM9erOHwBuKwAyzE2VJA.CMID/s64-b8-cc-rp-mo/photo.jpg')"}}></span><span
              className="gb_m">Account</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:1"><a className="gb_c" data-pid="1" draggable="false"
            href="https://www.google.com/webhp?tab=mw0" id="gb1" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1863px'}}></span><span
              className="gb_m">Search</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:2"><a className="gb_c" data-pid="8" draggable="false"
            href="https://maps.google.com/maps?hl=en&amp;tab=ml0" id="gb8" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1311px'}}></span><span
              className="gb_m">Maps</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:3"><a className="gb_c" data-pid="36" draggable="false"
            href="https://www.youtube.com/?gl=US&amp;tab=m10" id="gb36" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -2346px'}}></span><span
              className="gb_m">YouTube</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:4"><a className="gb_c" data-pid="78" draggable="false"
            href="https://play.google.com/?hl=en&amp;tab=m80" id="gb78" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -2277px'}}></span><span
              className="gb_m">Play</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:5"><a className="gb_c" data-pid="5" draggable="false"
            href="https://news.google.com/nwshp?hl=en&amp;tab=mn0" id="gb5" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1173px'}}></span><span
              className="gb_m">News</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:6"><a className="gb_c" data-pid="23" draggable="false"
            href="https://mail.google.com/mail/?tab=mm0" id="gb23" target="_top">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1725px'}}></span><span
              className="gb_m">Gmail</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:7"><a className="gb_c" data-pid="53" draggable="false"
            href="https://contacts.google.com/?hl=en&amp;tab=mC0" id="gb53" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -2070px'}}></span><span
              className="gb_m">Contacts</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:8"><a className="gb_c" data-pid="49" draggable="false"
            href="https://drive.google.com/?ogsrc=32&amp;tab=mo0&amp;authuser=0" id="gb49" rel="noreferrer"
            target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1656px'}}></span><span
              className="gb_m">Drive</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:9"><a className="gb_c" data-pid="24" draggable="false"
            href="https://www.google.com/calendar?tab=mc0" id="gb24" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -621px'}}></span><span
              className="gb_m">Calendar</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:a"><a className="gb_c" data-pid="51" draggable="false"
            href="https://translate.google.com/?hl=en&amp;tab=mT0" id="gb51" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -2553px'}}></span><span
              className="gb_m">Translate</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:b"><a className="gb_c" data-pid="31" draggable="false"
            href="https://photos.google.com/?tab=mq0&amp;pageId=none" id="gb31" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1587px'}}></span><span
              className="gb_m">Photos</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:c"><a className="gb_c" data-pid="6" draggable="false"
            href="https://www.google.com/shopping?hl=en&amp;source=og&amp;tab=mf0" id="gb6" rel="noreferrer"
            target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 0'}}></span><span
              className="gb_m">Shopping</span>
          </a></li>
      </ul>
      <div className="gb_Q gb_va">
        <div className="gb_n gb_k" style={{backgroundPosition:'0 -1725px'}}></div>
        <div className="gb_R">
          <div className="gb_S">Gmail</div><a className="gb_T gb_Tf" href="#">Add a shortcut</a>
        </div>
      </div><a className="gb_D gb_Tf" aria-label="More Google apps"
        href="https://www.google.com/intl/en/about/products?tab=mh0" target="_blank" aria-expanded="false"
        aria-hidden="true" style={{}}>More</a><span className="gb_E"></span>
      <ul className="gb_C gb_v" aria-dropeffect="move" aria-hidden="true">
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:d"><a className="gb_c" data-pid="27" draggable="false"
            href="https://www.google.com/finance?tab=me0" id="gb27" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -69px'}}></span><span
              className="gb_m">Finance</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:e"><a className="gb_c" data-pid="25" draggable="false"
            href="https://docs.google.com/document/?usp=docs_alc&amp;authuser=0" id="gb25" rel="noreferrer"
            target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1035px'}}></span><span
              className="gb_m">Docs</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:f"><a className="gb_c" data-pid="10" draggable="false"
            href="https://books.google.com/bkshp?hl=en&amp;tab=mp0" id="gb10" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -276px'}}></span><span
              className="gb_m">Books</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:g"><a className="gb_c" data-pid="30" draggable="false"
            href="https://www.blogger.com/?tab=mj0" id="gb30" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -2415px'}}></span><span
              className="gb_m">Blogger</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:h"><a className="gb_c" data-pid="461" draggable="false"
            href="https://duo.google.com/?usp=duo_ald" id="gb461" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -2484px'}}></span><span
              className="gb_m">Duo</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:i"><a className="gb_c" data-pid="300" draggable="false"
            href="https://hangouts.google.com/" id="gb300" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -828px'}}></span><span
              className="gb_m">Hangouts</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:j"><a className="gb_c" data-pid="136" draggable="false"
            href="https://keep.google.com/u/0" id="gb136" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_a"></span><span className="gb_m">Keep</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:k"><a className="gb_c" data-pid="357" draggable="false"
            href="https://jamboard.google.com/?authuser=0&amp;usp=jam_ald" id="gb357" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -483px'}}></span><span
              className="gb_m">Jamboard</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:l"><a className="gb_c" data-pid="265" draggable="false"
            href="https://classroom.google.com/?authuser=0" id="gb265" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -1242px'}}></span><span
              className="gb_m">Classroom</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:m"><a className="gb_c" data-pid="429" draggable="false"
            href="https://earth.google.com/web/" id="gb429" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -2208px'}}></span><span
              className="gb_m">Earth</span>
          </a></li>
        <li className="gb_h" aria-grabbed="false" id="ogbkddg:n"><a className="gb_c" data-pid="338" draggable="false"
            href="https://www.google.com/save" id="gb338" rel="noreferrer" target="_blank">
            <div className="gb_q"></div>
            <div className="gb_r"></div>
            <div className="gb_s"></div>
            <div className="gb_t"></div><span className="gb_k" style={{backgroundPosition:'0 -138px'}}></span><span
              className="gb_m">Collections</span>
          </a></li>
      </ul><a className="gb_E gb_Lf" href="https://www.google.com/intl/en/about/products?tab=mh0" target="_blank"
        aria-hidden="true">Even more from Google</a>
    </div>
    <div className="gb_Ta gb_z" aria-label="Account Information" aria-hidden="true" img-loaded="1">
      <div className="gb_Za"><a className="gb_Pf gb_0a gb_Tf" aria-label="Change profile picture."
          href="https://myaccount.google.com/?utm_source=OGB&amp;tab=mk0" target="_blank">
          <div className="gb_4a" style={{position:'relative'}}>
            <div className="gb_za gbip" title="Profile"></div><span className="gb_Na">Change</span>
          </div>
        </a>
        <div className="gb_1a">
          <div className="gb_9a gb_ab">Frankie Fu</div>
          <div className="gb_bb">frankiefu@gmail.com</div>
          <div className="gb_Of gb_Xa"><a href="https://myaccount.google.com/privacypolicy" target="_blank">Privacy</a>
          </div><a className="gb_0 gb_Qf gbp1 gb_ye gb_jb"
            href="https://myaccount.google.com/?utm_source=OGB&amp;tab=mk0&amp;utm_medium=act" target="_blank">Google
            Account</a>
        </div>
      </div>
      <div className="gb_sb">
        <div className="gb_yb gb_vb gb_va" aria-hidden="true"><a className="gb_Ab gb_Kb gb_Lb" target="_blank"
            rel="noreferrer"><img className="gb_Mb gb_4a"
              src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABECMWDqcrgqKSE4gEiC3ZjYXJkX3Bob3RvKihiMzY1YjZkNWM5OTAyYmU0ODAxMjZjNjE5OWFlM2EwYWIxMmRmZTM3MAFCna_G4j787yPJwYVHIgvMejeoSw?sz=48"
              alt="Profile" />
            <div className="gb_Db">
              <div className="gb_Ob">Frankie Fu</div>
              <div className="gb_Pb" dir="ltr">frankiefu@gmail.com (default)</div>
            </div>
          </a></div><a className="gb_Tb gb_va"
          href="https://myaccount.google.com/brandaccounts?authuser=0&amp;continue=https://mail.google.com/mail&amp;service=/mail/u/%24session_index/"
          aria-hidden="true"><span className="gb_Vb gb_ac"></span>
          <div className="gb_Wb">All your Brand Accounts »</div>
        </a>
      </div>
      <div className="gb_Vf gb_0b gb_va">
        <div className="gb_2b"></div>
      </div>
      <div className="gb_Nf gb_ib">
        <div><a className="gb_0 gb_Mf gb_ye gb_jb"
            href="https://accounts.google.com/AddSession?hl=en&amp;continue=https://mail.google.com/mail&amp;service=mail"
            target="_blank">Add account</a></div>
        <div><a className="gb_0 gb_Rf gb_Zf gb_ye gb_jb" id="gb_71"
            href="https://accounts.google.com/Logout?hl=en&amp;continue=https://mail.google.com/mail&amp;service=mail&amp;timeStmp=1560800784&amp;secTok=.AG5fkS9QXjF8E3hKQt1yO3cZGMN-iRJGCQ"
            target="_top">Sign out</a></div>
      </div>
    </div>
  </div>
  <div className="gb_Hd gb_Od"></div>
  </header></one-bar>)
}

function App() {
  return (<>
<OneBar></OneBar>
<div className="main">
  <div className="main-nav">
    <div className="compose-fab-container">
      <mwc-fab class="compose-mail-fab" extended><mwc-icon>add</mwc-icon><label slot="label">Compose</label></mwc-fab>
    </div>
    <ul className="folder-list">
      <li className="mdc-list-item">
        <mwc-icon graphic>inbox</mwc-icon>Inbox
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>star</mwc-icon>Starred
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>snooze</mwc-icon>Snoozed
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>send</mwc-icon>Sent
      </li>
      <li className="mdc-list-item">
        <mwc-icon graphic>drafts</mwc-icon>Drafts
      </li>
    </ul>
  </div>
  <div className="main-body">
    <div className="main-body-header">
      <mwc-checkbox></mwc-checkbox>
      <mwc-icon-button>refresh</mwc-icon-button>
      <mwc-icon-button>more_vert</mwc-icon-button>
      <div className="flex"></div>
      <span className="mail-last-range">1–{mail.length}</span>
      <mwc-icon-button disabled>chevron_left</mwc-icon-button>
      <mwc-icon-button>chevron_right</mwc-icon-button>
      <mwc-icon-button>settings</mwc-icon-button>
    </div>
    <div className="main-body-content">
      <mwc-tab-bar class="mail-tabs">
        <mwc-tab active>Primary</mwc-tab>
        <mwc-tab>Social</mwc-tab>
      </mwc-tab-bar>

      <div className="mail-list">
        {mail.map(({sender, subject, date, unread, favorite, star, important}, i) => (
          <div key={i} className={i % 2 ? 'mail-item' : 'mail-item odd'}>
            <mwc-icon-button class={unread ? 'unread' : ''}>{unread ? 'radio_button_checked' : 'radio_button_unchecked'}</mwc-icon-button>
            <mwc-icon-button class={star ? 'star' : ''}>{star ? 'star' : 'star_border'}</mwc-icon-button>
            <mwc-icon-button class={favorite ? 'favorite' : ''}>{favorite ? 'favorite' : 'favorite_border' }</mwc-icon-button>
            <mwc-icon-button class={important ? 'important' : ''}>{important ? 'bookmark' : 'bookmark_border'}</mwc-icon-button>
            <div className="sender">{sender}</div>
            <div className="subject">{subject}</div>
            <div className="date">{date}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  </>);
}

export default App;
