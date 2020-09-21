import HomePage from './screens/HomePage';
import NoData from './screens/NoData';
import List from './screens/List';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        path: '/articles/:id',
        ...List
      },
      {
        ...NoData
      }
    ]
  }
];
