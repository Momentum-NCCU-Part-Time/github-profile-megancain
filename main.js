let URL = "https://api.github.com/users/megancain";
let rURL = "https://github.com/megancain?tab=repositories";
let container = document.querySelector("#container");
let header = document.querySelector("#header");
let subHeader = document.querySelector("#subHeader");
let repoHeader = document.querySelector("#repoHeader");
let repoContainer = document.querySelector("#repoContainer");

fetch(URL, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    console.log(response);
    return response.json();
  })

  .then((body) => {
    console.log(body);
    return body;
  })

  .then((attributes) => {
    let imageURL = document.createElement("img");
    imageURL.src = `${attributes.avatar_url}`;
    header.appendChild(imageURL);
    imageURL.classList.add("profileImage");

    let name = document.createElement("h2");
    name.innerText = `${attributes.name}`;
    header.appendChild(name);
    name.classList.add("header");

    let location = document.createElement("p");
    location.innerText = `Location: ${attributes.location}`;
    subHeader.appendChild(location);
    location.classList.add("subHeader");

    let GitHubURL = document.createElement("a");
    GitHubURL.innerText = `GitHub URL: ${attributes.login}`;
    GitHubURL.href = `${attributes.html_url}`;
    subHeader.appendChild(GitHubURL);
    GitHubURL.classList.add("subHeader");

    let login = document.createElement("p");
    login.innerText = `GitHub username: ${attributes.login}`;
    subHeader.appendChild(login);
    login.classList.add("subHeader");
  });

//unabl to get repos to work. tried with injecting url directly into the code and it just blanked out on me.
fetch(repoURL, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
}).then((response) => {
  console.log(response);
  return response.json();
});

location
  .then((body) => {
    console.log(body);
    location;
    return body;
  })

  .then((parsedRepos) => {
    for (let repos of parsedRepos) {
      console.log(repos);
      let reposEL = document.createElement("a");
      reposEL.href = repos.html_url;
      reposeEl.innerText = repos.name;
      repoContainer.appendChild(reposEl);
    }
  });
