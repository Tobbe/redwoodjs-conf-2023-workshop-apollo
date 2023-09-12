import { createColumnHelper } from '@tanstack/react-table'
import cx from 'classnames'
import { Clock } from 'lucide-react'
import type {
  FindPlaylistQuery,
  FindPlaylistQueryVariables,
} from 'types/graphql'

import { Link } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CoverPhoto from 'src/components/CoverPhoto'
import DateTime from 'src/components/DateTime'
import DelimitedList from 'src/components/DelimitedList'
import Duration from 'src/components/Duration'
import ExplicitBadge from 'src/components/ExplicitBadge'
import LikeButton from 'src/components/LikeButton'
import PageContainer from 'src/components/PageContainer'
import PageContent from 'src/components/PageContent'
import PageCoverPhoto from 'src/components/PageCoverPhoto'
import PageHeader from 'src/components/PageHeader'
import PageHeaderDetails from 'src/components/PageHeaderDetails'
import PageMediaType from 'src/components/PageMediaType'
import PageTitle from 'src/components/PageTitle'
import PlayButton from 'src/components/PlayButton'
import Table from 'src/components/Table'
import TrackNumberColumn from 'src/components/TrackNumberColumn'

export const QUERY = gql`
  query FindPlaylistQuery($id: ID!) {
    playlist(id: $id) {
      id
      name
      owner {
        id
        displayName
      }
      images {
        url
        vibrantColor(alpha: 0.9)
      }
      tracks {
        pageInfo {
          total
        }
        edges {
          addedAt
          track: node {
            id
            durationMs
            explicit
            name
            album {
              id
              name
              images {
                url
              }
            }
            artists {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPlaylistQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  playlist,
}: CellSuccessProps<FindPlaylistQuery, FindPlaylistQueryVariables>) => {
  const totalTracks = playlist.tracks.pageInfo.total
  const coverPhoto = playlist.images[0]

  return (
    <PageContainer bgColor={coverPhoto.vibrantColor}>
      <PageHeader>
        <PageCoverPhoto image={playlist.images[0]} />
        <div className="flex max-h-[250px] flex-1 flex-col gap-2">
          <PageMediaType mediaType="playlist" />
          <PageTitle>{playlist.name}</PageTitle>
          <PageHeaderDetails>
            <span className="font-bold">{playlist.owner.displayName}</span>
            <span>
              {totalTracks} {totalTracks === 1 ? 'song' : 'songs'}
            </span>
          </PageHeaderDetails>
        </div>
      </PageHeader>
      <PageContent>
        <div>
          <PlayButton playing={false} size="3.5rem" variant="primary" />
        </div>
        <Table
          data={playlist.tracks.edges}
          columns={columns}
          meta={
            {
              tracksContains: new Map(),
            } satisfies PlaylistTableMeta
          }
        />
      </PageContent>
    </PageContainer>
  )
}

type Playlist = NonNullable<FindPlaylistQuery['playlist']>
type PlaylistTrackEdge = Playlist['tracks']['edges'][number]

const columnHelper = createColumnHelper<PlaylistTrackEdge>()

interface PlaylistTableMeta {
  tracksContains: Map<string, boolean>
}

const columns = [
  columnHelper.accessor('track', {
    id: 'trackNumber',
    header: '#',
    cell: (info) => {
      const { index } = info.row

      return <TrackNumberColumn trackNumber={index + 1} />
    },
    meta: {
      headerAlign: 'right',
      shrink: true,
    },
  }),
  columnHelper.accessor('track', {
    id: 'title',
    header: 'Title',
    cell: (info) => {
      const track = info.getValue()
      const coverPhoto = track.album.images.at(-1)

      return (
        <div className="flex items-end gap-2">
          <CoverPhoto image={coverPhoto} size="2.5rem" />
          <div className="flex flex-col">
            <Link className="text-base text-primary" to="/tracks/id">
              {track.name}
            </Link>
            <div className="flex items-center gap-2">
              {track.explicit && <ExplicitBadge />}
              <DelimitedList delimiter=", ">
                {track.artists.map((artist) => (
                  <Link
                    key={artist.id}
                    className="text-muted transition-colors duration-150 hover:text-primary"
                    to="/artists/id"
                  >
                    {artist.name}
                  </Link>
                ))}
              </DelimitedList>
            </div>
          </div>
        </div>
      )
    },
  }),
  columnHelper.accessor(({ track }) => track.album, {
    id: 'album',
    header: 'Album',
    cell: (info) => {
      const album = info.getValue()

      return <Link to={'/albums/id'}>{album.name}</Link>
    },
  }),
  columnHelper.accessor('addedAt', {
    header: 'Date added',
    cell: (info) => {
      const date = info.getValue()

      return date && <DateTime date={date} format={DateTime.FORMAT.timeAgo} />
    },
    meta: {
      wrap: false,
    },
  }),
  columnHelper.accessor('track', {
    id: 'liked',
    header: '',
    cell: (info) => {
      const track = info.getValue()
      const { tracksContains } = info.table.options
        .meta as unknown as PlaylistTableMeta

      const liked = tracksContains?.get(track.id) ?? false

      return (
        <div className="px-2">
          <LikeButton
            liked={liked}
            size="1rem"
            className={cx('relative top-[2px] group-hover:visible', {
              invisible: !liked,
            })}
          />
        </div>
      )
    },
    meta: {
      shrink: true,
    },
  }),
  columnHelper.accessor('track.durationMs', {
    header: () => <Clock size="1rem" />,
    cell: (info) => <Duration durationMs={info.getValue()} />,
    meta: {
      shrink: true,
      headerAlign: 'right',
    },
  }),
]
