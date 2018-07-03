let ary = [
    {
        "title":"C/C++ linux服务器开发（架构师 /音视频 /物联网)【动脑学院】",
        "price":"免费",
        "teacher":"Lee",
        "time":"12:00",
        "type":1,
        "scr":"https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCibb3R70YCbcFA9uk0VM6TMCxqvh85Xfg1ySsREWcYawHT1xQkGRwNTyIrJ2OKMlkU/510?tp=webp"
    },

    {
        "title":"PS教程 免费 PhotoShop  美工教程 平面设计 淘宝装修 PS淘宝美工",
        "price":"免费",
        "teacher":"聚恒-天空老师",
        "time":"13:00",
        "type":2,
        "scr":"https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBdGAll8FSyS5vtJBKGfiaM8ZZScOD02KDTy8a1feKmVTVMibNiaYaDKHFrQxo0rYNicxg/510?tp=webp"
    },

    {

        "title":"PMP项目管理视频暨PMBOK第5版项目管理知识指南（第五版）",
        "price":"免费",
        "teacher":"乔俊峰",
        "time":"14:00",
        "type":3,
        "scr":"http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBMXrX2USwIIXGRdSoIpzIfYcukQGNc0cthayticFcRGURWS8Z6mTGGVIYnGibicDSx0/510?tp=webp"
    },

    {

        "title":"2019高考数学秒杀技巧训练营",
        "price":"免费",
        "teacher":"凉学长",
        "time":"15:00",
        "type":4,
        "scr":"http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLD2RNBHQia9RiaABDssUdZbyrV5WDfwglibhL3mnUXorhMAPaezmH79HaicL5nrfG4bAbk/510?tp=webp"
    },
    {

        "title":"(J) English - 搞怪实用英语口语-录播",
        "price":"免费",
        "teacher":"Vickey助教-Jean",
        "time":"18:00",
        "type":5,
        "scr":"http://10.url.cn/qqcourse_logo_rn/ajNVdqHZLLAkNAUrrTNJO8FlE3CARK3ehFNibC6thrIrRAzDdKO6MnsJCDajfrTh3VNUbLq8t44k/510?tp=webp"
    }
];


let result = [];
for (let i = 1; i <=40; i++) {
    let n = Math.round(Math.random() * 4),
        item = JSON.parse(JSON.stringify(ary[n]));
    item = {id: i, ...item};
    result.push(item);
}

require('../utils/promiseFS').writeFile('./course.json', result);

