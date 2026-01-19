const categoryContent = document.getElementById("categoryContent");

const loadCategories = () => {
    fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {
        const catagoriesCont = data.categories;
        shwoCategorys(catagoriesCont);
    })
    .catch((err) => {
        console.log(err);
    });
};

const shwoCategorys = (catagoriesCont) => {
    
    catagoriesCont.forEach(cat => {
        categoryContent.innerHTML += `<li id="${cat.id}" class="hover:border-b-5 hover:border-red-700 border-rose-700 cursor-pointer">${cat.title}</li>`;
    });

   
    categoryContent.addEventListener('click', (e) => {
        const allli = document.querySelectorAll('li');
        allli.forEach(li => {
            li.classList.remove('border-b-5')
        })
        if (e.target.localName === 'li') {
            console.log(e.target);
            e.target.classList.add('border-b-5');
        }
    }); 
};

loadCategories();