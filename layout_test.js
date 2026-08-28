function Var(idx) { return { t: 0, idx: idx }; }
function Abs(body) { return { t: 1, body: body }; }
function App(left, right) { return { t: 2, left: left, right: right }; }

function shift(term, inc, depth) {
    if (term.t === 0) {
        return term.idx >= depth ? Var(term.idx + inc) : Var(term.idx);
    } else if (term.t === 1) {
        return Abs(shift(term.body, inc, depth + 1));
    } else {
        return App(shift(term.left, inc, depth), shift(term.right, inc, depth));
    }
}

function substitute(term, arg, depth) {
    if (term.t === 0) {
        if (term.idx === depth) return shift(arg, depth, 0);
        if (term.idx > depth) return Var(term.idx - 1);
        return Var(term.idx);
    } else if (term.t === 1) {
        return Abs(substitute(term.body, arg, depth + 1));
    } else {
        return App(substitute(term.left, arg, depth), substitute(term.right, arg, depth));
    }
}

function reduce(term) {
    if (term.t === 2) {
        if (term.left.t === 1) {
            return { changed: true, term: substitute(term.left.body, term.right, 0) };
        }
        let l_res = reduce(term.left);
        if (l_res.changed) return { changed: true, term: App(l_res.term, term.right) };
        let r_res = reduce(term.right);
        if (r_res.changed) return { changed: true, term: App(term.left, r_res.term) };
    } else if (term.t === 1) {
        let b_res = reduce(term.body);
        if (b_res.changed) return { changed: true, term: Abs(b_res.term) };
    }
    return { changed: false, term: term };
}

let current_x = 0;
let max_y = 0;
function layout(term, depth) {
    term.y = depth * 40;
    if (term.y > max_y) max_y = term.y;
    
    if (term.t === 0) {
        term.x = current_x;
        current_x += 40;
        term.min_x = term.x;
        term.max_x = term.x;
    } else if (term.t === 1) {
        layout(term.body, depth + 1);
        term.min_x = term.body.min_x - 15;
        term.max_x = term.body.max_x + 15;
        term.x = (term.min_x + term.max_x) / 2;
    } else if (term.t === 2) {
        layout(term.left, depth + 1);
        layout(term.right, depth + 1);
        term.min_x = term.left.min_x;
        term.max_x = term.right.max_x;
        term.x = (term.left.x + term.right.x) / 2;
    }
}

function drawTerm(ctx, term, binders) {
    ctx.strokeStyle = "rgba(212, 175, 55, 0.8)";
    if (term.t === 0) {
        let binder = binders[binders.length - 1 - term.idx];
        if (binder) {
            ctx.beginPath();
            ctx.moveTo(term.x, term.y);
            ctx.lineTo(term.x, binder.y);
            ctx.stroke();
            
            // Draw a dot at the variable location
            ctx.beginPath();
            ctx.arc(term.x, term.y, 4, 0, 2*Math.PI);
            ctx.fillStyle = "rgba(212, 175, 55, 0.8)";
            ctx.fill();
        }
    } else if (term.t === 1) {
        ctx.beginPath();
        ctx.moveTo(term.min_x, term.y);
        ctx.lineTo(term.max_x, term.y);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(term.x, term.y);
        ctx.lineTo(term.x, term.body.y);
        ctx.stroke();
        
        let new_binders = [...binders, term];
        drawTerm(ctx, term.body, new_binders);
    } else if (term.t === 2) {
        ctx.beginPath();
        ctx.moveTo(term.left.x, term.y);
        ctx.lineTo(term.right.x, term.y);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(term.left.x, term.y);
        ctx.lineTo(term.left.x, term.left.y);
        ctx.moveTo(term.right.x, term.y);
        ctx.lineTo(term.right.x, term.right.y);
        ctx.stroke();
        
        drawTerm(ctx, term.left, binders);
        drawTerm(ctx, term.right, binders);
    }
}
