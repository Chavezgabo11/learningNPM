(() => {
    const   theTeam = document.querySelector("#teamSection"),
            theTemplate = document.querySelector("#bio-template").content;

    //set up a fetch function and get some data
    function getData(){
        //retrive our data object
        fetch("./includes/functions.php") // go and get the data (fetch boy!)
        .then(res => res.json()) // good dog clean the stick (convert the dat to json)
        .then(data => {
            //console.log(data);

            buildTeam(data[0]);
        })
        .catch(error => console.error(error));
    }

    function buildTeam(info) {

        info.forEach(person => {
            let panel = theTemplate.cloneNode(true);  //make a copy of the template content
            let containers = panel.firstElementChild.children; // get a reference to the template content

            //cycle through the child elements inside the <section> tag in the <template> tag
            //and update their attributes

            //add the image
            containers[0].querySelector(`img`).src = `images/${person.biopic}`;
            containers[1].textContent = person.name;
            containers[2].textContent = person.role;
            containers[3].textContent = person.nickname;

            theTeam.appendChild(panel);
        })
    }

    getData();
})();