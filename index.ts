const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
            core.notice("Calling Custom Action");
            core.info("Hello World from Custom Action");
            
            let tempCheckName = ['one', 'two', 'three']
            let myMap = new Map()
            tempCheckName.forEach((value) => {
		    myMap.set(value, 'pending')
	    });
	    
	    myMap.forEach((value, key) => {
		    if(key === 'one'){
		        continue
		    }
		    core.info(key + ' ---- ' + value)
	    });
	    
	    //core.info([...myMap.entries()])
	    //let num = [7, 8, 9];
            //num.forEach((value) => {
            //core.info(value);
            //});

            //core.info(myMap.has('one'))
            //core.info(myMap.has('four'))

    }
)();
