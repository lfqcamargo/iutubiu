import { ContainerArticle, ContainerDescription, ContainerProfile, ContainerText, ContainerVideo } from './styles'

type Props = {
  id: string;
  thumb: string;
  time: number;
  profilePhoto: string;
  name: string;
  author: string;
  views: number;
  datePosted: string;
}

export function VideoCard({ id, thumb, time, profilePhoto, name, author, views, datePosted}: Props) {
  // console.log(id, time)
  return (
    <ContainerArticle>
      <ContainerVideo>
        <img src={thumb} alt={thumb} />
      </ContainerVideo>
      <ContainerDescription>
        <ContainerProfile>
          <img src={profilePhoto} alt={profilePhoto} />
        </ContainerProfile>

        <ContainerText>
          <p>{name}</p>
          <span>{author}</span>
          <div>
            <span>{views} views</span>
            <span>.</span>
            <span>{datePosted}</span>
          </div>

        </ContainerText>

      </ContainerDescription>

    </ContainerArticle>
  )
}
