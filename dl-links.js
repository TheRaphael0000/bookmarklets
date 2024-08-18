javascript: (() => {
    let fc = document.body.firstChild;
    let items = new Array(...document.querySelectorAll(".fa-magnet")).map(e => e.parentElement);
    let els = [];

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let el = document.createElement("a");
        els.push(el);
        el.style = "display: none;";
        el.href = item.href;
        el.innerHTML = `download ${i + 1}/${items.length}`;
        document.body.insertBefore(el, fc);
    }
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let nextItem = items[i + 1];
        let el = els[i];
        if (item == null)
            continue;
        el.addEventListener("click", (e) => {
            e.target.style.display = 'none';
            item.style = "background-color: yellow";
            nextItem.style = "background-color: orange";
            els[i + 1].style = "font-size: 3em";
        })
    }

    items[0].style = "background-color: orange";
    els[0].style = "font-size: 3em";
})();