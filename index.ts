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
			
	    type MapType = { 
    			[id: string]: string; 
		}

		const map: MapType = {};
		map['key1'] = '1';
  		map['key2'] = '2';
			
	   //core.info(dummydoll.has("one"))
           //core.info(dummydoll.has("four"))
            
        } catch (error){
            core.setFailed("Custom Action Failed");
        }
    }
)();
