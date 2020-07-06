
var api = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    api = 'http://www.shmylm.cn/'
}else{
    // 生产环境
    api = 'http://www.shmylm.cn/'
}


// ===================发现页面
export const ceshi = api + 'test/list'  //测试接口
