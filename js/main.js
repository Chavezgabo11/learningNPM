import { getData } from "./components/TheDataMiner.js";

(() => {
    const   theTeam = document.querySelector("#teamSection"),
            theTemplate = document.querySelector("#bio-template").content;

    function buildTeam(info) {

        info.forEach(person => {
            let panel = theTemplate.cloneNode(true);  //make a copy of the template content
            let memberInfo = panel.firstElementChild.children; // get a reference to the template content

            //cycle through the child elements inside the <section> tag in the <template> tag
            //and update their attributes

            panel.firstElementChild.dataset.key = person.id;

            //add the image
            memberInfo[0].querySelector(`img`).src = `images/${person.biopic}`;
            memberInfo[1].textContent = person.name;
            memberInfo[2].textContent = person.role;
            memberInfo[3].textContent = person.nickname;

            theTeam.appendChild(panel);
        })
    }

    function getMoreData(event) {
        if (event.target.closest("section").dataset.key) {
            let key = event.target.closest("section").dataset.key;

            getData({id: key}, showPortfolioData);
        }
    }


    function showPortfolioData(data) {
        console.log(data);
    }

    //When we click on a bio, we want to retrieve the custom data atrribute that refers to the refers to the row of data
    //that represents this person in the DB
    //we then pass that ID to our data miner, which in turn passes it to index.php as the query string parameter
    theTeam.addEventListener("click", getMoreData);

    //pass the build team function to our data miner as a callback
    getData(null, buildTeam);
})();