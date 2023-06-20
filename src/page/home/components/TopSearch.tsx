export default function TopSearch() {
    let products_top_search = [];
    products_top_search.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/63d7bef820b88a57b5ae4713eb2d20d7", sold_per_month: "Bán 42k+ / tháng", name: "Áo Thun Local Brand" });
    products_top_search.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/9506733d60df1b63d7108f19eb47aa96", sold_per_month: "Bán 42k+ / tháng", name: "Balo Thời Trang" });
    products_top_search.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/3efaf1c0506230e6d812f8d524b20f47", sold_per_month: "Bán 42k+ / tháng", name: "Áo Thun Polo Nam Ngắn Tay" });
    products_top_search.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/63d7bef820b88a57b5ae4713eb2d20d7", sold_per_month: "Bán 42k+ / tháng", name: "Áo Thun Local Brand" });
    products_top_search.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/9506733d60df1b63d7108f19eb47aa96", sold_per_month: "Bán 42k+ / tháng", name: "Balo Thời Trang" });
    products_top_search.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/3efaf1c0506230e6d812f8d524b20f47", sold_per_month: "Bán 42k+ / tháng", name: "Áo Thun Polo Nam Ngắn Tay" });
    return (
      <div className="container content">
        <div className="content-nav">
          <div className='color-ee4d2d'>TÌM KIẾM HÀNG ĐẦU</div>
          <div className='color-ee4d2d font-size-1rem' >
            Xem Tất Cả &#10095;
          </div>
        </div>
        <div className="content-full-products-top-search">
          {products_top_search.map((product) => (
            <a href='' className="content-product-top-search" >
              <img src={product.url_img}
                alt="" width={160} height={160} />
              <div className='content-product-top-search-sold-per-month'>
                {product.sold_per_month}
              </div>
              <div className="content-product-top-search-text"> {product.name}</div>
            </a>
          ))}
        </div>
      </div>
    )
  }