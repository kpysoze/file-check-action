const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
            core.notice("Calling Custom Action");
            core.info("Hello World from Custom Action");
            
            const myMap = new Map([
                ["key1", "value1"],
                ["key2", "value2"]
            ]);
            core.info(myMap.has("key1"))
            core.info(myMap.has("key3"))

    }
)();
