import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET_APPROVED_BLOGS: "/blogs/approved",
  GET_REJECTED_BLOGS: "/blogs/rejected",
};

export const getApprovedBlogs = (access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET_APPROVED_BLOGS}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const getRejectedBlogs = (access_token: string | null) => {
  return axiosClient.get(`${END_POINT.GET_REJECTED_BLOGS}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
