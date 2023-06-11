"use client"

import Image from 'next/image';

export default function Home() {

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
            x[i].classList.add('banner-img-hidden');
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" banner-img-badge-active", "");
        }
        if (x.length != 0) x[slideIndex - 1].classList.remove('banner-img-hidden');
        if (dots.length != 0) dots[slideIndex - 1].className += " banner-img-badge-active";
    }

    function carousel() {
        if (slideIndex == 0) {
            setTimeout(() => { plusDivs(1); }, 200);
        }
        plusDivs(1);
        setTimeout(carousel, 5000); // Change image every 5 seconds
    }

    function render_banners() {
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
        return (
            <>
                <div className="container full-home-banners">
                    <div className="full-home-banners-main-banner">
                        {banners.map((banner) => (
                            <Image src={banner.url} alt="" width={796} height={235} className='banner-img banner-img-hidden' />
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
                        <Image src={banners[13].url} alt="" width={394} height={115} />
                        <Image src={banners[14].url} alt="" width={394} height={115} />
                    </div>
                </div>
                <div className="container full-banners_tags">
                    {tags.map((tag) => (
                        <div className="banner_tag">
                            <div>
                                <Image src={tag.url_img} alt="" width={45} height={45} />
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

    function render_full_categorys() {
        let categorys = [];
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn", name: "Thời Trang Nam" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn", name: "Thời Trang Nữ" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn", name: "Điện Thoại & Phụ Kiện" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn", name: "Mẹ & Bé" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn", name: "Thiết Bị Điện Tử" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn", name: "Nhà Cửa & Đời Sống" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn", name: "Giặt Giũ & Chăm Sóc Nhà Cửa" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn", name: "Máy Tính & Laptop" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn", name: "Sắc Đẹp" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn", name: "Máy Ảnh & Máy Quay Phim" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn", name: "Sức Khỏe" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn", name: "Ô Tô & Xe Máy & Xe Đạp" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0_tn", name: "Dụng cụ và thiết bị tiện ích" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn", name: "Điện Thoại & Phụ Kiện" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn", name: "Giặt Giũ & Chăm Sóc Nhà Cửa" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn", name: "Thời Trang Nam" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn", name: "Thời Trang Nữ" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn", name: "Điện Thoại & Phụ Kiện" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn", name: "Mẹ & Bé" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn", name: "Thiết Bị Điện Tử" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn", name: "Nhà Cửa & Đời Sống" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn", name: "Giặt Giũ & Chăm Sóc Nhà Cửa" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn", name: "Máy Tính & Laptop" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn", name: "Sắc Đẹp" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn", name: "Máy Ảnh & Máy Quay Phim" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn", name: "Sức Khỏe" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn", name: "Ô Tô & Xe Máy & Xe Đạp" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0_tn", name: "Dụng cụ và thiết bị tiện ích" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn", name: "Điện Thoại & Phụ Kiện" });
        categorys.push({ url: "", url_img: "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn", name: "Giặt Giũ & Chăm Sóc Nhà Cửa" });

        let double_categorys = []
        for (let i = 0; i < (categorys.length + 1) / 2; i++) {
            let category1 = categorys[2 * i];
            let category2 = categorys[2 * i + 1];
            double_categorys.push({ category1, category2 })
        }

        return (
            <div className="container content">
                <div className="content-nav" >
                    DANH MỤC
                </div>
                <div className="full-categorys">
                    {
                        double_categorys.map((double_category) => ((render_double_category(double_category.category1, double_category.category2))))
                    }
                </div>
            </div>
        );
    }

    function render_double_category(category1: any, category2: any) {
        if (category1 == undefined) {
            return
        }
        else
            if (category2 == undefined) {
                return (
                    <div className='double-category'>
                        <div className="category">
                            <Image src={category1.url_img} alt="" width={100} height={100} />
                            <div>{category1.name}</div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className='double-category'>
                        <div className="category">
                            <Image src={category1.url_img} alt="" width={100} height={100} />
                            <div>{category1.name}</div>
                        </div>
                        <div className="category">
                            <Image src={category2.url_img} alt="" width={100} height={100} />
                            <div>{category2.name}</div>
                        </div>
                    </div>

                )
            }
    }

    function render_flash_sale() {
        let products_you_like = [];
        products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-23010-gi9nsvrjb9lv35_tn", price: 85000 });
        products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/d96a09e1f6ee4b42b3c897fb079dbf2d_tn", price: 89000 });
        products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-rstrp5oym3nv3f_tn", price: 25000 });
        products_you_like.push({ id: 1, url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfik3npnaav800_tn", price: 59000 });

        return (
            <div className='container content flash-sale'>
                <div>
                    <Image src="https://down-vn.img.susercontent.com/file/vn-50009109-57ccd7106eba1ab504ec3dc40cf1a6c0"
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
                                    <Image src={product.url_img} alt="" width={200} height={200} />
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
                                    <Image src={product.url_img} alt="" width={162} height={162} />
                                    <div className="flash-sale-content-product-text">₫{product.price}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function render_flash_sale1() {
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
                    <Image src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png"
                        alt="" width={170} height={33} />
                    <div className='color-ee4d2d font-size-1rem'>
                        Xem Tất Cả &#10095;
                    </div>
                </div>
                <div className="content-full-products">
                    {products_flash_sale.map((product) => (
                        <div className="content-product">
                            <a href='/products'>
                                <Image src={product.url_img}
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

    function render_top_search() {
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
                            <Image src={product.url_img}
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

    function render_shopee_mall() {
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
                        <Image src="https://cf.shopee.vn/file/vn-50009109-d2bbd046b53ace6e84d52c5c3860d853" width={390} height={464} alt="" />
                    </div>
                    <div className="content-shopee-mall-right">
                        {
                            double_shopee_malls.map((double_shopee_mall) => (render_double_shopee_mall(double_shopee_mall.category1, double_shopee_mall.category2)))
                        }
                    </div>
                </div>
            </div>
        )
    }

    function render_double_shopee_mall(category1: any, category2: any) {
        if (category1 == undefined) {
            return
        }
        else
            if (category2 == undefined) {
                return (
                    <div>
                        <div className="content-shopee-mall-right-category">
                            <Image src={category1.url_img}
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
                            <Image src={category1.url_img}
                                alt="" width={201} height={241} />
                            <div>{category1.name}</div>
                        </div>
                        <div className="content-shopee-mall-right-category">
                            <Image src={category2.url_img}
                                alt="" width={201} height={241} />
                            <div>{category2.name}</div>
                        </div>
                    </div>

                )
            }
    }

    function render_suggested_products() {
        let products = [];
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-9f841fa28495f991f7fee072edbfd8cb_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 454000, isMall: true, discount: "-16%", sold: "Đã bán 10,2k", name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-7accb6669e0d2e40ebeec2bb693bed42_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 425000, isMall: true, discount: "-21%", sold: 80, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 70, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn75f5m6pf6bf_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 90, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-5g8ia2c4qbjv39_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 740000, isMall: true, discount: "-50%", sold: 30, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/4c3bb268cde4994de4c03c9de9a01074_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 225000, isMall: true, discount: "-50%", sold: 88, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 75, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-9f841fa28495f991f7fee072edbfd8cb_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 454000, isMall: true, discount: "-16%", sold: "Đã bán 10,2k", name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-7accb6669e0d2e40ebeec2bb693bed42_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 425000, isMall: true, discount: "-21%", sold: 80, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 70, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn75f5m6pf6bf_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 90, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-5g8ia2c4qbjv39_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 740000, isMall: true, discount: "-50%", sold: 30, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/4c3bb268cde4994de4c03c9de9a01074_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 225000, isMall: true, discount: "-50%", sold: 88, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 75, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-9f841fa28495f991f7fee072edbfd8cb_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 454000, isMall: true, discount: "-16%", sold: "Đã bán 10,2k", name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-7accb6669e0d2e40ebeec2bb693bed42_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 425000, isMall: true, discount: "-21%", sold: 80, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 70, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn75f5m6pf6bf_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 90, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-5g8ia2c4qbjv39_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 740000, isMall: true, discount: "-50%", sold: 30, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/4c3bb268cde4994de4c03c9de9a01074_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 225000, isMall: true, discount: "-50%", sold: 88, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 75, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-9f841fa28495f991f7fee072edbfd8cb_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 454000, isMall: true, discount: "-16%", sold: "Đã bán 10,2k", name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-7accb6669e0d2e40ebeec2bb693bed42_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 425000, isMall: true, discount: "-21%", sold: 80, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 70, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn75f5m6pf6bf_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 90, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-5g8ia2c4qbjv39_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 740000, isMall: true, discount: "-50%", sold: 30, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/4c3bb268cde4994de4c03c9de9a01074_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 225000, isMall: true, discount: "-50%", sold: 88, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 75, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-9f841fa28495f991f7fee072edbfd8cb_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 454000, isMall: true, discount: "-16%", sold: "Đã bán 10,2k", name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-7accb6669e0d2e40ebeec2bb693bed42_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 425000, isMall: true, discount: "-21%", sold: 80, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 70, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgn75f5m6pf6bf_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 90, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-5g8ia2c4qbjv39_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 740000, isMall: true, discount: "-50%", sold: 30, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/4c3bb268cde4994de4c03c9de9a01074_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 225000, isMall: true, discount: "-50%", sold: 88, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfq87fb2486te1_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-fe242acaf81bb11ed5ac4cd990145ba4_tn", price: 287000, isMall: true, discount: "-42%", sold: 75, name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });
        products.push({ url: "/products", url_img: "https://down-vn.img.susercontent.com/file/vn-50009109-9f841fa28495f991f7fee072edbfd8cb_tn", url_img1: "https://down-vn.img.susercontent.com/file/vn-50009109-aca761d770add2c1351c6df87905e094_tn", price: 454000, isMall: true, discount: "-16%", sold: "Đã bán 10,2k", name: "Dép quai ngang NERDY Left Right - NERDY chữ thêu đế cao 4.5cm - dép nam nữ full box và giấy gói" });

        return (
            <div className="container">
                <div className="suggested-products">
                    {
                        products.map((product) => (
                            <a href={product.url}>
                                <div className="product">
                                    <div>
                                        <Image src={product.url_img}
                                            alt="" width={190} height={190} />
                                        <div className="product_img_1">
                                            <Image src={product.url_img1}
                                                alt="" width={190} height={190} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product_name">{product.name}</div>
                                        <div className="product_text">
                                            <div className='product-price'>đ{product.price}</div>
                                            <div className='product-sold'>{product.sold}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    }

                </div>
            </div>
        )
    }
    return (
        <>
            <div className='body-content'>
                {
                    render_banners()
                }
                <div className='full-contents'>
                    {
                        render_flash_sale()
                    }
                    {
                        render_full_categorys()
                    }
                    {
                        render_flash_sale1()
                    }
                    <div className="container content">
                        <Image src="https://cf.shopee.vn/file/sg-50009109-27e27384ea4ef646976676cd5d688283" alt="" width={1200} height={110} />
                    </div>
                    {
                        render_top_search()
                    }
                    {
                        render_shopee_mall()
                    }
                    <div className="container content title-suggested-products">
                        GỢI Ý HÔM NAY
                    </div>
                    {
                        render_suggested_products()
                    }
                </div>
            </div>
        </>
    )
}