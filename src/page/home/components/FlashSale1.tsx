
export default function FlashSale1() {
    let products_flash_sale = [];
    products_flash_sale.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-9f841fa28495f991f7fee072edbfd8cb_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 454000, isMall: true, discount: "-16%", total: 100, sold: 50 });
    products_flash_sale.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-7accb6669e0d2e40ebeec2bb693bed42_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 425000, isMall: true, discount: "-21%", total: 100, sold: 80 });
    products_flash_sale.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", total: 100, sold: 70 });
    products_flash_sale.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn75f5m6pf6bf_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", total: 100, sold: 90 });
    products_flash_sale.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-5g8ia2c4qbjv39_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 740000, isMall: true, discount: "-50%", total: 100, sold: 30 });
    products_flash_sale.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/4c3bb268cde4994de4c03c9de9a01074_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 225000, isMall: true, discount: "-50%", total: 100, sold: 88 });
    products_flash_sale.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", total: 100, sold: 75 });
    return (
      <div className="container content">
        <div className="content-nav">
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png"
            alt="" width={170} height={33} />
          <div className='color-ee4d2d font-size-1rem'>
            Xem Tất Cả &#10095;
          </div>
        </div>
        <div className="content-full-products">
          {products_flash_sale.map((product) => (
            <div className="content-product">
              <a href='/products'>
                <img src={product.url_img}
                  alt="" width={160} height={160} />
                <div className="content-product-text"> đ{product.price}</div>
                <div className='selling_well'>
                  ĐANG BÁN CHẠY
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }