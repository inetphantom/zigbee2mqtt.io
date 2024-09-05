"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44138],{89633:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>i,data:()=>p});var s=a(86904);const t=[(0,s.Fv)('<h1 id="secure-your-zigbee-network" tabindex="-1"><a class="header-anchor" href="#secure-your-zigbee-network"><span>Secure your Zigbee network</span></a></h1><p>To make sure your Zigbee network is as secure as possible, consider the following:</p><h2 id="disable-joining" tabindex="-1"><a class="header-anchor" href="#disable-joining"><span>Disable joining</span></a></h2><p>To disable joining it&#39;s important that <code>permit_join: false</code> is set in your <code>configuration.yaml</code>. Otherwise rogue devices are able to join allowing them to send and receive Zigbee traffic.</p><h2 id="change-zigbee-network-encryption-key" tabindex="-1"><a class="header-anchor" href="#change-zigbee-network-encryption-key"><span>Change Zigbee network encryption key</span></a></h2><p><strong>Changing the network key requires re-pairing of all devices!</strong></p><p>Zigbee2MQTT releases prior to 1.33.0 use a known default encryption key (Zigbee Transport Key). Therefore it is recommended to change the network encryption key on those versions. Release 1.33.0 and later will generate a random encryption key on startup.</p><p>To use a different encryption key add the following to your <code>configuration.yaml</code>:</p><p><strong>Do not use this exact key.</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The network encryption key size is <code>128-bit</code> which is essentially 16 decimal values between <code>0</code> and <code>255</code> or 16 hexadecimal values between <code>0x00</code>and <code>0xFF</code>.</p><p>If you need to transform your decimals to hexadecimals (or vice versa) please use a <a href="https://www.binaryhexconverter.com/decimal-to-hex-converter" target="_blank" rel="noopener noreferrer">converter</a>. Example: 92 (decimal) would become 5C (hexadecimal).</p><p>To let Zigbee2MQTT generate a new network key on next startup, add the following to <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">network_key</span><span class="token punctuation">:</span> GENERATE</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>',14)],o={},i=(0,a(22652).A)(o,[["render",function(e,n){return(0,s.uX)(),(0,s.CE)("div",null,t)}]]),p=JSON.parse('{"path":"/advanced/zigbee/03_secure_network.html","title":"Secure your Zigbee network","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Disable joining","slug":"disable-joining","link":"#disable-joining","children":[]},{"level":2,"title":"Change Zigbee network encryption key","slug":"change-zigbee-network-encryption-key","link":"#change-zigbee-network-encryption-key","children":[]}],"git":{"updatedTime":1725535610000},"filePathRelative":"advanced/zigbee/03_secure_network.md"}')}}]);