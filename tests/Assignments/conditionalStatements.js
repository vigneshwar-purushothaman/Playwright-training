function launchBrowser(browser) {
    if (browser=="chrome") {
        return("Chrome browser is being launched")
    } else {
        return("Launching "  +browser +" browser")
    }
}

function runTests(testType) {
    switch (testType) {
        case "sanity":
            return("Running sanity test")
            break;

        case "smoke":
            return("Running smoke test")
            break;

        case "regression":
            return("Running regression test")
            break;
    
        default:
            return("Running smoke test")
            break;
    }
    
}

console.log(launchBrowser("random"))
console.log(runTests("random"))
