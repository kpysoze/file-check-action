const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
            core.notice("Calling Custom Action");
            core.info("Hello World from Custom Action");
            
            const myMap = new Map();
             myMap.set("key1", "1")
             myMap.set("key2", "2")
            core.info(myMap.has("key1"))
            core.info(myMap.has("key3"))

    }
)();
