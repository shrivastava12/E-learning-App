const data = {
    "India": {
    "Karnataka": ["Bangalore", "Mysore"],
    "Maharashtra": ["Mumbai", "Pune"]
    },
    "USA": {
    "Texas": ["Dallas", "Houston"],
    "IL": ["Chicago", "Aurora"]
    }
}
 
// console.log(data);

const test =  (city) => {

    for (let [key, value] of Object.entries(data)) {
        for(let[key1,value1] of Object.entries(value)){
                // console.log(value1);
                if(value1.includes(city)){
                    console.log(key1);
                }
        }
    
      }
}

test("Bangalore");    