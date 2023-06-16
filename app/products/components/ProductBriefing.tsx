"use client"

import Image from 'next/image';
import React, { useState } from 'react';

export default function ProductBriefing(props: any) {
    let rating = ['0%', '0%', '0%', '0%', '0%'];
    let evaluate = "";
    let sold = "";
    let reduce = "";
    let [quantity, setQuantity] = useState(1);
    set_rating();
    set_evaluate();
    set_sold();
    set_reduce();

    function set_rating() {
        let r = props.rating * 100;
        let vt = 0;
        while (r > 0) {
            if (r >= 100) rating[vt] = 100 + '%';
            else rating[vt] = r + '%';
            r = r - 100;
            vt++;
        }
    }

    function set_evaluate() {
        if (props.evaluate >= 1000) {
            evaluate = Math.round((props.evaluate / 1000 + Number.EPSILON) * 10) / 10 + 'k';
        }
        else evaluate = '' + props.evaluate;
    }

    function set_sold() {
        if (props.sold >= 1000) {
            sold = Math.round((props.sold / 1000 + Number.EPSILON) * 10) / 10 + 'k';
        }
        else sold = '' + props.sold;
    }

    function set_reduce() {
        if (props.cost > props.price) {
            reduce = ((props.cost - props.price) * 100) / props.cost + "%";
        }
    }

    function update_quantity(event:number){
        if(quantity+event <= 0) setQuantity(1);
        else if(quantity+event > props.products_available) setQuantity(props.products_available);
        else setQuantity(quantity+event);
    }
    function update_quantity_input(event:number){
        if(event <= 0) setQuantity(1);
        else if(event > props.products_available) setQuantity(props.products_available);
        else setQuantity(event);
    }
    return (
        <div className='product-briefing-right'>
            <div className='product-briefing-right-title'>
                <div className='product-briefing-right-title-like'>
                    Yêu thích
                </div>
                {props.name}
            </div>
            <div className='product-briefing-full-rating'>
                <div className='flex'>
                    <div>
                        <a href="" className='product-briefing-text-rating'>{props.rating}</a>
                        <div className='product-briefing-stars-rating'>
                            {
                                rating.map((r) => (
                                    <div className="shopee-rating-stars__star-wrapper">
                                        <div className="shopee-rating-stars__lit" style={{ width: r }}>
                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid" >
                                                <polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                                </polygon>
                                            </svg>
                                        </div>
                                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon shopee-rating-stars__hollow-star">
                                            <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                            </polygon>
                                        </svg>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <a href="" className='product-briefing-text-evaluate'>{evaluate}</a>
                        <div>
                            Đánh giá
                        </div>
                    </div>
                    <div>
                        <div className='product-briefing-text-sold'>
                            {sold}
                        </div>
                        <div>
                            Đã bán
                        </div>
                    </div>
                </div>
                <div>
                    Tố cáo
                </div>
            </div>
            <div className='product-briefing-full-price'>
                <div className='flex items-center'>
                    <div className='product-briefing-cost'>
                        ₫{props.cost}
                    </div>
                    <div className='product-briefing-price'>
                        ₫{props.price}
                    </div>
                    <div className='product-briefing-reduce'>
                        {reduce} GIẢM
                    </div>
                </div>
            </div>
            <div className='flex-column product-briefing-full-detail' >
                <div className='flex'>
                    <div className='product-briefing-full-detail_nav'>
                        bảo hiểm
                    </div>
                    <div className='flex items-center'>
                        <div>Bảo hiểm Thời trang</div>
                        <div className='product-briefing-full-detail-insurance-new'>Mới</div>
                        <a href="" className='product-briefing-full-detail-insurance-link'>Tìm hiểu thêm</a>
                    </div>
                </div>
                <div className='flex'>
                    <div className='product-briefing-full-detail_nav'>
                        vận chuyển
                    </div>
                    <div className='product-briefing-full-detail-transport'>
                        <Image src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/74f3e9ac01da8565c3baead996ed6e2a.png" width={25} height={20} alt='' />
                        <div>Miễn phí vận chuyển</div>
                        <div>
                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-free-shipping-line">
                                <g>
                                    <line fill="none" stroke-linejoin="round" stroke-miterlimit="10" x1="8.6" x2="4.2" y1="9.8" y2="9.8">
                                    </line>
                                    <circle cx="3" cy="11.2" fill="none" r="2" stroke-miterlimit="10">
                                    </circle>
                                    <circle cx="10" cy="11.2" fill="none" r="2" stroke-miterlimit="10">
                                    </circle>
                                    <line fill="none" stroke-miterlimit="10" x1="10.5" x2="14.4" y1="7.3" y2="7.3">
                                    </line>
                                    <polyline fill="none" points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1" stroke-linejoin="round" stroke-miterlimit="10">
                                    </polyline>
                                    <polyline fill="none" points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2" stroke-linejoin="round" stroke-miterlimit="10">
                                    </polyline>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div className='flex'>
                                <div className='product-briefing-full-detail-transport_nav'>Vận chuyển tới</div>
                                <div className='flex items-center'>
                                    <div>Phường Tràng Tiền, Quận Hoàn Kiếm</div>
                                    <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-down">
                                        <g>
                                            <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='product-briefing-full-detail-transport_nav'>Phí vân chuyển</div>
                                <div className='flex items-center'>
                                    <div>₫0</div>
                                    <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-down">
                                        <g>
                                            <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='product-briefing-full-detail_nav'>
                        MÀU
                    </div>
                    <div className='flex-wrap items-center'>
                        {
                            props.list_color.map((color: { name: string; id_img: number }) => (
                                <button className='product-briefing-full-detail-color_button' onMouseOver={() => props.updateImg_big_byID(color.id_img)}>{color.name}</button>
                            ))
                        }
                    </div>
                </div>
                <div className='flex'>
                    <div className='product-briefing-full-detail_nav'>
                        Size
                    </div>
                    <div className='flex-wrap items-center'>
                        {
                            props.list_size.map((size: { name: string; }) => (
                                <button className='product-briefing-full-detail-color_button'>{size.name}</button>
                            ))
                        }
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='product-briefing-full-detail_nav'>
                        Số lượng
                    </div>
                    <div className='flex-wrap items-center'>
                        <button className="product-briefing-full-detail-quantity-button-left" onClick={() => update_quantity(-1)}>
                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon">
                                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5">
                                </polygon>
                            </svg>
                        </button>
                        <input className="product-briefing-full-detail-quantity-input" type="text" role="spinbutton" value={quantity} onChange={(event)=> update_quantity_input(parseInt(event.target.value))}></input>
                        <button className="product-briefing-full-detail-quantity-button-right"onClick={() => update_quantity(1)}>
                            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign">
                                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                </polygon>
                            </svg>
                        </button>
                    </div>
                    <div className='product-briefing-full-detail-quantity-text'>
                    {props.products_available} sản phẩm có sẵn
                    </div>
                </div>
                <div className='flex'>
                    <button type="button" className="btn--l button-add-to-cart">
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon icon-add-to-cart">
                            <g>
                                <g>
                                    <polyline fill="none" points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                    </polyline>
                                    <circle cx="6" cy="13.5" r="1" stroke="none"></circle>
                                    <circle cx="11.5" cy="13.5" r="1" stroke="none"></circle>
                                </g>
                                <line  stroke-linecap="round" stroke-miterlimit="10" x1="7.5" x2="10.5" y1="7" y2="7"></line>
                                <line  stroke-linecap="round" stroke-miterlimit="10" x1="9" x2="9" y1="8.5" y2="5.5"></line>
                            </g>
                        </svg>
                        <span>Thêm Vào Giỏ Hàng</span>
                    </button>
                    <button  type="button" className="btn--l btn-solid-primary">
                        Mua Ngay
                    </button>
                </div>
            </div>
        </div>
    )
}