"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84563],{67423:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>k});var i=o(86904);const a=(0,i.Lk)("h1",{id:"sikom-300-9715v10",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#sikom-300-9715v10"},[(0,i.Lk)("span",null,"Sikom 300-9715V10")])],-1),d=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"300-9715V10")],-1),c=(0,i.Lk)("td",null,"Vendor",-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Thermostat")],-1),n=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"climate (local_temperature, occupied_heating_setpoint, system_mode), state, linkquality")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/300-9715V10.png",alt:"Sikom 300-9715V10"})])],-1),r=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),p=(0,i.Fv)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>40</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary"><span>State (binary)</span></a></h3><p>Turn on or off.. Value can be found in the published state on the <code>state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),h={},m=(0,o(22652).A)(h,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[d,(0,i.Lk)("tbody",null,[l,(0,i.Lk)("tr",null,[c,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Sikom"},{default:(0,i.k6)((()=>[(0,i.eW)("Sikom")])),_:1})])]),s,n,u])]),r,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),k=JSON.parse('{"path":"/devices/300-9715V10.html","title":"Sikom 300-9715V10 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sikom 300-9715V10 control via MQTT","description":"Integrate your Sikom 300-9715V10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:38:16.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"State (binary)","slug":"state-binary","link":"#state-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725535610000},"filePathRelative":"devices/300-9715V10.md"}')}}]);