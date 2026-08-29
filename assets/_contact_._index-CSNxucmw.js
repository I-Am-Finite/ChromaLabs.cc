import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{t as i}from"./react-dom-DJPhu9Mm.js";import{E as a,N as o,O as s,S as c,_ as l,a as u,b as d,c as f,d as p,f as m,g as h,i as g,j as _,l as v,m as y,o as b,p as x,r as S,s as C,u as ee,v as w,x as T}from"./createLucideIcon-BzNNi6FU.js";import{n as E}from"./emotion-react.browser.esm-D66BJTCW.js";import{n as te,t as ne}from"./menu-DyyBfa9Q.js";var D=e(n(),1),re=Object.defineProperty,O=(e,t)=>re(e,`name`,{value:t,configurable:!0});function k(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}O(k,`setRef`);function A(...e){return t=>{let n=!1,r=e.map(e=>{let r=k(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():k(e[t],null)}}}}O(A,`composeRefs`);function j(...e){return D.useCallback(A(...e),e)}O(j,`useComposedRefs`);var M=c(),ie=Object.defineProperty,N=(e,t)=>ie(e,`name`,{value:t,configurable:!0});function ae(e,t){let n=D.createContext(t);n.displayName=e+`Context`;let r=N(e=>{let{children:t,...r}=e,i=D.useMemo(()=>r,Object.values(r));return(0,M.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=D.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return N(i,`useContext`),[r,i]}N(ae,`createContext`);function P(e,t=[]){let n=[];function r(t,r){let i=D.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=N(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=D.useMemo(()=>o,Object.values(o));return(0,M.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=D.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return N(s,`useContext`),[o,s]}N(r,`createContext`);let i=N(()=>{let t=n.map(e=>D.createContext(e));return N(function(n){let r=n?.[e]||t;return D.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,F(i,...t)]}N(P,`createContextScope`);function F(...e){let t=e[0];if(e.length===1)return t;let n=N(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return N(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return D.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}N(F,`composeContextScopes`);var oe=e(i(),1),se=Object.defineProperty,I=(e,t)=>se(e,`name`,{value:t,configurable:!0}),ce=I(((e,t)=>{let n={...t};for(let r in t){let i=e[r],a=t[r];if(/^on[A-Z]/.test(r))if(i&&a){let e=typeof i==`function`,t=typeof a==`function`;n[r]=(...n)=>{let r=t?a(...n):void 0;return e&&i(...n),r}}else i&&(n[r]=i);else r===`style`?n[r]={...typeof i==`object`?i:null,...typeof a==`object`?a:null}:r===`className`?n[r]=[i,a].filter(Boolean).join(` `):r===`aria-describedby`&&(n[r]=L(a,i))}return{...e,...n}}),`mergeProps`);function L(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}I(L,`concatAriaDescribedby`);var R=D.createContext(ce);R.displayName=`SlotContext`;function z(e){let t=D.forwardRef((t,n)=>{let r=D.useContext(R),{children:i,mergeProps:a=r,...o}=t,s=null,c=!1,l=[];U(i)&&typeof G==`function`&&(i=G(i._payload)),D.Children.forEach(i,e=>{if(H(e)){c=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;U(n)&&typeof G==`function`&&(n=G(n._payload)),s=ue(t,n),l.push(s?.props?.children)}else l.push(e)}),s?s=D.cloneElement(s,void 0,l):!c&&D.Children.count(i)===1&&D.isValidElement(i)&&(s=i);let u=s?V(s):void 0,d=j(n,u);if(!s){if(i||i===0)throw Error(c?pe(e):fe(e));return i}let f=a(o,s.props??{});return s.type!==D.Fragment&&(f.ref=n?d:u),D.cloneElement(s,f)});return t.displayName=`${e}.Slot`,t}I(z,`createSlot`);var B=Symbol.for(`radix.slottable`);function le(e){let t=I(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=B,t}I(le,`createSlottable`);var ue=I((e,t)=>{if(`child`in e.props){let t=e.props.child;return D.isValidElement(t)?D.cloneElement(t,void 0,e.props.children(t.props.children)):null}return D.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function V(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}I(V,`getElementRef`);function H(e){return D.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===B}I(H,`isSlottable`);var de=Symbol.for(`react.lazy`);function U(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===de&&`_payload`in e&&W(e._payload)}I(U,`isLazyComponent`);function W(e){return typeof e==`object`&&!!e&&`then`in e}I(W,`isPromiseLike`);var fe=I(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),pe=I(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),G=D.use,me=Object.defineProperty,he=(e,t)=>me(e,`name`,{value:t,configurable:!0}),ge=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=z(`Primitive.${t}`),r=D.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,M.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function _e(e,t){e&&oe.flushSync(()=>e.dispatchEvent(t))}he(_e,`dispatchDiscreteCustomEvent`);var ve=Object.defineProperty,K=(e,t)=>ve(e,`name`,{value:t,configurable:!0}),[q,ye]=P(`Form`),J=`Form`,[be,xe]=q(J),[Se,Ce]=q(J),we=D.forwardRef(K(function(e,t){let{__scopeForm:n,onClearServerErrors:r=K(()=>{},`onClearServerErrors`),...i}=e,a=j(t,D.useRef(null)),[o,s]=D.useState({}),c=D.useCallback(e=>o[e],[o]),l=D.useCallback((e,t)=>s(n=>({...n,[e]:{...n[e]??{},...t}})),[]),u=D.useCallback(e=>{s(t=>({...t,[e]:void 0})),_(t=>({...t,[e]:{}}))},[]),[d,f]=D.useState({}),p=D.useCallback(e=>d[e]??[],[d]),m=D.useCallback((e,t)=>{f(n=>({...n,[e]:[...n[e]??[],t]}))},[]),h=D.useCallback((e,t)=>{f(n=>({...n,[e]:(n[e]??[]).filter(e=>e.id!==t)}))},[]),[g,_]=D.useState({}),v=D.useCallback(e=>g[e]??{},[g]),y=D.useCallback((e,t)=>{_(n=>({...n,[e]:{...n[e]??{},...t}}))},[]),[b,x]=D.useState({});return(0,M.jsx)(be,{scope:n,getFieldValidity:c,onFieldValidityChange:l,getFieldCustomMatcherEntries:p,onFieldCustomMatcherEntryAdd:m,onFieldCustomMatcherEntryRemove:h,getFieldCustomErrors:v,onFieldCustomErrorsChange:y,onFieldValiditionClear:u,children:(0,M.jsx)(Se,{scope:n,onFieldMessageIdAdd:D.useCallback((e,t)=>{x(n=>{let r=new Set(n[e]).add(t);return{...n,[e]:r}})},[]),onFieldMessageIdRemove:D.useCallback((e,t)=>{x(n=>{let r=new Set(n[e]);return r.delete(t),{...n,[e]:r}})},[]),getFieldDescription:D.useCallback(e=>Array.from(b[e]??[]).join(` `)||void 0,[b]),children:(0,M.jsx)(ge.form,{...i,ref:a,onInvalid:T(e.onInvalid,e=>{let t=Q(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:T(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:T(e.onReset,r)})})})},`Form`)),[Te,Ee]=q(`FormField`);function De(e){let t={};for(let n in e)t[n]=e[n];return t}K(De,`validityStateToObject`);function Y(e){return e instanceof HTMLElement}K(Y,`isHTMLElement`);function X(e){return`validity`in e}K(X,`isFormControl`);function Z(e){return X(e)&&(e.validity.valid===!1||e.getAttribute(`aria-invalid`)===`true`)}K(Z,`isInvalid`);function Q(e){let t=e.elements,[n]=Array.from(t).filter(Y).filter(Z);return n??null}K(Q,`getFirstInvalidControl`);function Oe(e,t){return e.match.constructor.name===`AsyncFunction`||$(e.match,t)}K(Oe,`isAsyncCustomMatcherEntry`);function ke(e){return e.match.constructor.name===`Function`}K(ke,`isSyncCustomMatcherEntry`);function $(e,t){return e(...t)instanceof Promise}K($,`returnsPromise`);function Ae(e){let t=!1;for(let n in e){let r=n;if(r!==`valid`&&r!==`customError`&&e[r]){t=!0;break}}return t}K(Ae,`hasBuiltInError`);function je(e,t){if(e?.valid===!0&&!t)return!0}K(je,`getValidAttribute`);function Me(e,t){if(e?.valid===!1||t)return!0}K(Me,`getInvalidAttribute`);function Ne(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}K(Ne,`concatAriaDescribedby`);var Pe=(0,D.memo)(({children:e})=>E(y,{onClick:(0,D.useCallback)((e=>s([_(`_redirect`,{path:`/capabilities/government`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Fe=(0,D.memo)(({children:e})=>E(y,{onClick:(0,D.useCallback)((e=>s([_(`_redirect`,{path:`/research/log`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Ie=(0,D.memo)(({children:e})=>E(y,{onClick:(0,D.useCallback)((e=>s([_(`_redirect`,{path:`/company/mission`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Le=(0,D.memo)(({children:e})=>E(y,{onClick:(0,D.useCallback)((e=>s([_(`_redirect`,{path:`/developer`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Re=(0,D.memo)(({children:e})=>E(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},defaultValue:(0,D.useContext)(a.reflex___state____state__chromalabs___pages___company___contact____contact_state).form_topic_rx_state_,name:`topic`,placeholder:`Subject / Topic`,required:!0,size:`3`})),ze=(0,D.memo)(({children:e})=>E(we,{className:`Root `,css:{width:`100%`},onSubmit:(0,D.useCallback)(e=>{let t=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(t).entries())};((...e)=>s([_(`reflex___state____state.chromalabs___pages___company___contact____contact_state.handle_submit`,{form_data:n},{})],e,{}))(e)})},e)),Be=t(function(){let e=(0,D.useRef)(null);return o.ref_lambdaBackground=e,E(D.Fragment,{},E(w,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},E(w,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),E(w,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),E(w,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),E(w,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),E(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),E(te,{},E(`script`,{},`
if (!window.__chromaCanvasInitialized) {
    window.__chromaCanvasInitialized = true;
    
    function initCanvas() {
        let canvas = document.getElementById("lambdaBackground");
        if (!canvas) {
            requestAnimationFrame(initCanvas);
            return;
        }
        let ctx = canvas.getContext("2d");

        function resize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resize);
        resize();
        
        const GRID_SIZE = 60;
        const SPEED = 2.5;
        let threads = [];
        
        function drawGrid() {
            ctx.strokeStyle = "rgba(212, 175, 55, 0.08)";
            ctx.lineWidth = 1;
            
            const offsetX = (canvas.width / 2) % GRID_SIZE;
            const offsetY = (canvas.height / 2) % GRID_SIZE;
            
            for (let x = offsetX; x <= canvas.width; x += GRID_SIZE) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
            }
            for (let y = offsetY; y <= canvas.height; y += GRID_SIZE) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
            }
            
            ctx.strokeStyle = "rgba(212, 175, 55, 0.2)";
            for (let x = offsetX; x <= canvas.width; x += GRID_SIZE) {
                for (let y = offsetY; y <= canvas.height; y += GRID_SIZE) {
                    ctx.beginPath();
                    ctx.moveTo(x - 4, y); ctx.lineTo(x + 4, y);
                    ctx.moveTo(x, y - 4); ctx.lineTo(x, y + 4);
                    ctx.stroke();
                }
            }
        }
        
        function spawnThread(x, y, isBranch = false) {
            if (threads.length > 50) return;
            
            let startX = x !== undefined ? x : Math.floor(Math.random() * (canvas.width / GRID_SIZE)) * GRID_SIZE + ((canvas.width / 2) % GRID_SIZE);
            let startY = y !== undefined ? y : Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE + ((canvas.height / 2) % GRID_SIZE);
            
            threads.push({
                x: startX, y: startY,
                path: [{x: startX, y: startY}],
                maxLength: 3 + Math.random() * 6,
                life: 0,
                maxLife: 200 + Math.random() * 200,
                moving: false
            });
        }

        function animate() {
            // Re-fetch canvas in case React unmounted and remounted it during SPA navigation
            const currentCanvas = document.getElementById("lambdaBackground");
            if (!currentCanvas) {
                requestAnimationFrame(animate);
                return;
            }
            
            // Re-bind ctx if canvas DOM element was replaced by router
            if (currentCanvas !== canvas) {
                canvas = currentCanvas;
                ctx = canvas.getContext("2d");
                resize();
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            drawGrid();
            
            if (threads.length < 15) {
                spawnThread();
            }
            
            for (let i = threads.length - 1; i >= 0; i--) {
                let t = threads[i];
                
                if (t.moving) {
                    t.x += t.vx;
                    t.y += t.vy;
                    t.progress += SPEED;
                    
                    if (t.progress >= GRID_SIZE) {
                        t.x = t.targetX;
                        t.y = t.targetY;
                        t.path.push({x: t.x, y: t.y});
                        if (t.path.length > t.maxLength) t.path.shift();
                        t.moving = false;
                    }
                } else {
                    let dirs = [
                        {vx: 0, vy: -SPEED}, {vx: SPEED, vy: 0},
                        {vx: 0, vy: SPEED}, {vx: -SPEED, vy: 0}
                    ];
                    
                    let possibleDirs = dirs;
                    if (t.lastDir !== undefined) {
                        possibleDirs = dirs.filter((d, idx) => idx !== (t.lastDir + 2) % 4);
                    }
                    
                    let choiceIdx = Math.floor(Math.random() * possibleDirs.length);
                    let selected = possibleDirs[choiceIdx];
                    
                    t.vx = selected.vx;
                    t.vy = selected.vy;
                    t.targetX = t.x + (t.vx > 0 ? GRID_SIZE : t.vx < 0 ? -GRID_SIZE : 0);
                    t.targetY = t.y + (t.vy > 0 ? GRID_SIZE : t.vy < 0 ? -GRID_SIZE : 0);
                    t.progress = 0;
                    t.moving = true;
                    t.lastDir = dirs.indexOf(selected);
                    
                    if (Math.random() < 0.03) {
                        spawnThread(t.x, t.y, true);
                    }
                }
                
                t.life++;
                if (t.life > t.maxLife) {
                    t.path.shift();
                    if (t.path.length === 0) {
                        threads.splice(i, 1);
                        continue;
                    }
                }
                
                if (t.path.length > 0) {
                    let points = [...t.path, {x: t.x, y: t.y}];
                    const lifeOpacity = t.life > t.maxLife ? Math.max(0, t.path.length / t.maxLength) : 1.0;
                    
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    
                    for (let j = 1; j < points.length; j++) {
                        const p1 = points[j - 1];
                        const p2 = points[j];
                        
                        const segmentOpacity = Math.pow(j / points.length, 2) * lifeOpacity * 0.35; 
                        
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        
                        ctx.strokeStyle = \`rgba(212, 175, 55, \${segmentOpacity})\`;
                        ctx.lineWidth = 2.0;
                        ctx.stroke();
                    }
                    
                    const headOpacity = lifeOpacity * 0.6;
                    ctx.beginPath();
                    ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = \`rgba(255, 255, 255, \${headOpacity})\`;
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = \`rgba(212, 175, 55, \${headOpacity})\`;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    initCanvas();
}
`)),E(l,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},E(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`16`,paddingInlineEnd:`16`},height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},E(b,{asChild:!0,css:{"@media screen and (min-width: 0)":{marginLeft:`4px`},"@media screen and (min-width: 30em)":{marginLeft:`16px`},"&:hover":{textDecoration:`none`}}},E(r,{to:`/`},E(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),E(l,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),E(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`flex`},"@media screen and (min-width: 62em)":{display:`flex`},alignItems:`center`},direction:`row`,gap:`4`},E(f,{},E(v,{},E(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),E(C,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/ai`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/hpc`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/government`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),E(f,{},E(v,{},E(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),E(C,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/research/log`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/research/papers`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),E(f,{},E(v,{},E(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),E(C,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/mission`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/careers`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/directory`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),E(w,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/contact`},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),E(b,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},E(r,{to:`/developer`},E(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))))),E(w,{css:{"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`block`},"@media screen and (min-width: 48em)":{display:`none`},"@media screen and (min-width: 62em)":{display:`none`}}},E(p,{},E(x,{},E(ne,{css:{color:`white`,cursor:`pointer`},size:32})),E(m,{css:{background:`rgba(10, 10, 10, 0.95)`,color:`white`,border:`1px solid rgba(255, 255, 255, 0.08)`}},E(Pe,{},`Capabilities`),E(Fe,{},`Research`),E(Ie,{},`Company`),E(ee,{}),E(Le,{},`Developer Portal`))))),E(w,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},E(w,{css:{width:`100%`,minHeight:`80vh`,display:`flex`,justifyContent:`center`}},E(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,alignItems:`center`,justifyContent:`center`,minHeight:`calc(100vh - 200px)`,"@media screen and (min-width: 0)":{paddingTop:`12`,paddingBottom:`12`,paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingTop:`24`,paddingBottom:`24`,paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},E(d,{as:`p`,className:`animate-fade-up`,css:{fontSize:`0.8rem`,color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`},weight:`bold`},`INQUIRIES`),E(d,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},letterSpacing:`-0.04em`,lineHeight:`1.0`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,marginBottom:`8`,textAlign:`center`},weight:`bold`},`Contact the Lab.`),E(w,{className:`animate-fade-up delay-200`,css:{width:`100%`,maxWidth:`500px`,padding:`40px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(10,10,10,0.6)`,borderRadius:`8px`}},E(ze,{},E(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`},direction:`column`,gap:`4`},E(d,{as:`p`,css:{fontSize:`1rem`,fontWeight:`bold`,color:`white`,letterSpacing:`0.1em`,marginBottom:`2`}},`SECURE COMMUNIQUE`),E(Re,{}),E(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`email`,placeholder:`Defense or Enterprise Email`,required:!0,size:`3`,type:`email`}),E(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`company`,placeholder:`Organization / Agency`,required:!0,size:`3`}),E(g,{autoComplete:!1,css:{"& textarea":null,width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`,minHeight:`150px`},name:`message`,placeholder:`Deployment specifications or capabilities requested...`,required:!0,size:`3`}),E(h,{css:{background:`#DFBC61`,color:`black`,width:`100%`,marginTop:`4`,cursor:`pointer`,transition:`all 0.2s`,fontWeight:`bold`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`}},size:`3`,type:`submit`},`TRANSMIT`)))),E(d,{as:`p`,className:`animate-fade-up delay-300`,css:{fontSize:`0.85rem`,color:`slate.10`,marginTop:`8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`Headquarters: 17350 STATE HWY 249, STE 220 #37670, HOUSTON, TX 77064`)))),E(w,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},E(u,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),E(l,{css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,flexDirection:`column`,gap:`6`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,flexDirection:`column`,gap:`6`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`,flexDirection:`row`,gap:`0`},paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`}},E(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-start`}},direction:`column`,gap:`3`},E(d,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.2em`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`left`}}},`c 2026 Chroma Labs, Inc.T`)),E(l,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`,"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`block`}}}),E(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-end`}},direction:`column`,gap:`1`},E(d,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`17350 STATE HWY 249, STE 220 #37670`),E(d,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`HOUSTON, TX 77064`)))))),E(`title`,{},`Contact | Chroma Labs`),E(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{Be as default};