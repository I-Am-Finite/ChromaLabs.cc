
let next_id = 0;
function Var(idx) { return { id: next_id++, t: 0, idx: idx }; }
function Abs(body) { return { id: next_id++, t: 1, body: body }; }
function App(left, right) { return { id: next_id++, t: 2, left: left, right: right }; }

function copyTerm(term, origin_x, origin_y) {
    let t;
    if (term.t === 0) t = Var(term.idx);
    else if (term.t === 1) t = Abs(copyTerm(term.body, origin_x, origin_y));
    else t = App(copyTerm(term.left, origin_x, origin_y), copyTerm(term.right, origin_x, origin_y));
    t.origin_x = origin_x !== undefined ? origin_x : term.draw_x;
    t.origin_y = origin_y !== undefined ? origin_y : term.draw_y;
    return t;
}

function shift(term, inc, depth) {
    if (term.t === 0) {
        let t = term.idx >= depth ? Var(term.idx + inc) : Var(term.idx);
        t.origin_x = term.draw_x; t.origin_y = term.draw_y;
        return t;
    } else if (term.t === 1) {
        let t = Abs(shift(term.body, inc, depth + 1));
        t.origin_x = term.draw_x; t.origin_y = term.draw_y;
        return t;
    } else {
        let t = App(shift(term.left, inc, depth), shift(term.right, inc, depth));
        t.origin_x = term.draw_x; t.origin_y = term.draw_y;
        return t;
    }
}

function substitute(term, arg, depth) {
    if (term.t === 0) {
        if (term.idx === depth) {
            return copyTerm(arg, term.draw_x, term.draw_y); // Duplicates R, originating from R's old position!
        }
        if (term.idx > depth) {
            let t = Var(term.idx - 1);
            t.origin_x = term.draw_x; t.origin_y = term.draw_y;
            return t;
        }
        let t = Var(term.idx);
        t.origin_x = term.draw_x; t.origin_y = term.draw_y;
        return t;
    } else if (term.t === 1) {
        let t = Abs(substitute(term.body, arg, depth + 1));
        t.origin_x = term.draw_x; t.origin_y = term.draw_y;
        return t;
    } else {
        let t = App(substitute(term.left, arg, depth), substitute(term.right, arg, depth));
        t.origin_x = term.draw_x; t.origin_y = term.draw_y;
        return t;
    }
}

