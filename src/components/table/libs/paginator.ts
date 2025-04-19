type TPaginate = {
    totalPages: number;
    pages: number[];
}

export default class Paginator {
    static paginate(totalRows: number, rowsPerPage: number): TPaginate {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        return {
            totalPages,
            pages
        }
    }
}