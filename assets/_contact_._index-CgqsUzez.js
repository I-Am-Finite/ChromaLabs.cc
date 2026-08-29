import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{t as i}from"./react-dom-DJPhu9Mm.js";import{E as a,N as o,O as s,S as c,_ as l,a as u,b as d,c as f,d as p,f as m,g as h,i as g,j as _,l as v,m as y,o as b,p as x,r as S,s as C,u as w,v as T,x as E}from"./createLucideIcon-BMGgRmBi.js";import{n as D}from"./emotion-react.browser.esm-D66BJTCW.js";import{n as ee,t as te}from"./menu-CEbe-HhC.js";var O=e(n(),1),ne=Object.defineProperty,k=(e,t)=>ne(e,`name`,{value:t,configurable:!0});function A(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}k(A,`setRef`);function j(...e){return t=>{let n=!1,r=e.map(e=>{let r=A(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():A(e[t],null)}}}}k(j,`composeRefs`);function M(...e){return O.useCallback(j(...e),e)}k(M,`useComposedRefs`);var N=c(),re=Object.defineProperty,P=(e,t)=>re(e,`name`,{value:t,configurable:!0});function ie(e,t){let n=O.createContext(t);n.displayName=e+`Context`;let r=P(e=>{let{children:t,...r}=e,i=O.useMemo(()=>r,Object.values(r));return(0,N.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=O.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return P(i,`useContext`),[r,i]}P(ie,`createContext`);function F(e,t=[]){let n=[];function r(t,r){let i=O.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=P(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=O.useMemo(()=>o,Object.values(o));return(0,N.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=O.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return P(s,`useContext`),[o,s]}P(r,`createContext`);let i=P(()=>{let t=n.map(e=>O.createContext(e));return P(function(n){let r=n?.[e]||t;return O.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,I(i,...t)]}P(F,`createContextScope`);function I(...e){let t=e[0];if(e.length===1)return t;let n=P(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return P(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return O.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}P(I,`composeContextScopes`);var ae=e(i(),1),oe=Object.defineProperty,L=(e,t)=>oe(e,`name`,{value:t,configurable:!0}),se=L(((e,t)=>{let n={...t};for(let r in t){let i=e[r],a=t[r];if(/^on[A-Z]/.test(r))if(i&&a){let e=typeof i==`function`,t=typeof a==`function`;n[r]=(...n)=>{let r=t?a(...n):void 0;return e&&i(...n),r}}else i&&(n[r]=i);else r===`style`?n[r]={...typeof i==`object`?i:null,...typeof a==`object`?a:null}:r===`className`?n[r]=[i,a].filter(Boolean).join(` `):r===`aria-describedby`&&(n[r]=R(a,i))}return{...e,...n}}),`mergeProps`);function R(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}L(R,`concatAriaDescribedby`);var z=O.createContext(se);z.displayName=`SlotContext`;function B(e){let t=O.forwardRef((t,n)=>{let r=O.useContext(z),{children:i,mergeProps:a=r,...o}=t,s=null,c=!1,l=[];W(i)&&typeof K==`function`&&(i=K(i._payload)),O.Children.forEach(i,e=>{if(U(e)){c=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;W(n)&&typeof K==`function`&&(n=K(n._payload)),s=le(t,n),l.push(s?.props?.children)}else l.push(e)}),s?s=O.cloneElement(s,void 0,l):!c&&O.Children.count(i)===1&&O.isValidElement(i)&&(s=i);let u=s?H(s):void 0,d=M(n,u);if(!s){if(i||i===0)throw Error(c?fe(e):de(e));return i}let f=a(o,s.props??{});return s.type!==O.Fragment&&(f.ref=n?d:u),O.cloneElement(s,f)});return t.displayName=`${e}.Slot`,t}L(B,`createSlot`);var V=Symbol.for(`radix.slottable`);function ce(e){let t=L(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=V,t}L(ce,`createSlottable`);var le=L((e,t)=>{if(`child`in e.props){let t=e.props.child;return O.isValidElement(t)?O.cloneElement(t,void 0,e.props.children(t.props.children)):null}return O.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function H(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}L(H,`getElementRef`);function U(e){return O.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===V}L(U,`isSlottable`);var ue=Symbol.for(`react.lazy`);function W(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===ue&&`_payload`in e&&G(e._payload)}L(W,`isLazyComponent`);function G(e){return typeof e==`object`&&!!e&&`then`in e}L(G,`isPromiseLike`);var de=L(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),fe=L(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),K=O.use,pe=Object.defineProperty,me=(e,t)=>pe(e,`name`,{value:t,configurable:!0}),he=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=B(`Primitive.${t}`),r=O.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,N.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function ge(e,t){e&&ae.flushSync(()=>e.dispatchEvent(t))}me(ge,`dispatchDiscreteCustomEvent`);var _e=Object.defineProperty,q=(e,t)=>_e(e,`name`,{value:t,configurable:!0}),[J,ve]=F(`Form`),Y=`Form`,[ye,be]=J(Y),[xe,Se]=J(Y),Ce=O.forwardRef(q(function(e,t){let{__scopeForm:n,onClearServerErrors:r=q(()=>{},`onClearServerErrors`),...i}=e,a=M(t,O.useRef(null)),[o,s]=O.useState({}),c=O.useCallback(e=>o[e],[o]),l=O.useCallback((e,t)=>s(n=>({...n,[e]:{...n[e]??{},...t}})),[]),u=O.useCallback(e=>{s(t=>({...t,[e]:void 0})),_(t=>({...t,[e]:{}}))},[]),[d,f]=O.useState({}),p=O.useCallback(e=>d[e]??[],[d]),m=O.useCallback((e,t)=>{f(n=>({...n,[e]:[...n[e]??[],t]}))},[]),h=O.useCallback((e,t)=>{f(n=>({...n,[e]:(n[e]??[]).filter(e=>e.id!==t)}))},[]),[g,_]=O.useState({}),v=O.useCallback(e=>g[e]??{},[g]),y=O.useCallback((e,t)=>{_(n=>({...n,[e]:{...n[e]??{},...t}}))},[]),[b,x]=O.useState({});return(0,N.jsx)(ye,{scope:n,getFieldValidity:c,onFieldValidityChange:l,getFieldCustomMatcherEntries:p,onFieldCustomMatcherEntryAdd:m,onFieldCustomMatcherEntryRemove:h,getFieldCustomErrors:v,onFieldCustomErrorsChange:y,onFieldValiditionClear:u,children:(0,N.jsx)(xe,{scope:n,onFieldMessageIdAdd:O.useCallback((e,t)=>{x(n=>{let r=new Set(n[e]).add(t);return{...n,[e]:r}})},[]),onFieldMessageIdRemove:O.useCallback((e,t)=>{x(n=>{let r=new Set(n[e]);return r.delete(t),{...n,[e]:r}})},[]),getFieldDescription:O.useCallback(e=>Array.from(b[e]??[]).join(` `)||void 0,[b]),children:(0,N.jsx)(he.form,{...i,ref:a,onInvalid:E(e.onInvalid,e=>{let t=De(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:E(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:E(e.onReset,r)})})})},`Form`)),[we,Te]=J(`FormField`);function Ee(e){let t={};for(let n in e)t[n]=e[n];return t}q(Ee,`validityStateToObject`);function X(e){return e instanceof HTMLElement}q(X,`isHTMLElement`);function Z(e){return`validity`in e}q(Z,`isFormControl`);function Q(e){return Z(e)&&(e.validity.valid===!1||e.getAttribute(`aria-invalid`)===`true`)}q(Q,`isInvalid`);function De(e){let t=e.elements,[n]=Array.from(t).filter(X).filter(Q);return n??null}q(De,`getFirstInvalidControl`);function Oe(e,t){return e.match.constructor.name===`AsyncFunction`||$(e.match,t)}q(Oe,`isAsyncCustomMatcherEntry`);function ke(e){return e.match.constructor.name===`Function`}q(ke,`isSyncCustomMatcherEntry`);function $(e,t){return e(...t)instanceof Promise}q($,`returnsPromise`);function Ae(e){let t=!1;for(let n in e){let r=n;if(r!==`valid`&&r!==`customError`&&e[r]){t=!0;break}}return t}q(Ae,`hasBuiltInError`);function je(e,t){if(e?.valid===!0&&!t)return!0}q(je,`getValidAttribute`);function Me(e,t){if(e?.valid===!1||t)return!0}q(Me,`getInvalidAttribute`);function Ne(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}q(Ne,`concatAriaDescribedby`);var Pe=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/capabilities/ai`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Fe=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/capabilities/hpc`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Ie=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/capabilities/government`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Le=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/research/log`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Re=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/research/papers`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),ze=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/company/mission`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Be=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/company/careers`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Ve=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/company/directory`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),He=(0,O.memo)(({children:e})=>D(y,{onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/contact`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),Ue=(0,O.memo)(({children:e})=>D(y,{css:{color:`white`,fontWeight:`bold`},onClick:(0,O.useCallback)((e=>s([_(`_redirect`,{path:`/developer`,external:!1,popup:!1,replace:!1},{})],[e],{})),[s,_])},e)),We=(0,O.memo)(({children:e})=>D(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},defaultValue:(0,O.useContext)(a.reflex___state____state__chromalabs___pages___company___contact____contact_state).form_topic_rx_state_,name:`topic`,placeholder:`Subject / Topic`,required:!0,size:`3`})),Ge=(0,O.memo)(({children:e})=>D(Ce,{className:`Root `,css:{width:`100%`},onSubmit:(0,O.useCallback)(e=>{let t=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(t).entries())};((...e)=>s([_(`reflex___state____state.chromalabs___pages___company___contact____contact_state.handle_submit`,{form_data:n},{})],e,{}))(e)})},e)),Ke=t(function(){let e=(0,O.useRef)(null);return o.ref_lambdaBackground=e,D(O.Fragment,{},D(T,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},D(T,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),D(T,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),D(T,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),D(T,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),D(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),D(ee,{},D(`script`,{},`
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
`)),D(l,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},D(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`16`,paddingInlineEnd:`16`},height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},D(b,{asChild:!0,css:{"@media screen and (min-width: 0)":{marginLeft:`4px`},"@media screen and (min-width: 30em)":{marginLeft:`16px`},"&:hover":{textDecoration:`none`}}},D(r,{to:`/`},D(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),D(l,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),D(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`flex`},"@media screen and (min-width: 62em)":{display:`flex`},alignItems:`center`},direction:`row`,gap:`4`},D(f,{},D(v,{},D(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),D(C,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/capabilities/ai`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/capabilities/hpc`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/capabilities/government`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),D(f,{},D(v,{},D(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),D(C,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/research/log`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/research/papers`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),D(f,{},D(v,{},D(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),D(C,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/company/mission`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/company/careers`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/company/directory`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),D(T,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},D(b,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},D(r,{to:`/contact`},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),D(b,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},D(r,{to:`/developer`},D(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},D(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))))),D(T,{css:{"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`block`},"@media screen and (min-width: 48em)":{display:`none`},"@media screen and (min-width: 62em)":{display:`none`}}},D(p,{},D(x,{},D(te,{css:{color:`white`,cursor:`pointer`},size:32})),D(m,{css:{background:`rgba(10, 10, 10, 0.95)`,color:`slate.11`,border:`1px solid rgba(255, 255, 255, 0.08)`}},D(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`CAPABILITIES`),D(Pe,{},`AI`),D(Fe,{},`HPC`),D(Ie,{},`Government`),D(w,{}),D(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`RESEARCH`),D(Le,{},`Research Log`),D(Re,{},`Published Papers`),D(w,{}),D(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`COMPANY`),D(ze,{},`Mission`),D(Be,{},`Careers`),D(Ve,{},`Staff Directory`),D(He,{},`Contact Us`),D(w,{}),D(Ue,{},`DEVELOPER PORTAL`))))),D(T,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},D(T,{css:{width:`100%`,minHeight:`80vh`,display:`flex`,justifyContent:`center`}},D(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,alignItems:`center`,justifyContent:`center`,minHeight:`calc(100vh - 200px)`,"@media screen and (min-width: 0)":{paddingTop:`12`,paddingBottom:`12`,paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingTop:`24`,paddingBottom:`24`,paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},D(d,{as:`p`,className:`animate-fade-up`,css:{fontSize:`0.8rem`,color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`},weight:`bold`},`INQUIRIES`),D(d,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},letterSpacing:`-0.04em`,lineHeight:`1.0`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,marginBottom:`8`,textAlign:`center`},weight:`bold`},`Contact the Lab.`),D(T,{className:`animate-fade-up delay-200`,css:{width:`100%`,maxWidth:`500px`,padding:`40px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(10,10,10,0.6)`,borderRadius:`8px`}},D(Ge,{},D(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`},direction:`column`,gap:`4`},D(d,{as:`p`,css:{fontSize:`1rem`,fontWeight:`bold`,color:`white`,letterSpacing:`0.1em`,marginBottom:`2`}},`SECURE COMMUNIQUE`),D(We,{}),D(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`email`,placeholder:`Defense or Enterprise Email`,required:!0,size:`3`,type:`email`}),D(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`company`,placeholder:`Organization / Agency`,required:!0,size:`3`}),D(g,{autoComplete:!1,css:{"& textarea":null,width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`,minHeight:`150px`},name:`message`,placeholder:`Deployment specifications or capabilities requested...`,required:!0,size:`3`}),D(h,{css:{background:`#DFBC61`,color:`black`,width:`100%`,marginTop:`4`,cursor:`pointer`,transition:`all 0.2s`,fontWeight:`bold`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`}},size:`3`,type:`submit`},`TRANSMIT`)))),D(d,{as:`p`,className:`animate-fade-up delay-300`,css:{fontSize:`0.85rem`,color:`slate.10`,marginTop:`8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`Headquarters: 17350 STATE HWY 249, STE 220 #37670, HOUSTON, TX 77064`)))),D(T,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},D(u,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),D(l,{css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,flexDirection:`column`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,flexDirection:`column`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`,flexDirection:`row`},paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`},gap:`4`},D(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-start`}},direction:`column`,gap:`3`},D(d,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.1em`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`left`}}},`© 2026 Chroma Labs, Inc.™`)),D(l,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`,"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`block`}}}),D(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-end`}},direction:`column`,gap:`1`},D(d,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`17350 STATE HWY 249, STE 220 #37670`),D(d,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`HOUSTON, TX 77064`)))))),D(`title`,{},`Contact | Chroma Labs`),D(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{Ke as default};