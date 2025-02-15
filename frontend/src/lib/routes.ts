const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [key]: `:${key}` }),
    {}
  ) as Record<keyof T, string>;
};

export const getAllTemplatesRoute = () => '/';
export const viewTemplateRouteParams = getRouteParams({ title: true });
export type ViewTemplateRouteParams = typeof viewTemplateRouteParams;
export const getTemplateRoute = ({ title }: ViewTemplateRouteParams) =>
  `/templates/${title}`;
export const getBlankFormRoute = () => '/forms/create';