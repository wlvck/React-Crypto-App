import { Homepage, News, Cryptocurrencies, CryptoDetails} from '../pages';

const router = [
    {
        path: '/',
        component: <Homepage/>
    },
    {
        path: 'news',
        component: <News/>
    },
    {
        path: 'cryptocurrencies',
        component: <Cryptocurrencies/>
    },
    {
        path: 'crypto/:coinId',
        component: <CryptoDetails/>
    }
]
export default router