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

    static getShownPages(
        totalRows: number,
        rowsPerPage: number,
        selectedPage: number,
        maxPages: number = 5
    ): number[] {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        const halfRange = Math.floor(maxPages / 2);
        let start = Math.max(1, selectedPage - halfRange);
        let end = Math.min(totalPages, selectedPage + halfRange);
        if ((end - start + 1) < maxPages) {
            if (start === 1) {
                end = Math.min(totalPages, (start + maxPages - 1));
            } else {
                start = Math.max(1, (end - maxPages + 1));
            }
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
}