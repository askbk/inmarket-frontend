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
import EmployeePage from '../pages/employee.jsx';
import ChatPage from '../pages/chatPage.jsx';
import SearchPage from '../pages/search.jsx';
import DatePicker from '../components/shared/DatePicker/DatePicker';
import ActivityForm from '../components/shared/ActivityForm/ActivityForm';
import Profile from '../pages/profile';
import SettingsPage from '../pages/settings.jsx';
var routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/employee',
        component: EmployeePage
    },
    {
        path: '/REMOVETHISLATER',
        component: ActivityForm
    },
    {
        path: '/company',
        component: CompanyPage
    },
    {
        path: '/about/',
        component: AboutPage
    },
    {
        path: '/form/',
        component: FormPage
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
        path: '/profile/:id',
        component: Profile
    },
    {
        path: '/profile/',
        component: Profile
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage
    },
    {
        path: '/conversations/',
        component: ConversationsPage
    },
    {
        path: '/activities/',
        component: ActivitiesPage
    },
    {
        path: '/conversations/:chatId',
        component: ChatPage
    },
    {
        path: '/sok/',
        component: SearchPage
    },
    {
        path: '/settings/',
        component: SettingsPage
    },
    {
        path: '(.*)',
        component: NotFoundPage
    }
];

export default routes;
