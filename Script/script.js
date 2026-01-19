

const CatagoryContainer = document.getElementById("categoryContent");
const loadCategories = () => {
    fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res) => res.json ())
    .then((data) => {
        console.log(data.categories
);
const catagoriesCont = data.categories;
catagoriesCont.forEach( cat => {
    console.log(cat.title);
    categoryContent.innerHTML += `<li class="hover:border-b-5 hover:border-red-950 cursor-pointer">${cat.title}</li>
    `;
    
    
});

    } )
    .catch((err) => {
        console.log(err)
    })
}
loadCategories();