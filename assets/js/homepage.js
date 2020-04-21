var getUserReposs = function (user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos" ;

    // make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};
getUserReposs("andysanchez726");