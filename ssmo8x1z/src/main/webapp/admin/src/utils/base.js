const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmo8x1z/",
            name: "ssmo8x1z",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmo8x1z/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线教学质量评价系统"
        } 
    }
}
export default base
