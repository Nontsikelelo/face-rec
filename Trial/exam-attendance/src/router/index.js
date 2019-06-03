import VueRouter from 'vue-router'
import attendance from '../components/Attendance'
import attendance_report from '../components/AttendanceReport'
import capture_image from '../components/CaptureImage'
import exam_schedule from '../components/ExamSchedule'
import login from '../components/Login'
import register_student from '../components/RegisterStudent'
import Vue from 'vue'

// Configure routes for all Applets

Vue.use(VueRouter)
// Instantiate `router`
const router =
    new VueRouter({
        routes:[
            {
                path: '/',
                name: 'home',
                component: attendance_report
            },
            {
                path:'/attendance-report',
                name:'attendance-report',
                component:attendance_report
            },
            {
                path:'/attendance',
                name:'attendance',
                component:attendance
            },
            {
                path:'/capture-image',
                name:'capture-image',
                component:capture_image
            },
            {
                path:'/exam-schedule',
                name:'exam-schedule',
                component:exam_schedule
            },
            {
                path:'/login',
                name:'login',
                component:login
            },
            {
                path:'/register-student',
                name:'register-student',
                component:register_student
            }
            ]
    })

export default router