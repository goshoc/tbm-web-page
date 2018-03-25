// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componentes
import ContentLanding from './landing/content-landing.js';
import Productos from './productos/index.js';

// import Page404 from './components/page404';

//pasar aca el footer  y navbar, y que esto englobe todo, para que si hay que meter logica se puede hacer desde aca

const AppRoutes = () =>

		<Switch>
			<Route exact path="/" component={ContentLanding} />
			<Route exact path="/productos" component={Productos} />
			{/* <Route component={Page404} /> */}
		</Switch>

export default AppRoutes;
