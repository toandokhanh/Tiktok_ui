import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';
import Test from '~/Page/Test';

// Dùng cho những router được công khai
const publicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, Layout: null },
    { path: '/Search', component: Search, Layout: null },
    { path: '/test', component: Test, Layout: null },
];

//Dùng cho những router riêng tư
const privateRouter = [];

export { publicRouter, privateRouter };
