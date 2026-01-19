

const CatagoryContainer = document.getElementById("categoryContent");
const loadCategories = () => {
    fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res) => res.json ())
    .then((data) => {
        console.log(data.categories
);
const catagoriesCont = data.categories;
console.log(catagoriesCont);
  shwoCategorys (catagoriesCont);

    } )
    .catch((err) => {
        console.log(err)
    })
}
const shwoCategorys = (catagoriesCont) => {
    catagoriesCont.forEach( cat => {
   
    categoryContent.innerHTML += `<li id="${cat.id}" class="hover:border-b-5 hover:border-red-950 cursor-pointer">${cat.title}</li>
    `;
   
    
});
 categoryContent.addEventListener('click' , (e) => {
        if(e.target.localName === 'li'){
    console.log(e.target)

        }
    } )
}
loadCategories();