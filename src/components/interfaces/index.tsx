export interface iList {
  avaliations: number,
  classification: number,
  country: string,
  discount: number,
  flag: string,
  id: number,
  image: string,
  name: string,
  price: number,
  priceMember: number,
  priceNonMember: number,
  rating: number,
  region: string,
  size: string,
  sommelierComment: string,
  type: string,
}

export interface iResponse {
  items?: iList[],
  itemsPerPage: number,
  page: number,
  totalItems: number,
  totalPages: number,
}
