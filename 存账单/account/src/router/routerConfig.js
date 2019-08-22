import Bill from "../components/Bill";
import Checkout from "../components/Checkout"

export default {
    routes: [{
        path: "/bill",
        component: Bill
    }, {
        path: "/",
        redirect: "/bill"
    }, {
        path: "/checkout",
        component: Checkout
    }]
}