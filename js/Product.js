//each product information
const data = [
    {
      id: 1,
      name: 'ya',
      img: '../Product/WifiPineaple.png',
      price: 74,
      cat: 'Dress',
    },
    {
      id: 11,
      name: 'ye',
      img: '../Product/WifiPineaple1.png',
      price: 74,
      cat: 'Dress',
    },
    {
      id: 2,
      name: 'yo',
      img: '../Product/Coconut.png',
      price: 40,
      cat: 'Sport',
    },
    {
      id: 3,
      name: 'yu',
      img: '../Product/WifiAdapter.png',
      price: 200,
      cat: 'Luxury',
    },
    
    
   
  ];

  const dataSecondSection = [
    {
      id: 2,
      name: 'yo',
      img: '../Product/RubberDucky.png',
      price: 40,
      cat: 'Sport',
    },
    // ... other product objects
  ];
  
  
  const productsContainer = document.querySelectorAll('.products');
  const searchInput = document.querySelector('.search');
  const categoriesContainer = document.querySelector('.cats');
  const priceRange = document.querySelector('.priceRange');
  const priceValue = document.querySelector('.priceValue');
  
  
  const displayProducts = (products, container) => {
    container.innerHTML = products
      .map((product) => {
        return `
        <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">${product.price}</span>
          </div>
      `;
      })
      .join('');
  };
  
displayProducts(data, productsContainer[0]); // Update the first container
displayProducts(dataSecondSection, productsContainer[1]); // Update the second container
  

  searchInput.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      
      displayProducts(data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1));
    } else {
      displayProducts(data);
    }
  });
  
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
    
      'All',
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories.map((cat) => `<span class="cat">${cat}</span>`).join('');
  
    
    categoriesContainer.addEventListener('click', (e) => {
      const selectedCat = e.target.textContent;
  
      
      selectedCat === 'All' ? displayProducts(data) : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
   
    const minPrice = Math.min(...priceList);

    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = '$' + maxPrice;
  
    
    priceRange.addEventListener('input', (e) => {
      priceValue.textContent = '$' + e.target.value;
      displayProducts(
        data.filter((item) => {
          return item.price <= e.target.value;
        })
      );
    });
  };
  
  setCategories();
  setPrices();
  