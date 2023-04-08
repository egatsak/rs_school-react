interface MovieCommon {
  name: string;
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
}

export interface Movie extends MovieCommon {
  _id: string;
}

export interface MovieMapped extends MovieCommon {
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
