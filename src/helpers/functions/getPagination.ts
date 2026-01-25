type GetPaginationsProps = {
  page: number;
  size: number;
  total: number;
};

export function getPagination({ page, size, total }: GetPaginationsProps) {
  const skip = (page - 1) * size;

  const totalPage = Math.ceil(total / size);

  return {
    skip,
    totalPage,
    take: size,
  };
}
