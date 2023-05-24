async function getData(Name) {
    try {
        const response = await fetch('https://web-crawler-computer-network-project2.vercel.app/getData', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Name-Cate": Name
            }           
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

getData(encodeURIComponent("Lenovo IdeaPad 1 15AMN7 R5 7520U (82VG0022VN)")).then(data => console.log(data))

// async function renderCate(Name) {
//     try {
//         const product = await getData(Name);
//         $.each(product, function (i, products) {
//             // console.log(products.Products[0].WebIcon);
//             let jsonstring = JSON.stringify(products.Desc)
//             let encodeJsonString = encodeURIComponent(jsonstring)
//             // console.log(encodeJsonString)
//             html += `
//                 <form action="result.html" method="GET" id="DataForm">
//                     <label for="name_cate" style = "display: none">Name Category:</label>
//                     <input type="text" id="name_cate" name="name_cate" style = "display: none" value = "${products.NameCategory}" readonly>
                    
//                     <label for="cate_price" style = "display: none">CatePrice:</label>
//                     <input type="number" id="cate_price" name="cate_price" style = "display: none" value = ${products.CatePrice} readonly>
    
//                     <label for="desc" style = "display: none">CatePrice:</label>
//                     <input id="desc" name="desc" style = "display: none" value = ${encodeJsonString} readonly>
//                     `
//             html += `
//                     <label for="img_len" style = "display: none">ImgLen:</label>
//                     <input type="number" id = "img_len" style = "display: none" name = "img_len" value = ${products.CateImgs.length} readonly>
//                     <label for="number_of_products" style = "display: none">Number of products:</label>
//                     <input type="number" id="num_prods" name="num_prods" style = "display: none" value = ${products.Products.length} readonly>
//                     `
    
//             for (var i = 0; i < products.CateImgs.length; i++) {
    
//                 html += `
//                     <label for="img_link_1" style = "display: none">ImgLink${i}:</label>
//                     <input type="text" id = "img_link" name = "img_link_${i}" style = "display: none" value = "${products.CateImgs[i]}" readonly>
//                     `
//             }
    
//             for (var i = 0; i < products.Products.length; i++) {
//                 html += `
//                     <label for="product_${i}_name" style = "display: none">Product ${i} Name:</label>
//                     <input type="text" id = "product_${i}_name" style = "display: none" name = "product_${i}_name" value = "${products.Products[i]['Name']}" readonly>
                    
//                     <label for="product_${i}_name" style = "display: none">Product ${i} Url:</label>
//                     <input type="text" id = "product_${i}_url" style = "display: none" name = "product_${i}_url" value = "${products.Products[i]['Url']}" readonly>
                    
//                     <label for="product_${i}_price" style = "display: none">Product ${i} price:</label>
//                     <input type="number" id = "product_${i}_price" name = "product_${i}_price" style = "display: none" value = ${products.Products[i]['Price']} readonly>
                    
//                     <label for="product_${i}_original_price" style = "display: none">Product ${i} price before sale:</label>
//                     <input type="number" id = "product_${i}_original_price" style = "display: none" name = "product_${i}_original_price" value = ${products.Products[i]['OriginalPrice']} readonly>
                    
//                     <label for="product_${i}_img" style = "display: none">Product ${i} img:</label>
//                     <input type="text" id = "product_${i}_img" name = "product_${i}_img" style = "display: none" value = "${products.Products[i]["Imgs"]}" readonly>
                    
//                     <label for="product_${i}_web_icon" style = "display: none">Product ${i} web icon:</label>
//                     <input type="text" id = "product_${i}_web_icon" name = "product_${i}_web_icon" style = "display: none" value = "${products.Products[i]['WebIcon']}" readonly>
                    
//                     `
//             }
//             html +=
//                 `
//                 </form>
//             `

//         })
//         return html
//         // console.log(product);
//     } catch (error) {
//         console.error(error);
//         return ``
//     }
       
// }

// renderCate('MacBook Pro 16.2" 2021 - M1 Max 10-Core, GPU 32-Core / 64GB / 1TB (Space Gray/Silver) (Chính hãng) - Bảo hành chuẩn 12 tháng').then(data => console.log(data))
