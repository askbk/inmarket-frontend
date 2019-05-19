
import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import NetworkPage from '../pages/network.jsx';
import LoginPage from '../pages/login.jsx';
import RegisterPage from '../pages/register.jsx';
import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import CompanyPage from '../pages/company.jsx';
import ConversationsPage from '../pages/conversations.jsx';
import ActivitiesPage from '../pages/activities.jsx';
import ProfilePage from '../pages/profilepage.jsx';
import EmployeePage from '../pages/employee.jsx';
import ChatPage from '../pages/chatPage.jsx';
import DatePicker from '../components/shared/DatePicker/DatePicker';
import ActivityForm from '../components/shared/ActivityForm/ActivityForm';
import ActivityCreate from '../pages/activityCreate'
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/employee',
    component: EmployeePage,
  },
  {
    path: '/REMOVETHISLATER',
    component: ActivityForm,
  },
  {
    path: '/company',
    component: CompanyPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/nettverk/',
    component: NetworkPage
  },
  {
      path: '/logginn/',
      component: LoginPage
  },
  {
      path: '/registrering/',
      component: RegisterPage
  },
  {
      path: '/profilepage/',
      component: ProfilePage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/conversations/',
    component: ConversationsPage,
  },
  {
    path: '/activities/',
    component: ActivitiesPage,
  },
  {
    path: '/activities/create',
    component: ActivityCreate,
  },
  {
    path: '/conversations/:chatId',
    component: ChatPage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
