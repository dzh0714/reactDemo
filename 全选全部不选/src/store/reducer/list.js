import { ADD_DATA, CLICK_ADD_RED, CHECKED } from './storeType'
const initState = {
    content: [],
    check: false,
    pirce: 0
}

let pirceAll = (content) => {
    return content.common.reduce((prve, item) => {
        return prve + item.goods.reduce((prve, val) => {
            return prve + (val.goodsState ? val.price * val.num : 0)
        }, 0)
    }, 0) 
}

let list = (state = initState, action) => {
    let newstate = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_DATA:
            newstate.content = action.content
            newstate.pirce = pirceAll(newstate.content)
            return newstate
        case CLICK_ADD_RED:
            {
                let { shopindex, goodindex, num } = action
                newstate.content.common[shopindex].goods[goodindex].num = num
                newstate.pirce = pirceAll(newstate.content)
                return newstate
            }
        case CHECKED:
            {
                let { shopindex, goodindex, checked } = action
                console.log(action)
                let { content } = newstate
                if (shopindex === undefined && goodindex === undefined) {
                    newstate.check = checked
                    content.common.forEach((item) => {
                        item.shopState = checked;
                        item.goods.forEach((val) => {
                            val.goodsState = checked
                        })
                    })
                } else if (goodindex === undefined) {
                    console.log(content.common[shopindex])
                    content.common[shopindex].shopState = checked
                    newstate.check = content.common.every(item => item.shopState)
                    content.common[shopindex].goods.forEach(item => {
                        console.log(item)
                        item.goodsState = checked
                    })
                } else {
                    content.common[shopindex].goods[goodindex].goodsState = checked
                    content.common[shopindex].shopState = content.common[shopindex].goods.every(item => item.goodsState)
                    newstate.check = content.common.every(item => item.shopState)
                }
                newstate.pirce = pirceAll(newstate.content)
                return newstate
            }

        default:
            return state
    }
}
export default list