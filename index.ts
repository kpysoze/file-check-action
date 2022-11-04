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
			
	   let scores = new Map<string, number>();
           scores.set("bill", 10);
           scores.set("bob", "10");
			
	   //core.info(dummydoll.has("one"))
           //core.info(dummydoll.has("four"))
            
        } catch (error){
            core.setFailed("Custom Action Failed");
        }
    }
)();
