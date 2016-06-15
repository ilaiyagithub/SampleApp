const head = x => x[0];

const safe = (fn, or = undefined) => {
    try { return fn(); }
    catch (e) { return or; }
};




