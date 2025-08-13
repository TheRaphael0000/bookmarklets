javascript: (() => {
    fetch(
        `https://nominatim.openstreetmap.org/search?q=${prompt(
            "Location:"
        )}&format=jsonv2`
    )
        .then((r) => r.json())
        .then((json) => {
            let first = json[0];
            if (first == undefined) return;
            var url = `https://wplace.live/?lat=${first.lat}&lng=${first.lon}&zoom=11`;
            window.location.replace(url);
        });
})();
