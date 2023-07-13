export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };

  location: {
    name: string;
  };
}
export interface RootState {
  get: {
    status: number;
    character: Character[];
    loading: boolean;
    filter: {
      payload: string;
    };
    filterLoc: {
      payload: string;
    };
    charDetails: any;
  };
}
export interface Item {
  name: string;
  image: string;
  origin: {
    name: string;
  };
  type: string;
  gender: string;
  species: string;
}
export interface Image {
  url: string;
  width: number;
  uid: string;
  height: number;
}
export interface Pagination {
  count?: number;
  from: number;
  to: number;
}

export interface Item2 {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
export interface Metadata {
  name: string;
  github: string;
  description: string;
  filename: string;
}

export interface MediaProps {
  data: {
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    id?: string;
  };
}

export interface PaginationProps {
  pagination: {
    count?: number;
    from: number;
    to: number;
  };
  setPagination: React.Dispatch<
    React.SetStateAction<{
      from: number;
      to: number;
    }>
  >;
}


export interface CatalogMagicProps {
  width?: number;
  heading?: { width: number; height: number };
  row?: number;
  column?: number;
  padding?: number;
  borderRadius?: number;
 
}