import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{t as i}from"./react-dom-DJPhu9Mm.js";import{E as a,N as o,O as s,S as c,_ as l,a as u,b as d,c as f,d as p,f as m,g as h,h as g,i as _,j as v,l as y,o as b,p as x,r as S,s as C,u as ee,x as te}from"./createLucideIcon-5tof8QVn.js";import{n as w}from"./emotion-react.browser.esm-D66BJTCW.js";import{n as T,t as ne}from"./menu-D742WMZR.js";var E=e(n(),1),re=Object.defineProperty,D=(e,t)=>re(e,`name`,{value:t,configurable:!0}),O=!!(typeof window<`u`&&window.document&&window.document.createElement);function k(e,t,{checkForDefaultPrevented:n=!0}={}){return D(function(r){if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)},`handleEvent`)}D(k,`composeEventHandlers`);function ie(e){if(!O)throw Error(`Cannot access window outside of the DOM`);return e?.ownerDocument?.defaultView??window}D(ie,`getOwnerWindow`);function A(e){if(!O)throw Error(`Cannot access document outside of the DOM`);return e?.ownerDocument??document}D(A,`getOwnerDocument`);function j(e,t=!1){let{activeElement:n}=A(e);if(!n?.nodeName)return null;if(M(n)&&n.contentDocument)return j(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=A(n).getElementById(e);if(t)return t}}return n}D(j,`getActiveElement`);function M(e){return e.tagName===`IFRAME`}D(M,`isFrame`);var N=te(),ae=Object.defineProperty,P=(e,t)=>ae(e,`name`,{value:t,configurable:!0});function oe(e,t){let n=E.createContext(t);n.displayName=e+`Context`;let r=P(e=>{let{children:t,...r}=e,i=E.useMemo(()=>r,Object.values(r));return(0,N.jsx)(n.Provider,{value:i,children:t})},`Provider`);r.displayName=e+`Provider`;function i(r,i={}){let{optional:a=!1}=i,o=E.useContext(n);if(o)return o;if(t!==void 0)return t;if(!a)throw Error(`\`${r}\` must be used within \`${e}\``)}return P(i,`useContext`),[r,i]}P(oe,`createContext`);function F(e,t=[]){let n=[];function r(t,r){let i=E.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=P(t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=E.useMemo(()=>o,Object.values(o));return(0,N.jsx)(s.Provider,{value:c,children:r})},`Provider`);o.displayName=t+`Provider`;function s(n,o,s={}){let{optional:c=!1}=s,l=o?.[e]?.[a]||i,u=E.useContext(l);if(u)return u;if(r!==void 0)return r;if(!c)throw Error(`\`${n}\` must be used within \`${t}\``)}return P(s,`useContext`),[o,s]}P(r,`createContext`);let i=P(()=>{let t=n.map(e=>E.createContext(e));return P(function(n){let r=n?.[e]||t;return E.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])},`useScope`)},`createScope`);return i.scopeName=e,[r,I(i,...t)]}P(F,`createContextScope`);function I(...e){let t=e[0];if(e.length===1)return t;let n=P(()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return P(function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return E.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])},`useComposedScopes`)},`createScope`);return n.scopeName=t.scopeName,n}P(I,`composeContextScopes`);var se=e(i(),1),ce=Object.defineProperty,L=(e,t)=>ce(e,`name`,{value:t,configurable:!0});function R(e){let t=E.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];U(r)&&typeof G==`function`&&(r=G(r._payload)),E.Children.forEach(r,e=>{if(H(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;U(n)&&typeof G==`function`&&(n=G(n._payload)),a=ue(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=E.cloneElement(a,void 0,s):!o&&E.Children.count(r)===1&&E.isValidElement(r)&&(a=r);let l=a?V(a):void 0,u=c(n,l);if(!a){if(r||r===0)throw Error(o?pe(e):fe(e));return r}let d=B(i,a.props??{});return a.type!==E.Fragment&&(d.ref=n?u:l),E.cloneElement(a,d)});return t.displayName=`${e}.Slot`,t}L(R,`createSlot`);var z=Symbol.for(`radix.slottable`);function le(e){let t=L(e=>`child`in e?e.children(e.child):e.children,`Slottable`);return t.displayName=`${e}.Slottable`,t.__radixId=z,t}L(le,`createSlottable`);var ue=L((e,t)=>{if(`child`in e.props){let t=e.props.child;return E.isValidElement(t)?E.cloneElement(t,void 0,e.props.children(t.props.children)):null}return E.isValidElement(t)?t:null},`getSlottableElementFromSlottable`);function B(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}L(B,`mergeProps`);function V(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}L(V,`getElementRef`);function H(e){return E.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===z}L(H,`isSlottable`);var de=Symbol.for(`react.lazy`);function U(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===de&&`_payload`in e&&W(e._payload)}L(U,`isLazyComponent`);function W(e){return typeof e==`object`&&!!e&&`then`in e}L(W,`isPromiseLike`);var fe=L(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),pe=L(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),G=E.use,me=Object.defineProperty,he=(e,t)=>me(e,`name`,{value:t,configurable:!0}),ge=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=R(`Primitive.${t}`),r=E.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,N.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function _e(e,t){e&&se.flushSync(()=>e.dispatchEvent(t))}he(_e,`dispatchDiscreteCustomEvent`);var ve=Object.defineProperty,K=(e,t)=>ve(e,`name`,{value:t,configurable:!0}),[q,ye]=F(`Form`),J=`Form`,[be,xe]=q(J),[Se,Ce]=q(J),we=E.forwardRef(K(function(e,t){let{__scopeForm:n,onClearServerErrors:r=K(()=>{},`onClearServerErrors`),...i}=e,a=c(t,E.useRef(null)),[o,s]=E.useState({}),l=E.useCallback(e=>o[e],[o]),u=E.useCallback((e,t)=>s(n=>({...n,[e]:{...n[e]??{},...t}})),[]),d=E.useCallback(e=>{s(t=>({...t,[e]:void 0})),v(t=>({...t,[e]:{}}))},[]),[f,p]=E.useState({}),m=E.useCallback(e=>f[e]??[],[f]),h=E.useCallback((e,t)=>{p(n=>({...n,[e]:[...n[e]??[],t]}))},[]),g=E.useCallback((e,t)=>{p(n=>({...n,[e]:(n[e]??[]).filter(e=>e.id!==t)}))},[]),[_,v]=E.useState({}),y=E.useCallback(e=>_[e]??{},[_]),b=E.useCallback((e,t)=>{v(n=>({...n,[e]:{...n[e]??{},...t}}))},[]),[x,S]=E.useState({});return(0,N.jsx)(be,{scope:n,getFieldValidity:l,onFieldValidityChange:u,getFieldCustomMatcherEntries:m,onFieldCustomMatcherEntryAdd:h,onFieldCustomMatcherEntryRemove:g,getFieldCustomErrors:y,onFieldCustomErrorsChange:b,onFieldValiditionClear:d,children:(0,N.jsx)(Se,{scope:n,onFieldMessageIdAdd:E.useCallback((e,t)=>{S(n=>{let r=new Set(n[e]).add(t);return{...n,[e]:r}})},[]),onFieldMessageIdRemove:E.useCallback((e,t)=>{S(n=>{let r=new Set(n[e]);return r.delete(t),{...n,[e]:r}})},[]),getFieldDescription:E.useCallback(e=>Array.from(x[e]??[]).join(` `)||void 0,[x]),children:(0,N.jsx)(ge.form,{...i,ref:a,onInvalid:k(e.onInvalid,e=>{let t=Q(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:k(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:k(e.onReset,r)})})})},`Form`)),[Te,Ee]=q(`FormField`);function De(e){let t={};for(let n in e)t[n]=e[n];return t}K(De,`validityStateToObject`);function Y(e){return e instanceof HTMLElement}K(Y,`isHTMLElement`);function X(e){return`validity`in e}K(X,`isFormControl`);function Z(e){return X(e)&&(e.validity.valid===!1||e.getAttribute(`aria-invalid`)===`true`)}K(Z,`isInvalid`);function Q(e){let t=e.elements,[n]=Array.from(t).filter(Y).filter(Z);return n??null}K(Q,`getFirstInvalidControl`);function Oe(e,t){return e.match.constructor.name===`AsyncFunction`||$(e.match,t)}K(Oe,`isAsyncCustomMatcherEntry`);function ke(e){return e.match.constructor.name===`Function`}K(ke,`isSyncCustomMatcherEntry`);function $(e,t){return e(...t)instanceof Promise}K($,`returnsPromise`);function Ae(e){let t=!1;for(let n in e){let r=n;if(r!==`valid`&&r!==`customError`&&e[r]){t=!0;break}}return t}K(Ae,`hasBuiltInError`);function je(e,t){if(e?.valid===!0&&!t)return!0}K(je,`getValidAttribute`);function Me(e,t){if(e?.valid===!1||t)return!0}K(Me,`getInvalidAttribute`);var Ne=we,Pe=(0,E.memo)(({children:e})=>w(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},defaultValue:(0,E.useContext)(a.reflex___state____state__chromalabs___pages___company___contact____contact_state).form_topic_rx_state_,name:`topic`,placeholder:`Subject / Technical Inquiry`,required:!0,size:`2`})),Fe=(0,E.memo)(({children:e})=>w(Ne,{className:`Root `,css:{width:`100%`},onSubmit:(0,E.useCallback)(e=>{let t=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(t).entries())};((...e)=>s([v(`reflex___state____state.chromalabs___pages___company___contact____contact_state.handle_submit`,{form_data:n},{})],e,{}))(e)})},e)),Ie=t(function(){let e=(0,E.useRef)(null);o.ref_lambdaBackground=e;let t=(0,E.useRef)(null);return o.ref_chromaNavCrystal=t,w(E.Fragment,{},w(l,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},w(l,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#07070A`}}),w(l,{css:{position:`fixed`,top:`12%`,left:`50%`,transform:`translateX(-50%)`,width:`65vw`,height:`65vw`,background:`radial-gradient(circle, rgba(223, 188, 97, 0.07) 0%, transparent 65%)`,zIndex:`1`,filter:`blur(90px)`,borderRadius:`50%`,pointerEvents:`none`}}),w(l,{css:{position:`fixed`,top:`35%`,left:`-10%`,width:`55vw`,height:`55vw`,background:`radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(110px)`,borderRadius:`50%`,pointerEvents:`none`}}),w(l,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(110px)`,borderRadius:`50%`,pointerEvents:`none`}}),w(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),w(T,{},w(`script`,{},`
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
`)),w(l,{css:{width:`100%`,height:`100vh`,maxHeight:`100vh`,display:`flex`,flexDirection:`column`,overflow:`hidden`,position:`relative`}},w(l,{css:{width:`100%`,height:`56px`,position:`fixed`,top:`0`,left:`0`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`}},w(h,{align:`start`,className:`rx-Stack`,css:{width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`16px`,paddingInlineEnd:`16px`},"@media screen and (min-width: 30em)":{paddingInlineStart:`24px`,paddingInlineEnd:`24px`},"@media screen and (min-width: 48em)":{paddingInlineStart:`36px`,paddingInlineEnd:`36px`},"@media screen and (min-width: 62em)":{paddingInlineStart:`48px`,paddingInlineEnd:`48px`},height:`56px`,alignItems:`center`},direction:`row`,gap:`3`},w(u,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},w(r,{to:`/`},w(h,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`3`},w(l,{css:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`48px`,height:`34px`}},w(`canvas`,{className:`chroma-nav-crystal-canvas`,css:{width:`48px`,height:`34px`,display:`block`,pointerEvents:`none`},id:`chromaNavCrystal`,ref:t}),w(T,{},w(`script`,{},`
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
`))),w(h,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`2`},w(d,{as:`p`,css:{fontWeight:`800`,"@media screen and (min-width: 0)":{fontSize:`1.05rem`},"@media screen and (min-width: 30em)":{fontSize:`1.15rem`},color:`white`,letterSpacing:`0.12em`}},`CHROMA`),w(d,{as:`p`,css:{fontWeight:`400`,"@media screen and (min-width: 0)":{fontSize:`1.05rem`},"@media screen and (min-width: 30em)":{fontSize:`1.15rem`},color:`#DFBC61`,letterSpacing:`0.12em`}},`LABS`))))),w(h,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),w(h,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`flex`},"@media screen and (min-width: 62em)":{display:`flex`},alignItems:`center`},direction:`row`,gap:`4`},w(C,{},w(f,{},w(g,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),w(b,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Capabilities Overview`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/thermodynamics`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Thermodynamic Scaling`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/ai`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Artificial Intelligence`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/defense`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Defense & Security`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/robotics`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Autonomous Robotics`)))))),w(C,{},w(f,{},w(g,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),w(b,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/research/log`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/research/papers`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),w(C,{},w(f,{},w(g,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),w(b,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/company/mission`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/company/careers`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/company/directory`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),w(l,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/contact`},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),w(u,{asChild:!0,css:{"&:hover":{textDecoration:`none`},"@media screen and (min-width: 0)":{marginRight:`0px`},"@media screen and (min-width: 30em)":{marginRight:`4px`},"@media screen and (min-width: 48em)":{marginRight:`12px`},"@media screen and (min-width: 62em)":{marginRight:`16px`}}},w(r,{to:`/developer`},w(g,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},w(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))))),w(l,{css:{"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`block`},"@media screen and (min-width: 48em)":{display:`none`},"@media screen and (min-width: 62em)":{display:`none`}}},w(ee,{},w(m,{},w(ne,{css:{color:`white`,cursor:`pointer`},size:32})),w(p,{css:{background:`rgba(10, 10, 10, 0.95)`,color:`slate.11`,border:`1px solid rgba(255, 255, 255, 0.08)`}},w(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`CAPABILITIES`),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities`},`Capabilities Overview`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/thermodynamics`},`Thermodynamic Scaling`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/ai`},`Artificial Intelligence`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/defense`},`Defense & Security`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/capabilities/robotics`},`Autonomous Robotics`))),w(y,{}),w(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`RESEARCH`),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/research/log`},`Research Log`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/research/papers`},`Published Papers`))),w(y,{}),w(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`COMPANY`),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/company/mission`},`Mission`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/company/careers`},`Careers`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/company/directory`},`Staff Directory`))),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/contact`},`Contact Us`))),w(y,{}),w(x,{},w(u,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,fontWeight:`bold`,"&:hover":{textDecoration:`none`}}},w(r,{to:`/developer`},`DEVELOPER PORTAL`))))))),w(l,{css:{position:`absolute`,bottom:`0`,left:`0`,width:`100%`,height:`1px`,background:`linear-gradient(90deg, rgba(223, 188, 97, 0) 0%, rgba(223, 188, 97, 0.15) 20%, rgba(223, 188, 97, 0.75) 50%, rgba(223, 188, 97, 0.15) 80%, rgba(223, 188, 97, 0) 100%)`,boxShadow:`0 0 16px rgba(223, 188, 97, 0.45), 0 0 4px rgba(223, 188, 97, 0.7)`,pointerEvents:`none`}})),w(l,{css:{width:`100%`,height:`calc(100vh - 112px)`,maxHeight:`calc(100vh - 112px)`,marginTop:`56px`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,alignItems:`center`,"@media screen and (min-width: 0)":{justifyContent:`flex-start`,overflowY:`auto`},"@media screen and (min-width: 30em)":{justifyContent:`flex-start`,overflowY:`auto`},"@media screen and (min-width: 48em)":{justifyContent:`center`,overflowY:`hidden`},"@media screen and (min-width: 62em)":{justifyContent:`center`,overflowY:`hidden`},overflowX:`hidden`}},w(l,{css:{width:`100%`,minHeight:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,"@media screen and (min-width: 0)":{justifyContent:`flex-start`},"@media screen and (min-width: 30em)":{justifyContent:`flex-start`},"@media screen and (min-width: 48em)":{justifyContent:`center`},"@media screen and (min-width: 62em)":{justifyContent:`center`}}},w(h,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`,width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,paddingTop:`20px`,paddingBottom:`80px`},"@media screen and (min-width: 30em)":{paddingInlineStart:`6`,paddingInlineEnd:`6`,paddingTop:`24px`,paddingBottom:`80px`},"@media screen and (min-width: 48em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,paddingTop:`0px`,paddingBottom:`0px`},"@media screen and (min-width: 62em)":{paddingTop:`0px`,paddingBottom:`0px`}},direction:`column`,gap:`3`},w(d,{as:`p`,className:`animate-fade-up`,css:{"@media screen and (min-width: 0)":{fontSize:`0.65rem`},"@media screen and (min-width: 30em)":{fontSize:`0.75rem`},color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`},weight:`bold`},`INSTITUTIONAL ENGAGEMENT`),w(d,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`1.6rem`,marginBottom:`2`},"@media screen and (min-width: 30em)":{fontSize:`2.0rem`,marginBottom:`3`},"@media screen and (min-width: 48em)":{fontSize:`2.6rem`},letterSpacing:`-0.03em`,lineHeight:`1.1`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,textAlign:`center`},weight:`bold`},`Contact the Lab.`),w(l,{className:`animate-fade-up delay-200`,css:{width:`100%`,maxWidth:`520px`,"@media screen and (min-width: 0)":{padding:`20px 16px`},"@media screen and (min-width: 30em)":{padding:`24px 28px`},border:`1px solid rgba(255,255,255,0.06)`,background:`rgba(10,10,14,0.7)`,borderRadius:`8px`}},w(Fe,{},w(h,{align:`start`,className:`rx-Stack`,css:{width:`100%`},direction:`column`,gap:`3`},w(d,{as:`p`,css:{fontSize:`0.85rem`,fontWeight:`bold`,color:`white`,letterSpacing:`0.1em`,marginBottom:`1`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`SECURE COMMUNIQUE`),w(Pe,{}),w(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`email`,placeholder:`Institutional / Defense / Enterprise Email`,required:!0,size:`2`,type:`email`}),w(S,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`company`,placeholder:`Organization / Agency / Defense Prime`,required:!0,size:`2`}),w(_,{autoComplete:!1,css:{"& textarea":null,width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`,minHeight:`80px`,maxHeight:`100px`},name:`message`,placeholder:`Scope of inquiry, operational requirements, or alignment context...`,required:!0,size:`2`}),w(g,{css:{background:`#DFBC61`,border:`none`,color:`black`,borderRadius:`4px`,fontWeight:`bold`,cursor:`pointer`,transition:`all 0.25s ease`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`,boxShadow:`0 0 35px rgba(223, 188, 97, 0.5), 0 0 20px rgba(168, 85, 247, 0.4)`},"&:active":{background:`#DFBC61`,transform:`scale(0.98)`,boxShadow:`0 0 25px rgba(223, 188, 97, 0.6)`,outline:`none`},"&:focus":{outline:`2px solid #DFBC61`,outlineOffset:`2px`},width:`100%`,marginTop:`2`},size:`2`,type:`submit`},`TRANSMIT TO LEAD ARCHITECT`),w(d,{as:`p`,css:{"@media screen and (min-width: 0)":{fontSize:`0.62rem`},"@media screen and (min-width: 30em)":{fontSize:`0.68rem`},color:`slate.9`,lineHeight:`1.45`,textAlign:`center`,marginTop:`2`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`NOTICE: Technical architecture specifications, formal verification suites, and hardware evaluations are provisioned strictly under bilateral NDA following verification of institutional interest and compliance with applicable export controls (ITAR / EAR).`))))))),w(l,{css:{width:`100%`,height:`56px`,position:`fixed`,bottom:`0`,left:`0`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`}},w(l,{css:{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`1px`,background:`linear-gradient(90deg, rgba(223, 188, 97, 0) 0%, rgba(223, 188, 97, 0.15) 20%, rgba(223, 188, 97, 0.75) 50%, rgba(223, 188, 97, 0.15) 80%, rgba(223, 188, 97, 0) 100%)`,boxShadow:`0 0 16px rgba(223, 188, 97, 0.45), 0 0 4px rgba(223, 188, 97, 0.7)`,pointerEvents:`none`}}),w(h,{css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,justifyContent:`center`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,justifyContent:`center`},"@media screen and (min-width: 48em)":{paddingInlineStart:`16`,paddingInlineEnd:`16`,justifyContent:`space-between`},height:`56px`,flexDirection:`row`,alignItems:`center`}},w(d,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{fontSize:`0.68rem`,textAlign:`center`},"@media screen and (min-width: 30em)":{fontSize:`0.72rem`,textAlign:`center`},"@media screen and (min-width: 48em)":{fontSize:`0.75rem`,textAlign:`left`},letterSpacing:`0.08em`}},`© 2026 Chroma Labs, Inc.™`),w(h,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`,"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`block`}}}),w(d,{as:`p`,css:{color:`slate.9`,fontSize:`0.68rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`none`},marginLeft:`1`}},`· HOUSTON, TX`),w(d,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{display:`none`,textAlign:`center`},"@media screen and (min-width: 30em)":{display:`block`,textAlign:`center`},"@media screen and (min-width: 48em)":{display:`block`,textAlign:`right`}}},`17350 STATE HWY 249, STE 220 #37670 · HOUSTON, TX 77064`))))),w(`title`,{},`Contact | Chroma Labs`),w(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{Ie as default};