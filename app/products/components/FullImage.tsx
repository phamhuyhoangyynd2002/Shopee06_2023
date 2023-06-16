"use client"

import Image from 'next/image';
import React, { useState } from 'react';

export default function FullImage(props:any) {

    let [list_img, setList_img] = useState([props.full_list_img[0], props.full_list_img[1], props.full_list_img[2], props.full_list_img[3], props.full_list_img[4]]);
    let [img_small_start, setImg_small_start] = useState(0);
    let [product_briefing_img_list_small_left, setProduct_briefing_img_list_small_left] = useState(false);
    let [product_briefing_img_list_small_right, setProduct_briefing_img_list_small_right] = useState(true);

    function render_img_small(img: string) {
        if (img == props.img_big)
            return (
                <div className='product-briefing-img-small border_1px_ee4d2d' >
                    <Image src={img} alt="" width={82} height={82} onMouseOver={() => props.updateImg_big(img)} />
                </div>
            )
        else return (
            <div className='product-briefing-img-small' >
                <Image src={img} alt="" width={82} height={82} onMouseOver={() => props.updateImg_big(img)} />
            </div>
        )
    }

    function set_img_small_start(event: number) {
        if (event + img_small_start < props.full_list_img.length - 4 && event + img_small_start >= 0) {
            let new_list_img = [];
            for (let i = img_small_start + event; i <= img_small_start + event + 4; i++) {
                new_list_img.push(props.full_list_img[i]);
            }
            if (img_small_start + event == 0) {
                setProduct_briefing_img_list_small_left(false);
            }
            else {
                setProduct_briefing_img_list_small_left(true);
            }
            if (img_small_start + event == props.full_list_img.length - 5) {
                setProduct_briefing_img_list_small_right(false);
            }
            else {
                setProduct_briefing_img_list_small_right(true);
            }
            setImg_small_start(img_small_start + event);
            setList_img(new_list_img);
        }
    }

    function render_Product_briefing_img_list_small_left(){
        if(product_briefing_img_list_small_left)
        return (
            <div id='product-briefing-img-list-small-left'>
                        <button className='product-briefing-img-list-small-left' onClick={() => set_img_small_start(-1)}>&#10094;</button>
                    </div>
        )
        else return
    }
    function render_Product_briefing_img_list_small_right(){
        if(product_briefing_img_list_small_right)
        return (
            <div id='product-briefing-img-list-small-right'>
                        <button className='product-briefing-img-list-small-right' onClick={() => set_img_small_start(1)}>&#10095;</button>
                    </div>
        )
        else return
    }
    return (
        <div className='product-briefing-img'>
            <div className='flex-column'>
                <div className='product-briefing-img-big' id="img-big">
                    <Image src={props.img_big} alt="" width={450} height={450} id="product-briefing-img-big" />
                </div>
                <div className='product-briefing-img-list-small' id="product-briefing-img-list-small">
                    {
                        list_img.map((img) => (
                            (render_img_small(img))
                        ))
                    }
                    {
                        render_Product_briefing_img_list_small_left()
                    }
                    {
                        render_Product_briefing_img_list_small_right()
                    }
                    
                </div>
                <div className='product-briefing-share'>
                    <div className='border_1px_000000_09'>
                        <div>Chia sẻ :</div>
                        <button className='sprite-product-sharing sprite-product-sharing-fm'></button>
                        <button className='sprite-product-sharing sprite-product-sharing-fb'></button>
                        <button className='sprite-product-sharing sprite-product-sharing-pinterest'></button>
                        <button className='sprite-product-sharing sprite-product-sharing-twitter'></button>
                    </div>
                    <div>
                        <button className='flex'>
                            <svg width="24" height="20" className='margin-right-10px'>
                                <path d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z" stroke="#FF424F" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linejoin="round">
                                </path>
                            </svg>
                            <div>Đã thích (8,2k)</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}