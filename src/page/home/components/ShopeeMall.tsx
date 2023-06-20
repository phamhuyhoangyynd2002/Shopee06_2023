export default function render_shopee_mall() {
    let shopee_mall = [];
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-d1d54ce2745c029eea0afa0c6800a5a7_xhdpi", name: "Mua là có quà" });
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-3b250cb1d5527345b08ae03c7b5646b4_xhdpi", name: "Giảm đến 50%" });
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-ef594c9dd41ca5ac8f54948592738c24_xhdpi", name: "Giảm đến 43%" });
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/0b7528892f34b1ceb5e7e3883c34adb1_xhdpi", name: "Nội y Sabina 9k" });
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/c7b843e477e90f2a0ead5675b457f71a_xhdpi", name: "Mua là có quà" });
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/be691f1a5b5a715c933e55f7fd2d7f0b_xhdpi", name: "Sale chào hè 50%" });
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/c2091ad7aa1f207aabbab9d112f6cfa4_xhdpi", name: "Mua là có quà" });
    shopee_mall.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/ee98c39797a226f6528a154a36303104_xhdpi", name: "Siêu ưu đãi độc quyền" });

    let double_shopee_malls = []
    for (let i = 0; i < (shopee_mall.length + 1) / 2; i++) {
      let category1 = shopee_mall[2 * i];
      let category2 = shopee_mall[2 * i + 1];
      double_shopee_malls.push({ category1, category2 })
    }
    return (
      <div className="container content">
        <div className="content-nav">
          <div>
            <div className="content-nav-text-1 color-d0011b">SHOPEE MALL</div>
            <div className="content-nav-text-2">7 Ngày Miễn Phí Trả Hàng</div>
            <div className="content-nav-text-2">Hàng Chính Hãng 100%</div>
            <div className="content-nav-text-2">Miễn Phí Vận Chuyển</div>
          </div>
          <div className='font-size-1rem color-d0011b'>
            Xem Tất Cả  &#10095;
          </div>
        </div>
        <div className="content-shopee-mall">
          <div>
            <img  src="https://cf.shopee.vn/file/vn-50009109-d2bbd046b53ace6e84d52c5c3860d853" width={390} height={464} alt="" />
          </div>
          <div className="content-shopee-mall-right">
            {
              double_shopee_malls.map((double_shopee_mall) => (render_double_shopee_mall(double_shopee_mall.category1, double_shopee_mall.category2)))
            }
          </div>
        </div>
      </div>
    )
    function render_double_shopee_mall(category1: any, category2: any) {
        if (category1 == undefined) {
          return
        }
        else
          if (category2 == undefined) {
            return (
              <div>
                <div className="content-shopee-mall-right-category">
                  <img src={category1.url_img}
                    alt="" width={201} height={241} />
                  <div>{category1.name}</div>
                </div>
              </div>
            )
          }
          else {
            return (
              <div>
                <div className="content-shopee-mall-right-category">
                  <img  src={category1.url_img}
                    alt="" width={201} height={241} />
                  <div>{category1.name}</div>
                </div>
                <div className="content-shopee-mall-right-category">
                  <img  src={category2.url_img}
                    alt="" width={201} height={241} />
                  <div>{category2.name}</div>
                </div>
              </div>
    
            )
          }
      }
  }