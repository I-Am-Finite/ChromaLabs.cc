import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{N as i,O as a,_ as o,a as s,b as c,c as l,d as u,f as d,g as f,j as p,l as m,m as h,o as g,p as _,s as v,u as y,v as b}from"./createLucideIcon-BMGgRmBi.js";import{n as x}from"./emotion-react.browser.esm-D66BJTCW.js";import{n as S,t as C}from"./menu-CEbe-HhC.js";var w=e(n(),1),T=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/capabilities/ai`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),E=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/capabilities/hpc`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),D=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/capabilities/government`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),O=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/research/log`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),k=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/research/papers`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),A=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/company/mission`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),j=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/company/careers`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),M=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/company/directory`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),N=(0,w.memo)(({children:e})=>x(h,{onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/contact`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),P=(0,w.memo)(({children:e})=>x(h,{css:{color:`white`,fontWeight:`bold`},onClick:(0,w.useCallback)((e=>a([p(`_redirect`,{path:`/developer`,external:!1,popup:!1,replace:!1},{})],[e],{})),[a,p])},e)),F=t(function(){let e=(0,w.useRef)(null);return i.ref_lambdaBackground=e,x(w.Fragment,{},x(b,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},x(b,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),x(b,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),x(b,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),x(b,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),x(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),x(S,{},x(`script`,{},`
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
`)),x(o,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},x(o,{align:`start`,className:`rx-Stack`,css:{width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`16`,paddingInlineEnd:`16`},height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},x(g,{asChild:!0,css:{"@media screen and (min-width: 0)":{marginLeft:`4px`},"@media screen and (min-width: 30em)":{marginLeft:`16px`},"&:hover":{textDecoration:`none`}}},x(r,{to:`/`},x(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),x(o,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),x(o,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`flex`},"@media screen and (min-width: 62em)":{display:`flex`},alignItems:`center`},direction:`row`,gap:`4`},x(l,{},x(m,{},x(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),x(v,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/capabilities/ai`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/capabilities/hpc`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/capabilities/government`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),x(l,{},x(m,{},x(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),x(v,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/research/log`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/research/papers`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),x(l,{},x(m,{},x(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),x(v,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/company/mission`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/company/careers`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/company/directory`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),x(b,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},x(g,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},x(r,{to:`/contact`},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),x(g,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},x(r,{to:`/developer`},x(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},x(c,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))))),x(b,{css:{"@media screen and (min-width: 0)":{display:`block`},"@media screen and (min-width: 30em)":{display:`block`},"@media screen and (min-width: 48em)":{display:`none`},"@media screen and (min-width: 62em)":{display:`none`}}},x(u,{},x(_,{},x(C,{css:{color:`white`,cursor:`pointer`},size:32})),x(d,{css:{background:`rgba(10, 10, 10, 0.95)`,color:`slate.11`,border:`1px solid rgba(255, 255, 255, 0.08)`}},x(c,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`CAPABILITIES`),x(T,{},`AI`),x(E,{},`HPC`),x(D,{},`Government`),x(y,{}),x(c,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`RESEARCH`),x(O,{},`Research Log`),x(k,{},`Published Papers`),x(y,{}),x(c,{as:`p`,css:{padding:`8px 12px`,color:`#DFBC61`,fontSize:`0.75rem`,fontWeight:`bold`,letterSpacing:`0.1em`}},`COMPANY`),x(A,{},`Mission`),x(j,{},`Careers`),x(M,{},`Staff Directory`),x(N,{},`Contact Us`),x(y,{}),x(P,{},`DEVELOPER PORTAL`))))),x(b,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},x(b,{css:{width:`100%`,minHeight:`80vh`,display:`flex`,justifyContent:`center`}},x(o,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,alignItems:`center`,justifyContent:`center`,minHeight:`calc(100vh - 200px)`,"@media screen and (min-width: 0)":{paddingTop:`12`,paddingBottom:`12`,paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingTop:`24`,paddingBottom:`24`,paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},x(c,{as:`p`,className:`animate-fade-up`,css:{fontSize:`0.8rem`,color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`},weight:`bold`},`DEVELOPER PORTAL`),x(c,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},letterSpacing:`-0.04em`,lineHeight:`1.0`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,marginBottom:`8`,textAlign:`center`},weight:`bold`},`SDK & API Access.`),x(c,{as:`p`,className:`animate-fade-up delay-200`,css:{fontSize:`1.25rem`,color:`slate.11`,maxWidth:`800px`,textAlign:`center`,marginBottom:`12`,lineHeight:`1.7`}},`Direct access to our volumetric compilation toolchain is highly restricted. Beta API endpoints and physical hardware integration are provisioned strictly on a per-institution and agency basis.`),x(g,{asChild:!0,className:`animate-fade-up delay-300`,css:{"&:hover":{textDecoration:`none`}}},x(r,{to:`/contact?topic=SDK%20and%20API%20Access`},x(f,{css:{background:`#DFBC61`,color:`black`,borderRadius:`4px`,fontSize:`0.9rem`,fontWeight:`bold`,padding:`24px 48px`,cursor:`pointer`,transition:`all 0.2s`,"&:hover":{background:`#e6c455`,transform:`translateY(-2px)`}}},`REQUEST CLEARANCE`)))))),x(b,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},x(s,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),x(o,{css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`,flexDirection:`column`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`,flexDirection:`column`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`,flexDirection:`row`},paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`},gap:`4`},x(o,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-start`}},direction:`column`,gap:`3`},x(c,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.1em`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`left`}}},`© 2026 Chroma Labs, Inc.™`)),x(o,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`,"@media screen and (min-width: 0)":{display:`none`},"@media screen and (min-width: 30em)":{display:`none`},"@media screen and (min-width: 48em)":{display:`block`}}}),x(o,{align:`start`,className:`rx-Stack`,css:{"@media screen and (min-width: 0)":{alignItems:`center`},"@media screen and (min-width: 30em)":{alignItems:`center`},"@media screen and (min-width: 48em)":{alignItems:`flex-end`}},direction:`column`,gap:`1`},x(c,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`17350 STATE HWY 249, STE 220 #37670`),x(c,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,"@media screen and (min-width: 0)":{textAlign:`center`},"@media screen and (min-width: 30em)":{textAlign:`center`},"@media screen and (min-width: 48em)":{textAlign:`right`}}},`HOUSTON, TX 77064`)))))),x(`title`,{},`Developer | Chroma Labs`),x(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{F as default};