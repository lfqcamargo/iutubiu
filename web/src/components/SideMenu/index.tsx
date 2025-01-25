import { Line } from '../Line'
import { Container } from './styles'
import { NavLink } from '../NavLink'

export function SideMenu() {

  return (
    <Container>
      <nav>
        <ul>
          <li><NavLink to={'/'}><img src="/home_selected_icon.png" alt="Home - Selected" />Home</NavLink></li>
          <li><NavLink to={'/trendings'}><img src="/trending_icon.png" alt="Trending" />Trending</NavLink></li>
          <li><NavLink to={'/subscriptions'}><img src="/subscriptions_icon.png" alt="Subscriptions" />Subscription</NavLink></li>
        </ul>
      </nav>
      <Line />

      <nav>
        <ul>
          <li><NavLink to={'/librarys'}><img src="/library_icon.png" alt="Library" />Library</NavLink></li>
          <li><NavLink to={'/historys'}><img src="/history_icon.png" alt="History" />History</NavLink></li>
          <li><NavLink to={'/your-videos'}><img src="/your_videos_icon.png" alt="History" />Your videos</NavLink></li>
          <li><NavLink to={'/watch-later'}><img src="/watch_later_icon.png" alt="Watch Later" />Watch later</NavLink></li>
          <li><NavLink to={'/liked-videos'}><img src="/liked_videos_icon.png" alt="Liked Videos" />Liked videos</NavLink></li>
        </ul>
      </nav>
      <Line />


      <span>SUBSCRIPTION</span>
      <nav>
        <ul>
          <li><NavLink to={'/public-profile'}> <img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</NavLink></li>
          <li><NavLink to={'/public-profile'}><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</NavLink></li>
          <li><NavLink to={'/public-profile'}><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</NavLink></li>
          <li><NavLink to={'/public-profile'}><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</NavLink></li>
          <li><NavLink to={'/public-profile'}><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</NavLink></li>
        </ul>
      </nav>

      <Line />

      <span>MORE FROME YOUTUBE</span>
      <nav>
        <ul>
          <li><NavLink to={'home'}> <img src="/youtube_icon.png" alt="Youtube Premium" />YouTube Premium</NavLink></li>
          <li><NavLink to={'home'}><img src="/gaming_icon.png" alt="Gaming" />Gaming</NavLink></li>
          <li><NavLink to={'home'}><img src="/live_icon.png" alt="Live" />Live</NavLink></li>
        </ul>
      </nav>

      <Line />
      <nav>
        <ul>
          <li><NavLink to={'home'}> <img src="/settings_icon.png" alt="Settings" />Settings</NavLink></li>
          <li><NavLink to={'home'}><img src="/report_icon.png" alt="Report history" />Report history</NavLink></li>
          <li><NavLink to={'home'}><img src="/help_icon.png" alt="Help" />Help</NavLink></li>
          <li><NavLink to={'home'}><img src="/feedback_icon.png" alt="Help" />Send feedback</NavLink></li>
        </ul>
      </nav>

      <Line />
    </Container>
  )
}
