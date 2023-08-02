class UI {
    constructor() {
         this.profileContentDiv = document.querySelector("#profileContentDiv")
         this.githubNameInput = document.querySelector("#githubname") 
         this.tableContent = document.querySelector("#tableContent")
         this.table = document.querySelector("#table")
         this.searchedUserList = document.querySelector("#searchedUserList")
         this.isShowRepo = true;

    }

    fillSearchedUserToUIFromStorage(){
        const users =Storagex.getSearchedUserFromStorage();
        if(users != null && users.length > 0){
            users.forEach(user => {
                const li = document.createElement("li");
                li.className="list-group-item";
                li.textContent = user;
                this.searchedUserList.appendChild(li);
            })
        }
    }

    addSearchedUserToUI(username) {
        //<li class="list-group-item">Busra Tugul</li>
        if(Storagex.checkUser(username)){
            const li = document.createElement("li");
            li.className="list-group-item";
            li.textContent = username;
            this.searchedUserList.appendChild(li);
        }
    }

    addUserProfileToUI(user){
        this.profileContentDiv.innerHTML = `<div class="col-sm-12 col-md-4 col-lg-4 mt-3 mb-3">
        <div id="profileDiv">
            <img id="profileImg" class="mb-3" src="${user.avatar_url}" width="200" height="200" alt="">
            <hr>
            <span>${user.name}</span>
            <span>${user.bio}</span>
        </div>
</div>

<div class="col-sm-12 col-md-8 col-lg-8 mt-3 mb-3">
        <div id="badgeDiv" class="mt-1">
            <button type="button" class="btn btn-secondary">
                Takipçi <span class="badge badge-light">${user.followers}</span>
              </button>
            <button type="button" class="btn btn-secondary">
                Takip Edilen <span class="badge badge-light">${user.following}</span>
              </button>
            <button type="button" class="btn btn-secondary">
                Repolar <span class="badge badge-light">${user.public_repos}</span>
              </button>
        </div>
        <div id="infoDiv" class="mt-3" >
            <div class="info">
                <img class="mr-1" src="./img/company.png" width="6%" height="10%" alt="" >
                <span>${user.company == null ?user.company  :user.company}</span>
            </div>
            <div class="info">
                <img class="mr-2" src="./img/location.png" width="5%" height="5%" alt="" >
                <span>${user.location==null ?"" :user.location}</span>
            </div>
            <div class="info">
                <img class="mr-2" src="./img/mail.png" width="5%" height="5%" alt="">
                <span>${user.email==null ? user.blog : user.email}</span>
            </div>
            <div class="info">
                <a id="showRepo" href="#">Repoları Göster</a>
            </div>
        </div>

</div> `;
    }
    checkMessage(){
        const showRepoLink = document.querySelector("#showRepo");
        
        if(this.isShowRepo){
            showRepoLink.textContent="Repoları Göster"
        }else{
            showRepoLink.textContent="Repoları Kapat"
        }
    }

    showRepos(repos) {
        if(this.isShowRepo) {  
            if(repos != null && repos.length > 0) {
            let sayac   =  1;
            repos.forEach(repo => {
                this.tableContent.innerHTML += `
                <tr>
                <th scope="row">${sayac}</th>
                <td>${repo.name}</td>
                <td>${repo.created_at}</td>
              </tr>
                `;
                sayac++;
            })
        }
        this.isShowRepo = false;
        this.checkMessage();
    } else {
       this.isShowRepo=true;
       this.checkMessage();
       this.tableContent.innerHTML="";
    }   
}

    clearSearchedUser() {
    searchedUserList.innerHTML = "" ;
}


    clearInput() {
        this.githubNameInput.value="";
        this.profileContentDiv.innerHTML="";
        this.tableContent.innerHTML="";    }
}

