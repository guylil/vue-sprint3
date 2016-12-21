import Home             from './home.vue';
import Emails           from './emails.vue';
import Events           from './events.vue';
import Locations        from './locations.vue';

// import Cars             from './pages/cars.vue';
// import CarCenter        from './cars/car-center.vue';
// import CarDetails       from './cars/car-details.vue';
// import CarEdit          from './cars/car-edit.vue';

export default [
    {path: '/', component: Home},
    {path: '/emails', component: Emails},
    {path: '/events', component: Events},
    {path: '/locations', component: Locations},
    
    // {path: '/car', component: Cars, children: [
    //     {path: '', component: CarCenter},
    //     {path: 'edit', component: CarEdit},
    //     {path: ':id/edit', component: CarEdit},
    //     {path: ':id', component: CarDetails},
    // ]},
    {path: '*', redirect: '/'}

]
