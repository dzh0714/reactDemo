import Mock from 'mockjs'
Mock.mock('/api/list',{
    data:{
        allState:false,
        allCont:0,
        common:[{
            shopname:'每日好货',
            shopState:false,
            goods:[{
                name:'三只松鼠大礼包',
                price:188,
                goodsState:false,
                num:1
            }, {
                name: '香草味冰淇淋',
                price: 20,
                goodsState: false,
                num: 1
            }, {
                name: '农夫三拳',
                price: 3,
                goodsState: false,
                num: 1
            }]
        }, {
            shopname: '爱迪生旗舰店',
            shopState: false,
            goods: [{
                name: 'PS3游戏手柄',
                price: 1000,
                goodsState: false,
                num: 1
            }, {
                name: '吉他',
                price: 200,
                goodsState: false,
                num: 1
            }, {
                name: '灯泡',
                price: 5,
                goodsState: false,
                num: 1
            }]
        }]
    }
})