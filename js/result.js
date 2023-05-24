const urlParams = new URLSearchParams(window.location.search);
const nameCate = urlParams.get('name_cate');
const catePrice = urlParams.get('cate_price');
const ImgLen = urlParams.get('img_len');
const Desc = JSON.parse(decodeURIComponent(urlParams.get('desc')));

let NumProds = urlParams.get('num_prods');
console.log(NumProds);

// console.log(Desc[3])
// console.log(catePrice)


ImgLink = []
for (var i = 0; i < ImgLen; i++)
  ImgLink.push(urlParams.get('img_link_' + i));

// pdName = []
pdPrice = []
pdOriPrice = []
pdImg = []
pdWebIcon = []
pdUrl = []


if(NumProds > 6)  
  NumProds = 6;
for (var i = 0; i < NumProds; i++){
  // pdName.push(urlParams.get('product_' + i + '_name'));
  pdPrice.push(urlParams.get('product_' + i + '_price'));
  pdOriPrice.push(urlParams.get('product_' + i + '_original_price'));
  pdImg.push(urlParams.get('product_' + i + '_img'));
  pdWebIcon.push(urlParams.get('product_' + i + '_web_icon'));
  pdUrl.push(urlParams.get('product_' + i + '_url'))
}

// const pdName1 = urlParams.get('product_1_name');
// const pdPrice1 = urlParams.get('product_1_price');
// const pdOriPrice1 = urlParams.get('product_1_original_price');
// const pdImg1 = urlParams.get('product_1_img');
// const pdWebIcon1 = urlParams.get('product_1_web_icon')

// document.write(`nameCate is: ${nameCate}`);
// document.write(`<br>catePrice password is: ${catePrice}`);

html = '';
html += `<div class="container" style="margin-top: 50px;">
      
  <div class="row">
  <div class="col-md-4" style = "height: 300px; width: 300px;" >  
    <div class="pb-4">
      <img id = "product-image" src="${ImgLink[0]}" alt="" style = "height: 100%; width: 100%; align-items: center; border: solid 1px; border-radius: 15px">
    </div>
    <div class = "row">
      <h2>Giá: ${catePrice} đồng</h2>
    </div>
  </div>

  <div class="col-md-8">
    <div class="pb-8">
      <h2 id="product-name">${nameCate}</h2>
    </div>
    <div class="row" style = "height: 20px; padding: 0 0 0 0">
      <div class="row">`
        
      for (var i = 0; i < NumProds; i++){
        if(pdImg[i] === '')
          pdImg[i] = "img/TvT.png";
      html +=  
      `
      <div class="col-md-12 col-lg-4 mb-4 mb-md-0">
      <a target="_blank" href="${pdUrl[i]}">
      <div class="card" style = "margin-top: 20px">
        <div class="card h-100 shadow-sm">
                <img src="${pdImg[i]}" class="card-img-top" alt="product.title" style="width: 235px; height: 235px; padding: 10px;"/>
    
            <div class="label-top shadow-sm">
                <a class="text-white" href="#">Tiki</a>
            </div>
            <div class="card-body">
                <div class="container test">
                <img src="${pdWebIcon[i]}" class="card-brand" alt="product.title"/> 
                </div>
                </div>
                <div class="productCardPrice">
                    <a href="#" class="btn btn-warning bold-btn">${pdPrice[i]} VNĐ</a>
    
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
    
                    <span class="float-end">
                        <i class="far fa-heart" style="cursor: pointer"></i>
    
                    </span>
                </div>
            </div>
        </div>
        </a>
    </div>`
      }



      //   `
      //   <div class="col-md-12 col-lg-4 mb-4 mb-md-0">
      //     <a href="${pdUrl[i]}" style = "text-decoration: none">
      //     <div class="card" style = "margin-top: 20px">
      //       <div class="d-flex justify-content-between p-3">
      //         <!-- <p class="lead mb-0">Today's Combo Offer</p> -->
      //         <div
      //           class=" d-flex align-items-center justify-content-center shadow-1-strong"
      //           style="width: 35px; height: 35px;">
      //           <!-- <p class="text-white mb-0 small">x2</p> -->
      //           <!-- <img src= "https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png" alt="" style = "height: 100%"> -->
      //           <h5 style="font-family: 'Roboto', sans-serif;">Tiki</h5>
      //         </div>
      //       </div>

      //       <div class = "card__image" style="display: flex; justify-content: center;">
      //         <img src="${pdImg[i]}"
      //         class="card-img-top" alt="Product_image" style="width: 150px; height: 150px"/>
              
      //       </div>
            
      //       <div class="card-body">

      //         <div class="d-flex justify-content-between mb-3">
      //           <h6 class="text-dark mb-0" id = "product-price">${pdPrice[i]} đồng</h6>
      //         </div>
  
      //         <div class="d-flex justify-content-between mb-2">
      //           <div class="ms-auto text-warning">
      //             <i class="fas fa-star"></i>
      //             <i class="fas fa-star"></i>
      //             <i class="fas fa-star"></i>
      //             <i class="fas fa-star"></i>
      //             <i class="far fa-star"></i>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     </a>
      //   </div>
      // `

      
html += `
    </div>
  </div>

</div>


<!-- <h1 id="product-name"></h1> -->
<!-- <div class="product__img">
  <img id="product-image" src="" alt="" style = "max-width: 400px;">
</div> -->
<!-- <p id="product-price"></p> -->
<p id="product-description"></p>`
if(Desc !== null){
    html += `
    <div class="row" style = "margin: 600px 20px 20px 20px;">
    <div class="col-sm">
        <h1>Mô tả sản phẩm</h1>
        <table class="table table-striped">
  <tr>
    <th>Thông số</th>
    <th>Giá trị</th>
  </tr>
  <tr>
    <td>CPU</td>
    <td>${Desc[0].CPU}</td>
  </tr>
  <tr>
    <td>Card đồ họa</td>
    <td>${Desc[3]['Card Đồ hoạ']}</td>
  </tr>
  <tr>
    <td>RAM</td>
    <td>${Desc[1]['RAM']}</td>
  </tr>
  <tr>
    <td>Ổ cứng</td>
    <td>${Desc[2]["Ổ Cứng"]}</td>
  </tr>
  <tr>
    <td>KT&KL</td>
    <td>14 ${Desc[4]["KT&KL"]}</td>
  </tr>
</table>
    </div>
    </div>`
}else{
  if(NumProds <= 3)
    html += '<div class="row" style = "margin: 200px 20px 20px 20px;"></div>'
  else
    html += '<div class="row" style = "margin: 600px 20px 20px 20px;"></div>'
}

html += `

</div>
</div>`


document.getElementById('product__container').innerHTML = html;
