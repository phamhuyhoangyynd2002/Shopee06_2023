import React, { useState } from 'react';

export default function Banners() {
    var slideIndex = 0;
    carousel();

    function plusDivs(n: number) {
        showDivs(slideIndex += n);
    }

    function currentDiv(n: number) {
        showDivs(slideIndex = n);
    }

    function showDivs(n: number) {
        var i;
        var x = document.getElementsByClassName("banner-img");
        var dots = document.getElementsByClassName("banner-img-badge");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        console.log(x);
        for (i = 0; i < x.length; i++) {
            x[i].classList.add('hidden');
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" banner-img-badge-active", "");
        }
        if (x.length != 0) x[slideIndex - 1].classList.remove('hidden');
        if (dots.length != 0) dots[slideIndex - 1].className += " banner-img-badge-active";
    }

    function carousel() {
        if (slideIndex == 0) {
            setTimeout(() => { plusDivs(1); }, 200);
        }
        plusDivs(1);
        setTimeout(carousel, 5000); // Change image every 5 seconds
    }

    let tags = [];
    tags.push({ 'url': "https://shopee.vn/m/khung-gio-san-sale", url_img: "https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi", name: "Khung Giờ Săn Sale" });
    tags.push({ 'url': "https://shopee.vn/m/mien-phi-van-chuyen", url_img: "https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi", name: "Miễn Phí Vận Chuyển" });
    tags.push({ 'url': "https://shopee.vn/m/VoucherXtra", url_img: "https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi", name: "Voucher Giảm Đến 200.000Đ" });
    tags.push({ 'url': "https://shopee.vn/m/shopee-outlet", url_img: "https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi", name: "Hàng Hiệu Outlet Giảm 50%" });
    tags.push({ 'url': "https://shopee.vn/m/ma-giam-gia", url_img: "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi", name: "Mã Giảm Giá" });
    tags.push({ 'url': "https://shopee.vn/m/top-deal-hot-trend", url_img: "https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi", name: "Bắt Trend - Giá Sốc" });
    tags.push({ 'url': "https://shopee.vn/digital-product/shop/others", url_img: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi", name: "Nạp Thẻ, Dịch Vụ & Data" });
    tags.push({ 'url': "https://shopee.vn/m/thoitrangquocte-Jun2023", url_img: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi", name: "Hàng Quốc Tế" });
    tags.push({ 'url': "https://shopee.vn/m/gi-cung-re-freeship", url_img: "https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi", name: "Gì Cũng Rẻ - Mua Là Freeship" });

    let banners = [];
    banners.push({ id: 1, 'url': "https://cf.shopee.vn/file/vn-50009109-b5cde61683a36a9c5ca6236234602f2a_xxhdpi" });
    banners.push({ id: 2, 'url': "https://cf.shopee.vn/file/vn-50009109-2f7af1af41216ac2e810c292625dcfad_xhdpi" });
    banners.push({ id: 3, 'url': "https://cf.shopee.vn/file/vn-50009109-28ad362e0a84a62e1b3d1140da1220f5_xhdpi" });
    banners.push({ id: 4, 'url': "https://cf.shopee.vn/file/vn-50009109-93c162540aa021ce5f0de2442814ed8c_xxhdpi" });
    banners.push({ id: 5, 'url': "https://cf.shopee.vn/file/vn-50009109-6740ee739d3afa437d163b6d7e8cf079_xxhdpi" });
    banners.push({ id: 6, 'url': "https://cf.shopee.vn/file/vn-50009109-17173ffc86173944b2d80daa324c1394_xxhdpi" });
    banners.push({ id: 7, 'url': "https://cf.shopee.vn/file/vn-50009109-84490b1a456f06274df8a0340fa79c19_xxhdpi" });
    banners.push({ id: 8, 'url': "https://cf.shopee.vn/file/vn-50009109-a303b7170427c9e2ba2e2d7c103eddc3_xxhdpi" });
    banners.push({ id: 9, 'url': "https://cf.shopee.vn/file/vn-50009109-ac275abbb05bae537fdea6de24614b0c_xxhdpi" });
    banners.push({ id: 10, 'url': "https://cf.shopee.vn/file/vn-50009109-af1e7b9f234d444357b3b7d1fdc62b77_xxhdpi" });
    banners.push({ id: 11, 'url': "https://cf.shopee.vn/file/vn-50009109-b5cde61683a36a9c5ca6236234602f2a_xxhdpi" });
    banners.push({ id: 12, 'url': "https://cf.shopee.vn/file/vn-50009109-b90320f185d192c2a8175f4411926ae8_xxhdpi" });
    banners.push({ id: 13, 'url': "https://cf.shopee.vn/file/vn-50009109-c7d8f3d9cf17db3082f04b647bf409af_xxhdpi" });
    banners.push({ id: 14, 'url': "https://cf.shopee.vn/file/vn-50009109-cf394f50aa79a8a7954c13aafc1ace30_xxhdpi" });
    banners.push({ id: 15, 'url': "https://cf.shopee.vn/file/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi" });
    console.log("asdsasda");
    return (
        <>
            <div className="container full-home-banners">
                <div className="full-home-banners-main-banner">
                    {banners.map((banner) => (

                        <img src={banner.url} alt="" width={796} height={235} className='banner-img banner-img-hidden' />
                    ))}
                    <div className="full-home-banners-main-banner-indicators">
                        <div className="full-home-banners-main-banner-indicators-left" onClick={() => plusDivs(-1)}>&#10094;</div>
                        <div className="full-home-banners-main-banner-indicators-right" onClick={() => plusDivs(1)}>&#10095;</div>
                        <div className='full-banner-img-badge'>
                            {banners.map((banner) => (
                                <span className="banner-img-badge" onClick={() => currentDiv(banner.id)}></span>
                            ))
                            }
                        </div>

                    </div>
                </div>
                <div className="full-home-banners-right-wrapper">
                    <img src={banners[13].url} alt="" width={394} height={115} />
                    <img src={banners[14].url} alt="" width={394} height={115} />
                </div>
            </div>
            <div className="container full-banners_tags">
                {tags.map((tag) => (
                    <div className="banner_tag">
                        <div>
                            <img src={tag.url_img} alt="" width={45} height={45} />
                        </div>
                        <div>
                            {tag.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}