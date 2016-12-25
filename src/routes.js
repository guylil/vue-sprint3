import Home             from './home.vue';
import Emails           from './components/emails/email-app.vue';
import Events           from './components/events/evento-app.vue';
import Event           from './components/events/evento-details.vue';
import Locations        from './locations.vue';

// import Cars             from './pages/cars.vue';
// import CarCenter        from './cars/car-center.vue';
// import CarDetails       from './cars/car-details.vue';
// import CarEdit          from './cars/car-edit.vue';

export default [
    {path: '/', component: Home},
    {path: '/emails', component: Emails},
    {path: '/events', component: Events},
    {path: '/event/:id', component: Event},
    {path: '/locations', component: Locations},
    
    // {path: '/car', component: Cars, children: [
    //     {path: '', component: CarCenter},
    //     {path: 'edit', component: CarEdit},
    //     {path: ':id/edit', component: CarEdit},
    //     {path: ':id', component: CarDetails},
    // ]},
    //{path: '*', redirect: '/'}

]
