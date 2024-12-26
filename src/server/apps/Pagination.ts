export interface Pagination {
    size_page: string | number;
    current_page: number | string;
    next_page: number | string;
    next_page_url: string;
    total_pages?: number | string;
    total_items?: number | string;
};