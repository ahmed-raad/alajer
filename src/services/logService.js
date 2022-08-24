import Raven from "raven-js";

function init() {
    Raven.config("https://7385f37743ff40eeb7eca0dcc94b1493@o1374298.ingest.sentry.io/6681550", {
        release: '1-0-0',
        environment: "development-test"
    }).install();
}

function log(error) {
    Raven.captureException(error);
}

export default {
    init,
    log
};