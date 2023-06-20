
import './globals.css'
import React, { useState } from 'react';
import FullImage from './components/FullImage';
import ProductBriefing from './components/ProductBriefing';
import PageProductShop from './components/PageProductShop'
export default function Product() {
    let product = {
        name: "Túi xách nữ đeo chéo kẹp nách đẹp thời trang giá rẻ quai mix khăn nơ cao cấp",
        url_img: "https://down-vn.img.susercontent.com/file/vn-11134601-7qukw-lho8oxhzfidda4",
        list_img: ["https://down-vn.img.susercontent.com/file/vn-11134601-7qukw-lho8oxhzfidda4", "https://down-vn.img.susercontent.com/file/35cfc38bca3e8be5530c932d7629cfdd", "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2d884ye8", "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2dkveb86", "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2d9mpec5", "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2dcfuaed", "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2db19u7a", "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2ddueq93", "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2df8z6c3"],
        cost: 300000,
        price: 165000,
        list_color: [{ id: 0, name: "BTT18 XANH THAN", id_img: 2 }, { id: 1, name: "BTT19 GHI XÁM", id_img: 4 }, { id: 2, name: "BTT20 NÂU SỮA", id_img: 5 }, { id: 3, name: "BTT82 XANH DƯƠNG", id_img: 6 }, { id: 4, name: "BTT117 TRẮNG ĐEN", id_img: 3 }, { id: 5, name: "BTT18 XANH THAN", id_img: 7 }],
        list_size: [{ id: 0, name: "M" }, { id: 1, name: "L" }, { id: 2, name: "XL" }, { id: 3, name: "XXL" },],
        rating: 2.4,
        evaluate: 27800,
        sold: 80800,
        products_available: 934,
        flash_sale: true,
    }
    let [img_big, setImg_big] = useState(product.url_img);

    function updateImg_big(url: string) {
        console.log(url);
        setImg_big(url);
    }

    function updateImg_big_byID(id: number) {
        setImg_big(product.list_img[id]);
    }

    return (
        <>
            <div className='body-content-products'>
                <div className='container'>
                    <div className='products-category'>
                        Shopee &#10095; Thiết Bị Điện Gia Dụng &#10095; Máy hút bụi & Thiết bị làm sạch &#10095; Khác &#10095; [Hàng Tích Điện] Quạt Tích Điện Mini gấp gọn Quạt Mini Để Bàn Xoay 180 Độ,3 Tốc Độ Gió,Pin Sạc USB Ở Bàn,Ô tô,Treo tường
                    </div>
                    <div className='product-briefing'>
                        <FullImage img_big={img_big} updateImg_big={updateImg_big} full_list_img={product.list_img} />
                        <ProductBriefing name={product.name} cost={product.cost} price={product.price} updateImg_big_byID={updateImg_big_byID} list_color={product.list_color} list_size={product.list_size} rating={product.rating} evaluate={product.evaluate} sold={product.sold} products_available={product.products_available} />
                        <PageProductShop />
                    </div>
                </div>
            </div>
        </>
    )
}