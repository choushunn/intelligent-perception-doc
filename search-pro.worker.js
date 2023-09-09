const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return W(e,t,s,n,i,1,o,""),n},W=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const l of e.keys())if(l===F){const a=o[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=u;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=o[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=o[f+y]+ +b,A=o[f+y+1]+1,w=o[p+y]+1,L=o[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}W(e.get(l),t,s,n,o,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const l=new Map;l.set(u.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(u),e=l}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)R(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},R=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)R(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",q="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),P(n.terms,u)}}return e},[q]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);P(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},ft=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,ht),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof(console==null?void 0:console[e])=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:q,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const l of Object.keys(u)){const a=u[l],h=e._fieldIds[l],m=o.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=N(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:N(n.boost,g)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,o,u,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f==null||f.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,o,u,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,o,u,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(u),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return o.sort(G),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(G),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if((t==null?void 0:t.fields)==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=k(u),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(u,d)),u=l,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),l=u.includes("#"),[a,h]=u.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>o.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(o.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in o)for(const c of o.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=it(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":73,\"nextId\":73,\"documentIds\":{\"0\":\"v-8daa1a0e\",\"1\":\"v-8daa1a0e#安装\",\"2\":\"v-8daa1a0e#运行\",\"3\":\"v-fffb8e28\",\"4\":\"v-d7fa887a\",\"5\":\"v-d7fa887a#依赖环境\",\"6\":\"v-d7fa887a#fork-原始项目\",\"7\":\"v-d7fa887a#安装\",\"8\":\"v-d7fa887a#运行\",\"9\":\"v-d7fa887a#参与贡献\",\"10\":\"v-d7fa887a#建议阅读\",\"11\":\"v-fb0f0066\",\"12\":\"v-fb0f0066#项目介绍\",\"13\":\"v-fb0f0066#内容介绍\",\"14\":\"v-fb0f0066#请先阅读\",\"15\":\"v-1c78ef66\",\"16\":\"v-1c78ef66#成员列表\",\"17\":\"v-1c78ef66#_2022\",\"18\":\"v-1c78ef66#_2023\",\"19\":\"v-4047f7fe\",\"20\":\"v-4047f7fe#项目\",\"21\":\"v-7fe15663\",\"22\":\"v-0287a1dc\",\"23\":\"v-0287a1dc#书籍\",\"24\":\"v-27867782\",\"25\":\"v-27867782#openwrt\",\"26\":\"v-afc2593a\",\"27\":\"v-afc2593a#ai-工具\",\"28\":\"v-afc2593a#竞赛\",\"29\":\"v-afc2593a#镜像站\",\"30\":\"v-afc2593a#学术网站\",\"31\":\"v-afc2593a#官方\",\"32\":\"v-afc2593a#web应用开发\",\"33\":\"v-afc2593a#go\",\"34\":\"v-afc2593a#github\",\"35\":\"v-15799be2\",\"36\":\"v-15799be2#windows-系统工具\",\"37\":\"v-15799be2#科学上网\",\"38\":\"v-15799be2#开发工具\",\"39\":\"v-15799be2#c\",\"40\":\"v-15799be2#latex\",\"41\":\"v-15799be2#无人机\",\"42\":\"v-15799be2#其他\",\"43\":\"v-13bcc40a\",\"44\":\"v-483a7e86\",\"45\":\"v-35e164e9\",\"46\":\"v-0d0fa3f2\",\"47\":\"v-0d0fa3f2#项目\",\"48\":\"v-4a5637d1\",\"49\":\"v-fe16016c\",\"50\":\"v-fe16016c#title-文献\",\"51\":\"v-5073506c\",\"52\":\"v-5073506c#分类\",\"53\":\"v-63e46080\",\"54\":\"v-63e46080#介绍\",\"55\":\"v-86bf020e\",\"56\":\"v-86bf020e#必学内容\",\"57\":\"v-86bf020e#常用网站\",\"58\":\"v-78638825\",\"59\":\"v-78638825#linux-发行版\",\"60\":\"v-78638825#常用网站\",\"61\":\"v-5c6f0f5e\",\"62\":\"v-03b71e74\",\"63\":\"v-03b71e74#参考资料\",\"64\":\"v-03b71e74#软件工具\",\"65\":\"v-29b55aba\",\"66\":\"v-29b55aba#设计模式\",\"67\":\"v-80c0f942\",\"68\":\"v-80c0f942#常用链接\",\"69\":\"v-a7f39c3a\",\"70\":\"v-a7f39c3a#uml\",\"71\":\"v-5d6b43ca\",\"72\":\"v-614993ba\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,27],\"2\":[1,6],\"3\":[1,6],\"4\":[1],\"5\":[1,7],\"6\":[2,6],\"7\":[1,41],\"8\":[1,6],\"9\":[1,20],\"10\":[1,8],\"11\":[1],\"12\":[1,8],\"13\":[1,2],\"14\":[1,6],\"15\":[1],\"16\":[1],\"17\":[1,6],\"18\":[1,1],\"19\":[1],\"20\":[1,6],\"21\":[1,5],\"22\":[1],\"23\":[1,20],\"24\":[1,3],\"25\":[1,5],\"26\":[1],\"27\":[2,7],\"28\":[1,3],\"29\":[1,2],\"30\":[1,8],\"31\":[1,3],\"32\":[1,7],\"33\":[1,2],\"34\":[1,10],\"35\":[1],\"36\":[2,14],\"37\":[1,3],\"38\":[1,21],\"39\":[1,8],\"40\":[1,5],\"41\":[1,7],\"42\":[1,3],\"43\":[1,3],\"44\":[1,3],\"45\":[1,7],\"46\":[1,3],\"47\":[1,2],\"48\":[1,4],\"49\":[1],\"50\":[2,23],\"51\":[2,3],\"52\":[1,54],\"53\":[1],\"54\":[1,3],\"55\":[1],\"56\":[1,2],\"57\":[1,4],\"58\":[1],\"59\":[2,3],\"60\":[1,1],\"61\":[1,3],\"62\":[2],\"63\":[1,1],\"64\":[1,3],\"65\":[1],\"66\":[1,1],\"67\":[1],\"68\":[1,11],\"69\":[1],\"70\":[1],\"71\":[1,3],\"72\":[1]},\"averageFieldLength\":[1.095890410958904,8.17069382968227],\"storedFields\":{\"0\":{\"h\":\"首页\"},\"1\":{\"h\":\"安装\",\"t\":[\"# 克隆项目 git clone https://github.com/choushunn/intelligent-perception-doc # 进入项目所在目录 cd intelligent-perception-doc # 安装pnpm包管理器 npm i pnpm -g # 设置pnpm的镜像源为淘宝镜像 pnpm config set registry http://registry.npm.taobao.org # 安装项目所需的依赖项 pnpm install \"]},\"2\":{\"h\":\"运行\",\"t\":[\"# 运行项目 pnpm run docs:dev \"]},\"3\":{\"h\":\"介绍\",\"t\":[\"注意\",\"该项目目前仍处于 beta 阶段，请注意阅读快速上手和参与贡献。\"]},\"4\":{\"h\":\"参与贡献\"},\"5\":{\"h\":\"依赖环境\",\"t\":[\"在开始之前，请确保已下载并安装 Node.js。\",\"Node.js v16.19.0+\"]},\"6\":{\"h\":\"Fork 原始项目\",\"t\":[\"打开本项目.\",\"点击页面右上角的 \\\"Fork\\\" 按钮。这将在您的GitHub账号下创建一个仓库的副本。\"]},\"7\":{\"h\":\"安装\",\"t\":[\"# 克隆项目 git clone https://github.com/your-username/intelligent-perception-doc # 将 `your-username` 替换为您的 GitHub 用户名。 # 进入项目所在目录 cd intelligent-perception-doc # 创建并切换到一个新的分支 git checkout -b <branch_name> # 安装 pnpm 包管理器 npm i pnpm -g # 设置 pnpm 的镜像源为淘宝镜像 pnpm config set registry http://registry.npm.taobao.org # 安装项目所需的依赖项 pnpm install \"]},\"8\":{\"h\":\"运行\",\"t\":[\"# 运行项目 pnpm run docs:dev \"]},\"9\":{\"h\":\"参与贡献\",\"t\":[\"如果您是一个新手并且不熟悉 Markdown，请先阅读以下文档：\",\"Markdown 介绍\",\"Markdown 增强\",\"Markdown 演示。\",\"在新分支上进行修改并提交更改：\",\"# 将修改的文件添加到暂存区 git add . # 提交修改 git commit -m \\\"添加了新的代码\\\" # 推送到远程仓库 git push origin <branch_name> \"]},\"10\":{\"h\":\"建议阅读\",\"t\":[\"另外，建议您阅读以下相关项目，以更好地理解本项目的构建方式：\",\"VuePress\",\"VuePress Theme Hope\",\"Markdown 增强\"]},\"11\":{\"h\":\"快速上手\"},\"12\":{\"h\":\"项目介绍\",\"t\":[\"提示\",\"本项目是由 VuePress 和 VuePress Theme Hope 构建的技术文档。\"]},\"13\":{\"h\":\"内容介绍\",\"t\":[\"阅读必修课和常用资源快速参与本项目组的研究。\"]},\"14\":{\"h\":\"请先阅读\",\"t\":[\"提问的智慧\",\"中文文案排版指北\",\"git 入门\",\"git 提交规范\",\"终端使用代理加速的正确方式\"]},\"15\":{\"h\":\"关于我们\"},\"16\":{\"h\":\"成员列表\"},\"17\":{\"h\":\"2022\",\"t\":[\"Spring - GitHub\",\"Ryan Cheng - GitHub\",\"卿绍勋 - GitHub\",\"Guo - GitHub\"]},\"18\":{\"h\":\"2023\",\"t\":[\"...\"]},\"19\":{\"h\":\"现有项目\"},\"20\":{\"h\":\"项目\",\"t\":[\"本项目\",\"Awesome RK3588\",\"PID Control System\"]},\"21\":{\"h\":\"介绍\",\"t\":[\"提示\",\"本部分收集了一些常用的工具软件、常用的网站以及在线书籍，供大家参考。\"]},\"22\":{\"h\":\"在线书籍\"},\"23\":{\"h\":\"书籍\",\"t\":[\"动手学深度学习\",\"南瓜书\",\"设计模式详解\",\"Hello 算法\",\"强化学习蘑菇书\",\"Machine-Learning-Book\",\"《统计学习方法》第二版的代码实现\",\"AI算法工程师手册\",\"深度学习500问\",\"Java 全栈知识体系\",\"100-Days-Of-AI-Code\"]},\"24\":{\"h\":\"日常经验\",\"t\":[\"Steam Workshop Downloader\"]},\"25\":{\"h\":\"OpenWrt\",\"t\":[\"OpenWrt\",\"红米ax6s-解锁ssh-刷openwrt教程\",\"软件包安装\"]},\"26\":{\"h\":\"常用链接\"},\"27\":{\"h\":\"AI 工具\",\"t\":[\"AI Assistant Poe\",\"学术版 GPT\",\"ChatGPT\",\"AI 工具集\"]},\"28\":{\"h\":\"竞赛\",\"t\":[\"中国研究生系列大赛\",\"赛氪网\",\"Kaggle\"]},\"29\":{\"h\":\"镜像站\",\"t\":[\"南京大学镜像站\",\"北京外国语大学镜像站\"]},\"30\":{\"h\":\"学术网站\",\"t\":[\"Google 学术搜索\",\"arxiv\",\"Papers with Code\",\"sci-hub\"]},\"31\":{\"h\":\"官方\",\"t\":[\"软件著作权登记\",\"专利登记\",\"中国计算机技术职业资格网\"]},\"32\":{\"h\":\"Web应用开发\",\"t\":[\"Vue\",\"Vben Admin\",\"vue-element-plus-admin\"]},\"33\":{\"h\":\"GO\",\"t\":[\"Go 模块代理\"]},\"34\":{\"h\":\"GitHub\",\"t\":[\"README生成\",\"GitHub Docs\",\"GitHub 加速下载\",\"GitHub Proxy\",\"best-of-lists\",\"Awesome lists\",\"程序员容易发音错误的单词\"]},\"35\":{\"h\":\"常用软件\"},\"36\":{\"h\":\"Windows 系统工具\",\"t\":[\"Sumatra PDF\",\"7-Zip\",\"Bandizip\",\"qBittorrent-Enhanced-Edition\",\"PotPlayer\",\"Chrome 浏览器\",\"Office Tool Plus\"]},\"37\":{\"h\":\"科学上网\",\"t\":[\"Clash\",\"iGuge\",\"OpenVPN\"]},\"38\":{\"h\":\"开发工具\",\"t\":[\"Visual Studio Code\",\"终端管理 tabby\",\"文件传输 WinSCP\",\"神经网络可视化 Netron\",\"Qt\",\"JetBrains Tool Box\",\"git\",\"draw.io-画图工具\",\"WebSocket 在线测试工具\",\"特色流程图\",\"在线LaTeX公式编辑器\"]},\"39\":{\"h\":\"C++\",\"t\":[\"编译工具 CMake\",\"构建工具 Ninja\",\"Dev-C++\",\"Mingw-w64\"]},\"40\":{\"h\":\"LaTeX\",\"t\":[\"LaTeX\",\"TeXStudio\",\"TeX Live\",\"Overleaf\"]},\"41\":{\"h\":\"无人机\",\"t\":[\"ImpulseRC\",\"Betaflight Configurator\",\"INAV Configurator\",\"BLHeli Configurator\",\"Bluejay\",\"ExpressLRS\"]},\"42\":{\"h\":\"其他\",\"t\":[\"大型软件下载\",\"小恐龙公文排版助手\",\"DevToys\"]},\"43\":{\"h\":\"必修课\",\"t\":[\"警告\",\"必修课部分的内容是快速了解和参与项目组研究所必须具备的知识。\"]},\"44\":{\"h\":\"人工智能\",\"t\":[\"提示\",\"本页面主要用于介绍人工智能相关内容。\"]},\"45\":{\"h\":\"计算机视觉\",\"t\":[\"提示\",\"计算机视觉\",\"面向初学者的 OpenCV-Python 教程\",\"数据科学笔记\"]},\"46\":{\"h\":\"深度学习\",\"t\":[\"提示\",\"深度学习\",\"PyTorch\"]},\"47\":{\"h\":\"项目\",\"t\":[\"YOLOv5\",\"YOLOv8\"]},\"48\":{\"h\":\"机器学习\",\"t\":[\"提示\",\"机器学习\",\"scikit-learn\"]},\"49\":{\"h\":\"\"},\"50\":{\"h\":\"title: 文献\",\"t\":[\"提示\",\"文献\",\"基于深度学习的目标检测算法综述\",\"A Survey of the Four Pillars for Small Object Detection: Multiscale Representation, Contextual Information, Super-Resolution, and Region Proposal\",\"基于深度学习的单目标跟踪算法综述\"]},\"51\":{\"h\":\"Stable Diffusion\",\"t\":[\"Hugging Facecivitai\",\"AI提示词加速器魔咒百科词典\"]},\"52\":{\"h\":\"分类\",\"t\":[\"二次元： 1.最受欢迎的二次元模型：Anything 2精致度满满，室内外场景优秀：counterfeit 3.魔幻感十足：dreamlike diffusion\",\"真实： 1.真实朴素：Realistic vision 2.照片级：Lofi 3.精细的写实风格：deliberate\",\"2.5D 1.动漫角色的二次创作，即真实又二次元：never ending dream 2.超现实的画面：Protogen x3.4 (Photorealism) 3.国风、小人书、水墨风：guofeng3\",\"拓展：\\n富有现代感的建筑（dvArch - Multi-Prompt Archittecture Tuned Model)\\n富有魔幻感的场景(Cheese Daddy's Landscapes mix)\\n富有高级感的平面设计(Graphic design_2.0)\"]},\"53\":{\"h\":\"服务部署\"},\"54\":{\"h\":\"介绍\",\"t\":[\"注意\",\"本页面主要用于介绍服务部署相关内容。\"]},\"55\":{\"h\":\"Docker\"},\"56\":{\"h\":\"必学内容\",\"t\":[\"Docker\",\"Docker Compose\"]},\"57\":{\"h\":\"常用网站\",\"t\":[\"Docker\",\"Docker Hub\",\"Jenkins\",\"Kubernetes\"]},\"58\":{\"h\":\"Linux\"},\"59\":{\"h\":\"Linux 发行版\",\"t\":[\"Ubuntu\",\"Debian\",\"CentOS\"]},\"60\":{\"h\":\"常用网站\",\"t\":[\"...\"]},\"61\":{\"h\":\"软件开发\",\"t\":[\"注意\",\"本页面主要用于介绍软件开发相关内容。\"]},\"62\":{\"h\":\"C/C++\"},\"63\":{\"h\":\"参考资料\",\"t\":[\"C++教程\"]},\"64\":{\"h\":\"软件工具\",\"t\":[\"Visual Studio\",\"CMAKE\"]},\"65\":{\"h\":\"设计模式\"},\"66\":{\"h\":\"设计模式\",\"t\":[\"设计模式教程\"]},\"67\":{\"h\":\"Python\"},\"68\":{\"h\":\"常用链接\",\"t\":[\"Python 官网\",\"Miniconda - Python 环境管理工具\",\"pip 换源 - 换源后可加速下载\",\"conda 换源 - 换源后可加速下载\",\"Scientific Python Lectures - Python 科学计算教程\"]},\"69\":{\"h\":\"UML\"},\"70\":{\"h\":\"UML\"},\"71\":{\"h\":\"嵌入式\",\"t\":[\"注意\",\"本页面主要用于介绍软件开发相关内容。\"]},\"72\":{\"h\":\"RK3588\"}},\"dirtCount\":0,\"index\":[[\"嵌入式\",{\"0\":{\"71\":1}}],[\"科学计算教程\",{\"1\":{\"68\":1}}],[\"科学上网\",{\"0\":{\"37\":1}}],[\"换源后可加速下载\",{\"1\":{\"68\":2}}],[\"换源\",{\"1\":{\"68\":2}}],[\"环境管理工具\",{\"1\":{\"68\":1}}],[\"官网\",{\"1\":{\"68\":1}}],[\"官方\",{\"0\":{\"31\":1}}],[\"参考资料\",{\"0\":{\"63\":1}}],[\"参与贡献\",{\"0\":{\"4\":1,\"9\":1}}],[\"uml\",{\"0\":{\"69\":1,\"70\":1}}],[\"ubuntu\",{\"1\":{\"59\":1}}],[\"username`\",{\"1\":{\"7\":1}}],[\"username\",{\"1\":{\"7\":1}}],[\"发行版\",{\"0\":{\"59\":1}}],[\"kubernetes\",{\"1\":{\"57\":1}}],[\"kaggle\",{\"1\":{\"28\":1}}],[\"必学内容\",{\"0\":{\"56\":1}}],[\"必修课部分的内容是快速了解和参与项目组研究所必须具备的知识\",{\"1\":{\"43\":1}}],[\"必修课\",{\"0\":{\"43\":1}}],[\"服务部署\",{\"0\":{\"53\":1}}],[\"0\",{\"1\":{\"52\":1}}],[\"0+\",{\"1\":{\"5\":1}}],[\"富有高级感的平面设计\",{\"1\":{\"52\":1}}],[\"富有魔幻感的场景\",{\"1\":{\"52\":1}}],[\"富有现代感的建筑\",{\"1\":{\"52\":1}}],[\"拓展\",{\"1\":{\"52\":1}}],[\"水墨风\",{\"1\":{\"52\":1}}],[\"小人书\",{\"1\":{\"52\":1}}],[\"小恐龙公文排版助手\",{\"1\":{\"42\":1}}],[\"国风\",{\"1\":{\"52\":1}}],[\"4\",{\"1\":{\"52\":1}}],[\"x3\",{\"1\":{\"52\":1}}],[\"超现实的画面\",{\"1\":{\"52\":1}}],[\"即真实又二次元\",{\"1\":{\"52\":1}}],[\"动漫角色的二次创作\",{\"1\":{\"52\":1}}],[\"动手学深度学习\",{\"1\":{\"23\":1}}],[\"5d\",{\"1\":{\"52\":1}}],[\"精细的写实风格\",{\"1\":{\"52\":1}}],[\"照片级\",{\"1\":{\"52\":1}}],[\"真实朴素\",{\"1\":{\"52\":1}}],[\"真实\",{\"1\":{\"52\":1}}],[\"魔幻感十足\",{\"1\":{\"52\":1}}],[\"3\",{\"1\":{\"52\":3}}],[\"室内外场景优秀\",{\"1\":{\"52\":1}}],[\"2\",{\"1\":{\"52\":4}}],[\"2精致度满满\",{\"1\":{\"52\":1}}],[\"2023\",{\"0\":{\"18\":1}}],[\"2022\",{\"0\":{\"17\":1}}],[\"最受欢迎的二次元模型\",{\"1\":{\"52\":1}}],[\"二次元\",{\"1\":{\"52\":1}}],[\"分类\",{\"0\":{\"52\":1}}],[\"facecivitai\",{\"1\":{\"51\":1}}],[\"for\",{\"1\":{\"50\":1}}],[\"fork\",{\"0\":{\"6\":1},\"1\":{\"6\":1}}],[\"four\",{\"1\":{\"50\":1}}],[\"基于深度学习的单目标跟踪算法综述\",{\"1\":{\"50\":1}}],[\"基于深度学习的目标检测算法综述\",{\"1\":{\"50\":1}}],[\"文献\",{\"0\":{\"50\":1},\"1\":{\"50\":1}}],[\"文件传输\",{\"1\":{\"38\":1}}],[\"机器学习\",{\"0\":{\"48\":1},\"1\":{\"48\":1}}],[\"yolov8\",{\"1\":{\"47\":1}}],[\"yolov5\",{\"1\":{\"47\":1}}],[\"your\",{\"1\":{\"7\":1}}],[\"深度学习\",{\"0\":{\"46\":1},\"1\":{\"46\":1}}],[\"深度学习500问\",{\"1\":{\"23\":1}}],[\"数据科学笔记\",{\"1\":{\"45\":1}}],[\"教程\",{\"1\":{\"45\":1}}],[\"面向初学者的\",{\"1\":{\"45\":1}}],[\"计算机视觉\",{\"0\":{\"45\":1},\"1\":{\"45\":1}}],[\"人工智能\",{\"0\":{\"44\":1}}],[\"警告\",{\"1\":{\"43\":1}}],[\"大型软件下载\",{\"1\":{\"42\":1}}],[\"其他\",{\"0\":{\"42\":1}}],[\"无人机\",{\"0\":{\"41\":1}}],[\"构建工具\",{\"1\":{\"39\":1}}],[\"构建的技术文档\",{\"1\":{\"12\":1}}],[\"编译工具\",{\"1\":{\"39\":1}}],[\"特色流程图\",{\"1\":{\"38\":1}}],[\"画图工具\",{\"1\":{\"38\":1}}],[\"qt\",{\"1\":{\"38\":1}}],[\"qbittorrent\",{\"1\":{\"36\":1}}],[\"神经网络可视化\",{\"1\":{\"38\":1}}],[\"终端管理\",{\"1\":{\"38\":1}}],[\"终端使用代理加速的正确方式\",{\"1\":{\"14\":1}}],[\"开发工具\",{\"0\":{\"38\":1}}],[\"浏览器\",{\"1\":{\"36\":1}}],[\"ending\",{\"1\":{\"52\":1}}],[\"enhanced\",{\"1\":{\"36\":1}}],[\"expresslrs\",{\"1\":{\"41\":1}}],[\"edition\",{\"1\":{\"36\":1}}],[\"element\",{\"1\":{\"32\":1}}],[\"zip\",{\"1\":{\"36\":1}}],[\"7\",{\"1\":{\"36\":1}}],[\"系统工具\",{\"0\":{\"36\":1}}],[\"程序员容易发音错误的单词\",{\"1\":{\"34\":1}}],[\"lectures\",{\"1\":{\"68\":1}}],[\"learn\",{\"1\":{\"48\":1}}],[\"learning\",{\"1\":{\"23\":1}}],[\"landscapes\",{\"1\":{\"52\":1}}],[\"latex\",{\"0\":{\"40\":1},\"1\":{\"40\":1}}],[\"lofi\",{\"1\":{\"52\":1}}],[\"linux\",{\"0\":{\"58\":1,\"59\":1}}],[\"live\",{\"1\":{\"40\":1}}],[\"lists\",{\"1\":{\"34\":2}}],[\"加速下载\",{\"1\":{\"34\":1}}],[\"模块代理\",{\"1\":{\"33\":1}}],[\"专利登记\",{\"1\":{\"31\":1}}],[\"软件工具\",{\"0\":{\"64\":1}}],[\"软件开发\",{\"0\":{\"61\":1}}],[\"软件著作权登记\",{\"1\":{\"31\":1}}],[\"软件包安装\",{\"1\":{\"25\":1}}],[\"w64\",{\"1\":{\"39\":1}}],[\"websocket\",{\"1\":{\"38\":1}}],[\"web应用开发\",{\"0\":{\"32\":1}}],[\"winscp\",{\"1\":{\"38\":1}}],[\"windows\",{\"0\":{\"36\":1}}],[\"with\",{\"1\":{\"30\":1}}],[\"workshop\",{\"1\":{\"24\":1}}],[\"学术搜索\",{\"1\":{\"30\":1}}],[\"学术网站\",{\"0\":{\"30\":1}}],[\"学术版\",{\"1\":{\"27\":1}}],[\"北京外国语大学镜像站\",{\"1\":{\"29\":1}}],[\"南京大学镜像站\",{\"1\":{\"29\":1}}],[\"南瓜书\",{\"1\":{\"23\":1}}],[\"镜像站\",{\"0\":{\"29\":1}}],[\"赛氪网\",{\"1\":{\"28\":1}}],[\"中国计算机技术职业资格网\",{\"1\":{\"31\":1}}],[\"中国研究生系列大赛\",{\"1\":{\"28\":1}}],[\"中文文案排版指北\",{\"1\":{\"14\":1}}],[\"竞赛\",{\"0\":{\"28\":1}}],[\"工具集\",{\"1\":{\"27\":1}}],[\"工具\",{\"0\":{\"27\":1}}],[\"常用网站\",{\"0\":{\"57\":1,\"60\":1}}],[\"常用软件\",{\"0\":{\"35\":1}}],[\"常用链接\",{\"0\":{\"26\":1,\"68\":1}}],[\"常用的网站以及在线书籍\",{\"1\":{\"21\":1}}],[\"刷openwrt教程\",{\"1\":{\"25\":1}}],[\"解锁ssh\",{\"1\":{\"25\":1}}],[\"红米ax6s\",{\"1\":{\"25\":1}}],[\"日常经验\",{\"0\":{\"24\":1}}],[\"object\",{\"1\":{\"50\":1}}],[\"overleaf\",{\"1\":{\"40\":1}}],[\"opencv\",{\"1\":{\"45\":1}}],[\"openvpn\",{\"1\":{\"37\":1}}],[\"openwrt\",{\"0\":{\"25\":1},\"1\":{\"25\":1}}],[\"office\",{\"1\":{\"36\":1}}],[\"of\",{\"1\":{\"23\":1,\"34\":1,\"50\":1}}],[\"origin\",{\"1\":{\"9\":1}}],[\"org\",{\"1\":{\"1\":1,\"7\":1}}],[\"1\",{\"1\":{\"52\":3}}],[\"100\",{\"1\":{\"23\":1}}],[\"19\",{\"1\":{\"5\":1}}],[\"全栈知识体系\",{\"1\":{\"23\":1}}],[\"jenkins\",{\"1\":{\"57\":1}}],[\"jetbrains\",{\"1\":{\"38\":1}}],[\"java\",{\"1\":{\"23\":1}}],[\"js\",{\"1\":{\"5\":2}}],[\"第二版的代码实现\",{\"1\":{\"23\":1}}],[\"统计学习方法\",{\"1\":{\"23\":1}}],[\"强化学习蘑菇书\",{\"1\":{\"23\":1}}],[\"算法\",{\"1\":{\"23\":1}}],[\"设计模式教程\",{\"1\":{\"66\":1}}],[\"设计模式\",{\"0\":{\"65\":1,\"66\":1}}],[\"设计模式详解\",{\"1\":{\"23\":1}}],[\"设置\",{\"1\":{\"7\":1}}],[\"设置pnpm的镜像源为淘宝镜像\",{\"1\":{\"1\":1}}],[\"书籍\",{\"0\":{\"23\":1}}],[\"供大家参考\",{\"1\":{\"21\":1}}],[\"本页面主要用于介绍软件开发相关内容\",{\"1\":{\"61\":1,\"71\":1}}],[\"本页面主要用于介绍服务部署相关内容\",{\"1\":{\"54\":1}}],[\"本页面主要用于介绍人工智能相关内容\",{\"1\":{\"44\":1}}],[\"本部分收集了一些常用的工具软件\",{\"1\":{\"21\":1}}],[\"本项目\",{\"1\":{\"20\":1}}],[\"本项目是由\",{\"1\":{\"12\":1}}],[\"archittecture\",{\"1\":{\"52\":1}}],[\"arxiv\",{\"1\":{\"30\":1}}],[\"anything\",{\"1\":{\"52\":1}}],[\"and\",{\"1\":{\"50\":1}}],[\"a\",{\"1\":{\"50\":1}}],[\"admin\",{\"1\":{\"32\":2}}],[\"add\",{\"1\":{\"9\":1}}],[\"assistant\",{\"1\":{\"27\":1}}],[\"ai提示词加速器魔咒百科词典\",{\"1\":{\"51\":1}}],[\"ai\",{\"0\":{\"27\":1},\"1\":{\"23\":1,\"27\":2}}],[\"ai算法工程师手册\",{\"1\":{\"23\":1}}],[\"awesome\",{\"1\":{\"20\":1,\"34\":1}}],[\"项目\",{\"0\":{\"20\":1,\"47\":1}}],[\"项目介绍\",{\"0\":{\"12\":1}}],[\"现有项目\",{\"0\":{\"19\":1}}],[\"卿绍勋\",{\"1\":{\"17\":1}}],[\"s\",{\"1\":{\"52\":1}}],[\"small\",{\"1\":{\"50\":1}}],[\"super\",{\"1\":{\"50\":1}}],[\"survey\",{\"1\":{\"50\":1}}],[\"sumatra\",{\"1\":{\"36\":1}}],[\"stable\",{\"0\":{\"51\":1}}],[\"studio\",{\"1\":{\"38\":1,\"64\":1}}],[\"steam\",{\"1\":{\"24\":1}}],[\"scientific\",{\"1\":{\"68\":1}}],[\"scikit\",{\"1\":{\"48\":1}}],[\"sci\",{\"1\":{\"30\":1}}],[\"system\",{\"1\":{\"20\":1}}],[\"spring\",{\"1\":{\"17\":1}}],[\"set\",{\"1\":{\"1\":1,\"7\":1}}],[\"成员列表\",{\"0\":{\"16\":1}}],[\"关于我们\",{\"0\":{\"15\":1}}],[\"入门\",{\"1\":{\"14\":1}}],[\"阅读必修课和常用资源快速参与本项目组的研究\",{\"1\":{\"13\":1}}],[\"内容介绍\",{\"0\":{\"13\":1}}],[\"和\",{\"1\":{\"12\":1}}],[\"提交规范\",{\"1\":{\"14\":1}}],[\"提交修改\",{\"1\":{\"9\":1}}],[\"提问的智慧\",{\"1\":{\"14\":1}}],[\"提示\",{\"1\":{\"12\":1,\"21\":1,\"44\":1,\"45\":1,\"46\":1,\"48\":1,\"50\":1}}],[\"快速上手\",{\"0\":{\"11\":1}}],[\"hugging\",{\"1\":{\"51\":1}}],[\"hub\",{\"1\":{\"30\":1,\"57\":1}}],[\"hello\",{\"1\":{\"23\":1}}],[\"hope\",{\"1\":{\"10\":1,\"12\":1}}],[\"http\",{\"1\":{\"1\":1,\"7\":1}}],[\"https\",{\"1\":{\"1\":1,\"7\":1}}],[\"tuned\",{\"1\":{\"52\":1}}],[\"the\",{\"1\":{\"50\":1}}],[\"theme\",{\"1\":{\"10\":1,\"12\":1}}],[\"title\",{\"0\":{\"50\":1}}],[\"tex\",{\"1\":{\"40\":1}}],[\"texstudio\",{\"1\":{\"40\":1}}],[\"tabby\",{\"1\":{\"38\":1}}],[\"taobao\",{\"1\":{\"1\":1,\"7\":1}}],[\"tool\",{\"1\":{\"36\":1,\"38\":1}}],[\"vision\",{\"1\":{\"52\":1}}],[\"visual\",{\"1\":{\"38\":1,\"64\":1}}],[\"vben\",{\"1\":{\"32\":1}}],[\"vue\",{\"1\":{\"32\":2}}],[\"vuepress\",{\"1\":{\"10\":2,\"12\":2}}],[\"v16\",{\"1\":{\"5\":1}}],[\"以更好地理解本项目的构建方式\",{\"1\":{\"10\":1}}],[\"建议您阅读以下相关项目\",{\"1\":{\"10\":1}}],[\"建议阅读\",{\"0\":{\"10\":1}}],[\"另外\",{\"1\":{\"10\":1}}],[\"推送到远程仓库\",{\"1\":{\"9\":1}}],[\"添加了新的代码\",{\"1\":{\"9\":1}}],[\"miniconda\",{\"1\":{\"68\":1}}],[\"mingw\",{\"1\":{\"39\":1}}],[\"mix\",{\"1\":{\"52\":1}}],[\"model\",{\"1\":{\"52\":1}}],[\"multi\",{\"1\":{\"52\":1}}],[\"multiscale\",{\"1\":{\"50\":1}}],[\"machine\",{\"1\":{\"23\":1}}],[\"markdown\",{\"1\":{\"9\":4,\"10\":1}}],[\"m\",{\"1\":{\"9\":1}}],[\"在线latex公式编辑器\",{\"1\":{\"38\":1}}],[\"在线测试工具\",{\"1\":{\"38\":1}}],[\"在线书籍\",{\"0\":{\"22\":1}}],[\"在新分支上进行修改并提交更改\",{\"1\":{\"9\":1}}],[\"在开始之前\",{\"1\":{\"5\":1}}],[\"演示\",{\"1\":{\"9\":1}}],[\"增强\",{\"1\":{\"9\":1,\"10\":1}}],[\"如果您是一个新手并且不熟悉\",{\"1\":{\"9\":1}}],[\"的镜像源为淘宝镜像\",{\"1\":{\"7\":1}}],[\"包管理器\",{\"1\":{\"7\":1}}],[\"<branch\",{\"1\":{\"7\":1,\"9\":1}}],[\"bluejay\",{\"1\":{\"41\":1}}],[\"blheli\",{\"1\":{\"41\":1}}],[\"box\",{\"1\":{\"38\":1}}],[\"book\",{\"1\":{\"23\":1}}],[\"bandizip\",{\"1\":{\"36\":1}}],[\"best\",{\"1\":{\"34\":1}}],[\"betaflight\",{\"1\":{\"41\":1}}],[\"beta\",{\"1\":{\"3\":1}}],[\"b\",{\"1\":{\"7\":1}}],[\"创建并切换到一个新的分支\",{\"1\":{\"7\":1}}],[\"用户名\",{\"1\":{\"7\":1}}],[\"替换为您的\",{\"1\":{\"7\":1}}],[\"`your\",{\"1\":{\"7\":1}}],[\"将修改的文件添加到暂存区\",{\"1\":{\"9\":1}}],[\"将\",{\"1\":{\"7\":1}}],[\"这将在您的github账号下创建一个仓库的副本\",{\"1\":{\"6\":1}}],[\"按钮\",{\"1\":{\"6\":1}}],[\"点击页面右上角的\",{\"1\":{\"6\":1}}],[\"打开本项目\",{\"1\":{\"6\":1}}],[\"原始项目\",{\"0\":{\"6\":1}}],[\"never\",{\"1\":{\"52\":1}}],[\"netron\",{\"1\":{\"38\":1}}],[\"ninja\",{\"1\":{\"39\":1}}],[\"name>\",{\"1\":{\"7\":1,\"9\":1}}],[\"node\",{\"1\":{\"5\":2}}],[\"npm\",{\"1\":{\"1\":2,\"7\":2}}],[\"请先阅读\",{\"0\":{\"14\":1}}],[\"请先阅读以下文档\",{\"1\":{\"9\":1}}],[\"请确保已下载并安装\",{\"1\":{\"5\":1}}],[\"请注意阅读快速上手和参与贡献\",{\"1\":{\"3\":1}}],[\"依赖环境\",{\"0\":{\"5\":1}}],[\"阶段\",{\"1\":{\"3\":1}}],[\"该项目目前仍处于\",{\"1\":{\"3\":1}}],[\"注意\",{\"1\":{\"3\":1,\"54\":1,\"61\":1,\"71\":1}}],[\"介绍\",{\"0\":{\"3\":1,\"21\":1,\"54\":1},\"1\":{\"9\":1}}],[\"daddy\",{\"1\":{\"52\":1}}],[\"days\",{\"1\":{\"23\":1}}],[\"dvarch\",{\"1\":{\"52\":1}}],[\"dream\",{\"1\":{\"52\":1}}],[\"dreamlike\",{\"1\":{\"52\":1}}],[\"draw\",{\"1\":{\"38\":1}}],[\"diffusion\",{\"0\":{\"51\":1},\"1\":{\"52\":1}}],[\"debian\",{\"1\":{\"59\":1}}],[\"design\",{\"1\":{\"52\":1}}],[\"deliberate\",{\"1\":{\"52\":1}}],[\"detection\",{\"1\":{\"50\":1}}],[\"devtoys\",{\"1\":{\"42\":1}}],[\"dev\",{\"1\":{\"2\":1,\"8\":1,\"39\":1}}],[\"downloader\",{\"1\":{\"24\":1}}],[\"docker\",{\"0\":{\"55\":1},\"1\":{\"56\":2,\"57\":2}}],[\"docs\",{\"1\":{\"2\":1,\"8\":1,\"34\":1}}],[\"doc\",{\"1\":{\"1\":2,\"7\":2}}],[\"realistic\",{\"1\":{\"52\":1}}],[\"readme生成\",{\"1\":{\"34\":1}}],[\"region\",{\"1\":{\"50\":1}}],[\"registry\",{\"1\":{\"1\":2,\"7\":2}}],[\"resolution\",{\"1\":{\"50\":1}}],[\"representation\",{\"1\":{\"50\":1}}],[\"rk3588\",{\"0\":{\"72\":1},\"1\":{\"20\":1}}],[\"ryan\",{\"1\":{\"17\":1}}],[\"run\",{\"1\":{\"2\":1,\"8\":1}}],[\"运行项目\",{\"1\":{\"2\":1,\"8\":1}}],[\"运行\",{\"0\":{\"2\":1,\"8\":1}}],[\"graphic\",{\"1\":{\"52\":1}}],[\"go\",{\"0\":{\"33\":1},\"1\":{\"33\":1}}],[\"google\",{\"1\":{\"30\":1}}],[\"gpt\",{\"1\":{\"27\":1}}],[\"guofeng3\",{\"1\":{\"52\":1}}],[\"guo\",{\"1\":{\"17\":1}}],[\"g\",{\"1\":{\"1\":1,\"7\":1}}],[\"github\",{\"0\":{\"34\":1},\"1\":{\"1\":1,\"7\":2,\"17\":4,\"34\":3}}],[\"git\",{\"1\":{\"1\":1,\"7\":2,\"9\":3,\"14\":2,\"38\":1}}],[\"photorealism\",{\"1\":{\"52\":1}}],[\"prompt\",{\"1\":{\"52\":1}}],[\"protogen\",{\"1\":{\"52\":1}}],[\"proposal\",{\"1\":{\"50\":1}}],[\"proxy\",{\"1\":{\"34\":1}}],[\"pip\",{\"1\":{\"68\":1}}],[\"pillars\",{\"1\":{\"50\":1}}],[\"pid\",{\"1\":{\"20\":1}}],[\"pytorch\",{\"1\":{\"46\":1}}],[\"python\",{\"0\":{\"67\":1},\"1\":{\"45\":1,\"68\":4}}],[\"potplayer\",{\"1\":{\"36\":1}}],[\"poe\",{\"1\":{\"27\":1}}],[\"pdf\",{\"1\":{\"36\":1}}],[\"plus\",{\"1\":{\"32\":1,\"36\":1}}],[\"papers\",{\"1\":{\"30\":1}}],[\"push\",{\"1\":{\"9\":1}}],[\"pnpm\",{\"1\":{\"1\":3,\"2\":1,\"7\":5,\"8\":1}}],[\"perception\",{\"1\":{\"1\":2,\"7\":2}}],[\"impulserc\",{\"1\":{\"41\":1}}],[\"io\",{\"1\":{\"38\":1}}],[\"iguge\",{\"1\":{\"37\":1}}],[\"information\",{\"1\":{\"50\":1}}],[\"inav\",{\"1\":{\"41\":1}}],[\"install\",{\"1\":{\"1\":1,\"7\":1}}],[\"intelligent\",{\"1\":{\"1\":2,\"7\":2}}],[\"i\",{\"1\":{\"1\":1,\"7\":1}}],[\"进入项目所在目录\",{\"1\":{\"1\":1,\"7\":1}}],[\"c\",{\"0\":{\"62\":1}}],[\"centos\",{\"1\":{\"59\":1}}],[\"cmake\",{\"1\":{\"39\":1,\"64\":1}}],[\"c++教程\",{\"1\":{\"63\":1}}],[\"c++\",{\"0\":{\"39\":1,\"62\":1},\"1\":{\"39\":1}}],[\"clash\",{\"1\":{\"37\":1}}],[\"clone\",{\"1\":{\"1\":1,\"7\":1}}],[\"chrome\",{\"1\":{\"36\":1}}],[\"chatgpt\",{\"1\":{\"27\":1}}],[\"cheese\",{\"1\":{\"52\":1}}],[\"cheng\",{\"1\":{\"17\":1}}],[\"checkout\",{\"1\":{\"7\":1}}],[\"choushunn\",{\"1\":{\"1\":1}}],[\"counterfeit\",{\"1\":{\"52\":1}}],[\"code\",{\"1\":{\"23\":1,\"30\":1,\"38\":1}}],[\"conda\",{\"1\":{\"68\":1}}],[\"contextual\",{\"1\":{\"50\":1}}],[\"control\",{\"1\":{\"20\":1}}],[\"configurator\",{\"1\":{\"41\":3}}],[\"config\",{\"1\":{\"1\":1,\"7\":1}}],[\"compose\",{\"1\":{\"56\":1}}],[\"commit\",{\"1\":{\"9\":1}}],[\"com\",{\"1\":{\"1\":1,\"7\":1}}],[\"cd\",{\"1\":{\"1\":1,\"7\":1}}],[\"克隆项目\",{\"1\":{\"1\":1,\"7\":1}}],[\"安装项目所需的依赖项\",{\"1\":{\"1\":1,\"7\":1}}],[\"安装pnpm包管理器\",{\"1\":{\"1\":1}}],[\"安装\",{\"0\":{\"1\":1,\"7\":1},\"1\":{\"7\":1}}],[\"首页\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
