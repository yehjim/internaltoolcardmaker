import Vue from 'vue'
import VueRouter from 'vue-router'
import Clock from '../views/Clock.vue'
import ClockSmallCard from '../components/clocksmallcard.vue'
import EtalkSmallCard from '../components/etalksmallcard.vue'
import ClockStandCard from '../components/clockstandcard.vue'
import EtalkStandCard from '../components/etalkstandcard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: { name: 'Clock' }
    },
    {
        path: '/clock',
        name: 'Clock',
        component: Clock,
        redirect: "/clock/smallcard",
        children: [{
            path: "smallcard",
            name: "ClockSmallCard",
            component: ClockSmallCard
        }, {
            path: "standcard",
            name: "ClockStandCard",
            component: ClockStandCard
        }]
    },
    {
        path: '/etalk',
        name: 'Etalk',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Etalk.vue'),
        redirect: "/etalk/smallcard",
        children: [{
            path: "smallcard",
            name: "EtalkSmallCard",
            component: EtalkSmallCard
        }, {
            path: "standcard",
            name: "EtalkStandCard",
            component: EtalkStandCard
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router