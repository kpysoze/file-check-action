const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            core.notice("Calling Custom Action");
            core.info("Hello World from Custom Action");
            
            //const myMap = new Map([
            //    ["key1", "value1"],
            //    ["key2", "value2"]
            //]);
            //core.info(myMap.has("key1"))
            //core.info(myMap.has("key3"))
			
			let dictionary = new Map<string, string>();
			dictionary.set("one", "pending");
			dictionary.set("two", "pending");
			dictionary.set("three", "pending");
			
			core.info(dictionary.has("one"))
            core.info(dictionary.has("four"))
            
        } catch (error){
            core.setFailed("Custom Action Failed");
        }
    }
)();
