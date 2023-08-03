import { createBrowserRouter } from 'react-router-dom'
import { SignupPage, Welcome } from '../pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignupPage />
    },{
        path: '/welcome',
        element: <Welcome/>
    }
])

export default router