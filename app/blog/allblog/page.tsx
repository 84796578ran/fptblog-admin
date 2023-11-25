"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Table, Space } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import AdminModalContent from "@/components/AdminModal";
import { getAllBlogs } from "@/apis/blog"; 
import { formatDateDetail } from "@/utils/dateFormat";
import { capitalizeFirstLetter } from "@/utils/hooks";

interface BlogInfo {
  key: string;
  blog_title: string;
  user_id: string;
  category: string;
  status: string;
  created_at: string;
}

function AllBlogsPage() {
  const isCollapsed = useSelector((state: RootState) => state.app.isCollapsed);
  const [blogData, setBlogData] = useState<BlogInfo[]>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogInfo | null>();

  const openDeleteModal = (record: BlogInfo) => {
    setSelectedBlog(record);
    setIsOpenDeleteModal(true);
  };

  const handleGetAllBlogs = async () => {
    try {
      const access_token = getCookie("accessToken");
      if (access_token) {
        const response = await getAllBlogs(access_token); 
        const data = response.data.data;
        const formattedData = data.map((item: any) => ({
          key: item.blog_id,
          blogTitle: item.blog_title,
          user_id: item.user_id,
          category: item.category,
          status: capitalizeFirstLetter(item.status),
          created_at: formatDateDetail(item.created_at),
        }));
        setBlogData(formattedData);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };
  const filteredData: BlogInfo[] | undefined = blogData?.filter((item) =>
    item.blog_title.toLowerCase().includes(searchQuery)
  );

  const onChange: TableProps<BlogInfo>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns: ColumnsType<BlogInfo> = [
    {
      title: "Blog Title",
      dataIndex: "blogTitle",
      key: "blogTitle",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            onClick={() => openDeleteModal(record)}
            className="flex px-[12px] gap-[4px] items-center cursor-pointer hover:opacity-80 rounded-lg py-[8px] bg-red-600"
          >
            <div className="text-white text-xs">Delete</div>
          </div>
        </Space>
      ),
    },
  ];

  return (
    <main
      className={`${
        isCollapsed ? "lg:w-[calc(100%-90px)]" : "lg:w-[calc(100%-200px)]"
      } absolute w-full duration-300 flex flex-col gap-[20px] right-0 top-[56px] lg:top-[64px] bottom-0 h-fit p-[20px] lg:p-[40px]`}
    >
      <div className="self-start flex flex-row sm:justify-start justify-center items-center w-full gap-2 mb-[12px]">
        <label>Search:</label>
        <input
          placeholder="Blog Title"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[300px] border-[1px] border-black rounded-md px-2 py-2 outline-none"
        ></input>
      </div>
      
      <Table
        onChange={onChange}
        bordered={true}
        columns={columns}
        dataSource={searchQuery ? filteredData : blogData}
      ></Table>
    </main>
  );
}

export default AllBlogsPage;
