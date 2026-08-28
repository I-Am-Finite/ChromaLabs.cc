import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{A as t,j as n,n as r}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{T as i,a,c as o,d as s,f as c,i as l,l as u,m as d,o as f,s as p,u as m}from"./esm-CCsaxb9-.js";import{n as h}from"./emotion-react.browser.esm-D66BJTCW.js";import{t as g}from"./createLucideIcon-CJFePS_t.js";import{t as _}from"./Helmet-CeZPI1C2.js";var v=e(n(),1),y=g(`plane`,[[`path`,{d:`M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z`,key:`1v9wt8`}]]),b=g(`glasses`,[[`circle`,{cx:`6`,cy:`15`,r:`4`,key:`vux9w4`}],[`circle`,{cx:`18`,cy:`15`,r:`4`,key:`18o8ve`}],[`path`,{d:`M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2`,key:`1ag4bs`}],[`path`,{d:`M2.5 13 5 7c.7-1.3 1.4-2 3-2`,key:`1hm1gs`}],[`path`,{d:`M21.5 13 19 7c-.7-1.3-1.5-2-3-2`,key:`1r31ai`}]]),x=t(function(){let e=(0,v.useRef)(null);return i.ref_lambdaBackground=e,h(v.Fragment,{},h(c,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`,position:`relative`}},h(c,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`#0A0A0C`}}),h(c,{css:{position:`fixed`,top:`15%`,left:`50%`,transform:`translateX(-50%)`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`,zIndex:`1`,filter:`blur(80px)`,borderRadius:`50%`,pointerEvents:`none`}}),h(c,{css:{position:`fixed`,top:`40%`,left:`-10%`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),h(c,{css:{position:`fixed`,bottom:`-10%`,right:`-10%`,width:`60vw`,height:`60vw`,background:`radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)`,zIndex:`1`,filter:`blur(100px)`,borderRadius:`50%`,pointerEvents:`none`}}),h(`canvas`,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),h(_,{},h(`script`,{},`
setTimeout(() => {
    const canvas = document.getElementById("lambdaBackground");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
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
}, 500);
`)),h(s,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},h(s,{align:`start`,className:`rx-Stack`,css:{width:`100%`,paddingInlineStart:`12`,paddingInlineEnd:`12`,height:`100px`,alignItems:`center`,justifyContent:`space-evenly`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},h(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`4`},h(`img`,{css:{width:`48px`,height:`48px`,transition:`transform 0.3s ease`,"&:hover":{transform:`rotate(90deg)`}},src:`/logo.svg`}),h(a,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},h(r,{to:`/`},h(d,{as:`p`,css:{fontWeight:`800`,fontSize:`1.5rem`,letterSpacing:`0.02em`,color:`white`}},`ChromaLabs`)))),h(p,{},h(o,{},h(m,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),h(f,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/capabilities/ai`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`AI`)))),h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/capabilities/hpc`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`HPC`)))),h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/capabilities/government`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Government`)))))),h(p,{},h(o,{},h(m,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),h(f,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/research`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Beyond Binary`)))),h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/research`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Volumetric Logic`)))))),h(p,{},h(o,{},h(m,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),h(f,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/company/mission`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/company/careers`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/company/mission`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/contact`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),h(p,{},h(o,{},h(m,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))),h(f,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/developer`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`API Documentation`)))),h(c,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},h(a,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},h(r,{to:`/developer`},h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`SDK Access`))))))),h(c,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},h(c,{css:{width:`100%`,position:`relative`,flexGrow:`1`}},h(c,{css:{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`100%`,zIndex:`-1`,backgroundSize:`40px 40px`,pointerEvents:`none`,maskImage:`linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)`}}),h(s,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`,justifyContent:`center`,width:`100%`,paddingTop:`120px`,paddingBottom:`120px`,"@media screen and (min-width: 0)":{paddingInlineStart:`6`,paddingInlineEnd:`6`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`}},direction:`column`,gap:`3`},h(d,{as:`p`,css:{fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.8rem`,color:`#D4AF37`,marginBottom:`4`,letterSpacing:`0.1em`}},`Government & Law Enforcement`),h(d,{as:`p`,css:{"@media screen and (min-width: 0)":{fontSize:`3rem`},"@media screen and (min-width: 30em)":{fontSize:`4rem`},"@media screen and (min-width: 48em)":{fontSize:`5rem`},fontWeight:`800`,lineHeight:`1.1`,color:`white`,letterSpacing:`-0.03em`,marginBottom:`8`,textAlign:`center`}},`THE TACTICAL EDGE`),h(d,{as:`p`,css:{color:`slate.11`,fontSize:`1.25rem`,lineHeight:`1.7`,maxWidth:`800px`,textAlign:`center`,marginBottom:`12`}},`Cloud-dependent architectures are a critical liability in contested environments. We engineer custom edge models and ultra-low-SWaP hardware for sovereign tactical operations.`),h(u,{css:{"@media screen and (min-width: 0)":{gridTemplateColumns:`1fr`},"@media screen and (min-width: 30em)":{gridTemplateColumns:`repeat(2, 1fr)`},gap:`8`,width:`100%`,maxWidth:`1000px`}},h(c,{css:{padding:`40px`,background:`rgba(255, 255, 255, 0.02)`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`8px`}},h(b,{css:{color:`#D4AF37`,marginBottom:`6`},size:32}),h(d,{as:`p`,css:{fontSize:`1.5rem`,fontWeight:`bold`,color:`white`,marginBottom:`4`}},`Augmented Reality`),h(d,{as:`p`,css:{color:`slate.10`,fontSize:`1.1rem`,lineHeight:`1.6`}},`Custom augmented reality hardware and edge models delivering real-time, zero-latency situational awareness directly to the operator's field of view.`)),h(c,{css:{padding:`40px`,background:`rgba(255, 255, 255, 0.02)`,border:`1px solid rgba(255, 255, 255, 0.05)`,borderRadius:`8px`}},h(y,{css:{color:`#D4AF37`,marginBottom:`6`},size:32}),h(d,{as:`p`,css:{fontSize:`1.5rem`,fontWeight:`bold`,color:`white`,marginBottom:`4`}},`Small UAV Integration`),h(d,{as:`p`,css:{color:`slate.10`,fontSize:`1.1rem`,lineHeight:`1.6`}},`Unprecedented autonomous capabilities deployed on small UAVs via our low-SWaP (Size, Weight, and Power) computational matrices.`))),h(a,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},h(r,{to:`/contact`},h(m,{css:{background:`white`,color:`black`,borderRadius:`0`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.8rem`,fontWeight:`bold`,padding:`20px 32px`,marginTop:`16`,cursor:`pointer`,"&:hover":{background:`#e0e0e0`}}},`CONTACT US`)))))),h(c,{css:{background:`transparent`,width:`100%`,position:`relative`,zIndex:`10`}},h(l,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),h(s,{css:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`100%`,paddingTop:`35px`,paddingBottom:`35px`}},h(d,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.2em`}},`© 2026 Chroma Labs, Inc.™`))))),h(`title`,{},`Defense & Gov | Chroma Labs`),h(`meta`,{content:`/logo.svg`,property:`og:image`}))});export{x as default};