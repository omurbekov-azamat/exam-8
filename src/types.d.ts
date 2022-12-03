export interface GotQuote {
  author: string;
  category: string;
  text: string;
  id: string;
}

export interface GotQuoteList{
  [id: string]: GotQuote;
}

export type GotQuoteApi = Omit<GotQuote, 'id'>