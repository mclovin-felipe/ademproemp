import { Article, ArticleResponse, ArticleResponseId } from "@/types/news";
import apiAuth from "@/lib/apiAuth";
export const getAllArticles = async (): Promise<ArticleResponse> => {
  const response = await apiAuth.get<ArticleResponse>("v1/news/findAll");
  return response.data;
};
export const getArticleById = async (id: string) => {
  const response = await apiAuth.get<ArticleResponseId>(
    `v1/news/findOne/${id}`
  );
  return response.data;
};
export const updateNew = async (data: Article, token: string) => {
  const response = await apiAuth.post("v1/news/update", data, {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};
