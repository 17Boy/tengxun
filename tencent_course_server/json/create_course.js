let ary = [{
    "id": 1,
    "name": "腾讯课堂设计大师班",
    "teacher":"齐论高级讲师-悟空",
    "pic": "https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLA4mFVCWCNYO9bgvXdgpvA7ZqKcmibJZIJ4rUIW1jIIqyePOibwARiaGCfI6en1NLibc1g/220?tp=webp",
    "zhiboshijian": "13:30",
    "people":715,
    "total":"15万人",
    "dec":[{"dec1":"https://10.url.cn/qqke_course_info/ajNVdqHZLLAupeEZrqVmtDXvxbZTkxgaGDG5kNjNia2uoqFVE8Y3Q4CYPdF78ZZT13bBe7iar1Udg/?tp=webp"},{"dec2":"https://10.url.cn/qqke_course_info/ajNVdqHZLLCxyibgDRnBdZIVicibANw0hibmS89ABLq45lf1xFRbiaMEicB87T1AciaIz20Q8Tricb0XBTg/?tp=webp"},{"dec4":"https://10.url.cn/qqke_course_info/ajNVdqHZLLCAQue0XfLB18s4UVBG5Fk0KyZic0xuJp1mkVaNoqichtsYuwuENLMfenk2Gs3UQe8Fs/?tp=webp"},{"dec5":"https://10.url.cn/qqke_course_info/ajNVdqHZLLCVKxYuuZFkh8oz3ibBiaViazqJHPvTDLR9qnrpiaicMTXOTWpvcnUJrfJZIiaQGErDZXMiaU/?tp=webp"}],
    "time": "1小时",
    "price": "免费",
    "type": "vue"
},
    {
        "id": 2,
        "name": "【智源设计】一节课搞定淘宝美工",
        "pic": "https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCEI9hElN4IyWE69OnqGQZHHsV3WBn0nz1sVUwIT2McZbESgCZo5QZSZ9YjEqolzxI/220?tp=webp",
        "teacher":"智源大美妞QQ：123456789",
        "zhiboshijian": "14:00",
        "date": "2018-01-01",
        "address": "珠峰培训302",
        "time": "1小时",
        "dec": "Vue.js是一个构建数据驱动的web界面的渐进式框架。Vue.js的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。",
        "price": 3000,
        "type": "vue"
    },
    {
        "id": 3,
        "name": "设计总监的改稿日常",
        "pic": "https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCiaibomDIERy8hBhEOYVE1V6F2Pia9lwYG7rXDWkFkGibo2gpSeL4LI4QBhnj9YBoV80Y/220?tp=webp",
        "teacher":"涵品教育讲师-棉木",
        "zhiboshijian": "14:30",
        "date": "2018-01-01",
        "address": "珠峰培训302",
        "time": "1小时",
        "dec": "Vue.js是一个构建数据驱动的web界面的渐进式框架。Vue.js的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。",
        "price": 3000,
        "type": "vue"
    },
    {
        "id": 4,
        "name": "PS淘宝美工 PhotoShop网店装修 平面设计 电商美工",
        "pic": "https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCl2fKerDDrEPViaBfrHyIUPanA1KDXld7Q6HMJZms2JrpzyW0FaBfnmvr6CnJdIoTs/220?tp=webp",
        "teacher":"讲师-赵俊",
        "zhiboshijian": "15:30",
        "date": "2018-01-01",
        "address": "珠峰培训302",
        "time": "1小时",
        "dec": "Vue.js是一个构建数据驱动的web界面的渐进式框架。Vue.js的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。",
        "price": 3000,
        "type": "vue"
    }];

let vueN = 0,
    reactN = 0,
    weixinN = 0;

let result = [];
for (let i = 1; i < 1000; i++) {
    let n = Math.round(Math.random() * 2),
        item = JSON.parse(JSON.stringify(ary[n]));
    item = {id: i, ...item};
    result.push(item);
}
console.log(result);
require('../utils/promiseFS').writeFile('./course.json', result);

