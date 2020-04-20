var getUserReposs = function () {
    fetch("https://api.github.com/users/octocat/repos");
};
getUserReposs();