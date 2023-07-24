import { PrivatePage } from 'components/PrivatePage';
import { RouteObject } from 'react-router-dom';
import { Route } from 'types/Route';

export default function routeBasedRole(routes: Route[]): RouteObject[] {
	return routes.reduce<RouteObject[]>(
		(prev, { roles, element, children, ...props }) => {
			const current: RouteObject = props;

			if (element) {
				if (roles != null) {
					current.element = <PrivatePage roles={roles}>{element}</PrivatePage>;
				} else current.element = element;
			}

			if (children) current.children = routeBasedRole(children);
			return [...prev, current];
		},
		[]
	);
}
