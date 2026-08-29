import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{t as i}from"./react-dom-DJPhu9Mm.js";import{D as a,S as o,T as s,a as c,b as l,c as u,d,f,g as p,h as m,i as h,m as g,n as _,o as v,r as y,s as b,u as x}from"./esm-DnaslR2-.js";import{n as S}from"./emotion-react.browser.esm-D66BJTCW.js";import{t as ee}from"./Helmet-CeZPI1C2.js";var C=e(n(),1),te=Object.defineProperty,w=(e,t)=>te(e,`name`,{value:t,configurable:!0});function T(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}w(T,`setRef`);function E(...e){return t=>{let n=!1,r=e.map(e=>{let r=T(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():T(e[t],null)}}}}w(E,`composeRefs`);function D(...e){return C.useCallback(E(...e),e)}w(D,`useComposedRefs`);var O=p(),ne=Object.defineProperty,k=(e,t)=>ne(e,`name`,{value:t,configurable:!0});function re(e,t){let n=C.createContext(t);n.displayName=e+`Context`;let r=k(e=>{let{children:t,...r}=e,i=C.useMemo(()=>r,Object.values(r));return(0,O.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=C.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return k(i,`useContext`),[r,i]}k(re,`createContext`);function A(e,t=[]){let n=[];function r(t,r){let i=C.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=k(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=C.useMemo(()=>o,Object.values(o));return(0,O.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=C.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return k(s,`useContext`),[o,s]}k(r,`createContext`);let i=k(()=>{let t=n.map(e=>C.createContext(e));return k(function(n){let r=n?.[e]||t;return C.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,j(i,...t)]}k(A,`createContextScope`);function j(...e){let t=e[0];if(e.length===1)return t;let n=k(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return k(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return C.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}k(j,`composeContextScopes`);var ie=e(i(),1),ae=Object.defineProperty,M=(e,t)=>ae(e,`name`,{value:t,configurable:!0}),oe=M(((e,t)=>{let n={...t};for(let r in t){let i=e[r],a=t[r];if(/^on[A-Z]/.test(r))if(i&&a){let e=typeof i==`function`,t=typeof a==`function`;n[r]=(...n)=>{let r=t?a(...n):void 0;return e&&i(...n),r}}else i&&(n[r]=i);else r===`style`?n[r]={...typeof i==`object`?i:null,...typeof a==`object`?a:null}:r===`className`?n[r]=[i,a].filter(Boolean).join(` `):r===`aria-describedby`&&(n[r]=N(a,i))}return{...e,...n}}),`mergeProps`);function N(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}M(N,`concatAriaDescribedby`);var P=C.createContext(oe);P.displayName=`SlotContext`;function F(e){let t=C.forwardRef((t,n)=>{let r=C.useContext(P),{children:i,mergeProps:a=r,...o}=t,s=null,c=!1,l=[];B(i)&&typeof U==`function`&&(i=U(i._payload)),C.Children.forEach(i,e=>{if(z(e)){c=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;B(n)&&typeof U==`function`&&(n=U(n._payload)),s=L(t,n),l.push(s?.props?.children)}else l.push(e)}),s?s=C.cloneElement(s,void 0,l):!c&&C.Children.count(i)===1&&C.isValidElement(i)&&(s=i);let u=s?R(s):void 0,d=D(n,u);if(!s){if(i||i===0)throw Error(c?H(e):le(e));return i}let f=a(o,s.props??{});return s.type!==C.Fragment&&(f.ref=n?d:u),C.cloneElement(s,f)});return t.displayName=`${e}.Slot`,t}M(F,`createSlot`);var I=Symbol.for(`radix.slottable`);function se(e){let t=M(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=I,t}M(se,`createSlottable`);var L=M((e,t)=>{if(`child`in e.props){let t=e.props.child;return C.isValidElement(t)?C.cloneElement(t,void 0,e.props.children(t.props.children)):null}return C.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function R(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}M(R,`getElementRef`);function z(e){return C.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===I}M(z,`isSlottable`);var ce=Symbol.for(`react.lazy`);function B(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===ce&&`_payload`in e&&V(e._payload)}M(B,`isLazyComponent`);function V(e){return typeof e==`object`&&!!e&&`then`in e}M(V,`isPromiseLike`);var le=M(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),H=M(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),U=C.use,W=Object.defineProperty,ue=(e,t)=>W(e,`name`,{value:t,configurable:!0}),G=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=F(`Primitive.${t}`),r=C.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,O.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function de(e,t){e&&ie.flushSync(()=>e.dispatchEvent(t))}ue(de,`dispatchDiscreteCustomEvent`);var fe=Object.defineProperty,K=(e,t)=>fe(e,`name`,{value:t,configurable:!0}),[q,pe]=A(`Form`),J=`Form`,[me,he]=q(J),[ge,_e]=q(J),ve=C.forwardRef(K(function(e,t){let{__scopeForm:n,onClearServerErrors:r=K(()=>{},`onClearServerErrors`),...i}=e,a=D(t,C.useRef(null)),[o,s]=C.useState({}),c=C.useCallback(e=>o[e],[o]),l=C.useCallback((e,t)=>s(n=>({...n,[e]:{...n[e]??{},...t}})),[]),u=C.useCallback(e=>{s(t=>({...t,[e]:void 0})),v(t=>({...t,[e]:{}}))},[]),[d,f]=C.useState({}),p=C.useCallback(e=>d[e]??[],[d]),h=C.useCallback((e,t)=>{f(n=>({...n,[e]:[...n[e]??[],t]}))},[]),g=C.useCallback((e,t)=>{f(n=>({...n,[e]:(n[e]??[]).filter(e=>e.id!==t)}))},[]),[_,v]=C.useState({}),y=C.useCallback(e=>_[e]??{},[_]),b=C.useCallback((e,t)=>{v(n=>({...n,[e]:{...n[e]??{},...t}}))},[]),[x,S]=C.useState({});return(0,O.jsx)(me,{scope:n,getFieldValidity:c,onFieldValidityChange:l,getFieldCustomMatcherEntries:p,onFieldCustomMatcherEntryAdd:h,onFieldCustomMatcherEntryRemove:g,getFieldCustomErrors:y,onFieldCustomErrorsChange:b,onFieldValiditionClear:u,children:(0,O.jsx)(ge,{scope:n,onFieldMessageIdAdd:C.useCallback((e,t)=>{S(n=>{let r=new Set(n[e]).add(t);return{...n,[e]:r}})},[]),onFieldMessageIdRemove:C.useCallback((e,t)=>{S(n=>{let r=new Set(n[e]);return r.delete(t),{...n,[e]:r}})},[]),getFieldDescription:C.useCallback(e=>Array.from(x[e]??[]).join(` `)||void 0,[x]),children:(0,O.jsx)(G.form,{...i,ref:a,onInvalid:m(e.onInvalid,e=>{let t=Q(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:m(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:m(e.onReset,r)})})})},`Form`)),[ye,be]=q(`FormField`);function xe(e){let t={};for(let n in e)t[n]=e[n];return t}K(xe,`validityStateToObject`);function Y(e){return e instanceof HTMLElement}K(Y,`isHTMLElement`);function X(e){return`validity`in e}K(X,`isFormControl`);function Z(e){return X(e)&&(e.validity.valid===!1||e.getAttribute(`aria-invalid`)===`true`)}K(Z,`isInvalid`);function Q(e){let t=e.elements,[n]=Array.from(t).filter(Y).filter(Z);return n??null}K(Q,`getFirstInvalidControl`);function Se(e,t){return e.match.constructor.name===`AsyncFunction`||$(e.match,t)}K(Se,`isAsyncCustomMatcherEntry`);function Ce(e){return e.match.constructor.name===`Function`}K(Ce,`isSyncCustomMatcherEntry`);function $(e,t){return e(...t)instanceof Promise}K($,`returnsPromise`);function we(e){let t=!1;for(let n in e){let r=n;if(r!==`valid`&&r!==`customError`&&e[r]){t=!0;break}}return t}K(we,`hasBuiltInError`);function Te(e,t){if(e?.valid===!0&&!t)return!0}K(Te,`getValidAttribute`);function Ee(e,t){if(e?.valid===!1||t)return!0}K(Ee,`getInvalidAttribute`);function De(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}K(De,`concatAriaDescribedby`);var Oe=(0,C.memo)(({children:e})=>S(_,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},defaultValue:(0,C.useContext)(l.reflex___state____state__chromalabs___pages___company___contact____contact_state).form_topic_rx_state_,name:`topic`,placeholder:`Subject / Topic`,required:!0,size:`3`})),ke=(0,C.memo)(({children:e})=>S(ve,{className:`Root `,css:{width:`100%`},onSubmit:(0,C.useCallback)(e=>{let t=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(t).entries())};((...e)=>o([s(`reflex___state____state.chromalabs___pages___company___contact____contact_state.handle_submit`,{form_data:n},{})],e,{}))(e)})},e)),Ae=t(function(){let e=(0,C.useRef)(null);return a.ref_lambdaBackground=e,S(C.Fragment,{},S(f,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},S(f,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),S(f,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),S(f,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),S(f,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),S(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),S(ee,{},S(`script`,{},`
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
`)),S(d,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},S(d,{align:`start`,className:`rx-Stack`,css:{width:`100%`,paddingInlineStart:`16`,paddingInlineEnd:`16`,height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},S(c,{asChild:!0,css:{marginLeft:`16px`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/`},S(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),S(d,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),S(b,{},S(u,{},S(x,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),S(v,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/capabilities/ai`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/capabilities/hpc`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/capabilities/government`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),S(b,{},S(u,{},S(x,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),S(v,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/research/log`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/research/papers`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),S(b,{},S(u,{},S(x,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),S(v,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/company/mission`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/company/careers`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/company/directory`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),S(f,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},S(c,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},S(r,{to:`/contact`},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),S(c,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},S(r,{to:`/developer`},S(x,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},S(g,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))))),S(f,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},S(f,{css:{width:`100%`,minHeight:`80vh`,display:`flex`,justifyContent:`center`}},S(d,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,alignItems:`center`,justifyContent:`center`,minHeight:`calc(100vh - 200px)`,"@media screen and (min-width: 0)":{paddingTop:`12`,paddingBottom:`12`,paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingTop:`24`,paddingBottom:`24`,paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},S(g,{as:`p`,className:`animate-fade-up`,css:{fontSize:`0.8rem`,color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`},weight:`bold`},`INQUIRIES`),S(g,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},letterSpacing:`-0.04em`,lineHeight:`1.0`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,marginBottom:`8`,textAlign:`center`},weight:`bold`},`Contact the Lab.`),S(f,{className:`animate-fade-up delay-200`,css:{width:`100%`,maxWidth:`500px`,padding:`40px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(10,10,10,0.6)`,borderRadius:`8px`}},S(ke,{},S(d,{align:`start`,className:`rx-Stack`,css:{width:`100%`},direction:`column`,gap:`4`},S(g,{as:`p`,css:{fontSize:`1rem`,fontWeight:`bold`,color:`white`,letterSpacing:`0.1em`,marginBottom:`2`}},`SECURE COMMUNIQUE`),S(Oe,{}),S(_,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`email`,placeholder:`Defense or Enterprise Email`,required:!0,size:`3`,type:`email`}),S(_,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`company`,placeholder:`Organization / Agency`,required:!0,size:`3`}),S(y,{autoComplete:!1,css:{"& textarea":null,width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`,minHeight:`150px`},name:`message`,placeholder:`Deployment specifications or capabilities requested...`,required:!0,size:`3`}),S(x,{css:{background:`#DFBC61`,color:`black`,width:`100%`,marginTop:`4`,cursor:`pointer`,transition:`all 0.2s`,fontWeight:`bold`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`}},size:`3`,type:`submit`},`TRANSMIT`)))),S(g,{as:`p`,className:`animate-fade-up delay-300`,css:{fontSize:`0.85rem`,color:`slate.10`,marginTop:`8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`Headquarters: 17350 STATE HWY 249, STE 220 #37670, HOUSTON, TX 77064`)))),S(f,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},S(h,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),S(d,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,paddingInlineStart:`12`,paddingInlineEnd:`12`,paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`},direction:`row`,gap:`3`},S(d,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},S(g,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.2em`}},`© 2026 Chroma Labs, Inc.™`)),S(d,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),S(d,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-end`},direction:`column`,gap:`1`},S(g,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`17350 STATE HWY 249, STE 220 #37670`),S(g,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`HOUSTON, TX 77064`)))))),S(`title`,{},`Contact | Chroma Labs`),S(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{Ae as default};