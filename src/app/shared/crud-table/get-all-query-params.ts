import { SearchQueryParams } from "./search-query-params";

export type GetAllQueryParams = SearchQueryParams & {
	sort?: string;
	limit?: number;
	page?: number;
}
