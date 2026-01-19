const categoryContent = document.getElementById("categoryContent");
const newsContainer = document.getElementById("newsContainer");

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
          loadnewsBycategory (e.target.id)
            

        }
    }); 
};

const loadnewsBycategory = (categoryId) => {
    fetch(`https://news-api-fs.vercel.app/api/categories/${categoryId}`)
   .then((res) => res.json())
   .then((data) => {
    console.log(data.articles);
    showNewsByCategory(data.articles);

   })
   .catch((err) => {
    console.log(err);
   })
    
  
}
const showNewsByCategory = (articles) => {
    console.log(articles);

    newsContainer.innerHTML = '';
  articles.forEach(article => {
        newsContainer.innerHTML += `
    
        <div>
         <div>
     <img src="${article.image.srcset[5].url

     }" />
  </div>
       <h2>${article.title}</h2>
      </div>
        
        
        `
    }
    )
    
    }
  
    

loadCategories();