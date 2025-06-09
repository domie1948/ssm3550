import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xueshengxuanke from '@/views/modules/xueshengxuanke/list'
    import xueshengliuyan from '@/views/modules/xueshengliuyan/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import xueshengpingjia from '@/views/modules/xueshengpingjia/list'
    import jiaoshishouke from '@/views/modules/jiaoshishouke/list'
    import tingkejieguotongzhi from '@/views/modules/tingkejieguotongzhi/list'
    import dudao from '@/views/modules/dudao/list'
    import shenqingdudaotingke from '@/views/modules/shenqingdudaotingke/list'
    import tingketongzhiyoujian from '@/views/modules/tingketongzhiyoujian/list'
    import config from '@/views/modules/config/list'
    import dudaoliuyan from '@/views/modules/dudaoliuyan/list'
    import dudaopingjia from '@/views/modules/dudaopingjia/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xueshengxuanke',
        name: '学生选课',
        component: xueshengxuanke
      }
      ,{
	path: '/xueshengliuyan',
        name: '学生留言',
        component: xueshengliuyan
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
      ,{
	path: '/xueshengpingjia',
        name: '学生评价',
        component: xueshengpingjia
      }
      ,{
	path: '/jiaoshishouke',
        name: '教师授课',
        component: jiaoshishouke
      }
      ,{
	path: '/tingkejieguotongzhi',
        name: '听课结果通知',
        component: tingkejieguotongzhi
      }
      ,{
	path: '/dudao',
        name: '督导',
        component: dudao
      }
      ,{
	path: '/shenqingdudaotingke',
        name: '申请督导听课',
        component: shenqingdudaotingke
      }
      ,{
	path: '/tingketongzhiyoujian',
        name: '听课通知邮件',
        component: tingketongzhiyoujian
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/dudaoliuyan',
        name: '督导留言',
        component: dudaoliuyan
      }
      ,{
	path: '/dudaopingjia',
        name: '督导评价',
        component: dudaopingjia
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
