const  btnContainer = document.getElementById('btn-container');
const  cardContainer = document.getElementById('card-container');

const fetchCategories = ()=>{
    const url = 'https://openapi.programming-hero.com/api/videos/categories'
    fetch(url)
        .then((res)=>res.json())
        .then(({data}) => {
            data.forEach((card)=>{
                console.log(card);
                const newBtn = document.createElement('button');
                newBtn.className = 'btn btn-ghost bg-slate-700 text-white';
                newBtn.innerText = card.category;
                newBtn.addEventListener('click', ()=> fetchDataByCategory(card.category_id));
                btnContainer.appendChild(newBtn);
            })
        })//{} it's for destructure
    }
    const fetchDataByCategory = (id)=>{
        // console.log(id);
        const url = `https://openapi.programming-hero.com/api/videos/category/${id}`
        fetch(url)
            .then(({res})=>res.json())
            .then((data) => {
                // console.log(data);
                data.forEach((video)=>{
                  const newCard = document.createElement('div');
                  newCard.innerHTML = `<div id="card-container" class="grid gap-5 grid-cols-1 lg:grid-cols-3">
                  <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="overflow-hidden h-72">
                      <img src="images/ui-ux.png" alt="ui-ux" />
                      <h6 class="absolute right-12 bottom-[40%]">0 hr</h6>
                    </figure>
        
                    <div class="card-body">
                      <div class="flex justify-start items-start space-x-4">
                        <div>
                          <img
                            class="w-12 h-12 rounded-full"
                            src="images/post-icon.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h2 class="card-title">Laught at my pain</h2>
                          <div class="flex mt-3">
                            <p class="">Author Name</p>
                            <img class="w-6 h-6" src="images/tickMark.png" alt="" />
                          </div>
                          <p class="mt-3">100k views</p>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
                `
                    cardContainer.appendChild(newCard);
                })
            })
    }

fetchCategories();