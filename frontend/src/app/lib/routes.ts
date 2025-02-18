const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [key]: `:${key}` }),
    {}
  ) as Record<keyof T, string>;
};

export const getAllFormsRoute = () => '/';
export const getFormsRoute = () => '/forms';

export const getFormRoute = ({ title }: ViewFormRouteParams) =>
  `/forms/${title}`;
export const getBlankFormRoute = () => '/forms/create';

export const viewFormRouteParams = getRouteParams({ title: true });
export type ViewFormRouteParams = typeof viewFormRouteParams;