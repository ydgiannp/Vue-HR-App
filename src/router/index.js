import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeIndex.vue'),
  },
  {
    // UserProfile will be rendered inside User's <router-view>
    // when /user/:id/profile is matched
    path: '/employee/add',
    name: 'EmployeeAdd',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeAdd.vue')
  },
  {
    path: '/employee/:id',
    name: 'EmployeeDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeDetail.vue')
  },
  {
    path: '/applicants',
    name: 'Applicants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ApplicantsIndex.vue')
  },
  {
    // UserProfile will be rendered inside User's <router-view>
    // when /user/:id/profile is matched
    path: '/applicant/add',
    name: 'ApplicantAdd',
    component: () => import(/* webpackChunkName: "about" */ '../views/ApplicantAdd.vue')
  },
  {
    path: '/applicant/:id',
    name: 'ApplicantDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ApplicantDetail.vue')
  },
  {
    path: '/leave-request',
    name: 'LeaveRequest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LeaveRequestIndex.vue')
  },
  {
    path: '/attendance',
    name: 'Attendance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AttendanceIndex.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
