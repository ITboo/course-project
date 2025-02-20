const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [key]: `:${key}` }),
    {}
  ) as Record<keyof T, string>;
};

export const getAllFormsRoute = () => '/';
export const getFormsRoute = () => '/forms';

export const getFormRoute = ({ id }: ViewFormRouteParams) =>
  `/forms/${id}`;
export const getCreateFormRoute = () => '/forms/create';
export const getNotFoundRoute = () => '*';

export const viewFormRouteParams = getRouteParams({ id: true });
export type ViewFormRouteParams = typeof viewFormRouteParams;