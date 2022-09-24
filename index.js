const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            core.notice("Calling Custom Action");
            core.info("Hello World from Custom Action");
            core.error("Halting")
        } catch (error){
            core.setFailed("Custom Action Failed");
        }
    }
)();