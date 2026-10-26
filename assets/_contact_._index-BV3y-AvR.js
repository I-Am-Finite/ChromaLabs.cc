import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{t as i}from"./react-dom-DJPhu9Mm.js";import{E as a,N as o,O as s,P as c,S as l,_ as u,a as d,b as f,c as p,d as m,f as h,g,h as _,i as v,j as y,l as b,o as x,p as S,r as C,s as w,u as ee,x as T}from"./createLucideIcon-SpBbR_MA.js";import{n as E}from"./emotion-react.browser.esm-D66BJTCW.js";import{n as D,t as te}from"./menu-CXPb56m4.js";var O=e(n(),1),k=Object.defineProperty,A=(e,t)=>k(e,`name`,{value:t,configurable:!0}),j=!!(typeof window<`u`&&window.document&&window.document.createElement);function M(e,t,{checkForDefaultPrevented:n=!0}={}){return A(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}A(M,`composeEventHandlers`);function ne(e){if(!j)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}A(ne,`getOwnerWindow`);function N(e){if(!j)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}A(N,`getOwnerDocument`);function P(e,t=!1){let{activeElement:n}=N(e);if(!n?.nodeName)return null;if(F(n)&&n.contentDocument)return P(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=N(n).getElementById(e);if(t)return t}}return n}A(P,`getActiveElement`);function F(e){return e.tagName===`IFRAME`}A(F,`isFrame`);var I=T(),re=Object.defineProperty,L=(e,t)=>re(e,`name`,{value:t,configurable:!0});function ie(e,t){let n=O.createContext(t);n.displayName=e+`Context`;let r=L(e=>{let{children:t,...r}=e,i=O.useMemo(()=>r,Object.values(r));return(0,I.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=O.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return L(i,`useContext`),[r,i]}L(ie,`createContext`);function R(e,t=[]){let n=[];function r(t,r){let i=O.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=L(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=O.useMemo(()=>o,Object.values(o));return(0,I.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=O.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return L(s,`useContext`),[o,s]}L(r,`createContext`);let i=L(()=>{let t=n.map(e=>O.createContext(e));return L(function(n){let r=n?.[e]||t;return O.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,z(i,...t)]}L(R,`createContextScope`);function z(...e){let t=e[0];if(e.length===1)return t;let n=L(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return L(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return O.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}L(z,`composeContextScopes`);var ae=e(i(),1),oe=Object.defineProperty,B=(e,t)=>oe(e,`name`,{value:t,configurable:!0});function V(e){let t=O.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];K(r)&&typeof J==`function`&&(r=J(r._payload)),O.Children.forEach(r,e=>{if(G(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;K(n)&&typeof J==`function`&&(n=J(n._payload)),a=ce(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=O.cloneElement(a,void 0,s):!o&&O.Children.count(r)===1&&O.isValidElement(r)&&(a=r);let c=a?W(a):void 0,u=l(n,c);if(!a){if(r||r===0)throw Error(o?de(e):ue(e));return r}let d=U(i,a.props??{});return a.type!==O.Fragment&&(d.ref=n?u:c),O.cloneElement(a,d)});return t.displayName=`${e}.Slot`,t}B(V,`createSlot`);var H=Symbol.for(`radix.slottable`);function se(e){let t=B(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=H,t}B(se,`createSlottable`);var ce=B((e,t)=>{if(`child`in e.props){let t=e.props.child;return O.isValidElement(t)?O.cloneElement(t,void 0,e.props.children(t.props.children)):null}return O.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function U(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}B(U,`mergeProps`);function W(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}B(W,`getElementRef`);function G(e){return O.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===H}B(G,`isSlottable`);var le=Symbol.for(`react.lazy`);function K(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===le&&`_payload`in e&&q(e._payload)}B(K,`isLazyComponent`);function q(e){return typeof e==`object`&&!!e&&`then`in e}B(q,`isPromiseLike`);var ue=B(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),de=B(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),J=O.use,fe=Object.defineProperty,pe=(e,t)=>fe(e,`name`,{value:t,configurable:!0}),me=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=V(`Primitive.${t}`),r=O.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,I.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function he(e,t){e&&ae.flushSync(()=>e.dispatchEvent(t))}pe(he,`dispatchDiscreteCustomEvent`);var ge=Object.defineProperty,Y=(e,t)=>ge(e,`name`,{value:t,configurable:!0}),[X,_e]=R(`Form`),Z=`Form`,[ve,ye]=X(Z),[be,xe]=X(Z),Se=O.forwardRef(Y(function(e,t){let{__scopeForm:n,onClearServerErrors:r=Y(()=>{},`onClearServerErrors`),...i}=e,a=l(t,O.useRef(null)),[o,s]=O.useState({}),c=O.useCallback(e=>o[e],[o]),u=O.useCallback((e,t)=>s(n=>({...n,[e]:{...n[e]??{},...t}})),[]),d=O.useCallback(e=>{s(t=>({...t,[e]:void 0})),v(t=>({...t,[e]:{}}))},[]),[f,p]=O.useState({}),m=O.useCallback(e=>f[e]??[],[f]),h=O.useCallback((e,t)=>{p(n=>({...n,[e]:[...n[e]??[],t]}))},[]),g=O.useCallback((e,t)=>{p(n=>({...n,[e]:(n[e]??[]).filter(e=>e.id!==t)}))},[]),[_,v]=O.useState({}),y=O.useCallback(e=>_[e]??{},[_]),b=O.useCallback((e,t)=>{v(n=>({...n,[e]:{...n[e]??{},...t}}))},[]),[x,S]=O.useState({});return(0,I.jsx)(ve,{scope:n,getFieldValidity:c,onFieldValidityChange:u,getFieldCustomMatcherEntries:m,onFieldCustomMatcherEntryAdd:h,onFieldCustomMatcherEntryRemove:g,getFieldCustomErrors:y,onFieldCustomErrorsChange:b,onFieldValiditionClear:d,children:(0,I.jsx)(be,{scope:n,onFieldMessageIdAdd:O.useCallback((e,t)=>{S(n=>{let r=new Set(n[e]).add(t);return{...n,[e]:r}})},[]),onFieldMessageIdRemove:O.useCallback((e,t)=>{S(n=>{let r=new Set(n[e]);return r.delete(t),{...n,[e]:r}})},[]),getFieldDescription:O.useCallback(e=>Array.from(x[e]??[]).join(` `)||void 0,[x]),children:(0,I.jsx)(me.form,{...i,ref:a,onInvalid:M(e.onInvalid,e=>{let t=Q(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:M(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:M(e.onReset,r)})})})},`Form`)),[Ce,we]=X(`FormField`);function Te(e){let t={};for(let n in e)t[n]=e[n];return t}Y(Te,`validityStateToObject`);function Ee(e){return e instanceof HTMLElement}Y(Ee,`isHTMLElement`);function De(e){return`validity`in e}Y(De,`isFormControl`);function Oe(e){return De(e)&&(e.validity.valid===!1||e.getAttribute(`aria-invalid`)===`true`)}Y(Oe,`isInvalid`);function Q(e){let t=e.elements,[n]=Array.from(t).filter(Ee).filter(Oe);return n??null}Y(Q,`getFirstInvalidControl`);function ke(e,t){return e.match.constructor.name===`AsyncFunction`||$(e.match,t)}Y(ke,`isAsyncCustomMatcherEntry`);function Ae(e){return e.match.constructor.name===`Function`}Y(Ae,`isSyncCustomMatcherEntry`);function $(e,t){return e(...t)instanceof Promise}Y($,`returnsPromise`);function je(e){let t=!1;for(let n in e){let r=n;if(r!==`valid`&&r!==`customError`&&e[r]){t=!0;break}}return t}Y(je,`hasBuiltInError`);function Me(e,t){if(e?.valid===!0&&!t)return!0}Y(Me,`getValidAttribute`);function Ne(e,t){if(e?.valid===!1||t)return!0}Y(Ne,`getInvalidAttribute`);var Pe=Se,Fe=(0,O.memo)(({children:e})=>{let t=(0,O.useRef)(null);return c.ref_contactTopic=t,E(C,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},defaultValue:(0,O.useContext)(a.reflex___state____state__chromalabs___pages___company___contact____contact_state).form_topic_rx_state_,id:`contactTopic`,name:`topic`,placeholder:`Subject / Technical Inquiry`,ref:t,required:!0,size:`2`})}),Ie=(0,O.memo)(({children:e})=>{let t=(0,O.useRef)(null);return c.ref_chromaContactForm=t,E(Pe,{className:`Root `,css:{width:`100%`},id:`chromaContactForm`,onSubmit:(0,O.useCallback)(e=>{let t=e.target;e.preventDefault(),{...Object.fromEntries(new FormData(t).entries())},o(c.ref_chromaContactForm),o(c.ref_contactTopic),o(c.ref_contactEmail),o(c.ref_contactCompany),o(c.ref_contactMessage),o(c.ref_contactSubmitBtn),((...e)=>s([y(`_call_function`,{function:(()=>null),callback:null},{preventDefault:!0})],e,{}))(e)}),ref:t},e)}),Le=t(function(){let e=(0,O.useRef)(null);c.ref_lambdaBackground=e;let t=(0,O.useRef)(null);c.ref_chromaNavCrystal=t;let n=(0,O.useRef)(null);c.ref_directCopyBtn=n;let i=(0,O.useRef)(null);c.ref_contactEmail=i;let a=(0,O.useRef)(null);c.ref_contactCompany=a;let o=(0,O.useRef)(null);c.ref_contactMessage=o;let s=(0,O.useRef)(null);c.ref_contactSubmitBtn=s;let l=(0,O.useRef)(null);c.ref_contactStatusTitle=l;let y=(0,O.useRef)(null);c.ref_contactStatusMsg=y;let T=(0,O.useRef)(null);c.ref_contactCopyRecordBtn=T;let k=(0,O.useRef)(null);c.ref_contactResetBtn=k;let A=(0,O.useRef)(null);c.ref_contactStatusActions=A;let j=(0,O.useRef)(null);return c.ref_contactStatusBox=j,E(O.Fragment,{},E(u,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},E(u,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#07070A`}}),E(u,{css:{position:`fixed`,top:`12%`,left:`50%`,transform:`translateX(-50%)`,width:`65vw`,height:`65vw`,background:`radial-gradient(circle, rgba(223, 188, 97, 0.07) 0%, transparent 65%)`,zIndex:`1`,filter:`blur(90px)`,borderRadius:`50%`,pointerEvents:`none`}}),E(u,{css:{position:`fixed`,top:`35%`,left:`-10%`,width:`55vw`,height:`55vw`,background:`radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(110px)`,borderRadius:`50%`,pointerEvents:`none`}}),E(u,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(110px)`,borderRadius:`50%`,pointerEvents:`none`}}),E(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),E(D,{},E(`script`,{},`
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
        
        const PALETTE = [
            { stroke: "212, 175, 55", glow: "#DFBC61" }, // Gold
            { stroke: "56, 189, 248", glow: "#38BDF8" }, // Electric Cyan
            { stroke: "245, 158, 11", glow: "#F59E0B" }, // Amber
            { stroke: "192, 132, 252", glow: "#C084FC" }, // Lilac
        ];

        // Layer 1: Distant micro-dust specks
        const DUST_COUNT = 35;
        let dust = [];
        function initDust() {
            dust = [];
            for (let i = 0; i < DUST_COUNT; i++) {
                dust.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.12,
                    vy: -0.06 - Math.random() * 0.15,
                    r: 0.5 + Math.random() * 0.7,
                    alpha: 0.15 + Math.random() * 0.35,
                    glow: Math.random() > 0.45 ? "#DFBC61" : (Math.random() > 0.5 ? "#38BDF8" : "#C084FC")
                });
            }
        }

        // Layer 3: Foreground Camera Focal Bokeh Orbs (soft out-of-focus optics)
        const BOKEH_COUNT = 8;
        let bokehOrbs = [];
        const BOKEH_COLORS = [
            "rgba(56, 189, 248, 0.08)",   // Cyan
            "rgba(223, 188, 97, 0.08)",   // Gold
            "rgba(192, 132, 252, 0.07)",  // Lilac
            "rgba(245, 158, 11, 0.07)"    // Amber
        ];

        function initBokeh() {
            bokehOrbs = [];
            for (let i = 0; i < BOKEH_COUNT; i++) {
                bokehOrbs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.20,
                    vy: -0.08 - Math.random() * 0.18,
                    r: 22 + Math.random() * 28,
                    color: BOKEH_COLORS[i % BOKEH_COLORS.length]
                });
            }
        }

        initDust();
        initBokeh();
        
        function drawGrid() {
            const centerX = canvas.width / 2;
            const centerY = canvas.height * 0.42;
            const maxDist = Math.hypot(canvas.width, canvas.height) * 0.65;

            // Radial Occlusion: grid is crisper near hero, softly falls off toward edges
            const offsetX = (canvas.width / 2) % GRID_SIZE;
            const offsetY = (canvas.height / 2) % GRID_SIZE;
            
            for (let x = offsetX; x <= canvas.width; x += GRID_SIZE) {
                const distRatio = Math.min(1.0, Math.abs(x - centerX) / (canvas.width * 0.6));
                const lineOpacity = 0.095 - distRatio * 0.045;
                ctx.strokeStyle = \`rgba(212, 175, 55, \${lineOpacity.toFixed(3)})\`;
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
            }
            for (let y = offsetY; y <= canvas.height; y += GRID_SIZE) {
                const distRatio = Math.min(1.0, Math.abs(y - centerY) / (canvas.height * 0.6));
                const lineOpacity = 0.095 - distRatio * 0.045;
                ctx.strokeStyle = \`rgba(212, 175, 55, \${lineOpacity.toFixed(3)})\`;
                ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
            }
            
            // Intersection tick crosses with radial falloff
            for (let x = offsetX; x <= canvas.width; x += GRID_SIZE) {
                for (let y = offsetY; y <= canvas.height; y += GRID_SIZE) {
                    const d = Math.hypot(x - centerX, y - centerY);
                    const crossOpacity = Math.max(0.06, 0.25 * (1.0 - d / maxDist));
                    ctx.strokeStyle = \`rgba(212, 175, 55, \${crossOpacity.toFixed(3)})\`;
                    ctx.beginPath();
                    ctx.moveTo(x - 4, y); ctx.lineTo(x + 4, y);
                    ctx.moveTo(x, y - 4); ctx.lineTo(x, y + 4);
                    ctx.stroke();
                }
            }
        }
        
        function spawnThread(x, y, isBranch = false, inheritedColor = null) {
            if (threads.length > 50) return;
            
            let startX = x !== undefined ? x : Math.floor(Math.random() * (canvas.width / GRID_SIZE)) * GRID_SIZE + ((canvas.width / 2) % GRID_SIZE);
            let startY = y !== undefined ? y : Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE + ((canvas.height / 2) % GRID_SIZE);
            let colorScheme = inheritedColor || PALETTE[Math.floor(Math.random() * PALETTE.length)];

            threads.push({
                x: startX, y: startY,
                path: [{x: startX, y: startY}],
                maxLength: 3 + Math.random() * 6,
                life: 0,
                maxLife: 200 + Math.random() * 200,
                moving: false,
                colorScheme: colorScheme
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
                initDust();
                initBokeh();
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            drawGrid();

            // Layer 1: Distant Ambient Spatial Dust
            for (let i = 0; i < dust.length; i++) {
                let d = dust[i];
                d.x += d.vx;
                d.y += d.vy;
                if (d.y < 0) { d.y = canvas.height; d.x = Math.random() * canvas.width; }
                if (d.x < 0) d.x = canvas.width;
                if (d.x > canvas.width) d.x = 0;

                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = d.glow;
                ctx.globalAlpha = d.alpha;
                ctx.fill();
            }
            ctx.globalAlpha = 1.0;
            
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
                        spawnThread(t.x, t.y, true, t.colorScheme);
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
                    
                    const col = t.colorScheme || PALETTE[0];

                    for (let j = 1; j < points.length; j++) {
                        const p1 = points[j - 1];
                        const p2 = points[j];
                        
                        const segmentOpacity = Math.pow(j / points.length, 2) * lifeOpacity * 0.40; 
                        
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        
                        ctx.strokeStyle = \`rgba(\${col.stroke}, \${segmentOpacity})\`;
                        ctx.lineWidth = 2.0;
                        ctx.stroke();
                    }
                    
                    const headOpacity = lifeOpacity * 0.75;
                    ctx.beginPath();
                    ctx.arc(t.x, t.y, 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = \`rgba(255, 255, 255, \${headOpacity})\`;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = col.glow;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }

            // Layer 3: Foreground Camera Focal Bokeh Orbs
            for (let i = 0; i < bokehOrbs.length; i++) {
                let b = bokehOrbs[i];
                b.x += b.vx;
                b.y += b.vy;
                if (b.y < -b.r * 2) { b.y = canvas.height + b.r; b.x = Math.random() * canvas.width; }
                if (b.x < -b.r * 2) b.x = canvas.width + b.r;
                if (b.x > canvas.width + b.r * 2) b.x = -b.r;

                const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
                grad.addColorStop(0, b.color);
                grad.addColorStop(0.5, b.color.replace(/[\\d\\.]+\\)$/, "0.03)"));
                grad.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fill();
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    initCanvas();
}
`)),E(u,{css:{width:`100%`,height:`100vh`,maxHeight:`100vh`,display:`flex`,flexDirection:`column`,overflow:`hidden`,position:`relative`}},E(u,{css:{width:`100%`,height:`56px`,position:`fixed`,top:`0`,left:`0`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`}},E(g,{align:`start`,className:`rx-Stack`,css:{width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`16px`,paddingInlineEnd:`16px`},"@media screen and (min-width: 30em)":{paddingInlineStart:`24px`,paddingInlineEnd:`24px`},"@media screen and (min-width: 48em)":{paddingInlineStart:`36px`,paddingInlineEnd:`36px`},"@media screen and (min-width: 62em)":{paddingInlineStart:`48px`,paddingInlineEnd:`48px`},height:`56px`,alignItems:`center`},direction:`row`,gap:`3`},E(d,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},E(r,{to:`/`},E(g,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`3`},E(u,{css:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`48px`,height:`34px`}},E(`canvas`,{className:`chroma-nav-crystal-canvas`,css:{width:`48px`,height:`34px`,display:`block`,pointerEvents:`none`},id:`chromaNavCrystal`,ref:t}),E(D,{},E(`script`,{},`
(function() {
    if (window.__chromaCrystalRenderAll) {
        window.__chromaCrystalRenderAll();
        return;
    }

    // Authentic Secure Client 3D Polyhedron Geometry (Tall Spire with Exact Unclipped Bounds)
    const N = 8;
    const y_top = 2.80;
    const R_girdle = 0.88;
    const y_girdle = -0.20;
    const r_mid = 0.46;
    const y_mid = -0.50;
    const y_bottom = -0.80;

    const top_tip = [0.0, y_top, 0.0];
    const bottom_tip = [0.0, y_bottom, 0.0];

    const girdle_v = [];
    for (let i = 0; i < N; i++) {
        const theta = (2 * Math.PI * i) / N;
        girdle_v.push([R_girdle * Math.cos(theta), y_girdle, R_girdle * Math.sin(theta)]);
    }

    const mid_v = [];
    for (let i = 0; i < N; i++) {
        const theta = ((i + 0.5) * 2 * Math.PI) / N;
        mid_v.push([r_mid * Math.cos(theta), y_mid, r_mid * Math.sin(theta)]);
    }

    // Inward shadow groove down the top very front
    const delta_x = 0.08, dip_z = 0.20, delta_top = 0.035, dip_top_y = 0.12;
    const top_L = [-delta_top, y_top, 0.0];
    const top_R = [+delta_top, y_top, 0.0];
    const top_dip = [0.0, y_top - dip_top_y, delta_top * 0.5];
    const ridge_L = [-delta_x, y_girdle, -R_girdle];
    const ridge_R = [+delta_x, y_girdle, -R_girdle];
    const groove_bot = [0.0, y_girdle, -R_girdle + dip_z];

    const triangles = [];
    for (let i = 0; i < N; i++) {
        if (i === 5 || i === 6) continue;
        const nxt = (i + 1) % N;
        triangles.push([girdle_v[i], top_tip, girdle_v[nxt], i]);
    }
    triangles.push([girdle_v[5], top_L, ridge_L, 5]);
    triangles.push([ridge_R, top_R, girdle_v[7], 6]);
    triangles.push([ridge_L, top_L, top_dip, 20]);
    triangles.push([ridge_L, top_dip, groove_bot, 21]);
    triangles.push([top_R, ridge_R, groove_bot, 22]);
    triangles.push([top_R, groove_bot, top_dip, 23]);

    for (let i = 0; i < N; i++) {
        if (i === 5 || i === 6) continue;
        const nxt = (i + 1) % N;
        triangles.push([girdle_v[nxt], bottom_tip, girdle_v[i], 10 + i]);
    }
    triangles.push([ridge_L, bottom_tip, girdle_v[5], 15]);
    triangles.push([ridge_R, bottom_tip, ridge_L, 16]);
    triangles.push([girdle_v[7], bottom_tip, ridge_R, 17]);

    let angle = 0.8;
    let pulsePhase = 1.0;

    function renderEngine(canvas, isNav) {
        if (!canvas || !canvas.getContext) return;
        let ctx;
        try {
            ctx = canvas.getContext("2d");
        } catch (e) {
            return;
        }
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 2;
        const cssW = isNav ? 48 : 300;
        const cssH = isNav ? 34 : 200;

        if (canvas.width !== Math.round(cssW * dpr) || canvas.height !== Math.round(cssH * dpr)) {
            canvas.width = Math.round(cssW * dpr);
            canvas.height = Math.round(cssH * dpr);
        }

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, cssW, cssH);

        const COLS = isNav ? 15 : 32;
        const ROWS = isNav ? 11 : 21;
        const cellW = cssW / COLS;
        const cellH = cssH / ROWS;

        const pitch = 0.36; // Perspective pitch
        const cosY = Math.cos(angle), sinY = Math.sin(angle);
        const cosP = Math.cos(pitch), sinP = Math.sin(pitch);

        // Exact unclipped mathematical projection
        function tr(p) {
            const x = p[0], y = p[1], z = p[2];
            const rx = x * cosY + z * sinY;
            const ry = y;
            const rz = -x * sinY + z * cosY;
            const ry2 = ry * cosP - rz * sinP;
            const rz2 = ry * sinP + rz * cosP;
            const dist = 3.5;
            const fov = dist / (dist + rz2);
            // Perfectly centered and scaled within bounds
            const sx = (rx * fov * (COLS * 0.468)) + (COLS / 2.0);
            const sy = (-(ry2 * fov - 0.615) * (ROWS * 0.295)) + (ROWS / 2.0);
            return { rx, ry: ry2, rz: rz2, sx, sy };
        }

        const grid = Array.from({ length: ROWS }, () => new Array(COLS).fill(' '));
        const charColors = Array.from({ length: ROWS }, () => new Array(COLS).fill(''));
        const zbuf = Array.from({ length: ROWS }, () => new Array(COLS).fill(-999.0));
        const facetMap = Array.from({ length: ROWS }, () => new Array(COLS).fill(-1));
        const intensityMap = Array.from({ length: ROWS }, () => new Array(COLS).fill(0.0));
        const normalMap = Array.from({ length: ROWS }, () => new Array(COLS).fill(null));

        const light = [0.4, 0.7, -0.6];
        const lLen = Math.hypot(...light);
        const lx = light[0] / lLen, ly = light[1] / lLen, lz = light[2] / lLen;

        for (let i = 0; i < triangles.length; i++) {
            const [v0, v1, v2, fid] = triangles[i];
            const p0 = tr(v0), p1 = tr(v1), p2 = tr(v2);

            const ux = p1.rx - p0.rx, uy = p1.ry - p0.ry, uz = p1.rz - p0.rz;
            const vx = p2.rx - p0.rx, vy = p2.ry - p0.ry, vz = p2.rz - p0.rz;
            const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
            const nlen = Math.hypot(nx, ny, nz);
            if (nlen > 1e-6) {
                const nnx = nx / nlen, nny = ny / nlen, nnz = nz / nlen;
                if (nnz < -0.01) {
                    const dot = Math.max(0.15, nnx * lx + nny * ly + nnz * lz);
                    const minX = Math.max(0, Math.floor(Math.min(p0.sx, p1.sx, p2.sx)));
                    const maxX = Math.min(COLS - 1, Math.ceil(Math.max(p0.sx, p1.sx, p2.sx)));
                    const minY = Math.max(0, Math.floor(Math.min(p0.sy, p1.sy, p2.sy)));
                    const maxY = Math.min(ROWS - 1, Math.ceil(Math.max(p0.sy, p1.sy, p2.sy)));

                    const denom = (p1.sy - p2.sy) * (p0.sx - p2.sx) + (p2.sx - p1.sx) * (p0.sy - p2.sy);
                    if (Math.abs(denom) > 1e-6) {
                        for (let py = minY; py <= maxY; py++) {
                            for (let px = minX; px <= maxX; px++) {
                                const w0 = ((p1.sy - p2.sy) * (px - p2.sx) + (p2.sx - p1.sx) * (py - p2.sy)) / denom;
                                const w1 = ((p2.sy - p0.sy) * (px - p2.sx) + (p0.sx - p2.sx) * (py - p2.sy)) / denom;
                                const w2 = 1.0 - w0 - w1;
                                if (w0 >= 0 && w1 >= 0 && w2 >= 0) {
                                    const pz = w0 * p0.rz + w1 * p1.rz + w2 * p2.rz;
                                    if (pz > zbuf[py][px]) {
                                        zbuf[py][px] = pz;
                                        facetMap[py][px] = fid;
                                        intensityMap[py][px] = dot;
                                        normalMap[py][px] = { nx: nnx, ny: nny, nz: nnz };
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        const rowSpans = {};
        for (let py = 0; py < ROWS; py++) {
            const pixels = [];
            for (let px = 0; px < COLS; px++) {
                if (zbuf[py][px] > -900) pixels.push(px);
            }
            if (pixels.length > 0) rowSpans[py] = [pixels[0], pixels[pixels.length - 1]];
        }

        const activeRows = Object.keys(rowSpans).map(Number);
        if (activeRows.length === 0) { ctx.restore(); return; }

        const minY = Math.min(...activeRows);
        const maxY = Math.max(...activeRows);

        let leftMinX = 999, leftWidestRow = minY;
        let rightMaxX = -1, rightWidestRow = minY;
        for (const py of activeRows) {
            const [x0, x1] = rowSpans[py];
            if (x0 < leftMinX) { leftMinX = x0; leftWidestRow = py; }
            if (x1 > rightMaxX) { rightMaxX = x1; rightWidestRow = py; }
        }

        function sampleSpectrum(t) {
            const stops = [
                { p: 0.00, r: 245, g: 215, b: 120 }, // Gold (#DFBC61)
                { p: 0.22, r: 245, g: 158, b: 80  }, // Amber
                { p: 0.48, r: 192, g: 132, b: 252 }, // Lilac / Violet
                { p: 0.74, r: 56,  g: 189, b: 248 }, // Electric Cyan
                { p: 1.00, r: 245, g: 215, b: 120 }
            ];
            let r = 245, g = 215, b = 120;
            for (let i = 0; i < stops.length - 1; i++) {
                if (t >= stops[i].p && t <= stops[i + 1].p) {
                    let lt = (t - stops[i].p) / (stops[i + 1].p - stops[i].p);
                    lt = (1 - Math.cos(lt * Math.PI)) / 2;
                    r = Math.floor(stops[i].r + (stops[i + 1].r - stops[i].r) * lt);
                    g = Math.floor(stops[i].g + (stops[i + 1].g - stops[i].g) * lt);
                    b = Math.floor(stops[i].b + (stops[i + 1].b - stops[i].b) * lt);
                    break;
                }
            }
            return { r, g, b };
        }

        function getFresnelColor(px, py, role) {
            if (role === "groove") return "#6E5F3C";
            if (role === "glint") return "#FFFFFF";

            const norm = normalMap[py][px];
            let t = 0;
            if (norm) {
                const fresnel = 1.0 - Math.abs(norm.nz);
                const reflect = Math.abs(norm.nx * 0.7 + norm.ny * 0.4);
                t = ((fresnel * 0.8 + reflect * 0.4 + angle * 0.15) % 1.0);
            } else {
                const relX = (px - COLS / 2) / (COLS / 2);
                t = (((Math.atan2(0, relX) + angle * 0.3) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / (2 * Math.PI);
            }
            const c = sampleSpectrum(t);
            if (role === "bright") return \`rgb(\${Math.min(255, c.r + 20)}, \${Math.min(255, c.g + 20)}, \${Math.min(255, c.b + 20)})\`;
            if (role === "dim") return \`rgba(\${Math.floor(c.r * 0.7)}, \${Math.floor(c.g * 0.7)}, \${Math.floor(c.b * 0.7)}, 0.85)\`;
            return \`rgb(\${c.r}, \${c.g}, \${c.b})\`;
        }

        for (const py of activeRows) {
            const [minPx, maxPx] = rowSpans[py];
            for (let px = minPx; px <= maxPx; px++) {
                const isTop = (py === minY);
                const isBottom = (py === maxY);
                const isLeftEdge = (px === minPx);
                const isRightEdge = (px === maxPx);

                if (isTop) {
                    const midX = Math.floor((minPx + maxPx) / 2);
                    grid[py][px] = (px === midX) ? '▲' : ((px < midX) ? '╱' : '╲');
                    charColors[py][px] = getFresnelColor(px, py, "bright");
                } else if (isBottom) {
                    const midX = Math.floor((minPx + maxPx) / 2);
                    grid[py][px] = (px === midX) ? '▼' : ((px < midX) ? '╲' : '╱');
                    charColors[py][px] = getFresnelColor(px, py, "bright");
                } else if (isLeftEdge) {
                    grid[py][px] = (py < leftWidestRow) ? '╱' : ((py === leftWidestRow) ? '◀' : '╲');
                    charColors[py][px] = getFresnelColor(px, py, "bright");
                } else if (isRightEdge) {
                    grid[py][px] = (py < rightWidestRow) ? '╲' : ((py === rightWidestRow) ? '▶' : '╱');
                    charColors[py][px] = getFresnelColor(px, py, "bright");
                } else {
                    const fid = facetMap[py][px];
                    if (fid >= 20 && fid <= 23) {
                        grid[py][px] = ':';
                        charColors[py][px] = getFresnelColor(px, py, "groove");
                    } else {
                        const isRidgeH = (px > minPx && facetMap[py][px] !== facetMap[py][px - 1] && facetMap[py][px - 1] !== -1);
                        const isRidgeV = (py > minY && facetMap[py][px] !== facetMap[py - 1][px] && facetMap[py - 1][px] !== -1);
                        if (isRidgeH) {
                            grid[py][px] = '│';
                            charColors[py][px] = "#FFE680"; // Bright caustic gold spine
                        } else if (isRidgeV) {
                            grid[py][px] = '─';
                            charColors[py][px] = "#38BDF8"; // Electric cyan dispersion crease
                        } else {
                            const val = intensityMap[py][px];
                            if (val > 0.72) {
                                grid[py][px] = '▒';
                                charColors[py][px] = getFresnelColor(px, py, "bright");
                            } else if (val > 0.48) {
                                grid[py][px] = '░';
                                charColors[py][px] = getFresnelColor(px, py, "normal");
                            } else if (val > 0.28) {
                                grid[py][px] = '·';
                                charColors[py][px] = getFresnelColor(px, py, "dim");
                            } else {
                                grid[py][px] = ':';
                                charColors[py][px] = getFresnelColor(px, py, "groove");
                            }
                        }
                    }
                }
            }
        }

        // Specular Primary Glint (✦)
        const cx = Math.floor(COLS / 2) + 2;
        const cy = Math.max(0, Math.min(ROWS - 1, leftWidestRow - 4));
        if (cx >= 0 && cx < COLS && cy >= 0 && cy < ROWS && zbuf[cy][cx] > -900) {
            if (!['▲','▼','╱','╲','◀','▶'].includes(grid[cy][cx])) {
                grid[cy][cx] = (Math.floor(pulsePhase * 2) % 2 === 0) ? '✦' : '✧';
                charColors[cy][cx] = "#FFFFFF";
            }
        }

        // Secondary Cyan Caustic Glint (✧) on Opposing Facet
        const cx2 = Math.floor(COLS / 2) - 3;
        const cy2 = Math.max(0, Math.min(ROWS - 1, leftWidestRow - 2));
        if (cx2 >= 0 && cx2 < COLS && cy2 >= 0 && cy2 < ROWS && zbuf[cy2][cx2] > -900) {
            if (!['▲','▼','╱','╲','◀','▶'].includes(grid[cy2][cx2])) {
                grid[cy2][cx2] = (Math.floor(pulsePhase * 2 + 1) % 2 === 0) ? '✧' : '·';
                charColors[cy2][cx2] = "#38BDF8";
            }
        }

        // Render Characters with Sub-pixel Crispness
        const fontSize = isNav ? Math.min(cellH * 0.95, cellW * 1.45) : 10.5;
        ctx.font = \`bold \${fontSize}px 'JetBrains Mono', monospace\`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (let py = 0; py < ROWS; py++) {
            for (let px = 0; px < COLS; px++) {
                const ch = grid[py][px];
                if (ch !== ' ') {
                    const col = charColors[py][px];
                    ctx.fillStyle = col;
                    if (ch === '✦') {
                        ctx.shadowColor = "#FFFFFF";
                        ctx.shadowBlur = isNav ? 2 : 6;
                    } else if (ch === '✧') {
                        ctx.shadowColor = "#38BDF8";
                        ctx.shadowBlur = isNav ? 2 : 5;
                    } else if (['▲','▼','◀','▶'].includes(ch)) {
                        ctx.shadowColor = col;
                        ctx.shadowBlur = isNav ? 1 : 4;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                    const posX = px * cellW + cellW / 2;
                    const posY = py * cellH + cellH / 2;
                    ctx.fillText(ch, posX, posY);
                }
            }
        }
        ctx.shadowBlur = 0;
        ctx.restore();
    }

    window.__chromaCrystalRenderAll = function() {
        try {
            const heroes = document.querySelectorAll(".chroma-hero-crystal-canvas, #chromaHeroCrystal");
            heroes.forEach(h => renderEngine(h, false));

            const navs = document.querySelectorAll(".chroma-nav-crystal-canvas, #chromaNavCrystal");
            navs.forEach(n => renderEngine(n, true));
        } catch (e) {}
    };

    function animate() {
        angle += 0.0055;
        pulsePhase += 0.015;

        if (window.__chromaCrystalRenderAll) {
            window.__chromaCrystalRenderAll();
        }

        requestAnimationFrame(animate);
    }

    if (!window.__chromaCrystalLoopStarted) {
        window.__chromaCrystalLoopStarted = true;
        requestAnimationFrame(animate);
    }

    if (window.__chromaCrystalRenderAll) {
        window.__chromaCrystalRenderAll();
    }
})();
`))),E(g,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`2`},E(f,{as:`p`,css:{fontWeight:`800`,"@media screen and (min-width: 0)":{fontSize:`1.05rem`},"@media screen and (min-width: 30em)":{fontSize:`1.15rem`},color:`white`,letterSpacing:`0.12em`}},`CHROMA`),E(f,{as:`p`,css:{fontWeight:`400`,"@media screen and (min-width: 0)":{fontSize:`1.05rem`},"@media screen and (min-width: 30em)":{fontSize:`1.15rem`},color:`#DFBC61`,letterSpacing:`0.12em`}},`LABS`))))),E(g,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),E(g,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`flex`},"@media screen and (min-width: 62em)":{display:`flex`},alignItems:`center`},direction:`row`,gap:`4`},E(w,{},E(p,{},E(_,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),E(x,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Capabilities Overview`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/thermodynamics`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Thermodynamic Scaling`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/ai`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Artificial Intelligence`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/defense`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Defense & Security`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/robotics`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Autonomous Robotics`)))))),E(w,{},E(p,{},E(_,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),E(x,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/research/log`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/research/papers`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),E(w,{},E(p,{},E(_,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),E(x,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/mission`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/careers`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/directory`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),E(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/contact`},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),E(d,{asChild:!0,css:{"&:hover":{textDecoration:`none`},"@media screen and (min-width: 0)":{marginRight:`0px`},"@media screen and (min-width: 30em)":{marginRight:`4px`},"@media screen and (min-width: 48em)":{marginRight:`12px`},"@media screen and (min-width: 62em)":{marginRight:`16px`}}},E(r,{to:`/developer`},E(_,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},E(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))))),E(u,{css:{"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`block`},"@media screen and (min-width: 48em)":{display:`none`},"@media screen and (min-width: 62em)":{display:`none`}}},E(ee,{},E(h,{},E(te,{css:{color:`white`,cursor:`pointer`},size:32})),E(m,{css:{background:`rgba(10, 10, 10, 0.95)`,color:`slate.11`,border:`1px solid rgba(255, 255, 255, 0.08)`}},E(f,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`CAPABILITIES`),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities`},`Capabilities Overview`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/thermodynamics`},`Thermodynamic Scaling`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/ai`},`Artificial Intelligence`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/defense`},`Defense & Security`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/capabilities/robotics`},`Autonomous Robotics`))),E(b,{}),E(f,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`RESEARCH`),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/research/log`},`Research Log`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/research/papers`},`Published Papers`))),E(b,{}),E(f,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`COMPANY`),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/mission`},`Mission`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/careers`},`Careers`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/company/directory`},`Staff Directory`))),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/contact`},`Contact Us`))),E(b,{}),E(S,{},E(d,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,fontWeight:`bold`,"&:hover":{textDecoration:`none`}}},E(r,{to:`/developer`},`DEVELOPER PORTAL`))))))),E(u,{css:{position:`absolute`,bottom:`0`,left:`0`,width:`100%`,height:`1px`,background:`linear-gradient(90deg, rgba(223, 188, 97, 0) 0%, rgba(223, 188, 97, 0.15) 20%, rgba(223, 188, 97, 0.75) 50%, rgba(223, 188, 97, 0.15) 80%, rgba(223, 188, 97, 0) 100%)`,boxShadow:`0 0 16px rgba(223, 188, 97, 0.45), 0 0 4px rgba(223, 188, 97, 0.7)`,pointerEvents:`none`}})),E(u,{css:{width:`100%`,height:`calc(100vh - 112px)`,maxHeight:`calc(100vh - 112px)`,marginTop:`56px`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,alignItems:`center`,"@media screen and (min-width: 0)":{justifyContent:`flex-start`,overflowY:`auto`},"@media screen and (min-width: 30em)":{justifyContent:`flex-start`,overflowY:`auto`},"@media screen and (min-width: 48em)":{justifyContent:`center`,overflowY:`hidden`},"@media screen and (min-width: 62em)":{justifyContent:`center`,overflowY:`hidden`},overflowX:`hidden`}},E(u,{css:{width:`100%`,minHeight:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,"@media screen and (min-width: 0)":{justifyContent:`flex-start`},"@media screen and (min-width: 30em)":{justifyContent:`flex-start`},"@media screen and (min-width: 48em)":{justifyContent:`center`},"@media screen and (min-width: 62em)":{justifyContent:`center`}}},E(g,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`,width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,paddingTop:`20px`,paddingBottom:`80px`},"@media screen and (min-width: 30em)":{paddingInlineStart:`6`,paddingInlineEnd:`6`,paddingTop:`24px`,paddingBottom:`80px`},"@media screen and (min-width: 48em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,paddingTop:`0px`,paddingBottom:`0px`},"@media screen and (min-width: 62em)":{paddingTop:`0px`,paddingBottom:`0px`}},direction:`column`,gap:`3`},E(f,{as:`p`,className:`animate-fade-up`,css:{"@media screen and (min-width: 0)":{fontSize:`0.65rem`},"@media screen and (min-width: 30em)":{fontSize:`0.75rem`},color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`},weight:`bold`},`INSTITUTIONAL ENGAGEMENT`),E(f,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`1.6rem`,marginBottom:`2`},"@media screen and (min-width: 30em)":{fontSize:`2.0rem`,marginBottom:`3`},"@media screen and (min-width: 48em)":{fontSize:`2.6rem`},letterSpacing:`-0.03em`,lineHeight:`1.1`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,textAlign:`center`},weight:`bold`},`Contact the Lab.`),E(u,{className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{marginBottom:`2`},"@media screen and (min-width: 30em)":{marginBottom:`3`}}},E(g,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`,justifyContent:`center`,flexWrap:`wrap`},direction:`row`,gap:`2`},E(f,{as:`p`,css:{"@media screen and (min-width: 0)":{fontSize:`0.7rem`},"@media screen and (min-width: 30em)":{fontSize:`0.75rem`},fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,color:`#DFBC61`,fontWeight:`bold`}},`DIRECT DISPATCH:`),E(d,{asChild:!0,css:{"@media screen and (min-width: 0)":{fontSize:`0.72rem`},"@media screen and (min-width: 30em)":{fontSize:`0.78rem`},fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,color:`white`,textDecoration:`underline`,"&:hover":{color:`#DFBC61`}}},E(r,{to:`mailto:michael@chromalabs.cc`},`michael@chromalabs.cc`)),E(_,{css:{color:`slate.9`,"&:hover":{color:`#DFBC61`},fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.68rem`,cursor:`pointer`,padding:`1px 6px`},id:`directCopyBtn`,ref:n,size:`1`,variant:`ghost`},`Copy`))),E(u,{className:`animate-fade-up delay-200`,css:{width:`100%`,maxWidth:`520px`,"@media screen and (min-width: 0)":{padding:`20px 16px`},"@media screen and (min-width: 30em)":{padding:`24px 28px`},border:`1px solid rgba(255,255,255,0.06)`,background:`rgba(10,10,14,0.7)`,borderRadius:`8px`}},E(Ie,{},E(g,{align:`start`,className:`rx-Stack`,css:{width:`100%`},direction:`column`,gap:`3`},E(f,{as:`p`,css:{fontSize:`0.85rem`,fontWeight:`bold`,color:`white`,letterSpacing:`0.1em`,marginBottom:`1`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`SECURE COMMUNIQUE`),E(Fe,{}),E(C,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},id:`contactEmail`,name:`email`,placeholder:`Institutional / Defense / Enterprise Email`,ref:i,required:!0,size:`2`,type:`email`}),E(C,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},id:`contactCompany`,name:`company`,placeholder:`Organization / Agency / Defense Prime`,ref:a,required:!0,size:`2`}),E(v,{autoComplete:!1,css:{"& textarea":null,width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`,minHeight:`80px`,maxHeight:`100px`},id:`contactMessage`,name:`message`,placeholder:`Scope of inquiry, operational requirements, or alignment context...`,ref:o,required:!0,size:`2`}),E(_,{css:{background:`#DFBC61`,border:`none`,color:`black`,borderRadius:`4px`,fontWeight:`bold`,cursor:`pointer`,transition:`all 0.25s ease`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`,boxShadow:`0 0 35px rgba(223, 188, 97, 0.5), 0 0 20px rgba(168, 85, 247, 0.4)`},"&:active":{background:`#DFBC61`,transform:`scale(0.98)`,boxShadow:`0 0 25px rgba(223, 188, 97, 0.6)`,outline:`none`},"&:focus":{outline:`2px solid #DFBC61`,outlineOffset:`2px`},width:`100%`,marginTop:`2`},id:`contactSubmitBtn`,ref:s,size:`2`,type:`submit`},`TRANSMIT TO LEAD ARCHITECT`),E(f,{as:`p`,css:{"@media screen and (min-width: 0)":{fontSize:`0.62rem`},"@media screen and (min-width: 30em)":{fontSize:`0.68rem`},color:`slate.9`,lineHeight:`1.45`,textAlign:`center`,marginTop:`2`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`NOTICE: Technical architecture specifications, formal verification suites, and hardware evaluations are provisioned strictly under bilateral NDA following verification of institutional interest and compliance with applicable export controls (ITAR / EAR).`))),E(u,{css:{display:`none`,width:`100%`},id:`contactStatusBox`,ref:j},E(g,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`,width:`100%`,paddingTop:`4`,paddingBottom:`4`},direction:`column`,gap:`3`},E(f,{as:`p`,css:{fontSize:`0.85rem`,fontWeight:`bold`,color:`#DFBC61`,letterSpacing:`0.1em`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`},id:`contactStatusTitle`,ref:l},`✓ COMMUNIQUE TRANSMITTED DIRECTLY`),E(f,{as:`p`,css:{"@media screen and (min-width: 0)":{fontSize:`0.78rem`},"@media screen and (min-width: 30em)":{fontSize:`0.85rem`},color:`white`,textAlign:`center`,lineHeight:`1.45`},id:`contactStatusMsg`,ref:y},`Your communique has been delivered directly to Lead Architect Michael Reser (michael@chromalabs.cc). Institutional materials and bilateral NDA workflows are initiated following verification of credentials.`),E(g,{align:`start`,className:`rx-Stack`,css:{justifyContent:`center`,flexWrap:`wrap`,width:`100%`,marginTop:`3`},direction:`row`,id:`contactStatusActions`,ref:A,gap:`3`},E(_,{css:{background:`white`,border:`none`,color:`black`,borderRadius:`4px`,fontWeight:`600`,cursor:`pointer`,transition:`all 0.25s ease`,"&:hover":{background:`#f0f0f2`,transform:`translateY(-2px)`,boxShadow:`0 0 30px rgba(6, 182, 212, 0.4), 0 0 15px rgba(223, 188, 97, 0.3)`},"&:active":{background:`#e4e4e7`,transform:`scale(0.98)`,boxShadow:`0 0 20px rgba(223, 188, 97, 0.4)`,outline:`none`},"&:focus":{outline:`2px solid #DFBC61`,outlineOffset:`2px`},fontSize:`0.75rem`,padding:`10px 16px`},id:`contactCopyRecordBtn`,ref:T,size:`2`},`COPY COMMUNIQUE RECORD`),E(_,{css:{background:`#DFBC61`,border:`none`,color:`black`,borderRadius:`4px`,fontWeight:`600`,cursor:`pointer`,transition:`all 0.25s ease`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`,boxShadow:`0 0 35px rgba(223, 188, 97, 0.5), 0 0 20px rgba(168, 85, 247, 0.4)`},"&:active":{background:`#DFBC61`,transform:`scale(0.98)`,boxShadow:`0 0 25px rgba(223, 188, 97, 0.6)`,outline:`none`},"&:focus":{outline:`2px solid #DFBC61`,outlineOffset:`2px`},fontSize:`0.75rem`,padding:`10px 16px`},id:`contactResetBtn`,ref:k,size:`2`},`TRANSMIT ANOTHER INQUIRY`)))),E(D,{},E(`script`,{},`
(function() {
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpppbay";

    function initContact() {
        const form = document.getElementById("chromaContactForm");
        const topicInput = document.getElementById("contactTopic");
        const emailInput = document.getElementById("contactEmail");
        const companyInput = document.getElementById("contactCompany");
        const messageInput = document.getElementById("contactMessage");
        const submitBtn = document.getElementById("contactSubmitBtn");
        const statusBox = document.getElementById("contactStatusBox");
        const directCopyBtn = document.getElementById("directCopyBtn");
        const statusTitle = document.getElementById("contactStatusTitle");
        const statusMsg = document.getElementById("contactStatusMsg");
        const statusActions = document.getElementById("contactStatusActions");
        const copyRecordBtn = document.getElementById("contactCopyRecordBtn");
        const resetBtn = document.getElementById("contactResetBtn");

        if (directCopyBtn && !directCopyBtn.__bound) {
            directCopyBtn.__bound = true;
            directCopyBtn.addEventListener("click", function(e) {
                e.preventDefault();
                navigator.clipboard.writeText("michael@chromalabs.cc").then(function() {
                    const orig = directCopyBtn.innerText;
                    directCopyBtn.innerText = "✓ Copied";
                    directCopyBtn.style.color = "#DFBC61";
                    setTimeout(function() {
                        directCopyBtn.innerText = orig;
                        directCopyBtn.style.color = "";
                    }, 2000);
                });
            });
        }

        if (!form) return;
        if (form.__bound) return;
        form.__bound = true;

        // Auto-fill topic from URL params if present
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const topicParam = urlParams.get("topic");
            if (topicParam && topicInput && !topicInput.value) {
                topicInput.value = topicParam;
            }
        } catch (e) {}

        let lastRecordText = "";

        form.addEventListener("submit", async function(e) {
            e.preventDefault();
            const topic = (topicInput ? topicInput.value : "").trim();
            const email = (emailInput ? emailInput.value : "").trim();
            const company = (companyInput ? companyInput.value : "").trim();
            const msg = (messageInput ? messageInput.value : "").trim();

            if (!topic || !email || !company || !msg) {
                alert("Please complete all inquiry fields before transmitting.");
                return;
            }

            const origBtnText = submitBtn ? submitBtn.innerText : "TRANSMIT TO LEAD ARCHITECT";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = "TRANSMITTING...";
                submitBtn.style.opacity = "0.7";
            }

            lastRecordText = \`INSTITUTIONAL COMMUNIQUE RECORD\\n\` +
                             \`RECIPIENT: michael@chromalabs.cc\\n\` +
                             \`SUBJECT: \${topic}\\n\` +
                             \`AGENCY / ORGANIZATION: \${company}\\n\` +
                             \`SENDER: \${email}\\n\\n\` +
                             \`SCOPE OF INQUIRY:\\n\${msg}\\n\\n\` +
                             \`---\\nTransmitted via Chroma Labs Portal (chromalabs.cc)\`;

            let sentDirectly = false;

            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        _subject: \`[Institutional Inquiry] \${topic} (\${company})\`,
                        topic: topic,
                        email: email,
                        company: company,
                        message: msg,
                    })
                });

                if (response.ok) {
                    sentDirectly = true;
                }
            } catch (err) {
                console.warn("Background transmission error, using client fallback:", err);
            }

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = origBtnText;
                submitBtn.style.opacity = "1";
            }

            if (sentDirectly) {
                // Success - sent directly in background!
                if (statusTitle) statusTitle.innerText = "✓ COMMUNIQUE TRANSMITTED DIRECTLY";
                if (statusMsg) statusMsg.innerText = "Your communique has been delivered directly to Lead Architect Michael Reser (michael@chromalabs.cc). Institutional materials and bilateral NDA workflows are initiated following verification of credentials.";
                if (statusActions) statusActions.style.display = "flex";
                form.style.display = "none";
                if (statusBox) statusBox.style.display = "block";
            } else {
                // Fallback to mailto client dispatch
                const mailtoUrl = "mailto:michael@chromalabs.cc?subject=" + encodeURIComponent(topic) + "&body=" + encodeURIComponent(lastRecordText);
                try {
                    window.location.href = mailtoUrl;
                } catch (e) {}

                if (statusTitle) statusTitle.innerText = "COMMUNIQUE PREPARED";
                if (statusMsg) statusMsg.innerText = "Direct gateway was unreachable; your default email client was dispatched with your pre-filled inquiry. You can also copy the record below.";
                if (statusActions) statusActions.style.display = "flex";
                form.style.display = "none";
                if (statusBox) statusBox.style.display = "block";
            }
        });

        if (copyRecordBtn && !copyRecordBtn.__bound) {
            copyRecordBtn.__bound = true;
            copyRecordBtn.addEventListener("click", function(e) {
                e.preventDefault();
                if (lastRecordText) {
                    navigator.clipboard.writeText(lastRecordText).then(function() {
                        const orig = copyRecordBtn.innerText;
                        copyRecordBtn.innerText = "✓ COPIED TO CLIPBOARD";
                        copyRecordBtn.style.color = "#DFBC61";
                        setTimeout(function() {
                            copyRecordBtn.innerText = orig;
                            copyRecordBtn.style.color = "";
                        }, 2500);
                    });
                }
            });
        }

        if (resetBtn && !resetBtn.__bound) {
            resetBtn.__bound = true;
            resetBtn.addEventListener("click", function(e) {
                e.preventDefault();
                if (form && statusBox) {
                    form.reset();
                    statusBox.style.display = "none";
                    form.style.display = "block";
                }
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initContact);
    } else {
        initContact();
    }
    setTimeout(initContact, 200);
    setTimeout(initContact, 600);
})();
`)))))),E(u,{css:{width:`100%`,height:`56px`,position:`fixed`,bottom:`0`,left:`0`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`}},E(u,{css:{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`1px`,background:`linear-gradient(90deg, rgba(223, 188, 97, 0) 0%, rgba(223, 188, 97, 0.15) 20%, rgba(223, 188, 97, 0.75) 50%, rgba(223, 188, 97, 0.15) 80%, rgba(223, 188, 97, 0) 100%)`,boxShadow:`0 0 16px rgba(223, 188, 97, 0.45), 0 0 4px rgba(223, 188, 97, 0.7)`,pointerEvents:`none`}}),E(g,{css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,justifyContent:`center`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,justifyContent:`center`},"@media screen and (min-width: 48em)":{paddingInlineStart:`16`,paddingInlineEnd:`16`,justifyContent:`space-between`},height:`56px`,flexDirection:`row`,alignItems:`center`}},E(f,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{fontSize:`0.68rem`,textAlign:`center`},"@media screen and (min-width: 30em)":{fontSize:`0.72rem`,textAlign:`center`},"@media screen and (min-width: 48em)":{fontSize:`0.75rem`,textAlign:`left`},letterSpacing:`0.08em`}},`© 2026 Chroma Labs, Inc.™`),E(g,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`,"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`block`}}}),E(f,{as:`p`,css:{color:`slate.9`,fontSize:`0.68rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`none`},marginLeft:`1`}},`· HOUSTON, TX`),E(f,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{display:`none`,textAlign:`center`},"@media screen and (min-width: 30em)":{display:`block`,textAlign:`center`},"@media screen and (min-width: 48em)":{display:`block`,textAlign:`right`}}},`17350 STATE HWY 249, STE 220 #37670 · HOUSTON, TX 77064`))))),E(`title`,{},`Contact | Chroma Labs`),E(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{Le as default};