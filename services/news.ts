import { Article, ArticleResponse, ArticleResponseId } from "@/types/news";
import { auth } from "@/auth";
import api from "@/lib/api";
export const getAllArticles = async (): Promise<ArticleResponse> => {
  const response = await api.get<ArticleResponse>("v1/news/findAll");
  return response.data;
};
export const getArticleById = async (id: string) => {
  const response = await api.get<ArticleResponseId>(`v1/news/findOne/${id}`);
  return response.data;
};
export const updateNew = async (data: Article) => {
  const session = await auth();
  const response = await api.post("/v1/news/update", data, {
    headers: { Authorization: `Bearer ${session?.accessToken}` },
  });
  return response.data;
};
