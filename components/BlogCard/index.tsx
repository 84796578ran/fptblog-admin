"use client";
import React, { useState } from "react";
import Image from "next/image";
import sampleImage from "@image/blogSample.png";
import { ClockCircleOutlined } from "@ant-design/icons";
import Button from "@/components/Button";
import { BlogInfo } from "@/utils/types";
import { formatDateDetail } from "@/utils/dateFormat";
import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
interface IProps {
    value: BlogInfo;
   
  }
  function BlogCard({ value }: IProps) {
    return (
      <div className="w-[calc(50%-10px)] rounded-[16px] overflow-hidden">
        {/* Thêm hình ảnh cho blog */}
        <div className="relative w-full h-[200px]">
          <Image
            loading="lazy"
            fill
            src={value.visual ?? sampleImage}
            alt="blog image"
            className="object-cover"
          ></Image>
        </div>
        {/* Thêm nội dung cho blog */}
        <div className="p-5 w-full border-[2px] border-t-0 rounded-[16px] rounded-t-none flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">{value.blog_title}</div>
            <div className="text-base font-normal h-[80px] overflow-hidden text-justify text-gray-500">
              {value.content + "...."} {/* Sử dụng nội dung của blog */}
            </div>
            <div className="flex gap-2">
              <ClockCircleOutlined />
              <div className="text-base font-normal text-gray-500">
                {formatDateDetail(value.created_at)}
              </div>
            </div>
          </div>
          {/* Thêm nút Read more */}
          <div className="w-full flex items-center justify-between">
            <Button
              textContent="Read more"
              icon="arrowRight"
              iconPosition="right"
              backgroundColor="bg-[#0066B2]"
              href={`/blog/detail/${value.blog_id}`}
              tailwind="hover:opacity-80"
            ></Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default BlogCard;