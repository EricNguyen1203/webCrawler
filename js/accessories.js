// let perPage = 6;
// let idPage = 1;
// let start = 0;
// let end = perPage;

// var product = [];

// async function getDataAll() {
//     try {
//         const response = await fetch('https://web-crawler-computer-network-project2.vercel.app/getProducts', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             }           
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function main() {
//     product = await getDataAll();
//     console.log(product);
// let productArr = [];

// product.forEach(function (item){
//     if(item.Type != 'Laptop')
//         productArr.push(item);
//   });

// const pageConfig = document.querySelector('.page-config select');
// const mySelect = document.getElementById('mySelect');
// const countTotalPage = document.querySelector('.total-page');
// const countTotalProduct = document.querySelector('.total-item');

// let totalPages = Math.ceil(productArr.length / perPage);
// const searchText = document.querySelector('.searchText');
// const searchBtn = document.getElementById('search');

// function highlightText() {
//     const title = document.querySelectorAll('.content__product__item h3');
//     title.forEach((title, index) => {
//         let titleText = title.innerHTML;
//         let indexOf = Number(titleText.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()));
//         let searchTextLength = searchText.value.length;
//         titleText = titleText.substring(0, indexOf) + "<span class='highlight'>" + titleText.substring(indexOf, indexOf + searchTextLength) + "</span>" + titleText.substring(indexOf + searchTextLength, titleText.length);
//         title.innerHTML = titleText;
//         console.log(titleText);
//     })
// }

// function initRender(productAr, totalPage) {
//     renderProduct(productAr);
//     renderListPage(totalPage);
// }

// function getCurrentPage(indexPage) {
//     start = (indexPage - 1) * perPage;
//     end = indexPage * perPage;
//     totalPages = Math.ceil(productArr.length / perPage);
//     countTotalPage.innerHTML = `Total pages: ${totalPages}`;
//     countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
// }

// function getManufacturer() {
//     var manu = document.getElementsByClassName('hang');
//     console.log(manu.value)
// // var checkBox = document.getElementById("myCheck");
//     // var text = document.getElementById("text");
//     for (var i = 0; i < manu.length; i++){
//         if (manu[i].checked == true){
//             if (manu[i].value === 'all'){
//                 console.log('tick')
//                 idPage = 1;
//                 productArr = [];
//                 product.forEach((item, index) => {
//                     productArr.push(item);
//                 });
//                 if (productArr.length === 0) {
//                     $('.no-result').css('display', 'block')
//                 } else {
//                     $('.no-result').css('display', 'none')
//                 }
//                 getCurrentPage(idPage);
//                 initRender(productArr, totalPages);
//                 changePage();
//                 if (totalPages <= 1) {
//                     $('.btn-prev').addClass('btn-active');
//                     $('.btn-next').addClass('btn-active');
//                 } else {
//                     $('.btn-next').removeClass('btn-active');
//                 }
//                 break;
//             }
//             console.log('tick')
//             idPage = 1;
//             productArr = [];
//             product.forEach((item, index) => {
//                 if (item.Name.toLocaleLowerCase().indexOf(manu[i].value) != -1) {
//                     productArr.push(item);
//                     productArr.sort(function(pd1, pd2){
//                         return pd1["Price"] - pd2["Price"];
//                     })
//                 }
//             });
//             if (productArr.length === 0) {
//                 $('.no-result').css('display', 'block')
//             } else {
//                 $('.no-result').css('display', 'none')
//             }
//             getCurrentPage(idPage);
//             initRender(productArr, totalPages);
//             changePage();
//             if (totalPages <= 1) {
//                 $('.btn-prev').addClass('btn-active');
//                 $('.btn-next').addClass('btn-active');
//             } else {
//                 $('.btn-next').removeClass('btn-active');
//             }
//             break;
//         } else {
//         //    text.style.display = "none";
//             console.log('tick')
//             idPage = 1;
//             productArr = [];
//             product.forEach((item, index) => {
//                 productArr.push(item);
//             });
//             if (productArr.length === 0) {
//                 $('.no-result').css('display', 'block')
//             } else {
//                 $('.no-result').css('display', 'none')
//             }
//             getCurrentPage(idPage);
//             initRender(productArr, totalPages);
//             changePage();
//             if (totalPages <= 1) {
//                 $('.btn-prev').addClass('btn-active');
//                 $('.btn-next').addClass('btn-active');
//             } else {
//                 $('.btn-next').removeClass('btn-active');
//             }
//         }
//     }
// }

// // getManufacturer();
// $('input[type=radio][name=ten_hang]').change(function() {
//     // if (this.value == 'all') {
//     //     console.log('all')
//     // }
//     idPage = 1;
//     productArr = [];
//     if (this.value != 'all') {
//         console.log(this.value)
//         product.forEach((item, index) => {
//             if (item.Name.toLocaleLowerCase().indexOf(this.value) != -1) {
//                 productArr.push(item);
//                 productArr.sort(function(pd1, pd2){
//                     return pd1["Price"] - pd2["Price"];
//                 })
//             }
//         });
//     }
//     else{
//         product.forEach((item, index) => {
//             productArr.push(item);
//         });
//     }

//     if (productArr.length === 0) {
//         $('.no-result').css('display', 'block')
//     } else {
//         $('.no-result').css('display', 'none')
//     }
//     getCurrentPage(idPage);
//     initRender(productArr, totalPages);
//     changePage();
//     if (totalPages <= 1) {
//         $('.btn-prev').addClass('btn-active');
//         $('.btn-next').addClass('btn-active');
//     } else {
//         $('.btn-next').removeClass('btn-active');
//     }
// });


// function renderListPage(totalPages) {
//     let html = '';
//     html += `<li class="current-page active"><a>${1}</a></li>`;
//     for (let i = 2; i <= 10; i++) {
//         html += `<li><a>${i}</a></li>`;
//     }
//     if (totalPages === 0) {
//         html = ''
//     }
//     document.getElementById('number-page').innerHTML = html;
// }

// function changePage() {
//     const idPages = document.querySelectorAll('.number-page li');
//     const a = document.querySelectorAll('.number-page li a');
//     for (let i = 0; i < idPages.length; i++) {
//         idPages[i].onclick = function () {
//             let value = i + 1;
//             const current = document.getElementsByClassName('active');
//             current[0].className = current[0].className.replace('active', '');
//             this.classList.add('active');
//             if (value > 1 && value < idPages.length) {
//                 $('.btn-prev').removeClass('btn-active');
//                 $('.btn-next').removeClass('btn-active');
//             }
//             if (value == 1) {
//                 $('.btn-prev').addClass('btn-active');
//                 $('.btn-next').removeClass('btn-active');
//             }
//             if (value == idPages.length) {
//                 $('.btn-next').addClass('btn-active');
//                 $('.btn-prev').removeClass('btn-active');
//             }
//             idPage = value;
//             getCurrentPage(idPage);
//             renderProduct(productArr);
//         };
//     }
// }

// initRender(productArr, totalPages);
// getCurrentPage(1);

// searchBtn.addEventListener('click', () => {
//     idPage = 1;
//     productArr = [];
//     product.forEach((item, index) => {
//         if (item.Name.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()) != -1) {
//             productArr.push(item);
//             productArr.sort(function(pd1, pd2){
//                 return pd1["Price"] - pd2["Price"];
//             })
//         }
//     });
//     if (productArr.length === 0) {
//         $('.no-result').css('display', 'block')
//     } else {
//         $('.no-result').css('display', 'none')
//     }
//     getCurrentPage(idPage);
//     initRender(productArr, totalPages);
//     changePage();
//     if (totalPages <= 1) {
//         $('.btn-prev').addClass('btn-active');
//         $('.btn-next').addClass('btn-active');
//     } else {
//         $('.btn-next').removeClass('btn-active');
//     }
// });

// var rangeBtn = document.getElementById('range-btn');

// rangeBtn.addEventListener('click', () => {
//     var input_max = document.getElementById('inp-max').value;
//     var input_min = document.getElementById('inp-min').value;
//     console.log(input_min);
//     console.log(input_max);
//     idPage = 1;
//     productArr = [];
//     product.forEach((item, index) => {
//         if (item.Price > input_min && item.Price < input_max) {
//             productArr.push(item);
//             productArr.sort(function(pd1, pd2){
//                 return pd1["Price"] - pd2["Price"];
//             })
//         }
//     });
//     if (productArr.length === 0) {
//         $('.no-result').css('display', 'block')
//     } else {
//         $('.no-result').css('display', 'none')
//     }
//     getCurrentPage(idPage);
//     initRender(productArr, totalPages);
//     changePage();
//     if (totalPages <= 1) {
//         $('.btn-prev').addClass('btn-active');
//         $('.btn-next').addClass('btn-active');
//     } else {
//         $('.btn-next').removeClass('btn-active');
//     }
// });



// // Sort
// var inputElement = document.querySelector('select')
// inputElement.onchange = function(e) {
//     console.log(e.target.value)
//     console.log('tick')
//     idPage = 1;
//     productArr = [];
//     product.forEach((item, index) => {
//         productArr.push(item);
//         if (e.target.value == 2){
//             productArr.sort(function(pd1, pd2){
//                 return pd1["Price"] - pd2["Price"];
//             })
//         }
//         if (e.target.value == 3){
//             productArr.sort(function(pd1, pd2){
//                 return pd2["Price"] - pd1["Price"];
//             })
//         }
        
//     });
//     console.log(productArr)
//     if (productArr.length === 0) {
//         $('.no-result').css('display', 'block')
//     } else {
//         $('.no-result').css('display', 'none')
//     }
//     getCurrentPage(idPage);
//     initRender(productArr, totalPages);
//     changePage();
//     if (totalPages <= 1) {
//         $('.btn-prev').addClass('btn-active');
//         $('.btn-next').addClass('btn-active');
//     } else {
//         $('.btn-next').removeClass('btn-active');
//     }

// }

// searchText.addEventListener("keyup", (event) => {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         searchBtn.click();
//     }
// });

// pageConfig.addEventListener('change', () => {
//     idPage = 1;
//     perPage = Number(pageConfig.value);
//     getCurrentPage(idPage);
//     initRender(productArr, totalPages);
//     if (totalPages == 1) {
//         $('.btn-prev').addClass('btn-active');
//         $('.btn-next').addClass('btn-active');
//     } else {
//         $('.btn-next').removeClass('btn-active');
//     }
//     changePage();
// });

// function renderProduct(product) {
//     html = '';
//     const content = product.map((item, index) => {
//         if (index >= start && index < end) {
//             // html += '<div class="content__product__item">';
//             // html += '<a>';
//             // html += '<img class = "product__image" src=' + item.image + '>';
//             // html += '</a>';
//             // html += '<h3>' + item.title + '</h3>';
//             // html += '</div>';
//             // return html;

//     //         html += `<div class ="col-12 col-sm-6 col-md-4 image">
//     //         <div class="container py-5">
//     //           <div class="row justify-content-center">
//     //             <div class="">
//     //               <div class="card" style="border-radius: 15px;">
//     //                 <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
//     //                   data-mdb-ripple-color="light">
//     //                   <img src=${item.Imgs[0]}
//     //                     style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid"
//     //                     alt="Laptop" />
//     //                   <a href="#!">
//     //                     <div class="mask"></div>
//     //                   </a>
//     //                 </div>
//     //                 <div class="card-body pb-0">
//     //                   <div class="d-flex justify-content-between">
//     //                     <div>
//     //                       <p><a href="${item.Url}" class = "d-inline-block; " style = "text-decoration: none; max-width:200px;">${item.Name}</a></p>
//     //                       <p class="small text-muted">Laptops</p>
//     //                     </div>
//     //                     <div>
//     //                       <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger" >
//     //                         <span style = "color: orange" class="fa fa-star"></span>
//     //                         <span style = "color: orange" class="fa fa-star"></span>
//     //                         <span style = "color: orange" class="fa fa-star"></span>
//     //                         <span style = "color: orange" class="fa fa-star"></span>
//     //                       </div>
//     //                       <p class="small text-muted">Rated 4.0/5</p>
//     //                     </div>
//     //                   </div>
//     //                 </div>
//     //                 <hr class="my-0" />
//     //                 <div class="card-body pb-0">
//     //                   <div class="d-flex justify-content-between">
//     //                     <!-- <p><a href="#!" class="text-dark">$3.999</a></p> -->
//     //                     <p style = "font-weight: bold;">${item.Price} đồng</p>
//     //                     <p class="text-dark">#### 8787</p>
//     //                   </div>
//     //                   <p class="small text-muted">VISA Platinum</p>
//     //                 </div>
//     //                 <hr class="my-0" />
//     //                 <div class="card-body">
//     //                   <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
//     //                     <a href="#!" class="text-dark fw-bold">Cancel</a>
//     //                     <button type="button" class="btn btn-primary">Buy now</button>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //    </div>
//     //         `
//             if(item.Imgs[0] === null){
//                 item.Imgs[0] = "img/TvT.png";
//             }
//             html += `<div class="container-fluid bg-trasparent my-4 p-3" style="position: relative; max-width: 400px;">
//             <div class="card h-100 shadow-sm">
//                 <a href="#">
//                     <img src=${item.Imgs[0]} class="card-img-top" alt="product.title" />
//                 </a>
        
//                 <div class="label-top shadow-sm">
//                     <a class="text-white" href="#">${item.brand_name}</a>
//                 </div>
//                 <div class="card-body">
//                     <div class = "container estimate">
//                         <span class="float-start badge rounded-pill" style = "background: #ffcc00;"> <del>${item.OriginalPrice} VNĐ</del></span>
        
//                         <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link">Compare</a></span>
//                     </div>
//                     <h5 class="card-title">
//                         <a target="_blank" href="${item.Url}"><strong>${item.Name}</strong></a>
//                     </h5>
//                     <div class="container test">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Logo_Tiki.png" class="card-brand" alt="product.title"/> 
//                     <div class = "buy"><strong>Đã mua: 19</strong>
//                     </div>
//                     </div>
//                     <div class="productCardPrice">
//                         <a href="#" class="btn btn-warning bold-btn">${item.Price} VNĐ</a>
        
//                     </div>
//                     <div class = "container estimate">
        
//                         <span class="float-start">
//                             <div class="d-flex flex-row user-ratings">
//                                 <div class="ratings">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                 </div>
//                                 <h6 class="text-muted ml-1">4/5</h6>
//                             </div>
//                         </span>
        
//                         <span class="heartsymbol">
//                             <i class="far fa-heart" style="cursor: pointer"></i>
        
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//         }
//     });
//     document.getElementById('product').innerHTML = html;
//     highlightText();
// }

// changePage();

// $('.btn-next').on('click', () => {
//     idPage++;
//     if (idPage > totalPages) {
//         idPage = totalPages;
//     }
//     if (idPage == totalPages) {
//         $('.btn-next').addClass('btn-active');
//     } else {
//         $('.btn-next').removeClass('btn-active');
//     }
//     console.log(idPage);
//     const btnPrev = document.querySelector('.btn-prev');
//     btnPrev.classList.remove('btn-active');
//     $('.number-page li').removeClass('active');
//     $(`.number-page li:eq(${idPage - 1})`).addClass('active');
//     getCurrentPage(idPage);
//     renderProduct(productArr);
// });

// $('.btn-prev').on('click', () => {
//     idPage--;
//     if (idPage <= 0) {
//         idPage = 1;
//     }
//     if (idPage == 1) {
//         $('.btn-prev').addClass('btn-active');
//     } else {
//         $('.btn-prev').removeClass('btn-active');
//     }
//     const btnNext = document.querySelector('.btn-next');
//     btnNext.classList.remove('btn-active');
//     $('.number-page li').removeClass('active');
//     $(`.number-page li:eq(${idPage - 1})`).addClass('active');
//     getCurrentPage(idPage);
//     renderProduct(productArr);
// });
// }

// main();

let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;

var productOri = [];

var product = [];

async function getDataAll() {
    try {
        const response = await fetch('https://web-crawler-computer-network-project2.vercel.app/getProducts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }           
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function main() {
    // await readJSONFile();
productOri = await getDataAll();
console.log(product);

let productArr = [];

productOri.forEach(function (item){
    if(item.Type !== 'Laptop')
        product.push(item);
  });

  productArr = product;


const pageConfig = document.querySelector('.page-config select');
const mySelect = document.getElementById('mySelect');
const countTotalPage = document.querySelector('.total-page');
const countTotalProduct = document.querySelector('.total-item');

let totalPages = Math.ceil(productArr.length / perPage);
const searchText = document.querySelector('.searchText');
const searchBtn = document.getElementById('search');

function highlightText() {
    const title = document.querySelectorAll('.content__product__item h3');
    title.forEach((title, index) => {
        let titleText = title.innerHTML;
        let indexOf = Number(titleText.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()));
        let searchTextLength = searchText.value.length;
        titleText = titleText.substring(0, indexOf) + "<span class='highlight'>" + titleText.substring(indexOf, indexOf + searchTextLength) + "</span>" + titleText.substring(indexOf + searchTextLength, titleText.length);
        title.innerHTML = titleText;
        console.log(titleText);
    })
}

function initRender(productAr, totalPage) {
    renderProduct(productAr);
    renderListPage(totalPage);
}

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
}

function getManufacturer() {
    var manu = document.getElementsByClassName('hang');
    console.log(manu.value)
// var checkBox = document.getElementById("myCheck");
    // var text = document.getElementById("text");
    for (var i = 0; i < manu.length; i++){
        if (manu[i].checked == true){
            if (manu[i].value === 'all'){
                console.log('tick')
                idPage = 1;
                productArr = [];
                product.forEach((item, index) => {
                    productArr.push(item);
                });
                if (productArr.length === 0) {
                    $('.no-result').css('display', 'block')
                } else {
                    $('.no-result').css('display', 'none')
                }
                getCurrentPage(idPage);
                initRender(productArr, totalPages);
                changePage();
                if (totalPages <= 1) {
                    $('.btn-prev').addClass('btn-active');
                    $('.btn-next').addClass('btn-active');
                } else {
                    $('.btn-next').removeClass('btn-active');
                }
                break;
            }
            console.log('tick')
            idPage = 1;
            productArr = [];
            product.forEach((item, index) => {
                if (item.Name.toLocaleLowerCase().indexOf(manu[i].value) != -1) {
                    productArr.push(item);
                    productArr.sort(function(pd1, pd2){
                        return pd1["Price"] - pd2["Price"];
                    })
                }
            });
            if (productArr.length === 0) {
                $('.no-result').css('display', 'block')
            } else {
                $('.no-result').css('display', 'none')
            }
            getCurrentPage(idPage);
            initRender(productArr, totalPages);
            changePage();
            if (totalPages <= 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').addClass('btn-active');
            } else {
                $('.btn-next').removeClass('btn-active');
            }
            break;
        } else {
        //    text.style.display = "none";
            console.log('tick')
            idPage = 1;
            productArr = [];
            product.forEach((item, index) => {
                productArr.push(item);
            });
            if (productArr.length === 0) {
                $('.no-result').css('display', 'block')
            } else {
                $('.no-result').css('display', 'none')
            }
            getCurrentPage(idPage);
            initRender(productArr, totalPages);
            changePage();
            if (totalPages <= 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').addClass('btn-active');
            } else {
                $('.btn-next').removeClass('btn-active');
            }
        }
    }
}

// getManufacturer();
$('input[type=radio][name=ten_hang]').change(function() {
    // if (this.value == 'all') {
    //     console.log('all')
    // }
    idPage = 1;
    productArr = [];
    if (this.value != 'all') {
        console.log(this.value)
        product.forEach((item, index) => {
            if (item.Name.toLocaleLowerCase().indexOf(this.value) != -1) {
                productArr.push(item);
                productArr.sort(function(pd1, pd2){
                    return pd1["Price"] - pd2["Price"];
                })
            }
        });
    }
    else{
        product.forEach((item, index) => {
            productArr.push(item);
        });
    }

    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
});


function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= 10; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage() {
    const idPages = document.querySelectorAll('.number-page li');
    const a = document.querySelectorAll('.number-page li a');
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.classList.add('active');
            if (value > 1 && value < idPages.length) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                $('.btn-next').addClass('btn-active');
                $('.btn-prev').removeClass('btn-active');
            }
            idPage = value;
            getCurrentPage(idPage);
            renderProduct(productArr);
        };
    }
}

initRender(productArr, totalPages);
getCurrentPage(1);

searchBtn.addEventListener('click', () => {
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        if (item.Name.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()) != -1) {
            productArr.push(item);
            productArr.sort(function(pd1, pd2){
                return pd1["Price"] - pd2["Price"];
            })
        }
    });
    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
});

var rangeBtn = document.getElementById('range-btn');

rangeBtn.addEventListener('click', () => {
    var input_max = document.getElementById('inp-max').value;
    var input_min = document.getElementById('inp-min').value;
    console.log(input_min);
    console.log(input_max);
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        if (item.Price > input_min && item.Price < input_max) {
            productArr.push(item);
            productArr.sort(function(pd1, pd2){
                return pd1["Price"] - pd2["Price"];
            })
        }
    });
    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
});



// Sort
var inputElement = document.querySelector('select')
inputElement.onchange = function(e) {
    console.log(e.target.value)
    console.log('tick')
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        productArr.push(item);
        if (e.target.value == 2){
            productArr.sort(function(pd1, pd2){
                return pd1["Price"] - pd2["Price"];
            })
        }
        if (e.target.value == 3){
            productArr.sort(function(pd1, pd2){
                return pd2["Price"] - pd1["Price"];
            })
        }
        
    });
    console.log(productArr)
    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }

}

searchText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

pageConfig.addEventListener('change', () => {
    idPage = 1;
    perPage = Number(pageConfig.value);
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    if (totalPages == 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    changePage();
});


async function getData(Name) {
    try {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + token);
        headers.append('Name-Cate', encodeURIComponent(Name));
        console.log(headers.get('Name-Cate'))
        
        const response = await fetch('https://web-crawler-computer-network-project2.vercel.app/getData', {
            method: 'POST',
            headers: headers        
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}



async function renderCate(Name) {
    try {
        const product = await getData(Name);
        html=''
        $.each(product, function (i, products) {
            // console.log(products.Products[0].WebIcon);
            let jsonstring = JSON.stringify(products.Desc)
            let encodeJsonString = encodeURIComponent(jsonstring)
            console.log(encodeJsonString)
            console.log(products.Products.length)
            // console.log(encodeJsonString)
            html += `
            <div class = "product__item">
                <form action="result.html" method="GET" id="DataForm">
                    <label for="name_cate" style = "display: none">Name Category:</label>
                    <input type="text" id="name_cate" name="name_cate" style = "display: none" value = "${products.NameCategory}" readonly>
                    
                    <label for="cate_price" style = "display: none">CatePrice:</label>
                    <input type="number" id="cate_price" name="cate_price" style = "display: none" value = ${products.CatePrice} readonly>
    
                    <label for="desc" style = "display: none">CatePrice:</label>
                    <input id="desc" name="desc" style = "display: none" value = ${encodeJsonString} readonly>
                    `
            html += `
                    <label for="img_len" style = "display: none">ImgLen:</label>
                    <input type="number" id = "img_len" style = "display: none" name = "img_len" value = ${products.CateImgs.length} readonly>
                    <label for="number_of_products" style = "display: none">Number of products:</label>
                    <input type="number" id="num_prods" name="num_prods" style = "display: none" value = ${products.Products.length} readonly>
                    `
    
            for (var i = 0; i < products.CateImgs.length; i++) {
    
                html += `
                    <label for="img_link_1" style = "display: none">ImgLink${i}:</label>
                    <input type="text" id = "img_link" name = "img_link_${i}" style = "display: none" value = "${products.CateImgs[i]}" readonly>
                    `
            }
    
            for (var i = 0; i < products.Products.length; i++) {
                html += `
                    <label for="product_${i}_name" style = "display: none">Product ${i} Name:</label>
                    <input type="text" id = "product_${i}_name" style = "display: none" name = "product_${i}_name" value = "${products.Products[i]['Name']}" readonly>
                    
                    <label for="product_${i}_name" style = "display: none">Product ${i} Url:</label>
                    <input type="text" id = "product_${i}_url" style = "display: none" name = "product_${i}_url" value = "${products.Products[i]['Url']}" readonly>
                    
                    <label for="product_${i}_price" style = "display: none">Product ${i} price:</label>
                    <input type="number" id = "product_${i}_price" name = "product_${i}_price" style = "display: none" value = ${products.Products[i]['Price']} readonly>
                    
                    <label for="product_${i}_original_price" style = "display: none">Product ${i} price before sale:</label>
                    <input type="number" id = "product_${i}_original_price" style = "display: none" name = "product_${i}_original_price" value = ${products.Products[i]['OriginalPrice']} readonly>
                    
                    <label for="product_${i}_img" style = "display: none">Product ${i} img:</label>
                    <input type="text" id = "product_${i}_img" name = "product_${i}_img" style = "display: none" value = "${products.Products[i]["Imgs"]}" readonly>
                    
                    <label for="product_${i}_web_icon" style = "display: none">Product ${i} web icon:</label>
                    <input type="text" id = "product_${i}_web_icon" name = "product_${i}_web_icon" style = "display: none" value = "${products.Products[i]['WebIcon']}" readonly>
                    
                    `
            }
            html +=
                `
                </form>
            </div>
            `
        })
        return html
    } catch (error) {
        console.error(error);
        return ``
    }
}



function renderProduct(product) {
    html = '';
    product.map((item, index) => {
        
        if (index >= start && index < end) {
            // html += '<div class="content__product__item">';
            // html += '<a>';
            // html += '<img class = "product__image" src=' + item.image + '>';
            // html += '</a>';
            // html += '<h3>' + item.title + '</h3>';
            // html += '</div>';
            // return html;
             
    //         html += `<div class ="col-12 col-sm-6 col-md-4 image">
    //         <div class="container py-5">
    //           <div class="row justify-content-center">
    //             <div class="">
    //               <div class="card" style="border-radius: 15px;">
    //                 <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
    //                   data-mdb-ripple-color="light">
    //                   <img src=${item.Imgs[0]}
    //                     style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid"
    //                     alt="Laptop" />
    //                   <a href="#!">
    //                     <div class="mask"></div>
    //                   </a>
    //                 </div>
    //                 <div class="card-body pb-0">
    //                   <div class="d-flex justify-content-between">
    //                     <div>
    //                       <p><a href="${item.Url}" class = "d-inline-block; " style = "text-decoration: none; max-width:200px;">${item.Name}</a></p>
    //                       <p class="small text-muted">Laptops</p>
    //                     </div>
    //                     <div>
    //                       <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger" >
    //                         <span style = "color: orange" class="fa fa-star"></span>
    //                         <span style = "color: orange" class="fa fa-star"></span>
    //                         <span style = "color: orange" class="fa fa-star"></span>
    //                         <span style = "color: orange" class="fa fa-star"></span>
    //                       </div>
    //                       <p class="small text-muted">Rated 4.0/5</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <hr class="my-0" />
    //                 <div class="card-body pb-0">
    //                   <div class="d-flex justify-content-between">
    //                     <!-- <p><a href="#!" class="text-dark">$3.999</a></p> -->
    //                     <p style = "font-weight: bold;">${item.Price} đồng</p>
    //                     <p class="text-dark">#### 8787</p>
    //                   </div>
    //                   <p class="small text-muted">VISA Platinum</p>
    //                 </div>
    //                 <hr class="my-0" />
    //                 <div class="card-body">
    //                   <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
    //                     <a href="#!" class="text-dark fw-bold">Cancel</a>
    //                     <button type="button" class="btn btn-primary">Buy now</button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //    </div>
        //  console.log(html)
            if(item.Imgs[0] === null){
                item.Imgs[0] = "img/TvT.png";
            }
            if(item.Price != item.OriginalPrice){
            html += `<div class="container-fluid bg-trasparent my-4 p-3" style="position: relative; max-width: 400px;">
            <div class="card h-100 shadow-sm">
            <a target="_blank" href="${item.Url}">
                    <img src=${item.Imgs[0]} class="card-img-top" alt="product.title" />
        
                <div class="label-top shadow-sm">
                    <div class="text-white">${item.WebDomain}</div>
                </div>
                <div class="card-body">
                    <div class = "container estimate">
                        <span class="float-start badge rounded-pill" style = "background: #ffcc00;"> <del>${item.OriginalPrice} VNĐ</del></span>
        
                        <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link" value="${item.NameCategory}">Compare</a></span>
                    </div>
                    <h5 class="card-title">
                        <strong>${item.Name}</strong>
                    </h5>
                    <div class="container test">
                    <span><img src="${item.WebIcon}" class="card-brand" alt="product.title"/> </span>
                    <span><div class = "buy"><strong>Đã mua: 19</strong></div></span>
                    </div>
                    </div>
                    <div class="productCardPrice">
                        <a href="#" class="btn btn-warning bold-btn">${item.Price} VNĐ</a>
        
                    </div>
                    <div class = "container estimate">
        
                        <span class="float-start">
                            <div class="d-flex flex-row user-ratings">
                                <div class="ratings">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <h6 class="text-muted ml-1">4/5</h6>
                            </div>
                        </span>
        
                        <span class="heartsymbol">
                            <i class="far fa-heart" style="cursor: pointer"></i>
        
                        </span>
                    </div>
                    </a>
                </div>
            </div>`
            }else{
                html += `<div class="container-fluid bg-trasparent my-4 p-3" style="position: relative; max-width: 400px;">
                <div class="card h-100 shadow-sm">
                <a target="_blank" href="${item.Url}">
                        <img src=${item.Imgs[0]} class="card-img-top" alt="product.title" />

                    <div class="label-top shadow-sm">
                        <div class="text-white">${item.WebDomain}</div>
                    </div>
                        
                    <div class="card-body">
                        <div class = "container noBefore">
                            <span class="float-end"><a href="#" class="small text-muted text-uppercase aff-link" value="${item.NameCategory}">Compare</a></span>
                        </div>
                        <h5 class="card-title"><strong>${item.Name}</strong>
                        </h5>
                        <div class="container test">
                        <span><img src="${item.WebIcon}" class="card-brand" alt="product.title"/> </span>
                        <span><div class = "buy"><strong>Đã mua: 19</strong></div></span>
                        </div>
                        </div>
                        <div class="productCardPrice">
                            <a href="#" class="btn btn-warning bold-btn">${item.Price} VNĐ</a>
            
                        </div>
                        <div class = "container estimate">
            
                            <span class="float-start">
                                <div class="d-flex flex-row user-ratings">
                                    <div class="ratings">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <h6 class="text-muted ml-1">4/5</h6>
                                </div>
                            </span>
            
                            <span class="heartsymbol">
                                <i class="far fa-heart" style="cursor: pointer"></i>
            
                            </span>
                        </div>
                        </a>
                    </div>
                </div>`

        html += ''
            }
        }
    });
    document.getElementById('product').innerHTML = html;
    highlightText();
    const elements = document.getElementsByClassName('small');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(event) {
            event.preventDefault();
            Cate = elements[i].getAttribute('value')
            console.log(Cate)
            renderCate(Cate).then(data=>{
                elements[i].innerHTML = data
                form = document.getElementById("DataForm")
                console.log(form)
                // console.log(data)
                form.submit()
            })
            
        });
    }
}

changePage();

$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    console.log(idPage);
    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});
}

main();
