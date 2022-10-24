//fetch("http://myjson.dit.upm.es/api/bins/gje8")
fetch("../json/json_data.json")
.then((response) => (response.json()))
.then((posts) => createPosts(posts))

function createPosts(posts){
    var mainContent = document.getElementById("mainContent")
    posts = posts.posts
    posts.forEach(element => {
        console.log(element)
        let month = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let date = new Date(element.createTime)
        let article = document.createElement("article")
        article.classList.add("contentBlock")
        let div = document.createElement("div")
        let authorText = document.createElement("span")
        authorText.innerText = element.author
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


        div.append(img, authorText, dateStr)
        article.append(div,contentImg,postText,buttonImg)
   
        mainContent.appendChild(article)
    });
}