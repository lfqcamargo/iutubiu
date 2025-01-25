import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/app/Home'
import { AppLayout } from './pages/_layouts/app'
import { Trending } from './pages/app/Trending'
import { Subscription } from './pages/app/Subscription'
import { Library } from './pages/app/Library'
import { History } from './pages/app/History'
import { YourVideos } from './pages/app/WatchLater'
import { WatchLater } from './pages/app/YourVideos'
import { LikedVideos } from './pages/app/LikedVideos'
import { PublicProfile } from './pages/app/PublicProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'trendings',
        element: <Trending />,
      },
      {
        path: 'subscriptions',
        element: <Subscription />,
      },
      {
        path: 'librarys',
        element: <Library />,
      },
      {
        path: 'historys',
        element: <History />,
      },
      {
        path: 'your-videos',
        element: <YourVideos />,
      },
      {
        path: 'watch-later',
        element: <WatchLater />,
      },
      {
        path: 'liked-videos',
        element: <LikedVideos />,
      },
      {
        path: 'public-profile',
        element: <PublicProfile />,
      },
    ],
  },
])
