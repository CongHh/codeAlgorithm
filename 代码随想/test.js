var url = 'https://min.lbapp.cn:11443/group1/M01/00/0E/CgoKMmE4WnWAL_vVAAABtyTgDNY303.png'
var url1 = 'http://test.hccb.cc:7443/inmanage_lb/images/inmanage_lb/images/pubsvrin/1659421343305.jpg'
// var list = url.substring(url.indexOf('group1'))
var list = url.split('/').slice(3).join('/')
console.log(list); 