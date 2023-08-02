class GitHub {
    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGitHubData(username) {
       const userData = await (await fetch(`${this.url}${username}`)).json();
       const reposData = await (await fetch(`${this.url}${username}/repos`)).json();

       return {
        user : userData,
        repo : reposData
       }
  
    }
}