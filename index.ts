const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
            core.notice("Calling Custom Action");
            core.info("Hello World from Custom Action");
            
            let tempCheckName = ['one', 'two', 'three']
            let myMap = new Map()
            for name in tempCheckName{
	            myMap.set(name, "pending")
            }

            core.info(myMap.has("one"))
            core.info(myMap.has("four"))

    }
)();
