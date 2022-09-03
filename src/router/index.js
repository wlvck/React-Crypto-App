import {Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails} from '../pages';

const router = [
    {
        path: 'home',
        component: <Homepage/>
    },
    {
        path: 'news',
        component: <News/>
    },
    {
        path: 'exchanges',
        component: <Exchanges/>
    },
    {
        path: 'cryptocurrencies',
        component: <Cryptocurrencies/>
    },
    {
        path: 'cryptocurrencies/:cryptoId',
        component: <CryptoDetails/>
    }
]
export default router