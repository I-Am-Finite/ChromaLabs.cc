import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{C as i,I as a,P as o,S as s,T as c,_ as l,a as u,b as d,c as f,d as p,f as m,g as h,i as g,j as _,k as v,l as y,m as b,o as x,p as S,r as C,s as w,u as T,v as E,w as D,x as O}from"./createLucideIcon-D-QCcEyj.js";import{n as k}from"./emotion-react.browser.esm-D66BJTCW.js";import{n as A,t as j}from"./menu-BkDdOr-S.js";var M=e(n(),1),N=D(),P=Object.defineProperty,F=(e,t)=>P(e,`name`,{value:t,configurable:!0}),[I,ee]=s(`Form`),L=`Form`,[R,te]=I(L),[z,ne]=I(L),B=M.forwardRef(F(function(e,t){let{__scopeForm:n,onClearServerErrors:r=F(()=>{},`onClearServerErrors`),...a}=e,o=c(t,M.useRef(null)),[s,l]=M.useState({}),u=M.useCallback(e=>s[e],[s]),d=M.useCallback((e,t)=>l(n=>({...n,[e]:{...n[e]??{},...t}})),[]),f=M.useCallback(e=>{l(t=>({...t,[e]:void 0})),y(t=>({...t,[e]:{}}))},[]),[p,m]=M.useState({}),h=M.useCallback(e=>p[e]??[],[p]),g=M.useCallback((e,t)=>{m(n=>({...n,[e]:[...n[e]??[],t]}))},[]),_=M.useCallback((e,t)=>{m(n=>({...n,[e]:(n[e]??[]).filter(e=>e.id!==t)}))},[]),[v,y]=M.useState({}),b=M.useCallback(e=>v[e]??{},[v]),x=M.useCallback((e,t)=>{y(n=>({...n,[e]:{...n[e]??{},...t}}))},[]),[S,C]=M.useState({});return(0,N.jsx)(R,{scope:n,getFieldValidity:u,onFieldValidityChange:d,getFieldCustomMatcherEntries:h,onFieldCustomMatcherEntryAdd:g,onFieldCustomMatcherEntryRemove:_,getFieldCustomErrors:b,onFieldCustomErrorsChange:x,onFieldValiditionClear:f,children:(0,N.jsx)(z,{scope:n,onFieldMessageIdAdd:M.useCallback((e,t)=>{C(n=>{let r=new Set(n[e]).add(t);return{...n,[e]:r}})},[]),onFieldMessageIdRemove:M.useCallback((e,t)=>{C(n=>{let r=new Set(n[e]);return r.delete(t),{...n,[e]:r}})},[]),getFieldDescription:M.useCallback(e=>Array.from(S[e]??[]).join(` `)||void 0,[S]),children:(0,N.jsx)(i.form,{...a,ref:o,onInvalid:O(e.onInvalid,e=>{let t=G(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:O(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:O(e.onReset,r)})})})},`Form`)),[re,ie]=I(`FormField`);function V(e){let t={};for(let n in e)t[n]=e[n];return t}F(V,`validityStateToObject`);function H(e){return e instanceof HTMLElement}F(H,`isHTMLElement`);function U(e){return`validity`in e}F(U,`isFormControl`);function W(e){return U(e)&&(e.validity.valid===!1||e.getAttribute(`aria-invalid`)===`true`)}F(W,`isInvalid`);function G(e){let t=e.elements,[n]=Array.from(t).filter(H).filter(W);return n??null}F(G,`getFirstInvalidControl`);function K(e,t){return e.match.constructor.name===`AsyncFunction`||J(e.match,t)}F(K,`isAsyncCustomMatcherEntry`);function q(e){return e.match.constructor.name===`Function`}F(q,`isSyncCustomMatcherEntry`);function J(e,t){return e(...t)instanceof Promise}F(J,`returnsPromise`);function Y(e){let t=!1;for(let n in e){let r=n;if(r!==`valid`&&r!==`customError`&&e[r]){t=!0;break}}return t}F(Y,`hasBuiltInError`);function X(e,t){if(e?.valid===!0&&!t)return!0}F(X,`getValidAttribute`);function Z(e,t){if(e?.valid===!1||t)return!0}F(Z,`getInvalidAttribute`);var Q=B,$=(0,M.memo)(({children:e})=>k(C,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},defaultValue:(0,M.useContext)(v.reflex___state____state__chromalabs___pages___company___contact____contact_state).form_topic_rx_state_,name:`topic`,placeholder:`Subject / Topic`,required:!0,size:`3`})),ae=(0,M.memo)(({children:e})=>k(Q,{className:`Root `,css:{width:`100%`},onSubmit:(0,M.useCallback)(e=>{let t=e.target;e.preventDefault();let n={...Object.fromEntries(new FormData(t).entries())};((...e)=>_([o(`reflex___state____state.chromalabs___pages___company___contact____contact_state.handle_submit`,{form_data:n},{})],e,{}))(e)})},e)),oe=t(function(){let e=(0,M.useRef)(null);return a.ref_lambdaBackground=e,k(M.Fragment,{},k(E,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},k(E,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),k(E,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),k(E,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),k(E,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),k(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),k(A,{},k(`script`,{},`
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
`)),k(l,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},k(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`16`,paddingInlineEnd:`16`},height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},k(x,{asChild:!0,css:{"@media screen and (min-width: 0)":{marginLeft:`4px`},"@media screen and (min-width: 30em)":{marginLeft:`16px`},"&:hover":{textDecoration:`none`}}},k(r,{to:`/`},k(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),k(l,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),k(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`flex`},"@media screen and (min-width: 62em)":{display:`flex`},alignItems:`center`},direction:`row`,gap:`4`},k(f,{},k(y,{},k(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),k(w,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/capabilities/ai`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/capabilities/hpc`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/capabilities/government`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),k(f,{},k(y,{},k(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),k(w,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/research/log`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/research/papers`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),k(f,{},k(y,{},k(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),k(w,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/company/mission`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/company/careers`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/company/directory`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),k(E,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/contact`},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),k(x,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},k(r,{to:`/developer`},k(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},k(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))))),k(E,{css:{"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`block`},"@media screen and (min-width: 48em)":{display:`none`},"@media screen and (min-width: 62em)":{display:`none`}}},k(p,{},k(S,{},k(j,{css:{color:`white`,cursor:`pointer`},size:32})),k(m,{css:{background:`rgba(10, 10, 10, 0.95)`,color:`slate.11`,border:`1px solid rgba(255, 255, 255, 0.08)`}},k(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`CAPABILITIES`),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/capabilities/ai`},`AI`))),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/capabilities/hpc`},`HPC`))),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/capabilities/government`},`Government`))),k(T,{}),k(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`RESEARCH`),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/research/log`},`Research Log`))),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/research/papers`},`Published Papers`))),k(T,{}),k(d,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`COMPANY`),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/company/mission`},`Mission`))),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/company/careers`},`Careers`))),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/company/directory`},`Staff Directory`))),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/contact`},`Contact Us`))),k(T,{}),k(b,{},k(x,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,fontWeight:`bold`,"&:hover":{textDecoration:`none`}}},k(r,{to:`/developer`},`DEVELOPER PORTAL`))))))),k(E,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},k(E,{css:{width:`100%`,minHeight:`80vh`,display:`flex`,justifyContent:`center`}},k(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,alignItems:`center`,justifyContent:`center`,minHeight:`calc(100vh - 200px)`,"@media screen and (min-width: 0)":{paddingTop:`12`,paddingBottom:`12`,paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingTop:`24`,paddingBottom:`24`,paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},k(d,{as:`p`,className:`animate-fade-up`,css:{fontSize:`0.8rem`,color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`},weight:`bold`},`INQUIRIES`),k(d,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},letterSpacing:`-0.04em`,lineHeight:`1.0`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,marginBottom:`8`,textAlign:`center`},weight:`bold`},`Contact the Lab.`),k(E,{className:`animate-fade-up delay-200`,css:{width:`100%`,maxWidth:`500px`,padding:`40px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(10,10,10,0.6)`,borderRadius:`8px`}},k(ae,{},k(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`},direction:`column`,gap:`4`},k(d,{as:`p`,css:{fontSize:`1rem`,fontWeight:`bold`,color:`white`,letterSpacing:`0.1em`,marginBottom:`2`}},`SECURE COMMUNIQUE`),k($,{}),k(C,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`email`,placeholder:`Defense or Enterprise Email`,required:!0,size:`3`,type:`email`}),k(C,{autoComplete:!1,css:{width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`},name:`company`,placeholder:`Organization / Agency`,required:!0,size:`3`}),k(g,{autoComplete:!1,css:{"& textarea":null,width:`100%`,background:`rgba(0,0,0,0.5)`,borderColor:`rgba(255,255,255,0.1)`,color:`white`,minHeight:`150px`},name:`message`,placeholder:`Deployment specifications or capabilities requested...`,required:!0,size:`3`}),k(h,{css:{background:`#DFBC61`,color:`black`,width:`100%`,marginTop:`4`,cursor:`pointer`,transition:`all 0.2s`,fontWeight:`bold`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`}},size:`3`,type:`submit`},`TRANSMIT`)))),k(d,{as:`p`,className:`animate-fade-up delay-300`,css:{fontSize:`0.85rem`,color:`slate.10`,marginTop:`8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`Headquarters: 17350 STATE HWY 249, STE 220 #37670, HOUSTON, TX 77064`)))),k(E,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},k(u,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),k(l,{css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,flexDirection:`column`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,flexDirection:`column`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`,flexDirection:`row`},paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`},gap:`4`},k(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-start`}},direction:`column`,gap:`3`},k(d,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.1em`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`left`}}},`© 2026 Chroma Labs, Inc.™`)),k(l,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`,"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`block`}}}),k(l,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-end`}},direction:`column`,gap:`1`},k(d,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`17350 STATE HWY 249, STE 220 #37670`),k(d,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`HOUSTON, TX 77064`)))))),k(`title`,{},`Contact | Chroma Labs`),k(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{oe as default};