export interface Movie {
  _id: string;
  name: string;
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
}

export interface MovieMapped extends Movie {
  id: string;
  imageLink: string;
}

export interface MovieApi {
  docs: Movie[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}
