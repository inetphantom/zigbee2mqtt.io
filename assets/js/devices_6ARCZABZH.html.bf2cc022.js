"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64091],{32825:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>k,data:()=>m});var a=t(86904);const l=(0,a.Lk)("h1",{id:"leedarson-6arczabzh",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#leedarson-6arczabzh"},[(0,a.Lk)("span",null,"Leedarson 6ARCZABZH")])],-1),s=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),o=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"6ARCZABZH")],-1),i=(0,a.Lk)("td",null,"Vendor",-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"4-Key Remote Controller")],-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, action, linkquality")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/6ARCZABZH.png",alt:"Leedarson 6ARCZABZH"})])],-1),u=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',6),p=(0,a.Fv)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>colortemp_up_release</code>, <code>colortemp_down_release</code>, <code>on</code>, <code>off</code>, <code>brightness_up</code>, <code>brightness_down</code>, <code>colortemp_up</code>, <code>colortemp_down</code>, <code>colortemp_up_hold</code>, <code>colortemp_down_hold</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),h={},k=(0,t(22652).A)(h,[["render",function(e,n){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[l,(0,a.Lk)("table",null,[s,(0,a.Lk)("tbody",null,[o,(0,a.Lk)("tr",null,[i,(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Leedarson"},{default:(0,a.k6)((()=>[(0,a.eW)("Leedarson")])),_:1})])]),c,d,r])]),u,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),m=JSON.parse('{"path":"/devices/6ARCZABZH.html","title":"Leedarson 6ARCZABZH control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Leedarson 6ARCZABZH control via MQTT","description":"Integrate your Leedarson 6ARCZABZH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Deprecated click event","slug":"deprecated-click-event","link":"#deprecated-click-event","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725535610000},"filePathRelative":"devices/6ARCZABZH.md"}')}}]);