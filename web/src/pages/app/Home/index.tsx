import { VideoCard } from '../../../components/VideoCard'
import { ContainerVideoCard, ContainerVideos } from './styles'

const listVideos = [
  {
    id: '1',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 1',
    author: 'Autor 1',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '2',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 2',
    author: 'Autor 2',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '3',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 3',
    author: 'Autor 3',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '4',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 4',
    author: 'Autor 4',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '5',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 5',
    author: 'Autor 5',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '6',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 6',
    author: 'Autor 6',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '7',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 7',
    author: 'Autor 7',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '8',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 8',
    author: 'Autor 8',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '9',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 9',
    author: 'Autor 9',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '10',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 10',
    author: 'Autor 10',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '11',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 1',
    author: 'Autor 1',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '12',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 2',
    author: 'Autor 2',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '13',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 3',
    author: 'Autor 3',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '14',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 4',
    author: 'Autor 4',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '15',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 5',
    author: 'Autor 5',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '16',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 6',
    author: 'Autor 6',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '17',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 7',
    author: 'Autor 7',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '18',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 8',
    author: 'Autor 8',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '19',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 9',
    author: 'Autor 9',
    views: 1000,
    datePosted: '9 months',
  },
  {
    id: '110',
    thumb: '/thumbnail.png',
    time: 15000,
    profilePhoto: 'profile_photo.png',
    name: 'Título do Vídeo 10',
    author: 'Autor 10',
    views: 1000,
    datePosted: '9 months',
  },
]

export function Home() {
  return (
    <>
      <ContainerVideos>
        <ContainerVideoCard>
          {listVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              thumb={video.thumb}
              time={video.time}
              profilePhoto={video.profilePhoto}
              name={video.name}
              author={video.author}
              views={video.views}
              datePosted={video.datePosted}
            />
          ))}
        </ContainerVideoCard>
      </ContainerVideos>
    </>
  )
}
