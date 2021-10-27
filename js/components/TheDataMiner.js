// a callback is a reference to another function that gets called at a certain point in your programming flow
//params is the object we're passing in  that contains an id or another bit of data, it looks like this: (id:1) or (id:1, name:"Trevor", role: "prof") => needs to become this: id=1&&name=T   revor 
function getData(params, cb) {
    // use the Fetch API to retrieve some data
    
    let baseURL = "./includes/index.php";

    if (params) {
        let keys = Object.keys(params); //takes an object and creates an array of the keys [id, name]
        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");

        baseURL += `?${newQStringParams}`;
    }

    fetch(baseURL)
    .then(res => res.json()) // unpack the API response (turn it back into plain JS)
    .then(data => {
        // do anything else here that we want with our data
        // call a function to generate our dynamic content
        cb(data[0]);
    })
    .catch(error => console.error(error)); // catch and report any errors
}

export { getData }
