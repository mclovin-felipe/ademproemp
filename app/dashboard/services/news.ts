import { getAllArticles, getArticleById } from "@/services/news";
import { ArticleResponse, Article, ArticleResponseId } from "@/types/news";
export async function getAllNews() {
  try {
    const response = await getAllArticles();
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
}
export async function getNewsById(id: string): Promise<Article> {
  try {
    const response = await getArticleById(id);
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
}
