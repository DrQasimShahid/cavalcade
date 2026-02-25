export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  price?: number;
  publishDate: string;
  category: string;
}

export interface Research {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishedIn: string;
  publishDate: string;
  pdfUrl?: string;
}
