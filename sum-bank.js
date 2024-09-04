javascript: (() => {
    let table = document.querySelector(
        "#fpui-shell__content > div > fpuc-movements-overview-page > fpui-card-page > div > div.fpui-card-page__card.bg-zwhite.dark\\:bg-zpetrol-10.border.border-zgrey-4.dark\\:border-zpetrol-7.shadow-md.print\\:border-0.print\\:border-none.print\\:shadow-none.print\\:m-0.fpui-card--divider-full.rounded-lg.mb-12 > fpui-card-page-content:nth-child(6) > fpuc-movements-overview-movements-table > table"
    );
    let sumP = 0;
    let sumN = 0;
    for (let e of table.querySelectorAll("[fpa-amount]")) {
        let v = parseFloat(e.getAttribute("fpa-amount"));
        if (v < 0) sumN += v;
        else if (v > 0) sumP += v;
    }
    alert(`${sumP.toFixed(2)} ${sumN.toFixed(2)} ${(sumN + sumP).toFixed(2)}`);
})();
