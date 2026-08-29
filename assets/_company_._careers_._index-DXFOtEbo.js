import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{T as i,a,c as o,d as s,f as c,h as l,i as u,l as d,m as f,o as p,s as m,u as h}from"./esm-qRCQVKPS.js";import{n as g}from"./emotion-react.browser.esm-D66BJTCW.js";import{t as _}from"./createLucideIcon-CJFePS_t.js";import{t as v}from"./Helmet-CeZPI1C2.js";var y=e(n(),1),b=_(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),x=t(function(){let e=(0,y.useRef)(null);return i.ref_lambdaBackground=e,g(y.Fragment,{},g(c,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},g(c,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),g(c,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),g(c,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),g(c,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),g(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),g(v,{},g(`script`,{},`
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
`)),g(s,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},g(s,{align:`start`,className:`rx-Stack`,css:{width:`100%`,paddingInlineStart:`16`,paddingInlineEnd:`16`,height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},g(a,{asChild:!0,css:{marginLeft:`16px`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/`},g(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),g(s,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),g(m,{},g(o,{},g(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),g(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/capabilities/ai`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/capabilities/hpc`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/capabilities/government`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),g(m,{},g(o,{},g(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),g(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/research`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Beyond Binary`)))),g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/research`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Volumetric Logic`)))))),g(m,{},g(o,{},g(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),g(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/company/mission`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/company/careers`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/company/mission`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/contact`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),g(m,{},g(o,{},g(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))),g(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/developer`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`API Documentation`)))),g(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},g(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},g(r,{to:`/developer`},g(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`SDK Access`))))))),g(c,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},g(c,{css:{width:`100%`,position:`relative`,flexGrow:`1`,paddingTop:`120px`}},g(c,{css:{position:`absolute`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`80vw`,height:`80vw`,maxWidth:`800px`,maxHeight:`800px`,background:`radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 60%)`,zIndex:`-1`,filter:`blur(60px)`,borderRadius:`50%`}}),g(s,{align:`start`,className:`rx-Stack`,css:{width:`100%`,paddingInlineStart:`6`,paddingInlineEnd:`6`,paddingTop:`16`,paddingBottom:`32`,alignItems:`center`},direction:`column`,gap:`3`},g(c,{className:`animate-fade-up`,css:{padding:`6px 16px`,border:`1px solid rgba(0, 240, 255, 0.2)`,borderRadius:`4px`,background:`rgba(0, 240, 255, 0.05)`,marginBottom:`8`,boxShadow:`0 0 20px rgba(0, 240, 255, 0.1)`}},g(f,{as:`p`,css:{fontSize:`0.8rem`,color:`#00F0FF`,letterSpacing:`0.15em`},weight:`bold`},`JOIN THE LAB`)),g(f,{as:`p`,className:`animate-fade-up delay-100`,css:{WebkitTextFillColor:`transparent`,"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},letterSpacing:`-0.04em`,lineHeight:`1.0`,textAlign:`center`,marginBottom:`6`,backgroundImage:`linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)`,backgroundClip:`text`},weight:`bold`},`Careers`),g(f,{as:`p`,className:`animate-fade-up delay-200`,css:{fontSize:`1.25rem`,color:`slate.11`,maxWidth:`700px`,textAlign:`center`,marginBottom:`16`,lineHeight:`1.6`}},`We are actively seeking elite engineers to re-architect the physical limits of computation.`),g(d,{className:`animate-fade-up delay-300`,css:{"@media screen and (min-width: 0)":{gridTemplateColumns:`1fr`},"@media screen and (min-width: 30em)":{gridTemplateColumns:`1fr`},"@media screen and (min-width: 48em)":{gridTemplateColumns:`repeat(2, 1fr)`},width:`100%`,maxWidth:`1000px`},gap:`6`},g(c,{css:{padding:`32px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(255,255,255,0.02)`,borderRadius:`12px`,transition:`all 0.3s ease`,"&:hover":{background:`rgba(255,255,255,0.04)`,borderColor:`rgba(0, 240, 255, 0.3)`,transform:`translateY(-4px)`,boxShadow:`0 10px 40px rgba(0, 240, 255, 0.05)`},cursor:`pointer`,width:`100%`}},g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},g(f,{as:`p`,css:{color:`#00F0FF`,letterSpacing:`0.1em`},size:`1`,weight:`bold`},`ENGINEERING`),g(l,{css:{color:`white`,marginBottom:`2`},size:`5`},`Senior ML Hardware Engineer`),g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`3`},g(b,{css:{color:`slate.11`},size:14}),g(f,{as:`p`,css:{color:`slate.11`},size:`2`},`Austin, TX / Remote`)))),g(c,{css:{padding:`32px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(255,255,255,0.02)`,borderRadius:`12px`,transition:`all 0.3s ease`,"&:hover":{background:`rgba(255,255,255,0.04)`,borderColor:`rgba(0, 240, 255, 0.3)`,transform:`translateY(-4px)`,boxShadow:`0 10px 40px rgba(0, 240, 255, 0.05)`},cursor:`pointer`,width:`100%`}},g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},g(f,{as:`p`,css:{color:`#00F0FF`,letterSpacing:`0.1em`},size:`1`,weight:`bold`},`ENGINEERING`),g(l,{css:{color:`white`,marginBottom:`2`},size:`5`},`Embedded Systems Lead`),g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`3`},g(b,{css:{color:`slate.11`},size:14}),g(f,{as:`p`,css:{color:`slate.11`},size:`2`},`Austin, TX`)))),g(c,{css:{padding:`32px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(255,255,255,0.02)`,borderRadius:`12px`,transition:`all 0.3s ease`,"&:hover":{background:`rgba(255,255,255,0.04)`,borderColor:`rgba(0, 240, 255, 0.3)`,transform:`translateY(-4px)`,boxShadow:`0 10px 40px rgba(0, 240, 255, 0.05)`},cursor:`pointer`,width:`100%`}},g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},g(f,{as:`p`,css:{color:`#00F0FF`,letterSpacing:`0.1em`},size:`1`,weight:`bold`},`RESEARCH`),g(l,{css:{color:`white`,marginBottom:`2`},size:`5`},`Optical Physicist`),g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`3`},g(b,{css:{color:`slate.11`},size:14}),g(f,{as:`p`,css:{color:`slate.11`},size:`2`},`Austin, TX`)))),g(c,{css:{padding:`32px`,border:`1px solid rgba(255,255,255,0.05)`,background:`rgba(255,255,255,0.02)`,borderRadius:`12px`,transition:`all 0.3s ease`,"&:hover":{background:`rgba(255,255,255,0.04)`,borderColor:`rgba(0, 240, 255, 0.3)`,transform:`translateY(-4px)`,boxShadow:`0 10px 40px rgba(0, 240, 255, 0.05)`},cursor:`pointer`,width:`100%`}},g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},g(f,{as:`p`,css:{color:`#00F0FF`,letterSpacing:`0.1em`},size:`1`,weight:`bold`},`DEPLOYMENT`),g(l,{css:{color:`white`,marginBottom:`2`},size:`5`},`Defense Integration Specialist`),g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`3`},g(b,{css:{color:`slate.11`},size:14}),g(f,{as:`p`,css:{color:`slate.11`},size:`2`},`Washington D.C.`)))))))),g(c,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},g(u,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),g(s,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,paddingInlineStart:`12`,paddingInlineEnd:`12`,paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`},direction:`row`,gap:`3`},g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},g(f,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.2em`}},`© 2026 Chroma Labs, Inc.™`)),g(s,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),g(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-end`},direction:`column`,gap:`1`},g(f,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`17350 STATE HWY 249, STE 220 #37670`),g(f,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`HOUSTON, TX 77064`)))))),g(`title`,{},`Careers | Chroma Labs`),g(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{x as default};