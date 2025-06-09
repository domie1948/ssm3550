
var projectName = '在线教学质量评价系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '教师',
	url: './pages/jiaoshi/list.html'
}, 
{
	name: '学生评价',
	url: './pages/xueshengpingjia/list.html'
}, 
{
	name: '课程信息',
	url: './pages/kechengxinxi/list.html'
}, 
{
	name: '学生选课',
	url: './pages/xueshengxuanke/list.html'
}, 
{
	name: '学生留言',
	url: './pages/xueshengliuyan/list.html'
}, 

]

var adminurl =  "http://localhost:8080/ssmo8x1z/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"督导","menuJump":"列表","tableName":"dudao"}],"menu":"督导管理"},{"child":[{"buttons":["查看","删除","报表"],"menu":"学生评价","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"学生选课","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课管理"},{"child":[{"buttons":["删除","查看"],"menu":"教师授课","menuJump":"列表","tableName":"jiaoshishouke"}],"menu":"教师授课管理"},{"child":[{"buttons":["查看","删除","通知教师","督导听课通知"],"menu":"申请督导听课","menuJump":"列表","tableName":"shenqingdudaotingke"}],"menu":"申请督导听课管理"},{"child":[{"buttons":["查看","删除","报表"],"menu":"督导评价","menuJump":"列表","tableName":"dudaopingjia"}],"menu":"督导评价管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"听课结果通知","menuJump":"列表","tableName":"tingkejieguotongzhi"}],"menu":"听课结果通知管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"听课通知邮件","menuJump":"列表","tableName":"tingketongzhiyoujian"}],"menu":"听课通知邮件管理"},{"child":[{"buttons":["查看","删除"],"menu":"学生留言","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言管理"},{"child":[{"buttons":["查看","删除"],"menu":"督导留言","menuJump":"列表","tableName":"dudaoliuyan"}],"menu":"督导留言管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","学生评价"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"},{"child":[{"buttons":["查看","留言"],"menu":"学生评价列表","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价模块"},{"child":[{"buttons":["查看","选修该课"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看"],"menu":"学生选课列表","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课模块"},{"child":[{"buttons":["查看"],"menu":"学生留言列表","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","学生评价"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","修改","删除","留言"],"menu":"学生评价","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价管理"},{"child":[{"buttons":["查看","选修该课"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"学生选课","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"学生留言","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言管理"}],"frontMenu":[{"child":[{"buttons":["查看","学生评价"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"},{"child":[{"buttons":["查看","留言"],"menu":"学生评价列表","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价模块"},{"child":[{"buttons":["查看","选修该课"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看"],"menu":"学生选课列表","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课模块"},{"child":[{"buttons":["查看"],"menu":"学生留言列表","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"学生评价","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价管理"},{"child":[{"buttons":["查看","授课","申请听课"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"教师授课","menuJump":"列表","tableName":"jiaoshishouke"}],"menu":"教师授课管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"申请督导听课","menuJump":"列表","tableName":"shenqingdudaotingke"}],"menu":"申请督导听课管理"},{"child":[{"buttons":["查看"],"menu":"督导评价","menuJump":"列表","tableName":"dudaopingjia"}],"menu":"督导评价管理"},{"child":[{"buttons":["查看","删除"],"menu":"听课结果通知","menuJump":"列表","tableName":"tingkejieguotongzhi"}],"menu":"听课结果通知管理"}],"frontMenu":[{"child":[{"buttons":["查看","学生评价"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"},{"child":[{"buttons":["查看","留言"],"menu":"学生评价列表","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价模块"},{"child":[{"buttons":["查看","选修该课"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看"],"menu":"学生选课列表","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课模块"},{"child":[{"buttons":["查看"],"menu":"学生留言列表","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"},{"backMenu":[{"child":[{"buttons":["查看","督导评价"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","审核","删除"],"menu":"申请督导听课","menuJump":"列表","tableName":"shenqingdudaotingke"}],"menu":"申请督导听课管理"},{"child":[{"buttons":["查看","修改","删除","留言"],"menu":"督导评价","menuJump":"列表","tableName":"dudaopingjia"}],"menu":"督导评价管理"},{"child":[{"buttons":["查看","删除"],"menu":"听课结果通知","menuJump":"列表","tableName":"tingkejieguotongzhi"}],"menu":"听课结果通知管理"},{"child":[{"buttons":["查看","删除"],"menu":"听课通知邮件","menuJump":"列表","tableName":"tingketongzhiyoujian"}],"menu":"听课通知邮件管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"督导留言","menuJump":"列表","tableName":"dudaoliuyan"}],"menu":"督导留言管理"}],"frontMenu":[{"child":[{"buttons":["查看","学生评价"],"menu":"教师列表","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师模块"},{"child":[{"buttons":["查看","留言"],"menu":"学生评价列表","menuJump":"列表","tableName":"xueshengpingjia"}],"menu":"学生评价模块"},{"child":[{"buttons":["查看","选修该课"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看"],"menu":"学生选课列表","menuJump":"列表","tableName":"xueshengxuanke"}],"menu":"学生选课模块"},{"child":[{"buttons":["查看"],"menu":"学生留言列表","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"督导","tableName":"dudao"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
