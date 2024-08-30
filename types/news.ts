export interface Article {
  id: number;
  title: string;
  content: string;
  publishDate: string; // Podría ser Date si lo manejas como un objeto Date en lugar de una cadena
  categoryId: number;
  media: string | null; // Asumiendo que 'media' sería una URL o un identificador si no es null
  tags: any;
  disabled: boolean;
  createdAt: string; // Podría ser Date si lo manejas como un objeto Date en lugar de una cadena
  updatedAt: string; // Podría ser Date si lo manejas como un objeto Date en lugar de una cadena
}

export interface ArticleResponse {
  error: boolean;
  message: string;
  data: Article[];
}
export interface ArticleResponseId {
  error: boolean;
  message: string;
  data: Article;
}
