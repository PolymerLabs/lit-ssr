/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css, customElement } from 'lit-element';

@customElement('one-bar')
export class OneBar extends LitElement {

  static styles = css`
    .gb_Pa{font:13px/27px Roboto,RobotoDraft,Arial,sans-serif;z-index:986}@-webkit-keyframes gb__a{0%{opacity:0}50%{opacity:1}}@keyframes gb__a{0%{opacity:0}50%{opacity:1}}a.gb_W{border:none;color:#4285f4;cursor:default;font-weight:bold;outline:none;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap;-webkit-user-select:none}a.gb_W:hover:after,a.gb_W:focus:after{background-color:rgba(0,0,0,.12);content:'';height:100%;left:0;position:absolute;top:0;width:100%}a.gb_W:hover,a.gb_W:focus{text-decoration:none}a.gb_W:active{background-color:rgba(153,153,153,.4);text-decoration:none}a.gb_X{background-color:#4285f4;color:#fff}a.gb_X:active{background-color:#0043b2}.gb_Z{-webkit-box-shadow:0 1px 1px rgba(0,0,0,.16);box-shadow:0 1px 1px rgba(0,0,0,.16)}.gb_W,.gb_X,.gb_0,.gb_1{display:inline-block;line-height:28px;padding:0 12px;-webkit-border-radius:2px;border-radius:2px}.gb_0{background:#f8f8f8;border:1px solid #c6c6c6}.gb_1{background:#f8f8f8}.gb_0,#gb a.gb_0.gb_0,.gb_1{color:#666;cursor:default;text-decoration:none}#gb a.gb_1.gb_1{cursor:default;text-decoration:none}.gb_1{border:1px solid #4285f4;font-weight:bold;outline:none;background:#4285f4;background:-webkit-linear-gradient(top,#4387fd,#4683ea);background:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#4387fd,endColorstr=#4683ea,GradientType=0)}#gb a.gb_1.gb_1{color:#fff}.gb_1:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.15);box-shadow:0 1px 0 rgba(0,0,0,.15)}.gb_1:active{-webkit-box-shadow:inset 0 2px 0 rgba(0,0,0,.15);box-shadow:inset 0 2px 0 rgba(0,0,0,.15);background:#3c78dc;background:-webkit-linear-gradient(top,#3c7ae4,#3f76d3);background:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#3c7ae4,endColorstr=#3f76d3,GradientType=0)}.gb_va{display:none!important}.gb_wa{visibility:hidden}.gb_Zc{display:inline-block;vertical-align:middle}.gb_rf{position:relative}.gb_x{display:inline-block;outline:none;vertical-align:middle;-webkit-border-radius:2px;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;height:40px;width:40px;color:#000;cursor:pointer;text-decoration:none}#gb#gb a.gb_x{color:#000;cursor:pointer;text-decoration:none}.gb_Ra{border-color:transparent;border-bottom-color:#fff;border-style:dashed dashed solid;border-width:0 8.5px 8.5px;display:none;position:absolute;left:11.5px;top:43px;z-index:1;height:0;width:0;-webkit-animation:gb__a .2s;animation:gb__a .2s}.gb_Sa{border-color:transparent;border-style:dashed dashed solid;border-width:0 8.5px 8.5px;display:none;position:absolute;left:11.5px;z-index:1;height:0;width:0;-webkit-animation:gb__a .2s;animation:gb__a .2s;border-bottom-color:#ccc;border-bottom-color:rgba(0,0,0,.2);top:42px}x:-o-prefocus,div.gb_Sa{border-bottom-color:#ccc}.gb_z{background:#fff;border:1px solid #ccc;border-color:rgba(0,0,0,.2);color:#000;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.2);box-shadow:0 2px 10px rgba(0,0,0,.2);display:none;outline:none;overflow:hidden;position:absolute;right:8px;top:62px;-webkit-animation:gb__a .2s;animation:gb__a .2s;-webkit-border-radius:2px;border-radius:2px;-webkit-user-select:text}.gb_Zc.gb_mc .gb_Ra,.gb_Zc.gb_mc .gb_Sa,.gb_Zc.gb_mc .gb_z,.gb_mc.gb_z{display:block}.gb_Zc.gb_mc.gb_sf .gb_Ra,.gb_Zc.gb_mc.gb_sf .gb_Sa{display:none}.gb_tf{position:absolute;right:8px;top:62px;z-index:-1}.gb_Ba .gb_Ra,.gb_Ba .gb_Sa,.gb_Ba .gb_z{margin-top:-10px}.gb_Zc:first-child,#gbsfw:first-child+.gb_Zc{padding-left:4px}.gb_ja.gb_Ae .gb_Zc:first-child{padding-left:0}.gb_Fc{position:relative}.gb_uc .gb_Fc,.gb_Ld .gb_Fc{float:right}.gb_x{padding:8px;cursor:pointer}.gb_ja .gb_jb:not(.gb_W):focus img{background-color:rgba(0,0,0,0.20);outline:none;-webkit-border-radius:50%;border-radius:50%}.gb_Be button:focus svg,.gb_Be button:hover svg,.gb_Be button:active svg,.gb_x:focus,.gb_x:hover,.gb_x:active,.gb_x[aria-expanded=true]{outline:none;-webkit-border-radius:50%;border-radius:50%}.gb_dc .gb_Be.gb_Ce button:focus svg,.gb_dc .gb_Be.gb_Ce button:focus:hover svg,.gb_Be button:focus svg,.gb_Be button:focus:hover svg,.gb_x:focus,.gb_x:focus:hover{background-color:rgba(60,64,67,0.1)}.gb_dc .gb_Be.gb_Ce button:active svg,.gb_Be button:active svg,.gb_x:active{background-color:rgba(60,64,67,0.12)}.gb_dc .gb_Be.gb_Ce button:hover svg,.gb_Be button:hover svg,.gb_x:hover{background-color:rgba(60,64,67,0.08)}.gb_fa .gb_x.gb_Ea:hover{background-color:transparent}.gb_x[aria-expanded=true],.gb_x:hover[aria-expanded=true]{background-color:rgba(95,99,104,0.24)}.gb_x[aria-expanded=true] .gb_De,.gb_x[aria-expanded=true] .gb_Ee{fill:#5f6368;opacity:1}.gb_dc .gb_Be button:hover svg,.gb_dc .gb_x:hover{background-color:rgba(232,234,237,0.08)}.gb_dc .gb_Be button:focus svg,.gb_dc .gb_Be button:focus:hover svg,.gb_dc .gb_x:focus,.gb_dc .gb_x:focus:hover{background-color:rgba(232,234,237,0.10)}.gb_dc .gb_Be button:active svg,.gb_dc .gb_x:active{background-color:rgba(232,234,237,0.12)}.gb_dc .gb_x[aria-expanded=true],.gb_dc .gb_x:hover[aria-expanded=true]{background-color:rgba(255,255,255,0.12)}.gb_dc .gb_x[aria-expanded=true] .gb_De,.gb_dc .gb_x[aria-expanded=true] .gb_Ee{fill:#ffffff;opacity:1}.gb_Zc{padding:4px}.gb_ja.gb_Ae .gb_Zc{padding:4px 2px}.gb_ja.gb_Ae .gb_Fa.gb_Zc{padding-left:6px}.gb_z{z-index:991;line-height:normal}.gb_z.gb_Fe{left:8px;right:auto}@media (max-width:350px){.gb_z.gb_Fe{left:0}}.gb_He .gb_z{top:56px}.gb_w .gb_x,.gb_y .gb_w .gb_x{background-position:-64px -29px}.gb_g .gb_w .gb_x{background-position:-29px -29px;opacity:1}.gb_w .gb_x,.gb_w .gb_x:hover,.gb_w .gb_x:focus{opacity:1}.gb_vd{display:none}.gb_Ic{font-family:Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:20px;font-weight:400;letter-spacing:.25px;line-height:48px;margin-bottom:2px;opacity:1;overflow:hidden;padding-left:16px;position:relative;text-overflow:ellipsis;vertical-align:middle;top:2px;white-space:nowrap;-webkit-flex:1 1 auto;flex:1 1 auto}.gb_Ic.gb_Jc{color:#3c4043}.gb_ja.gb_ka .gb_Ic{margin-bottom:0}.gb_Kc.gb_Lc .gb_Ic{padding-left:4px}.gb_ja.gb_ka .gb_Mc{position:relative;top:-2px}.gb_ja{color:black;min-width:320px;position:relative;-webkit-transition:box-shadow 250ms;transition:box-shadow 250ms}.gb_ja.gb_lc{min-width:240px}.gb_ja.gb_wd .gb_Dc{display:none}.gb_ja.gb_wd .gb_xd{height:56px}header.gb_ja{display:block}.gb_ja svg{fill:currentColor}.gb_yd{position:fixed;top:0;width:100%}.gb_zd{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.2);box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.2)}.gb_Ad{height:64px}.gb_ja:not(.gb_pc) .gb_Oc.gb_Pc:not(.gb_Bd),.gb_ja:not(.gb_pc) .gb_sd:not(.gb_Bd),.gb_ja.gb_Cd .gb_Oc.gb_Pc.gb_Bd,.gb_ja.gb_Cd .gb_sd.gb_Bd{display:none!important}.gb_xd{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;justify-content:space-between;min-width:-webkit-min-content;min-width:min-content}.gb_ja:not(.gb_ka) .gb_xd{padding:8px}.gb_ja.gb_Dd .gb_xd{-webkit-flex:1 0 auto;flex:1 0 auto}.gb_ja .gb_xd.gb_Ed.gb_Fd{min-width:0}.gb_ja.gb_ka .gb_xd{padding:4px;padding-left:8px;min-width:0}.gb_Dc{height:48px;vertical-align:middle;white-space:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-user-select:none}.gb_Id>.gb_Dc{display:table-cell;width:100%}.gb_Kc{padding-right:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex:1 0 auto;flex:1 0 auto}.gb_ja.gb_ka .gb_Kc{padding-right:14px}.gb_Jd{-webkit-flex:1 1 100%;flex:1 1 100%}.gb_Jd>:only-child{display:inline-block}.gb_Ec.gb_vc{padding-left:4px}.gb_Ec.gb_Kd,.gb_ja.gb_Dd .gb_Ec,.gb_ja.gb_ka:not(.gb_Ld) .gb_Ec{padding-left:0}.gb_ja.gb_ka .gb_Ec.gb_Kd{padding-right:0}.gb_ja.gb_ka .gb_Ec.gb_Kd .gb_fa{margin-left:10px}.gb_vc{display:inline}.gb_ja.gb_pc .gb_Ec.gb_Md{padding-left:2px}.gb_Ic{display:inline-block}.gb_Ec{-webkit-box-sizing:border-box;box-sizing:border-box;height:48px;line-height:normal;padding:0 4px;padding-left:30px;-webkit-flex:0 0 auto;flex:0 0 auto;-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;justify-content:flex-end}.gb_Ld{height:48px}.gb_ja.gb_Ld{min-width:initial;min-width:auto}.gb_Ld .gb_Ec{float:right;padding-left:32px}.gb_Nd{font-size:14px;max-width:200px;overflow:hidden;padding:0 12px;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:text}.gb_Od{-webkit-transition:background-color .4s;transition:background-color .4s}.gb_Pd{color:black}.gb_dc{color:white}.gb_ja a,.gb_ic a{color:inherit}.gb_m{color:rgba(0,0,0,0.87)}.gb_ja svg,.gb_ic svg,.gb_Kc .gb_Qd,.gb_uc .gb_Qd{color:#5f6368;opacity:1}.gb_dc svg,.gb_ic.gb_nc svg,.gb_dc .gb_Kc .gb_Qd,.gb_dc .gb_Kc .gb_cc,.gb_dc .gb_Kc .gb_Mc,.gb_ic.gb_nc .gb_Qd{color:rgba(255,255,255,.87)}.gb_dc .gb_Kc .gb_la:not(.gb_Rd){opacity:.87}.gb_Jc{color:inherit;opacity:1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}.gb_dc .gb_Jc,.gb_Pd .gb_Jc{opacity:1}.gb_Sd{position:relative}.gb_Td{line-height:normal;padding-right:15px}a.gb_d,span.gb_d{color:rgba(0,0,0,0.87);text-decoration:none}.gb_dc a.gb_d,.gb_dc span.gb_d{color:white}a.gb_d:hover,a.gb_d:focus{opacity:.85;text-decoration:underline}.gb_e{display:inline-block;padding-left:15px}.gb_e .gb_d{display:inline-block;line-height:24px;outline:none;vertical-align:middle}.gb_Ud{font-family:Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:500;font-size:14px;letter-spacing:.25px;line-height:16px;margin-left:10px;margin-right:8px;min-width:96px;padding:9px 23px;text-align:center;vertical-align:middle;-webkit-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}.gb_ja.gb_Ld .gb_Ud{margin-left:8px}#gb a.gb_1.gb_1.gb_Ud,#gb a.gb_0.gb_0.gb_Ud{cursor:pointer}.gb_1.gb_Ud:hover{background:#2b7de9;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.gb_1.gb_Ud:focus,.gb_1.gb_Ud:hover:focus{background:#5094ed;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.gb_1.gb_Ud:active{background:#63a0ef;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.gb_Ud:not(.gb_0){background:#1a73e8;border:1px solid transparent}.gb_ja.gb_ka .gb_Ud{padding:9px 15px;min-width:80px}#gb a.gb_1.gb_Vd.gb_Ud,#gb a.gb_Ud.gb_0{background:#ffffff;border-color:#dadce0;-webkit-box-shadow:none;box-shadow:none;color:#1a73e8}#gb a.gb_1.gb_Vd.gb_Ud:hover,#gb a.gb_Ud.gb_0:hover{background:#f8fbff;border-color:#cce0fc}#gb a.gb_1.gb_Vd.gb_Ud:focus,#gb a.gb_1.gb_Vd.gb_Ud:focus:hover,#gb a.gb_Ud.gb_0:focus,#gb a.gb_Ud.gb_0:focus:hover{background:#f4f8ff;border-color:#c9ddfc}#gb a.gb_1.gb_Vd.gb_Ud:active,#gb a.gb_Ud.gb_0:active{background:#ecf3fe}#gb a.gb_1.gb_Vd.gb_Ud:active{-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,0.3),0 2px 6px 2px rgba(0,0,0,0.15);box-shadow:0 1px 2px 0 rgba(0,0,0,0.3),0 2px 6px 2px rgba(0,0,0,0.15)}#gb a.gb_Ud.gb_0:not(.gb_Vd):active{-webkit-box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)}.gb_fa{background-color:rgba(255,255,255,0.88);cursor:pointer;display:inline-block;overflow:hidden;padding:0;vertical-align:middle;border:1px solid #dadce0;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:8px;border-radius:8px}.gb_fa:hover{border:1px solid #d2e3fc;background-color:rgba(248,250,255,0.88)}.gb_fa:focus{border:1px solid #fff;background-color:rgba(255,255,255);-webkit-box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15);box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.gb_ga{display:inline-block;padding-left:7px;padding-bottom:2px;text-align:center;vertical-align:middle}.gb_ga.gb_ha{background-color:#f1f3f4;-webkit-border-radius:4px;border-radius:4px;margin-left:8px;padding-left:0}.gb_ga.gb_ha .gb_ia{vertical-align:middle}.gb_ja:not(.gb_ka) .gb_fa{margin-left:10px;margin-right:4px}.gb_fa .gb_ia.gb_la{min-width:0}.gb_xa{-webkit-background-size:32px 32px;background-size:32px 32px;-webkit-border-radius:50%;border-radius:50%;display:block;margin:0;overflow:hidden;position:relative;height:32px;width:32px;z-index:0}@media (min-resolution:1.25dppx),(-o-min-device-pixel-ratio:5/4),(-webkit-min-device-pixel-ratio:1.25),(min-device-pixel-ratio:1.25){.gb_xa::before{display:inline-block;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left 0;transform-origin:left 0}.gb_za::before{display:inline-block;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left 0;transform-origin:left 0}.gb_ya .gb_za::before{-webkit-transform:scale(0.416666667);transform:scale(0.416666667)}}.gb_xa:hover,.gb_xa:focus{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.15);box-shadow:0 1px 0 rgba(0,0,0,.15)}.gb_xa:active{-webkit-box-shadow:inset 0 2px 0 rgba(0,0,0,.15);box-shadow:inset 0 2px 0 rgba(0,0,0,.15)}.gb_xa:active::after{background:rgba(0,0,0,.1);-webkit-border-radius:50%;border-radius:50%;content:'';display:block;height:100%}.gb_Aa{cursor:pointer;line-height:40px;min-width:30px;opacity:.75;overflow:hidden;vertical-align:middle;text-overflow:ellipsis}.gb_x.gb_Aa{width:auto}.gb_Aa:hover,.gb_Aa:focus{opacity:.85}.gb_Ba .gb_Aa,.gb_Ba .gb_Ca{line-height:26px}#gb#gb.gb_Ba a.gb_Aa,.gb_Ba .gb_Ca{font-size:11px;height:auto}.gb_Da{border-top:4px solid #000;border-left:4px dashed transparent;border-right:4px dashed transparent;display:inline-block;margin-left:6px;opacity:.75;vertical-align:middle}.gb_Ea:hover .gb_Da{opacity:.85}.gb_fa>.gb_Fa{padding:3px 3px 3px 4px}.gb_Ha.gb_wa{color:#fff}.gb_g .gb_Aa,.gb_g .gb_Da{opacity:1}#gb#gb.gb_g.gb_g a.gb_Aa,#gb#gb .gb_g.gb_g a.gb_Aa{color:#fff}.gb_g.gb_g .gb_Da{border-top-color:#fff;opacity:1}.gb_y .gb_xa:hover,.gb_g .gb_xa:hover,.gb_y .gb_xa:focus,.gb_g .gb_xa:focus{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 0 rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.2)}.gb_Ia .gb_Fa,.gb_Ja .gb_Fa{position:absolute;right:1px}.gb_Fa.gb_f,.gb_Ka.gb_f,.gb_Ea.gb_f{-webkit-flex:0 1 auto;flex:0 1 auto;-webkit-flex:0 1 main-size;flex:0 1 main-size}.gb_La.gb_Ma .gb_Aa{width:30px!important}.gb_Na.gb_wa{display:none}.gb_Oa{height:40px;position:absolute;right:-5px;top:-5px;width:40px}.gb_Pa .gb_Oa,.gb_Qa .gb_Oa{right:0;top:0}.gb_Fa .gb_x{padding:4px}.gb_Xd{display:none}.gb_6b{display:inline-block;position:relative;top:2px;-webkit-user-select:none}.gb_1d .gb_6b{display:none}.gb_xd .gb_7b{line-height:normal;position:relative;padding-left:16px}.gb_Kc.gb_Lc .gb_7b{padding-left:0}.gb_Kc .gb_7b{padding-left:12px}.gb_8b.gb_2d{direction:ltr}.gb_8b.gb_2d .gb_Qd{padding-left:8px;padding-right:0}.gb_8b .gb_Hc:before{content:url('https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg');display:inline-block;height:24px;width:74px}.gb_8b .gb_Hc{height:24px;width:74px;display:inline-block;vertical-align:middle}.gb_8b{display:inline-block;vertical-align:middle}.gb_8b .gb_Hc,.gb_8b.gb_3d,.gb_8b:not(.gb_3d):not(:focus){outline:none}.gb_ia{display:inline-block;vertical-align:middle}.gb_bc{border:none;display:block;visibility:hidden}img.gb_la{border:0;vertical-align:middle}.gb_nc .gb_8b .gb_Hc:before,.gb_dc .gb_8b .gb_Hc:before{content:url('https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg')}.gb_Pd .gb_8b .gb_Hc:before{content:url('https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg')}@media screen and (-ms-high-contrast:black-on-white){.gb_dc .gb_8b .gb_Hc:before{content:url('https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg')}}@media screen and (-ms-high-contrast:white-on-black){.gb_Pd .gb_8b .gb_Hc:before{content:url('https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg')}}.gb_ia{background-repeat:no-repeat}.gb_Qd{display:inline-block;font-family:'Product Sans',Arial,sans-serif;font-size:22px;line-height:24px;padding-left:8px;position:relative;top:-1.5px;vertical-align:middle}.gb_Kc .gb_Qd{padding-left:4px}.gb_Kc .gb_Qd.gb_4d{padding-left:0}.gb_la.gb_Rd{padding-right:4px}.gb_nc .gb_Jc.gb_Qd{opacity:1}.gb_5d:focus .gb_Qd{text-decoration:underline}.gb_6d img.gb_la{margin-bottom:4px}.gb_cc{-webkit-border-radius:50%;border-radius:50%;display:inline-block;margin:0 4px;padding:12px;overflow:hidden;vertical-align:middle;cursor:pointer;height:24px;width:24px;-webkit-user-select:none;-webkit-flex:0 0 auto;flex:0 0 auto}.gb_ka .gb_cc{margin:0 4px 0 0}.gb_cc:focus,.gb_cc:focus:hover{background-color:rgba(60,64,67,0.1);outline:none}.gb_cc:active{background-color:rgba(60,64,67,0.12);outline:none}.gb_cc:hover{background-color:rgba(60,64,67,0.08);outline:none}.gb_dc .gb_cc:hover{background-color:rgba(232,234,237,0.08)}.gb_dc .gb_cc:focus,.gb_dc .gb_cc:focus:hover{background-color:rgba(232,234,237,0.1)}.gb_dc .gb_cc:active{background-color:rgba(232,234,237,0.12)}.gb_ec{display:none}.gb_fc{-webkit-transform:none;transform:none}.gb_hc{display:none}.gb_ic{background-color:#fff;bottom:0;color:#000;height:-webkit-calc(100vh - 100%);height:calc(100vh - 100%);overflow-y:auto;overflow-x:hidden;position:absolute;top:100%;z-index:990;will-change:visibility;visibility:hidden;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-transition:transform .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear .25s;transition:transform .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear .25s}.gb_ic.gb_jc.gb_kc,.gb_ic.gb_jc.gb_kc:hover{overflow:visible}.gb_ic.gb_ka{width:264px;-webkit-transform:translateX(-264px);transform:translateX(-264px)}.gb_ic:not(.gb_ka){width:280px;-webkit-transform:translateX(-280px);transform:translateX(-280px)}.gb_lc .gb_ic{width:195px}.gb_ic.gb_mc{-webkit-transform:translateX(0);transform:translateX(0);visibility:visible;-webkit-box-shadow:0 0 16px rgba(0,0,0,.28);box-shadow:0 0 16px rgba(0,0,0,.28);-webkit-transition:transform .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear 0s;transition:transform .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear 0s}.gb_ic.gb_nc{background-color:rgba(32,33,36,1);color:#e8eaed}.gb_oc.gb_pc{background-color:transparent;-webkit-box-shadow:0 0;box-shadow:0 0}.gb_oc.gb_pc>:not(.gb_qc){display:none}.gb_qc{display:-webkit-flex;display:flex;-webkit-flex:1 1 auto;flex:1 1 auto;-webkit-flex-direction:column;flex-direction:column}.gb_qc>.gb_rc{-webkit-flex:1 0 auto;flex:1 0 auto}.gb_qc>.gb_sc{-webkit-flex:0 0 auto;flex:0 0 auto}.gb_tc{list-style:none;margin-top:0;margin-bottom:0;padding:8px 0}.gb_ic:not(.gb_oc) .gb_tc:first-child{padding:0 0 8px 0}.gb_tc:not(:last-child){border-bottom:1px solid #ddd}.gb_nc .gb_tc:not(:last-child){border-bottom:1px solid #5f6368}.gb_nc .gb_uc .gb_vc{background-color:rgba(32,33,36,1);border-bottom:1px solid #5f6368}.gb_wc{cursor:pointer}.gb_xc:empty{display:none}.gb_wc,.gb_xc{display:block;min-height:40px;padding-bottom:4px;padding-top:4px;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.87)}.gb_nc .gb_wc{color:#e8eaed}.gb_nc .gb_xc{color:#9aa0a6}.gb_ic.gb_ka .gb_wc{padding-left:16px}.gb_ic:not(.gb_ka) .gb_wc,.gb_ic:not(.gb_ka) .gb_xc{padding-left:24px}.gb_wc:hover{background:rgba(0,0,0,0.12)}.gb_nc .gb_wc:hover{background:rgba(232,234,237,0.08)}.gb_wc.gb_yc{background:rgba(0,0,0,0.12);font-weight:bold;color:rgba(0,0,0,0.87)}.gb_nc .gb_wc.gb_yc{background:rgba(232,234,237,0.12);color:rgba(255,255,255,.87)}.gb_wc .gb_zc{text-decoration:none;display:inline-block;width:100%}.gb_wc .gb_zc:focus{outline:none}.gb_wc .gb_Ac,.gb_xc{padding-left:32px;display:inline-block;line-height:40px;vertical-align:top;width:176px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gb_lc .gb_wc .gb_Ac,.gb_lc .gb_xc{padding-left:16px;width:138px}.gb_qc.gb_o .gb_zc:focus .gb_Ac{text-decoration:underline}.gb_wc .gb_Bc{height:24px;width:24px;float:left;margin-top:8px;vertical-align:middle}.gb_uc>*{display:block;min-height:48px}.gb_ja.gb_ka .gb_uc>*{padding-top:4px;padding-bottom:4px;padding-left:16px}.gb_ja:not(.gb_ka) .gb_uc>*{padding-top:8px;padding-bottom:8px;padding-left:24px}.gb_ja:not(.gb_ka) .gb_Kc .gb_6b{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}.gb_uc .gb_6b{display:table-cell;height:48px;vertical-align:middle}.gb_uc .gb_vc{background-color:#f5f5f5;display:block}.gb_uc .gb_vc .gb_Zc{float:right}.gb_ja.gb_ka .gb_uc .gb_vc{padding:4px}.gb_ja:not(.gb_ka) .gb_uc .gb_vc{padding:8px}.gb_uc .gb_Aa{width:40px}.gb_uc .gb_Da{position:absolute;right:0;top:50%}.gb_ic.gb_7d{-webkit-overflow-scrolling:touch}.gb_ic .gb_5d{text-decoration:none}.gb_ic .gb_Qd{display:inline;white-space:normal;word-break:break-all;word-break:break-word}body.gb_8d [data-ogpc]{-webkit-transition:margin-left .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear .25s;transition:margin-left .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear .25s}body.gb_8d.gb_9d [data-ogpc]{-webkit-transition:margin-left .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear 0s;transition:margin-left .25s cubic-bezier(0.4,0.0,0.2,1),visibility 0s linear 0s}body [data-ogpc]{margin-left:0}body.gb_9d [data-ogpc]{margin-left:280px}.gb_of{cursor:pointer;padding:13px}.gb_pf{background-color:rgba(0,0,0,0.1);-webkit-box-shadow:inset 1px 1px 3px rgba(0,0,0,.24);box-shadow:inset 1px 1px 3px rgba(0,0,0,.24);width:34px;height:17px;-webkit-border-radius:8px;border-radius:8px;position:relative;-webkit-transition:background-color ease 150ms;transition:background-color ease 150ms}.gb_of[aria-pressed=true] .gb_pf{background-color:rgba(255,255,255,0.1)}.gb_qf{position:absolute;width:25px;height:25px;-webkit-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);top:-4px;-webkit-transform:translateX(-12px);transform:translateX(-12px);background-color:white;-webkit-transition:transform ease 150ms;transition:transform ease 150ms}.gb_of[aria-pressed=true] .gb_qf{-webkit-transform:translateX(20px);transform:translateX(20px)}.gb_qf img{position:absolute;margin:5px;width:15px;height:15px}.gb_ae{line-height:0;-webkit-user-select:none}.gb_Jd>.gb_ae:only-child{float:right}.gb_ae .gb_fe{display:inline-block}.gb_ae .gb_jb{cursor:pointer}.gb_ae .gb_jb img{opacity:.54;width:24px;height:24px;padding:10px}.gb_dc .gb_ae .gb_jb img{opacity:1}.gb_be{text-align:right}.gb_fe{text-align:initial}.gb_ae .gb_ge,.gb_ae .gb_he{display:table-cell;height:48px;vertical-align:middle}.gb_ae .gb_ge{overflow:hidden}.gb_ke{padding-left:16px}.gb_ke:not(.gb_ka){padding-left:24px}.gb_le{color:black;opacity:.54}.gb_me{background:white;-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);overflow-y:hidden;position:absolute;right:24px;top:48px}.gb_Nc{display:none}.gb_Nc.gb_mc{display:block}.gb_Oc{background-color:#fff;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.08);box-shadow:0 1px 0 rgba(0,0,0,0.08);color:#000;position:relative;z-index:986}.gb_Pc{height:40px;padding:16px 24px;white-space:nowrap}.gb_Qc{position:fixed;bottom:16px;padding:16px;right:16px;white-space:normal;width:328px;-webkit-transition:width .2s,bottom .2s,right .2s;transition:width .2s,bottom .2s,right .2s;-webkit-border-radius:2px;border-radius:2px;-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12);box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}@media (max-width:400px){.gb_Oc.gb_Qc{max-width:368px;width:auto;bottom:0;right:0}}.gb_Oc .gb_jb{border:0;font-weight:500;font-size:14px;line-height:36px;min-width:32px;padding:0 16px;vertical-align:middle}.gb_Oc .gb_jb:before{content:'';height:6px;left:0;position:absolute;top:-6px;width:100%}.gb_Oc .gb_jb:after{bottom:-6px;content:'';height:6px;left:0;position:absolute;width:100%}.gb_Oc .gb_jb+.gb_jb{margin-left:8px}.gb_Rc{height:48px;padding:4px;margin:-8px 0 0 -8px}.gb_Qc .gb_Rc{float:left;margin:-4px}.gb_Sc{font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;overflow:hidden;vertical-align:top}.gb_Pc .gb_Sc{display:inline-block;padding-left:8px;width:640px}.gb_Qc .gb_Sc{display:block;margin-left:56px;padding-bottom:16px}.gb_Tc{background-color:inherit}.gb_Pc .gb_Tc{display:inline-block;position:absolute;top:18px;right:24px}.gb_Qc .gb_Tc{text-align:right;padding-right:24px;padding-top:6px}.gb_Tc .gb_Uc{height:1.5em;margin:-.25em 10px -.25em 0;vertical-align:text-top;width:1.5em}.gb_Vc{line-height:20px;font-size:16px;font-weight:700;color:rgba(0,0,0,.87)}.gb_Qc .gb_Vc{color:rgba(0,0,0,.87);font-size:16px;line-height:20px;padding-top:8px}.gb_Pc .gb_Vc,.gb_Pc .gb_Wc{width:640px}.gb_Wc .gb_Xc,.gb_Wc{line-height:20px;font-size:13px;font-weight:400;color:rgba(0,0,0,.54)}.gb_Qc .gb_Wc .gb_Xc{font-size:14px}.gb_Qc .gb_Wc{padding-top:12px}.gb_Qc .gb_Wc a{color:rgba(66,133,244,1)}.gb_Zc.gb_0c{padding:0}.gb_0c .gb_z{background:#ffffff;border:solid 1px transparent;-webkit-border-radius:8px;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;right:16px;top:72px;-webkit-box-shadow:0 1px 2px 0 rgba(65,69,73,0.3),0 3px 6px 2px rgba(65,69,73,0.15);box-shadow:0 1px 2px 0 rgba(65,69,73,0.3),0 3px 6px 2px rgba(65,69,73,0.15)}.gb_1c.gb_0c .gb_z{background:#4d90fe}a.gb_2c{color:#5f6368!important;font-size:22px;height:24px;opacity:1;padding:8px;position:absolute;right:8px;top:8px;text-decoration:none!important;width:24px}.gb_1c a.gb_2c{color:#c1d1f4!important}a.gb_2c:focus,a.gb_2c:active,a.gb_2c:focus:hover{background-color:#e8eaed;-webkit-border-radius:50%;border-radius:50%;outline:none}a.gb_2c:hover{background-color:#f1f3f4;-webkit-border-radius:50%;border-radius:50%;outline:none}svg.gb_3c{fill:#5f6368;opacity:1}.gb_4c{padding:0;white-space:normal;display:table}.gb_5c{line-height:normal;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif}.gb_0c .gb_1:active{outline:none;-webkit-box-shadow:0 4px 5px rgba(0,0,0,.16);box-shadow:0 4px 5px rgba(0,0,0,.16)}.gb_W.gb_6c.gb_7c{-webkit-border-radius:4px;border-radius:4px;cursor:pointer;height:16px;color:#5f6368;font-family:Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:500;letter-spacing:.25px;line-height:16px;padding:8px 6px;text-transform:none;-webkit-font-smoothing:antialiased}.gb_W.gb_6c:hover{background-color:#f8f9fa}.gb_W.gb_6c:focus,.gb_W.gb_6c:hover:focus{background-color:#f1f3f4;border-color:transparent}.gb_W.gb_6c:active{background-color:#f1f3f4;-webkit-box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15);box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.gb_Xc{color:#5f6368;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:14px;letter-spacing:.25px;line-height:20px;margin:0;margin-bottom:5px}.gb_8c{text-align:right;font-size:14px;padding-bottom:0;white-space:nowrap}.gb_8c .gb_9c{margin-left:12px;text-transform:none}a.gb_1.gb_9c:hover{background-color:#2b7de9;border-color:transparent;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}a.gb_1.gb_9c:focus,a.gb_1.gb_9c:hover:focus{background-color:#5094ed;border-color:transparent;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}a.gb_1.gb_9c:active{background-color:#63a0ef;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.gb_8c .gb_9c.gb_ad{padding-left:6px;padding-right:14px}.gb_8c .gb_7c.gb_9c img{background-color:inherit;-webkit-border-radius:initial;border-radius:initial;height:18px;margin:0 8px 0 4px;vertical-align:text-top;width:18px}.gb_bd .gb_4c .gb_cd .gb_7c{border:2px solid transparent}.gb_bd .gb_4c .gb_cd .gb_7c:focus:after,.gb_bd .gb_4c .gb_cd .gb_7c:hover:after{background-color:transparent}.gb_5c{background-color:#404040;color:#fff;padding:16px;position:absolute;top:62px;min-width:328px;max-width:650px;right:8px;-webkit-border-radius:2px;border-radius:2px;-webkit-box-shadow:4px 4px 12px rgba(0,0,0,0.4);box-shadow:4px 4px 12px rgba(0,0,0,0.4)}.gb_5c a,.gb_5c a:visited{color:#5e97f6;text-decoration:none}.gb_dd{text-transform:uppercase}.gb_ed{padding-left:50px}.gb_1c .gb_4c{width:200px}.gb_fd{color:#3c4043;font-family:Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:16px;font-weight:500;letter-spacing:.1px;line-height:20px;margin:0;margin-bottom:12px}.gb_1c .gb_fd{color:#ffffff}.gb_1c .gb_Xc{color:#ffffff}.gb_Xc a.gb_hd{text-decoration:none;color:#5e97f6}.gb_Xc a.gb_hd:visited{color:#5e97f6}.gb_Xc a.gb_hd:hover,.gb_Xc a.gb_hd:active{text-decoration:underline}.gb_id{position:absolute;background:transparent;top:-999px;z-index:-1;visibility:hidden;margin-top:1px;margin-left:1px}#gb .gb_0c{margin:0}.gb_0c .gb_jb{background:#4d90fe;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:500;margin-top:21px;min-width:70px;text-align:center;-webkit-font-smoothing:antialiased}.gb_0c a.gb_1{background:#1a73e8;-webkit-border-radius:4px;border-radius:4px;color:#ffffff;font-family:Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.25px;line-height:16px;padding:8px 22px;-webkit-font-smoothing:antialiased}.gb_0c:not(.gb_bd) a.gb_1{float:right}#gb .gb_0c a.gb_jb.gb_jb{color:#ffffff;cursor:pointer}.gb_0c .gb_jb:hover{background:#357ae8;border-color:#2f5bb7}.gb_jd,.gb_cd{display:table-cell}.gb_jd{vertical-align:middle}.gb_jd img{height:48px;padding-left:4px;padding-right:20px;width:48px}.gb_cd{padding-left:13px;width:100%}.gb_0c .gb_cd{padding-top:4px;min-width:326px;padding-left:0;width:326px}.gb_0c.gb_kd .gb_cd{min-width:254px;width:254px}.gb_0c:not(.gb_bd) .gb_cd{padding-top:32px}.gb_ld{display:block;display:inline-block;padding:1em 0 0 0;position:relative;width:100%}.gb_md{color:#ff0000;font-style:italic;margin:0;padding-left:46px}.gb_ld .gb_nd{float:right;margin:-20px 0;width:-webkit-calc(100% - 46px);width:calc(100% - 46px)}.gb_od svg{fill:grey}.gb_od.gb_pd svg{fill:#4285f4}.gb_ld .gb_nd label:after{background-color:#4285f4}.gb_od{display:inline;float:right;margin-right:22px;position:relative;top:2px}.gb_sd{color:#ffffff;font-size:13px;font-weight:bold;height:25px;line-height:19px;padding-top:5px;padding-left:12px;position:relative;background-color:#4d90fe}.gb_sd .gb_td{color:#ffffff;cursor:default;font-size:22px;font-weight:normal;position:absolute;right:12px;top:5px}.gb_sd .gb_9c,.gb_sd .gb_6c{color:#ffffff;display:inline-block;font-size:11px;margin-left:16px;padding:0 8px;white-space:nowrap}.gb_ud{background:none;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0.16)),to(rgba(0,0,0,0.2)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2));background-image:linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2));background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.16),rgba(0,0,0,0.2));border-radius:2px;border:1px solid #dcdcdc;border:1px solid rgba(0,0,0,0.1);cursor:default!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#160000ff,endColorstr=#220000ff);text-decoration:none!important;-webkit-border-radius:2px}.gb_ud:hover{background:none;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0.14)),to(rgba(0,0,0,0.2)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2));background-image:linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2));background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.14),rgba(0,0,0,0.2));border:1px solid rgba(0,0,0,0.2);box-shadow:0 1px 1px rgba(0,0,0,0.1);-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.1);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#14000000,endColorstr=#22000000)}.gb_ud:active{box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.3)}.gb_ja .gb_W{color:#4285f4}.gb_ja .gb_X{color:#fff}.gb_ja .gb_jb:not(.gb_ye):focus{outline:none}.gb_2e,.gb_3e,.gb_4e{display:none}.gb_pe{height:48px;max-width:720px}.gb_Jd.gb_xe:not(.gb_oe) .gb_pe{max-width:100%;-webkit-flex:1 1 auto;flex:1 1 auto}.gb_Id>.gb_Dc .gb_pe{display:table-cell;vertical-align:middle;width:100%}.gb_Jd.gb_xe .gb_pe .gb_Be{margin-left:0;margin-right:0}.gb_Be{background:#f1f3f4;border:1px solid transparent;-webkit-border-radius:8px;border-radius:8px;margin-left:auto;margin-right:auto;max-width:720px;position:relative;-webkit-transition:background 100ms ease-in,width 100ms ease-out;transition:background 100ms ease-in,width 100ms ease-out}.gb_Be.gb_5e{-webkit-border-radius:8px 8px 0 0;border-radius:8px 8px 0 0}.gb_dc .gb_Be{background:rgba(241,243,244,0.24)}.gb_Be button{background:none;border:none;cursor:pointer;outline:none;padding:0 5px;line-height:0}.gb_Be:not(.gb_oe) button{padding:0 5px}.gb_Be button svg,.gb_Be button img{padding:8px;margin:3px}.gb_Be.gb_oe button svg{margin-left:1px;margin-right:1px}.gb_6e.gb_7e,.gb_8e.gb_7e{padding-left:2px;padding-right:2px}.gb_8e{display:none}.gb_6e,.gb_8e{float:left;position:absolute;top:0}.gb_9e{position:absolute;right:0;cursor:default;visibility:hidden;top:0;-webkit-transition:opacity 250ms ease-out;transition:opacity 250ms ease-out}.gb_af .gb_9e{right:37px}.gb_9e.gb_bf{visibility:inherit}.gb_We::-ms-clear{display:none;height:0;width:0}.gb_cf{position:absolute;right:0;top:0}.gb_df{height:46px;padding:0;margin-left:56px;margin-right:49px;overflow:hidden}.gb_af .gb_df{margin-right:85px}.gb_We{background:transparent;border:none;font:normal 16px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;height:46px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.gb_7e.gb_df .gb_We.gb_ef{padding-left:2px}.gb_dc .gb_We{color:rgba(255,255,255,0.87)}.gb_We:not(.gb_ef){padding:11px 0}.gb_We.gb_ef{padding:0}.gb_ef{height:46px;line-height:46px}.gb_Be:not(.gb_Ce) input::-webkit-input-placeholder{color:rgba(0,0,0,0.54)}.gb_dc .gb_Be:not(.gb_Ce) input::-webkit-input-placeholder{color:rgba(255,255,255,0.87)}.gb_Be.gb_oe:not(.gb_H){background:transparent;float:right;-webkit-box-shadow:none;box-shadow:none}.gb_Be.gb_oe:not(.gb_H) .gb_df,.gb_Be.gb_oe:not(.gb_H) .gb_9e,.gb_Be.gb_oe:not(.gb_H) .gb_cf{display:none}.gb_Be.gb_oe.gb_H{margin-left:0;position:absolute;width:auto}.gb_Be.gb_oe.gb_H .gb_6e{display:none}.gb_Be.gb_oe .gb_6e{padding:0;position:static}.gb_Be.gb_oe.gb_H .gb_8e{display:block}.gb_ja.gb_pc .gb_Dc.gb_ne:not(.gb_oe) .gb_pe,.gb_ja.gb_pc .gb_Dc.gb_qe.gb_re:not(.gb_oe) .gb_pe,.gb_ja.gb_Dd .gb_Dc:not(.gb_ne):not(.gb_oe) .gb_pe{padding-right:30px}.gb_ja.gb_pc .gb_Dc.gb_re:not(.gb_oe) .gb_pe,.gb_ja.gb_pc .gb_Dc.gb_qe.gb_ne:not(.gb_oe) .gb_pe{padding-left:30px}.gb_Dc:not(.gb_oe) .gb_pe{padding-left:10px;padding-right:10px;width:100%;-webkit-flex:1 1 auto;flex:1 1 auto}.gb_pe.gb_wa{display:none}.gb_Jd.gb_se>.gb_ae{min-width:initial!important;min-width:auto!important}.gb_te,.gb_ue:not(.gb_Ed):not(.gb_se).gb_ve{-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;justify-content:flex-end}.gb_ue:not(.gb_Ed):not(.gb_se){-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.gb_ue:not(.gb_Ed):not(.gb_se).gb_we,.gb_ue:not(.gb_Ed):not(.gb_se).gb_xe{-webkit-box-pack:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start}.gb_Jd.gb_Ed,.gb_Jd.gb_se{-webkit-box-pack:space-between;-webkit-justify-content:space-between;justify-content:space-between}.gb_ja.gb_ka .gb_Kc,.gb_xd.gb_Ed.gb_Fd>.gb_Kc{-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.gb_ja.gb_ka .gb_Jd,.gb_xd.gb_Ed.gb_Fd>.gb_Jd{-webkit-flex:0 0 auto;flex:0 0 auto}.gb_ff{position:relative}.gb_gf{margin:0 58px;padding:0;text-align:center;white-space:nowrap;-webkit-user-select:none;overflow:auto}.gb_gf::-webkit-scrollbar{display:none}.gb_ka .gb_gf,.gb_wd .gb_gf{margin:0}.gb_hf,.gb_if{display:none;height:48px;position:absolute;top:0;width:100px}.gb_ff.gb_jf .gb_hf,.gb_ff.gb_kf .gb_if{display:block}.gb_if{pointer-events:none}.gb_hf{pointer-events:none;left:0}.gb_if{right:0}.gb_lf{cursor:pointer;display:inline-table;outline:none}.gb_lf>.gb_mf{border:0 solid transparent;border-width:2px 0;display:table-cell;height:44px;padding:0 22px;opacity:.7;text-decoration:none;text-transform:uppercase;vertical-align:middle}.gb_lf.gb_yc:focus{background-color:rgba(0,0,0,.16)}.gb_lf.gb_yc>.gb_mf{border-bottom-color:black;opacity:1}.gb_dc .gb_lf.gb_yc>.gb_mf{border-bottom-color:white}.gb_Pd .gb_lf.gb_yc>.gb_mf{border-bottom-color:black}.gb_gf.gb_nf>.gb_lf.gb_yc>.gb_mf{border-bottom-color:#4285f4;color:#4285f4}sentinel{}.gbii::before{content:url(https://lh3.googleusercontent.com/-z25R9grmylc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf7n0E-c8tM9erOHwBuKwAyzE2VJA.CMID/s32-c-mo/photo.jpg)}.gbip::before{content:url(https://lh3.googleusercontent.com/-z25R9grmylc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf7n0E-c8tM9erOHwBuKwAyzE2VJA.CMID/s96-c-mo/photo.jpg)}@media (min-resolution:1.25dppx),(-o-min-device-pixel-ratio:5/4),(-webkit-min-device-pixel-ratio:1.25),(min-device-pixel-ratio:1.25){.gbii::before{content:url(https://lh3.googleusercontent.com/-z25R9grmylc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf7n0E-c8tM9erOHwBuKwAyzE2VJA.CMID/s64-c-mo/photo.jpg)}.gbip::before{content:url(https://lh3.googleusercontent.com/-z25R9grmylc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf7n0E-c8tM9erOHwBuKwAyzE2VJA.CMID/s192-c-mo/photo.jpg)}}
  `;
  
  render() {
    return html`
      <header class="one-bar gb_ja gb_Pa gb_Ae gb_pc" id="gb" role="banner" style="background-color:transparent">
      <div class="gb_xd gb_Od gb_Fd">
        <div class="gb_Dc gb_Kc gb_Lc" style="min-width: 238px;">
          <div class="gb_cc" aria-expanded="true" aria-label="Main menu" role="button" tabindex="0"><svg focusable="false"
              viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg></div>
          <div class="gb_cc gb_fc gb_va" aria-label="Go back" role="button" tabindex="0"><svg focusable="false"
              viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg></div>
          <div class="gb_cc gb_gc gb_va" aria-label="Close" role="button" tabindex="0"><svg viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
              </path>
            </svg></div>
          <div class="gb_6b">
            <div class="gb_7b gb_6d"><a class="gb_5d gb_8b gb_3d" href="#inbox" title="Gmail"><img class="gb_la"
                  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png"
                  srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x.png 2x "
                  style="width:109px;height:40px"></a></div>
          </div>
          <div class="gb_Dc gb_va gb_Ic gb_Jc"><span class="gb_Mc" aria-level="1" role="heading"></span></div>
        </div>
        <div class="gb_Dc gb_Jd gb_xe gb_ne gb_ue">
          <div class="gb_be gb_ae"></div>
          <div class="gb_pe">
            <form class="gb_Be gb_af" method="get" role="search" id="aso_search_form_anchor">
              <button class="gb_8e gb_7e" aria-label="Close search" type="button"><svg focusable="false" height="24px"
                  viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg></button>
              <div class="gb_df gb_7e" gh="sb">
                <table cellspacing="0" cellpadding="0" class="gstl_50 gstt" role="presentation" style="height: 28px;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellspacing="0" cellpadding="0" style="width: 100%;">
                          <tbody>
                            <tr>
                              <td class="gsib_a gb_We">
                                <div id="gs_lc50" style="position: relative;"><input class="gb_We" aria-label="Search mail"
                                    autocomplete="off" placeholder="Search mail" value="" name="q" type="text"
                                    style="border: none; padding: 0px; margin: 0px; height: auto; width: 100%; background: url(&quot;data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D&quot;) transparent; position: absolute; z-index: 6; left: 0px;"
                                    dir="ltr" spellcheck="false" aria-haspopup="true" aria-live="off"
                                    aria-owns="gs_sbt50"><input disabled="" autocomplete="off" autocapitalize="off"
                                    id="gs_taif50" class="gb_We" dir="ltr"
                                    style="border: none; padding: 0px; margin: 0px; height: auto; width: 100%; position: absolute; z-index: 1; background-color: transparent; -webkit-text-fill-color: silver; color: silver; left: 0px; visibility: hidden;">
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div><button class="gb_cf" type="button" gh="sda" role="button" data-tooltip="Show search options"
                aria-label="Advanced search options"><svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z"></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg></button><button class="gb_9e" aria-label="Clear search" type="button"><svg focusable="false"
                  height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                  </path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg></button><button class="gb_6e gb_7e" aria-label="Search Mail" role="button"><svg focusable="false"
                  height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z">
                  </path>
                  <path d="M0,0h24v24H0V0z" fill="none"></path>
                </svg></button>
              <table cellspacing="0" cellpadding="0" class="gstl_50 gssb_c"
                style="width: 100%; display: none; position: relative;">
                <tbody>
                  <tr>
                    <td class="gssb_f"></td>
                    <td class="gssb_e" style="width: 100%;"></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div class="gb_ce gb_ae">
            <div class="zo " data-tooltip="Support"><a class="gb_fe gb_de gb_jb t6" id="lZwQje" tabindex="0"
                aria-label="Support" role="button" aria-expanded="false" aria-haspopup="true" aria-controls="M842Cd"><svg
                  class="t7" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                  fill="#000000" focusable="false">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                  </path>
                </svg></a></div>
            <div id="M842Cd" class="t9" role="menu" tabindex="0" aria-hidden="true"
              style="display: none; left: 990px; top: 52px;">
              <div class="ua" aria-label="Help" tabindex="-1" role="menuitem" jsname="j7LFlb">Help</div>
              <div class="ua" aria-label="Training" tabindex="-1" role="menuitem" jsname="j7LFlb">Training</div>
              <div class="ua" aria-label="Updates" tabindex="-1" role="menuitem" jsname="j7LFlb">Updates</div>
              <div class="ub" role="separator" aria-hidden="true"></div>
              <div class="ua" aria-label="Send feedback" tabindex="-1" role="menuitem" jsname="j7LFlb">Send feedback</div>
            </div>
          </div>
        </div>
        <div class="gb_Ec gb_La gb_Dc gb_Md" data-ogsr-up="">
          <div class="gb_Fc">
            <div class="gb_vc">
              <div class="gb_w gb_Zc gb_f gb_sf" data-ogsr-alt="" id="gbwa">
                <div class="gb_rf"><a class="gb_x" aria-label="Google apps"
                    href="https://www.google.com/intl/en/about/products?tab=mh0" aria-expanded="false" role="button"
                    tabindex="0"><svg class="gb_De" focusable="false" viewBox="0 0 24 24">
                      <path
                        d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z">
                      </path>
                    </svg></a>
                  <div class="gb_Sa"></div>
                  <div class="gb_Ra"></div>
                </div>
              </div>
            </div>
            <div class="gb_Fa gb_Zc gb_jg gb_f gb_sf">
              <div class="gb_rf gb_Ka gb_jg gb_f"><a class="gb_x gb_Ea gb_f" aria-label="Google Account: Frankie Fu
      (frankiefu@gmail.com)"
                  href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://mail.google.com/mail&amp;service=mail"
                  role="button" tabindex="0" aria-expanded="false"><span class="gb_xa gbii" aria-hidden="true"></span></a>
                <div class="gb_Sa"></div>
                <div class="gb_Ra"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="gb_A gb_z gb_U gb_B" aria-label="Google apps" aria-hidden="true" role="region"
          style="max-height: 1006px; height: 596px;">
          <ul class="gb_C gb_u" aria-dropeffect="move">
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:0"><a class="gb_c" data-pid="192" draggable="false"
                href="https://myaccount.google.com/?utm_source=OGB&amp;tab=mk0&amp;utm_medium=app" id="gb192"
                rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_l"
                  style="background-image:url('https://lh3.googleusercontent.com/-z25R9grmylc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf7n0E-c8tM9erOHwBuKwAyzE2VJA.CMID/s64-b8-cc-rp-mo/photo.jpg')"></span><span
                  class="gb_m">Account</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:1"><a class="gb_c" data-pid="1" draggable="false"
                href="https://www.google.com/webhp?tab=mw0" id="gb1" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1863px"></span><span
                  class="gb_m">Search</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:2"><a class="gb_c" data-pid="8" draggable="false"
                href="https://maps.google.com/maps?hl=en&amp;tab=ml0" id="gb8" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1311px"></span><span
                  class="gb_m">Maps</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:3"><a class="gb_c" data-pid="36" draggable="false"
                href="https://www.youtube.com/?gl=US&amp;tab=m10" id="gb36" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -2346px"></span><span
                  class="gb_m">YouTube</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:4"><a class="gb_c" data-pid="78" draggable="false"
                href="https://play.google.com/?hl=en&amp;tab=m80" id="gb78" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -2277px"></span><span
                  class="gb_m">Play</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:5"><a class="gb_c" data-pid="5" draggable="false"
                href="https://news.google.com/nwshp?hl=en&amp;tab=mn0" id="gb5" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1173px"></span><span
                  class="gb_m">News</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:6"><a class="gb_c" data-pid="23" draggable="false"
                href="https://mail.google.com/mail/?tab=mm0" id="gb23" target="_top">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1725px"></span><span
                  class="gb_m">Gmail</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:7"><a class="gb_c" data-pid="53" draggable="false"
                href="https://contacts.google.com/?hl=en&amp;tab=mC0" id="gb53" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -2070px"></span><span
                  class="gb_m">Contacts</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:8"><a class="gb_c" data-pid="49" draggable="false"
                href="https://drive.google.com/?ogsrc=32&amp;tab=mo0&amp;authuser=0" id="gb49" rel="noreferrer"
                target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1656px"></span><span
                  class="gb_m">Drive</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:9"><a class="gb_c" data-pid="24" draggable="false"
                href="https://www.google.com/calendar?tab=mc0" id="gb24" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -621px"></span><span
                  class="gb_m">Calendar</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:a"><a class="gb_c" data-pid="51" draggable="false"
                href="https://translate.google.com/?hl=en&amp;tab=mT0" id="gb51" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -2553px"></span><span
                  class="gb_m">Translate</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:b"><a class="gb_c" data-pid="31" draggable="false"
                href="https://photos.google.com/?tab=mq0&amp;pageId=none" id="gb31" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1587px"></span><span
                  class="gb_m">Photos</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:c"><a class="gb_c" data-pid="6" draggable="false"
                href="https://www.google.com/shopping?hl=en&amp;source=og&amp;tab=mf0" id="gb6" rel="noreferrer"
                target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 0"></span><span
                  class="gb_m">Shopping</span>
              </a></li>
          </ul>
          <div class="gb_Q gb_va">
            <div class="gb_n gb_k" style="background-position:0 -1725px"></div>
            <div class="gb_R">
              <div class="gb_S">Gmail</div><a class="gb_T gb_Tf" href="#">Add a shortcut</a>
            </div>
          </div><a class="gb_D gb_Tf" aria-label="More Google apps"
            href="https://www.google.com/intl/en/about/products?tab=mh0" target="_blank" aria-expanded="false"
            aria-hidden="true" style="">More</a><span class="gb_E"></span>
          <ul class="gb_C gb_v" aria-dropeffect="move" aria-hidden="true">
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:d"><a class="gb_c" data-pid="27" draggable="false"
                href="https://www.google.com/finance?tab=me0" id="gb27" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -69px"></span><span
                  class="gb_m">Finance</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:e"><a class="gb_c" data-pid="25" draggable="false"
                href="https://docs.google.com/document/?usp=docs_alc&amp;authuser=0" id="gb25" rel="noreferrer"
                target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1035px"></span><span
                  class="gb_m">Docs</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:f"><a class="gb_c" data-pid="10" draggable="false"
                href="https://books.google.com/bkshp?hl=en&amp;tab=mp0" id="gb10" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -276px"></span><span
                  class="gb_m">Books</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:g"><a class="gb_c" data-pid="30" draggable="false"
                href="https://www.blogger.com/?tab=mj0" id="gb30" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -2415px"></span><span
                  class="gb_m">Blogger</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:h"><a class="gb_c" data-pid="461" draggable="false"
                href="https://duo.google.com/?usp=duo_ald" id="gb461" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -2484px"></span><span
                  class="gb_m">Duo</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:i"><a class="gb_c" data-pid="300" draggable="false"
                href="https://hangouts.google.com/" id="gb300" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -828px"></span><span
                  class="gb_m">Hangouts</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:j"><a class="gb_c" data-pid="136" draggable="false"
                href="https://keep.google.com/u/0" id="gb136" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_a"></span><span class="gb_m">Keep</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:k"><a class="gb_c" data-pid="357" draggable="false"
                href="https://jamboard.google.com/?authuser=0&amp;usp=jam_ald" id="gb357" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -483px"></span><span
                  class="gb_m">Jamboard</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:l"><a class="gb_c" data-pid="265" draggable="false"
                href="https://classroom.google.com/?authuser=0" id="gb265" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -1242px"></span><span
                  class="gb_m">Classroom</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:m"><a class="gb_c" data-pid="429" draggable="false"
                href="https://earth.google.com/web/" id="gb429" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -2208px"></span><span
                  class="gb_m">Earth</span>
              </a></li>
            <li class="gb_h" aria-grabbed="false" id="ogbkddg:n"><a class="gb_c" data-pid="338" draggable="false"
                href="https://www.google.com/save" id="gb338" rel="noreferrer" target="_blank">
                <div class="gb_q"></div>
                <div class="gb_r"></div>
                <div class="gb_s"></div>
                <div class="gb_t"></div><span class="gb_k" style="background-position:0 -138px"></span><span
                  class="gb_m">Collections</span>
              </a></li>
          </ul><a class="gb_E gb_Lf" href="https://www.google.com/intl/en/about/products?tab=mh0" target="_blank"
            aria-hidden="true">Even more from Google</a>
        </div>
        <div class="gb_Ta gb_z" aria-label="Account Information" aria-hidden="true" img-loaded="1">
          <div class="gb_Za"><a class="gb_Pf gb_0a gb_Tf" aria-label="Change profile picture."
              href="https://myaccount.google.com/?utm_source=OGB&amp;tab=mk0" target="_blank">
              <div class="gb_4a" style="position:relative">
                <div class="gb_za gbip" title="Profile"></div><span class="gb_Na">Change</span>
              </div>
            </a>
            <div class="gb_1a">
              <div class="gb_9a gb_ab">Frankie Fu</div>
              <div class="gb_bb">frankiefu@gmail.com</div>
              <div class="gb_Of gb_Xa"><a href="https://myaccount.google.com/privacypolicy" target="_blank">Privacy</a>
              </div><a class="gb_0 gb_Qf gbp1 gb_ye gb_jb"
                href="https://myaccount.google.com/?utm_source=OGB&amp;tab=mk0&amp;utm_medium=act" target="_blank">Google
                Account</a>
            </div>
          </div>
          <div class="gb_sb">
            <div class="gb_yb gb_vb gb_va" aria-hidden="true"><a class="gb_Ab gb_Kb gb_Lb" target="_blank"
                rel="noreferrer"><img class="gb_Mb gb_4a"
                  src="https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABECMWDqcrgqKSE4gEiC3ZjYXJkX3Bob3RvKihiMzY1YjZkNWM5OTAyYmU0ODAxMjZjNjE5OWFlM2EwYWIxMmRmZTM3MAFCna_G4j787yPJwYVHIgvMejeoSw?sz=48"
                  alt="Profile">
                <div class="gb_Db">
                  <div class="gb_Ob">Frankie Fu</div>
                  <div class="gb_Pb" dir="ltr">frankiefu@gmail.com (default)</div>
                </div>
              </a></div><a class="gb_Tb gb_va"
              href="https://myaccount.google.com/brandaccounts?authuser=0&amp;continue=https://mail.google.com/mail&amp;service=/mail/u/%24session_index/"
              aria-hidden="true"><span class="gb_Vb gb_ac"></span>
              <div class="gb_Wb">All your Brand Accounts »</div>
            </a>
          </div>
          <div class="gb_Vf gb_0b gb_va">
            <div class="gb_2b"></div>
          </div>
          <div class="gb_Nf gb_ib">
            <div><a class="gb_0 gb_Mf gb_ye gb_jb"
                href="https://accounts.google.com/AddSession?hl=en&amp;continue=https://mail.google.com/mail&amp;service=mail"
                target="_blank">Add account</a></div>
            <div><a class="gb_0 gb_Rf gb_Zf gb_ye gb_jb" id="gb_71"
                href="https://accounts.google.com/Logout?hl=en&amp;continue=https://mail.google.com/mail&amp;service=mail&amp;timeStmp=1560800784&amp;secTok=.AG5fkS9QXjF8E3hKQt1yO3cZGMN-iRJGCQ"
                target="_top">Sign out</a></div>
          </div>
        </div>
      </div>
      <div class="gb_Hd gb_Od"></div>
      </header>
    `;
  }
}