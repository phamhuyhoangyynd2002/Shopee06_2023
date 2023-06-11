"use client"

import Image from 'next/image';

export default function Home() {
    let img_big = "https://down-vn.img.susercontent.com/file/0ec921cf082e9a993732c9b8bda3a23f";

    let list_img: { id: number,url: string; isImg_big: boolean; }[] = [];
    list_img.push({id : 0, url: "https://down-vn.img.susercontent.com/file/0ec921cf082e9a993732c9b8bda3a23f_tn", isImg_big: false });
    list_img.push({id : 1, url: "https://down-vn.img.susercontent.com/file/7042e3f7030e43f2ab8821f8575dc3b5", isImg_big: false });
    list_img.push({id : 2, url: "https://down-vn.img.susercontent.com/file/161da20ee6b102130041e55e6e1f1dc6", isImg_big: false });
    list_img.push({id : 3, url: "https://down-vn.img.susercontent.com/file/0ec921cf082e9a993732c9b8bda3a23f", isImg_big: true });
    list_img.push({id : 4, url: "https://down-vn.img.susercontent.com/file/f352a2569db929bafeb89585b0e5f1b7", isImg_big: false });
    list_img.push({id : 5, url: "https://down-vn.img.susercontent.com/file/7ac3f2a7c0acf66aadc06b7984380140", isImg_big: false });
    list_img.push({id : 6, url: "https://down-vn.img.susercontent.com/file/a0430328c4cfdccacea77472fc9a9270", isImg_big: false });
    list_img.push({id : 7, url: "https://down-vn.img.susercontent.com/file/f3f831d5edeecf1d40ce15f04c8aac14", isImg_big: false });

    let img_small_start = 0;

    function set_img_big(url: string) {
        let check = -1;
        for (let img of list_img) {
            check++;
            if (img.url == url) {
                img.isImg_big = true;
                break;
            }
        }
        if (check >= 0) {
            for (let img of list_img) {
                check++;
                if (img.url != url) {
                    img.isImg_big = false;
                }
            }
            let x = document.getElementById("img-big");
            let y = document.getElementById("asd");
            var dots = document.getElementsByClassName("product-briefing-img-small");
            if (x != null && y!= null) {
                img_big = url;
                const newElement = document.createElement("img");
                newElement.src = img_big;
                newElement.width =450 ;
                newElement.height = 450;
                newElement.id = "asd";
                x.replaceChild(newElement, y);
                for (let i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" border_1px_ee4d2d", "");
                }
                dots[check].className += " border_1px_ee4d2d";
            }
        }
    }
    function render_img_small(img: any) {
        if(img.id <= img_small_start + 4){
            if (img.isImg_big == true)
            return (
                <div className='product-briefing-img-small border_1px_ee4d2d' onMouseOver={() => set_img_big(img.url)}>
                    <Image src={img.url} alt="" width={82} height={82} />
                </div>
            )
        else return (
            <div className='product-briefing-img-small' onMouseOver={() => set_img_big(img.url)}>
                <Image src={img.url} alt="" width={82} height={82} />
            </div>
        )
        }
    }
    function set_img_small_start(i: number){
        if(i+img_small_start<= list_img.length -4 && i+img_small_start>= 0)
            img_small_start +=i;
            let product_briefing_img_list_small = document.getElementById("product-briefing-img-list-small");
            if(product_briefing_img_list_small!= null){
                product_briefing_img_list_small.innerHTML = "";
                
                product_briefing_img_list_small= {    list_img.map((img) => (    (render_img_small(img))   ))   };
                
            }
    }

    function render_full_img() {
        return (
            <div className='product-briefing-img'>
                <div className='flex-column'>
                    <div className='product-briefing-img-big' id="img-big">
                        <Image src={img_big} alt="" width={450} height={450} id = "asd" />
                    </div>
                    <div className='product-briefing-img-list-small' id ="product-briefing-img-list-small">
                        {
                            list_img.map((img) => (
                                (render_img_small(img))
                            ))
                        }
                        <button onClick={() => set_img_small_start(-1)}>&#10094;</button>
                        <button onClick={() => set_img_small_start(1)}>&#10095;</button>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }

    return (
        <div className='body-content-products'>
            <div className='container'>
                <div className='products-category'>
                    Shopee &#10095; Thiết Bị Điện Gia Dụng &#10095; Máy hút bụi & Thiết bị làm sạch &#10095; Khác &#10095; [Hàng Tích Điện] Quạt Tích Điện Mini gấp gọn Quạt Mini Để Bàn Xoay 180 Độ,3 Tốc Độ Gió,Pin Sạc USB Ở Bàn,Ô tô,Treo tường
                </div>
                <div className='product-briefing'>
                    {
                        render_full_img()
                    }
                </div>
            </div>

        </div>
    )
}