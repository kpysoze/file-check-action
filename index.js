const core = require('@actions/core');
const core = require('@actions/github');

{
    async () => {
        try {
            core.notice("Calling Custom Action")
            core.setOutput("Hello World from Custom Action");
        } catch (error){
            core.setFailed("Custom Action Failed");
        }

    }
}