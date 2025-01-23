import { Line } from '../Line'
import { Container } from './styles'

export function SideMenu() {
  return (
    <Container>
      <nav>
        <ul>
          <li><a href="#"><img src="/home_selected_icon.png" alt="Home - Selected" />Home</a></li>
          <li><a href=""><img src="/trending_icon.png" alt="Trending" />Trending</a></li>
          <li><a href=""><img src="/subscriptions_icon.png" alt="Subscriptions" />Subscription</a></li>
        </ul>
      </nav>
      <Line />

      <nav>
        <ul>
          <li><a href="#"><img src="/library_icon.png" alt="Library" />Library</a></li>
          <li><a href=""><img src="/history_icon.png" alt="History" />History</a></li>
          <li><a href=""><img src="/your_videos_icon.png" alt="History" />Your videos</a></li>
          <li><a href=""><img src="/watch_later_icon.png" alt="Watch Later" />Watch later</a></li>
          <li><a href=""><img src="/liked_videos_icon.png" alt="Liked Videos" />Liked videos</a></li>
        </ul>
      </nav>
      <Line />


      <span>SUBSCRIPTION</span>
      <nav>
        <ul>
          <li><a href="#"><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</a></li>
          <li><a href=""><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</a></li>
          <li><a href=""><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</a></li>
          <li><a href=""><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</a></li>
          <li><a href=""><img src="/profile_photo.png" alt="Profile Photo" />Lucas Camargo</a></li>
        </ul>
      </nav>

      <Line />

      <span>MORE FROME YOUTUBE</span>
      <nav>
        <ul>
          <li><a href="#"><img src="/youtube_icon.png" alt="Youtube Premium" />YouTube Premium</a></li>
          <li><a href=""><img src="/gaming_icon.png" alt="Gaming" />Gaming</a></li>
          <li><a href=""><img src="/live_icon.png" alt="Live" />Live</a></li>
        </ul>
      </nav>

      <Line />
      <nav>
        <ul>
          <li><a href="#"><img src="/settings_icon.png" alt="Settings" />Settings</a></li>
          <li><a href=""><img src="/report_icon.png" alt="Report history" />Report history</a></li>
          <li><a href=""><img src="/help_icon.png" alt="Help" />Help</a></li>
          <li><a href=""><img src="/feedback_icon.png" alt="Help" />Send feedback</a></li>
        </ul>
      </nav>

      <Line />
    </Container>
  )
}
