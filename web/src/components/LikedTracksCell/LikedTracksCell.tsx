import { createColumnHelper } from '@tanstack/react-table'
import { Clock } from 'lucide-react'
import type { LikedTracksQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer'
import PageHeader from 'src/components/PageHeader'
import PageHeaderContent from 'src/components/PageHeaderContent'
import PageMediaType from 'src/components/PageMediaType'

import DateTime from '../DateTime'
import Duration from '../Duration'
import LikeButton from '../LikeButton/LikeButton'
import LikedTracksCoverPhoto from '../LikedTracksCoverPhoto/LikedTracksCoverPhoto'
import PageContent from '../PageContent'
import PageHeaderDetails from '../PageHeaderDetails/PageHeaderDetails'
import PageTitle from '../PageTitle'
import PlayButton from '../PlayButton/PlayButton'
import Table from '../Table'
import TrackNumberColumn from '../TrackNumberColumn/TrackNumberColumn'

export const QUERY = gql`
  query LikedTracksQuery {
    me {
      profile {
        id
        displayName
      }
      tracks {
        edges {
          addedAt
          node {
            id
            durationMs
            name
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ me }: CellSuccessProps<LikedTracksQuery>) => {
  const spotifyURI = `spotify:user:${me.profile?.id}:collection`

  return (
    <PageContainer bgColor="#1F3363">
      <PageHeader>
        <LikedTracksCoverPhoto
          className="shadow-2xl"
          size="250px"
          iconSize="100px"
        />
        <PageHeaderContent>
          <PageMediaType mediaType="playlist" />
          <PageTitle>Liked Songs</PageTitle>
          <PageHeaderDetails>
            <span className="font-bold">{me.profile?.displayName}</span>
            <span>1 song</span>
          </PageHeaderDetails>
        </PageHeaderContent>
      </PageHeader>
      <PageContent>
        <div>
          <PlayButton playing={false} size="3.5rem" variant="primary" />
        </div>
        <Table
          data={me.tracks?.edges ?? []}
          columns={columns}
          meta={{ spotifyURI } satisfies LikedTracksTableMeta}
        />
      </PageContent>
    </PageContainer>
  )
}

type SavedTrackEdge = NonNullable<
  NonNullable<LikedTracksQuery['me']>['tracks']
>['edges'][0]

interface LikedTracksTableMeta {
  spotifyURI: string
}

const columnHelper = createColumnHelper<SavedTrackEdge>()

const columns = [
  columnHelper.accessor('node', {
    id: 'number',
    header: '#',
    cell: (info) => {
      const { spotifyURI } = info.table.options
        .meta as unknown as LikedTracksTableMeta

      return <TrackNumberColumn trackNumber={info.row.index + 1} />
      // return (
      //   <TrackNumberCell
      //     position={info.row.index}
      //     track={info.getValue()}
      //     context={{
      //       __typename: 'Playlist',
      //       uri: spotifyURI,
      //     }}
      //   />
      // )
    },
    meta: {
      headerAlign: 'right',
      shrink: true,
    },
  }),
  columnHelper.accessor('node', {
    id: 'title',
    header: 'Title',
    cell: (info) => {
      const { spotifyURI } = info.table.options
        .meta as unknown as LikedTracksTableMeta

      return null
      // return (
      //   <TrackTitleCell context={{ uri: spotifyURI }} track={info.getValue()} />
      // )
    },
  }),
  columnHelper.accessor('addedAt', {
    header: 'Date added',
    cell: (info) => (
      <DateTime date={info.getValue()} format={DateTime.FORMAT.timeAgo} />
    ),
  }),
  columnHelper.accessor('node', {
    id: 'likeButton',
    header: '',
    cell: () => {
      return (
        <div className="px-2">
          <LikeButton liked size="1rem" className="relative top-[2px]" />
        </div>
      )
    },
    meta: {
      shrink: true,
    },
  }),
  columnHelper.accessor('node.durationMs', {
    header: () => <Clock size="1rem" />,
    cell: (info) => <Duration durationMs={info.getValue()} />,
    meta: {
      headerAlign: 'right',
      shrink: true,
    },
  }),
]
