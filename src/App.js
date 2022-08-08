import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/prowserRouter';
import { DefaultLayout } from '~/component/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRouter.map((router, index) => {
                        const Layout = router.Layout === null ? Fragment : DefaultLayout;
                        const Page = router.component;
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
