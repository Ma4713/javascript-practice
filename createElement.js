



    let firstH1 = document.createElement("h1")
    firstH1.innerHTML = "This  first h1 in this document"
    document.body.appendChild(firstH1)
    
    // let pWIthId = document.getElementById("message")
    let elementwithClasses = document.getElementByClassName("nicenames")
    elementwithClasses[0].innerHTML = "I am not a message"
    elementwithClasses[0].style.color = "green"
    elementwithClasses[1].innerHTML = "Musa Ali"
    elementwithClasses[1].style.color = "Blue"
    document.body.style.backgroundColor = "yellow"

    // let allPs = document.getElementsByTagName("p")
    // allPs[0].style.color = "purple"
    // allPs[1].style.color = "purple"
    // allPs[2].style.color = "purple"

    let allPs = document.querySelector("p")
    allPs[0].style.color = "red"
    allPs[1].style.color = "red"
    allPs[2].style.color = "red"



    //document.body

// for (let index = 0; index < 200; index++) {
    // let firstDiv = document.createElement("div")
    // firstDiv.innerText = "This DIV is the first Div in this document"
    // document.body.appendChild(firstDiv)

// }

// for (let index = 0; index < 200; index++) 
// // let niceSpan = document.createElement("span")
// // niceSpan.innerHTML = "<p> hello world, I am the first line</p>"
// // document.body.insertBefore(niceSpan,firstDiv)

//document.body.removeChild(niceSpan)

// let theP =  document.getElementById("message1")
// theP.innerHTML = "hello world"

// let allTheReds = document.getElementsByClassName("the-red-text")
// console.log(allTheReds[0].innerHTML)
// allTheReds[1].innerHTML = "Yes or no"
// console.log(allTheReds[1].innerHTML)

// let iLikes = document.getElementsByName("ilike")
// console.log(iLikes[0].innerHTML)
// console.log(iLikes[1].innerHTML)

// let count = 0;
// while (count < 200) {
//     console.log("count is " +  count)
//     iLikes[0].textContent = "I like Ethiopia"
//     iLikes[1].textContent = "I like Kenya"
//     count++
// }

