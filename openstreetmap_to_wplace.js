javascript: (() => {
    var hash = window.location.hash.substring(1);
    var params = {};
    hash.split("&").map((hk) => {
        let temp = hk.split("=");
        params[temp[0]] = temp[1];
    });
    var map = params.map.split("/");
    var url = `https://wplace.live/?lat=${map[1]}&lng=${map[2]}&zoom=${map[0]}`;
    window.location.replace(url);
})();