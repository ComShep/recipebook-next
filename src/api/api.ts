const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getFetchData = async <T>(
  url: string,
  options?: {
    cache?: RequestCache;
    revalidate?: number;
    tags?: string[];
    headers?: HeadersInit;
  }
): Promise<T> => {
  const fetchOptions: RequestInit = {
    ...(options?.cache && { cache: options.cache }),
    ...(options?.revalidate && { next: { revalidate: options.revalidate } }),
    ...(options?.tags && { next: { tags: options.tags } }),
    ...(options?.headers && { headers: options.headers }),
  };

  const response = await fetch(`${baseUrl}${url}.json`, fetchOptions);

  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data as T;
};

// export const getDetail = async <T>(id: string, section: string, subSection?: SubSectionType | null): Promise<T> => {
// 	let url: string;

// 	if (subSection) {
// 		url = `${baseUrl}${section}/${subSection}/${id}.json`;
// 	} else {
// 		url = `${baseUrl}${section}/${id}.json`;
// 	}
// 	const response = await fetch(url);
// 	const data = await response.json();

// 	return data as T;
// }
