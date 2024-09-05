"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20508],{76364:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>h,data:()=>m});var i=o(86904);const n=(0,i.Lk)("h1",{id:"schneider-electric-e8332scn300zb",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#schneider-electric-e8332scn300zb"},[(0,i.Lk)("span",null,"Schneider Electric E8332SCN300ZB")])],-1),a=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"E8332SCN300ZB")],-1),c=(0,i.Lk)("td",null,"Vendor",-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Wiser AvatarOn 2G curtain switch")],-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"indicator_luminance_level, indicator_color, indicator_mode, state, position, transition, motor_type_1, motor_type_2, curtain_status_1, curtain_status_2, linkquality")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E8332SCN300ZB.png",alt:"Schneider Electric E8332SCN300ZB"})])],-1),r=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="indicator-luminance-level-enum" tabindex="-1"><a class="header-anchor" href="#indicator-luminance-level-enum"><span>Indicator luminance level (enum)</span></a></h3><p>Set indicator luminance Level. Value can be found in the published state on the <code>indicator_luminance_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_luminance_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_luminance_level&quot;: NEW_VALUE}</code>. The possible values are: <code>0</code>, <code>20</code>, <code>40</code>, <code>60</code>, <code>80</code>, <code>100</code>.</p><h3 id="indicator-color-enum" tabindex="-1"><a class="header-anchor" href="#indicator-color-enum"><span>Indicator color (enum)</span></a></h3><p>Set indicator color. Value can be found in the published state on the <code>indicator_color</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_color&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_color&quot;: NEW_VALUE}</code>. The possible values are: <code>white</code>, <code>blue</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum"><span>Indicator mode (enum)</span></a></h3><p>Set indicator mode for switch. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>reverse_with_load</code>, <code>consistent_with_load</code>, <code>always_off</code>, <code>always_on</code>.</p><h3 id="state-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#state-enum-l1-endpoint"><span>State (enum, l1 endpoint)</span></a></h3><p>State of the curtain. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>OPEN</code>, <code>CLOSE</code>, <code>STOP</code>.</p><h3 id="state-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#state-enum-l2-endpoint"><span>State (enum, l2 endpoint)</span></a></h3><p>State of the curtain. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>OPEN</code>, <code>CLOSE</code>, <code>STOP</code>.</p><h3 id="position-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#position-numeric-l1-endpoint"><span>Position (numeric, l1 endpoint)</span></a></h3><p>Position of the curtain. Value can be found in the published state on the <code>position_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;position_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="position-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#position-numeric-l2-endpoint"><span>Position (numeric, l2 endpoint)</span></a></h3><p>Position of the curtain. Value can be found in the published state on the <code>position_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;position_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="transition-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#transition-numeric-l1-endpoint"><span>Transition (numeric, l1 endpoint)</span></a></h3><p>Transition time in seconds. Value can be found in the published state on the <code>transition_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;transition_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transition_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>s</code>.</p><h3 id="transition-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#transition-numeric-l2-endpoint"><span>Transition (numeric, l2 endpoint)</span></a></h3><p>Transition time in seconds. Value can be found in the published state on the <code>transition_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;transition_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transition_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>s</code>.</p><h3 id="motor-type-1-enum" tabindex="-1"><a class="header-anchor" href="#motor-type-1-enum"><span>Motor type 1 (enum)</span></a></h3><p>Set motor type for channel 1. Value can be found in the published state on the <code>motor_type_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_type_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_type_1&quot;: NEW_VALUE}</code>. The possible values are: <code>ac_motor</code>, <code>pulse_motor</code>.</p><h3 id="motor-type-2-enum" tabindex="-1"><a class="header-anchor" href="#motor-type-2-enum"><span>Motor type 2 (enum)</span></a></h3><p>Set motor type for channel 2. Value can be found in the published state on the <code>motor_type_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_type_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_type_2&quot;: NEW_VALUE}</code>. The possible values are: <code>ac_motor</code>, <code>pulse_motor</code>.</p><h3 id="curtain-status-1-enum" tabindex="-1"><a class="header-anchor" href="#curtain-status-1-enum"><span>Curtain status 1 (enum)</span></a></h3><p>Set curtain status for channel 1. Value can be found in the published state on the <code>curtain_status_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>stop</code>, <code>opening</code>, <code>closing</code>.</p><h3 id="curtain-status-2-enum" tabindex="-1"><a class="header-anchor" href="#curtain-status-2-enum"><span>Curtain status 2 (enum)</span></a></h3><p>Set curtain status for channel 2. Value can be found in the published state on the <code>curtain_status_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>stop</code>, <code>opening</code>, <code>closing</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29),p={},h=(0,o(22652).A)(p,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n,(0,i.Lk)("table",null,[a,(0,i.Lk)("tbody",null,[d,(0,i.Lk)("tr",null,[c,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.k6)((()=>[(0,i.eW)("Schneider Electric")])),_:1})])]),l,s,u])]),r])}]]),m=JSON.parse('{"path":"/devices/E8332SCN300ZB.html","title":"Schneider Electric E8332SCN300ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric E8332SCN300ZB control via MQTT","description":"Integrate your Schneider Electric E8332SCN300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-01T08:47:20.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Indicator luminance level (enum)","slug":"indicator-luminance-level-enum","link":"#indicator-luminance-level-enum","children":[]},{"level":3,"title":"Indicator color (enum)","slug":"indicator-color-enum","link":"#indicator-color-enum","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"State (enum, l1 endpoint)","slug":"state-enum-l1-endpoint","link":"#state-enum-l1-endpoint","children":[]},{"level":3,"title":"State (enum, l2 endpoint)","slug":"state-enum-l2-endpoint","link":"#state-enum-l2-endpoint","children":[]},{"level":3,"title":"Position (numeric, l1 endpoint)","slug":"position-numeric-l1-endpoint","link":"#position-numeric-l1-endpoint","children":[]},{"level":3,"title":"Position (numeric, l2 endpoint)","slug":"position-numeric-l2-endpoint","link":"#position-numeric-l2-endpoint","children":[]},{"level":3,"title":"Transition (numeric, l1 endpoint)","slug":"transition-numeric-l1-endpoint","link":"#transition-numeric-l1-endpoint","children":[]},{"level":3,"title":"Transition (numeric, l2 endpoint)","slug":"transition-numeric-l2-endpoint","link":"#transition-numeric-l2-endpoint","children":[]},{"level":3,"title":"Motor type 1 (enum)","slug":"motor-type-1-enum","link":"#motor-type-1-enum","children":[]},{"level":3,"title":"Motor type 2 (enum)","slug":"motor-type-2-enum","link":"#motor-type-2-enum","children":[]},{"level":3,"title":"Curtain status 1 (enum)","slug":"curtain-status-1-enum","link":"#curtain-status-1-enum","children":[]},{"level":3,"title":"Curtain status 2 (enum)","slug":"curtain-status-2-enum","link":"#curtain-status-2-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725535610000},"filePathRelative":"devices/E8332SCN300ZB.md"}')}}]);