const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            core.notice("Calling Custom Action");
            core.info("Hello World from Custom Action");
            
            let dictionary = new Map<string, string>();
            dictionary.set("one", "pending");
            dictionary.set("two", "pending");
            dictionary.set("three", "pending");

            
        } catch (error){
            core.setFailed("Custom Action Failed");
        }
    }
)();
