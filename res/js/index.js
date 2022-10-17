fetch("http://myjson.dit.upm.es/api/bins/gje8")
.then((response) => (response.json()))
.then((posts) => createPosts(posts))

function createPosts(posts){
    var mainContent = document.getElementById("mainContent")
    posts = posts.posts
    posts.forEach(element => {
        console.log(element)
/* 
        <article class="contentBlock">
        <div>
            <img src="res/images/me.png"/>
            <p>Oct 22, 2022</p>
        </div>
        <img class="imgPost" src="res/images/post.jpg"/>
        <p>Anyone knows in which room is the lab today?</p>            
        <img class="imgLike" src="res/images/sealOfApproval.jpg"/>
    
    </article> */

        let month = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let date = new Date(element.createTime)
        let article = document.createElement("article")
        article.classList.add("contentBlock")
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = "res/images/me.png"
        let dateStr = document.createTextNode("" + month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear())
        let contentImg = document.createElement("img")
        contentImg.src = "res/images/postImg/" + element.imgID
        contentImg.classList.add("imgPost")
        contentImg.alt = element.imgAlt
        let postText = document.createElement("p")
        postText.innerText = element.postText
        let buttonImg = document.createElement("img")
        buttonImg.src = "res/images/sealOfApproval.jpg"
        buttonImg.classList.add("imgLike")


        div.append(img, dateStr)
        article.append(div,contentImg,postText,buttonImg)
   
        mainContent.appendChild(article)
    });
}