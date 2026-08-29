import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{a as i,c as a,d as o,f as s,i as c,m as l,o as u,s as d,u as f,w as p}from"./esm-hQiUTGb4.js";import{n as m}from"./emotion-react.browser.esm-D66BJTCW.js";import{t as h}from"./createLucideIcon-CJFePS_t.js";import{t as g}from"./Helmet-CeZPI1C2.js";var _=e(n(),1),v=h(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),y=t(function(){let e=(0,_.useRef)(null);return p.ref_lambdaBackground=e,m(_.Fragment,{},m(s,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},m(s,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),m(s,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),m(s,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),m(s,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),m(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),m(g,{},m(`script`,{},`
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
`)),m(o,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},m(o,{align:`start`,className:`rx-Stack`,css:{width:`100%`,paddingInlineStart:`16`,paddingInlineEnd:`16`,height:`100px`,alignItems:`center`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},m(i,{asChild:!0,css:{marginLeft:`16px`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/`},m(`img`,{css:{height:`55px`,width:`auto`},src:`/logo.svg?v=8`}))),m(o,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),m(d,{},m(a,{},m(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),m(u,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/capabilities/ai`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/capabilities/hpc`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/capabilities/government`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),m(d,{},m(a,{},m(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),m(u,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/research/log`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Research Log`)))),m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/research/papers`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Published Papers`)))))),m(d,{},m(a,{},m(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),m(u,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/company/mission`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/company/careers`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/company/directory`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/contact`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),m(d,{},m(a,{},m(f,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))),m(u,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/developer`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`API Documentation`)))),m(s,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},m(i,{asChild:!0,css:{width:`100%`,display:`block`,color:`inherit`,"&:hover":{textDecoration:`none`}}},m(r,{to:`/developer`},m(l,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`SDK Access`))))))),m(s,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},m(s,{css:{width:`100%`,minHeight:`80vh`,display:`flex`,justifyContent:`center`}},m(o,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,alignItems:`center`,justifyContent:`center`,minHeight:`calc(100vh - 200px)`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},m(l,{as:`p`,className:`animate-fade-up`,css:{fontSize:`0.8rem`,color:`#DFBC61`,letterSpacing:`0.15em`,textAlign:`center`},weight:`bold`},`RESEARCH LOG`),m(l,{as:`p`,className:`animate-fade-up delay-100`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},letterSpacing:`-0.04em`,lineHeight:`1.0`,color:`white`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,marginBottom:`8`,textAlign:`center`},weight:`bold`},`Architectural Intelligence.`),m(o,{css:{display:`flex`,alignItems:`center`,justifyContent:`center`,background:`rgba(10,10,10,0.5)`,border:`1px dashed rgba(255,255,255,0.1)`,borderRadius:`8px`,padding:`48px 24px`,width:`100%`,maxWidth:`1200px`}},m(o,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`column`,gap:`3`},m(v,{css:{color:`slate.9`,marginBottom:`4`},size:48}),m(l,{as:`p`,css:{color:`white`,fontSize:`1.5rem`,fontWeight:`600`}},`Intelligence Logs Coming Soon`),m(l,{as:`p`,css:{color:`slate.11`,textAlign:`center`,maxWidth:`500px`,marginTop:`2`}},`Our architectural breakdowns and hardware physics research will be published here.`)))))),m(s,{css:{background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,width:`100%`,position:`relative`,zIndex:`10`}},m(c,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),m(o,{align:`start`,className:`rx-Stack`,css:{width:`100%`,maxWidth:`1200px`,margin:`0 auto`,paddingInlineStart:`12`,paddingInlineEnd:`12`,paddingTop:`35px`,paddingBottom:`35px`,alignItems:`center`},direction:`row`,gap:`3`},m(o,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-start`},direction:`column`,gap:`3`},m(l,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.2em`}},`© 2026 Chroma Labs, Inc.™`)),m(o,{css:{flex:1,justifySelf:`stretch`,alignSelf:`stretch`}}),m(o,{align:`start`,className:`rx-Stack`,css:{alignItems:`flex-end`},direction:`column`,gap:`1`},m(l,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`17350 STATE HWY 249, STE 220 #37670`),m(l,{as:`p`,css:{color:`slate.8`,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`}},`HOUSTON, TX 77064`)))))),m(`title`,{},`Research Log | Chroma Labs`),m(`meta`,{content:`/logo_glyph.png`,property:`og:image`}))});export{y as default};