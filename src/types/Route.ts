import { ROLE } from 'constants/Role';
import { RouteObject } from 'react-router-dom';

export type Route = Omit<RouteObject, 'children'> & {
	roles?: ROLE[];
	children?: Route[];
};
