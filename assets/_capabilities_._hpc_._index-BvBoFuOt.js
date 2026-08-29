import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{a as i,c as a,d as o,f as s,i as c,l,m as u,o as d,s as f,u as p,w as m}from"./esm-B7uWDhLR.js";import{n as h}from"./emotion-react.browser.esm-D66BJTCW.js";import{t as g}from"./createLucideIcon-CJFePS_t.js";import{t as _}from"./Helmet-CeZPI1C2.js";var v=e(n(),1),y=g(`thermometer-snowflake`,[[`path`,{d:`m10 20-1.25-2.5L6 18`,key:`18frcb`}],[`path`,{d:`M10 4 8.75 6.5 6 6`,key:`7mghy3`}],[`path`,{d:`M10.585 15H10`,key:`4nqulp`}],[`path`,{d:`M2 12h6.5L10 9`,key:`kv9z4n`}],[`path`,{d:`M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z`,key:`yu0u2z`}],[`path`,{d:`m4 10 1.5 2L4 14`,key:`k9enpj`}],[`path`,{d:`m7 21 3-6-1.5-3`,key:`j8hb9u`}],[`path`,{d:`m7 3 3 6h2`,key:`1bbqgq`}]]),b=g(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),x=g(`chart-no-axes-column`,[[`path`,{d:`M5 21v-6`,key:`1hz6c0`}],[`path`,{d:`M12 21V3`,key:`1lcnhd`}],[`path`,{d:`M19 21V9`,key:`unv183`}]]),S=g(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),C=t(function(){let e=(0,v.useRef)(null);return m.ref_lambdaBackground=e,h(v.Fragment,{},h(s,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},h(s,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),h(s,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),h(s,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),h(s,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),h(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),h(_,{},h(`script`,{},`
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
`)),h(o,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},h(o,{align:`start`,className:`rx-Stack`,css:{width:`100%`,paddingInlineStart:`16`,paddingInlineEnd:`16`,height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},h(i,{asChild:!0,css:{marginLeft:`16px`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/`},h(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),h(o,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),h(f,{},h(a,{},h(p,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),h(d,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/capabilities/ai`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/capabilities/hpc`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/capabilities/government`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),h(f,{},h(a,{},h(p,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),h(d,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/research/log`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/research/papers`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),h(f,{},h(a,{},h(p,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),h(d,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/company/mission`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/company/careers`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/company/directory`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/contact`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),h(f,{},h(a,{},h(p,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))),h(d,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/developer`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`API Documentation`)))),h(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/developer`},h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`SDK Access`))))))),h(s,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},h(s,{css:{width:`100%`,position:`relative`,flexGrow:`1`,display:`flex`,justifyContent:`center`}},h(o,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`,justifyContent:`center`,width:`100%`,minHeight:`calc(100vh - 200px)`,"@media screen and (min-width: 0)":{paddingTop:`12`,paddingBottom:`12`,paddingInlineStart:`6`,paddingInlineEnd:`6`},"@media screen and (min-width: 30em)":{paddingTop:`24`,paddingBottom:`24`,paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},h(u,{as:`p`,css:{fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`1rem`,color:`#D4AF37`,marginBottom:`4`,letterSpacing:`0.1em`}},`Thermodynamic Supremacy`),h(u,{as:`p`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`4.5rem`},"@media screen and (min-width: 62em)":{fontSize:`5rem`},fontWeight:`800`,lineHeight:`1.1`,color:`white`,letterSpacing:`-0.03em`,marginBottom:`8`,textAlign:`center`}},`HIGH PERFORMANCE COMPUTING`),h(u,{as:`p`,css:{color:`slate.11`,fontSize:`1.25rem`,lineHeight:`1.7`,maxWidth:`800px`,textAlign:`center`,marginBottom:`12`}},`The HPC community is colliding with the physical limits of silicon heat dissipation. By mapping dense algebraic workloads into direct spatial networks, we radically alter the power requirements of exascale computation.`),h(l,{css:{"@media screen and (min-width: 0)":{gridTemplateColumns:`1fr`},"@media screen and (min-width: 30em)":{gridTemplateColumns:`repeat(2, 1fr)`},gap:`8`,width:`100%`,maxWidth:`1000px`}},h(s,{css:{padding:`40px`,background:`rgba(255, 255, 255, 0.02)`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`8px`}},h(y,{css:{color:`#D4AF37`,marginBottom:`6`},size:32}),h(u,{as:`p`,css:{fontSize:`1.5rem`,fontWeight:`bold`,color:`white`,marginBottom:`4`}},`Execution Substrate`),h(u,{as:`p`,css:{color:`slate.10`,fontSize:`1.1rem`,lineHeight:`1.6`}},`We do not simply optimize existing algorithms; we re-architect the physical execution substrate to achieve structural power efficiency.`)),h(s,{css:{padding:`40px`,background:`rgba(255, 255, 255, 0.02)`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`8px`}},h(b,{css:{color:`#D4AF37`,marginBottom:`6`},size:32}),h(u,{as:`p`,css:{fontSize:`1.5rem`,fontWeight:`bold`,color:`white`,marginBottom:`4`}},`Compute Density`),h(u,{as:`p`,css:{color:`slate.10`,fontSize:`1.1rem`,lineHeight:`1.6`}},`By treating complex data structures as explicit dimensional geometry, we enable unprecedented processing density per square foot.`)),h(s,{css:{padding:`40px`,background:`rgba(255, 255, 255, 0.02)`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`8px`}},h(S,{css:{color:`#D4AF37`,marginBottom:`6`},size:32}),h(u,{as:`p`,css:{fontSize:`1.5rem`,fontWeight:`bold`,color:`white`,marginBottom:`4`}},`Thermal Decarbonization`),h(u,{as:`p`,css:{color:`slate.10`,fontSize:`1.1rem`,lineHeight:`1.6`}},`Stripping out redundant memory movement eliminates the single largest thermal draw in modern supercomputing facilities.`)),h(s,{css:{padding:`40px`,background:`rgba(255, 255, 255, 0.02)`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`8px`}},h(x,{css:{color:`#D4AF37`,marginBottom:`6`},size:32}),h(u,{as:`p`,css:{fontSize:`1.5rem`,fontWeight:`bold`,color:`white`,marginBottom:`4`}},`Limitless Scale`),h(u,{as:`p`,css:{color:`slate.10`,fontSize:`1.1rem`,lineHeight:`1.6`}},`Natively parallel, cacheless algebraic graphs that scale linearly without the traditional overhead of interconnect switching.`))),h(i,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},h(r,{to:`/contact`},h(p,{css:{background:`white`,color:`black`,borderRadius:`0`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.8rem`,fontWeight:`bold`,padding:`20px 32px`,marginTop:`16`,cursor:`pointer`,"&:hover":{background:`#e0e0e0`}}},`CONTACT US`)))))),h(s,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},h(c,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),h(o,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,paddingInlineStart:`12`,paddingInlineEnd:`12`,paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`},direction:`row`,gap:`3`},h(o,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},h(u,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.2em`}},`© 2026 Chroma Labs, Inc.™`)),h(o,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),h(o,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-end`},direction:`column`,gap:`1`},h(u,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`17350 STATE HWY 249, STE 220 #37670`),h(u,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`HOUSTON, TX 77064`)))))),h(`title`,{},`HPC | Chroma Labs`),h(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{C as default};