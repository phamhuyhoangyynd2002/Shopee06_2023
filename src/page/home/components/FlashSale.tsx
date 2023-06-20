export default function FlashSale(){
    let products_you_like = [];
    products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-23010-gi9nsvrjb9lv35_tn", price: 85000 });
    products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/d96a09e1f6ee4b42b3c897fb079dbf2d_tn", price: 89000 });
    products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-rstrp5oym3nv3f_tn", price: 25000 });
    products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfik3npnaav800_tn", price: 59000 });

    return (
      <div className='container content flash-sale'>
        <div>
          <img src="https://down-vn.img.susercontent.com/file/vn-50009109-57ccd7106eba1ab504ec3dc40cf1a6c0"
            alt="" height={60} width={1200} />
        </div>
        <div className="flash-sale-content">
          <div>
            <div className="content-nav">
              <div>ĐỒ BẠN THÍCH Ở ĐÂY</div>
              <div className='font-size-1rem'>Xem Thêm &#10095;</div>
            </div>
            <div className="flash-sale-content-full-products">
              {products_you_like.map((product) => (
                <a href='' className="flash-sale-content-product" >
                  <img src={product.url_img} alt="" width={200} height={200} />
                  <div className="flash-sale-content-product-text">₫{product.price}</div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="content-nav">
              <div>BỘ SƯU TẬP XU HƯỚNG</div>
              <div className='font-size-1rem'>Xem Thêm &#10095;</div>
            </div>
            <div className="flash-sale-content-full-products">
              {products_you_like.map((product) => (
                <a href='' className="flash-sale-content-product" >
                  <img src={product.url_img} alt="" width={162} height={162} />
                  <div className="flash-sale-content-product-text">₫{product.price}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}