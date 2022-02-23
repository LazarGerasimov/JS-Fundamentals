function cityInfo (city) {

    let probs = Object.keys(city);

    for (let prop of probs) {
        console.log(`${prop} -> ${city[prop]}`)
    }

}
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);