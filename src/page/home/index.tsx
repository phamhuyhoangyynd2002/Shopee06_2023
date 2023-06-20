import Banners from "./components/Banners";
import FlashSale from "./components/FlashSale";
import FullCategorys from "./components/FullCategorys";
import FlashSale1 from "./components/FlashSale1";
import TopSearch from "./components/TopSearch";
import ShopeeMall from "./components/ShopeeMall";
import SuggestedProducts from "./components/SuggestedProducts"
export default function Home() {
  return (
    <>
      <div className='body-content'>
        <Banners />
        <div className='full-contents'>
            <FlashSale />
            <FullCategorys />
            <FlashSale1 />
          <div className="container content">
            <img  src="https://cf.shopee.vn/file/sg-50009109-27e27384ea4ef646976676cd5d688283" alt="" width={1200} height={110} />
          </div>
          <TopSearch />
          <ShopeeMall />
          <div className="container content title-suggested-products">
            GỢI Ý HÔM NAY
          </div>
          <SuggestedProducts />
        </div>
      </div>
    </>
  )
}