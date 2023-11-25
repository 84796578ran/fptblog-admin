import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET_ALL_BLOGS: "/blog/:blog_id",

};

export const getAllBlogs = (access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET_ALL_BLOGS}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};


