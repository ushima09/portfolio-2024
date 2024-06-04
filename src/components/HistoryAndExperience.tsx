import { Portrait, School, Work, Check } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineItemClasses,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { lightBlue, teal } from '@mui/material/colors';

const HistoryAndExperienceItems = [
  {
    span: '2015/04',
    title: '琉球大学 入学',
    type: 'study',
    subtitle: '法文学部 総合社会システム学科 経済学専攻',
    description: [
      '統計学の手法を活用して、興味のあるテーマと経済がどのような関係を持っているか分析していました。',
      '3年生の頃は地震と地価の関係を、4年生の頃はセクシュアルマイノリティと経済成長の関係を分析しました。',
    ],
  },
  {
    span: '2015/08 - 2018/03',
    title: 'アルバイト（塾講師）',
    type: 'work',
    subtitle: '個別指導塾 小・中・高・社会人',
    description: [
      '小・中・高の国語・英語を担当していました。少しでも課題やテスト勉強に楽しんでもらえるように、意欲につながる声掛けを心がけていました。',
    ],
  },
  {
    span: '2018/04 - 2019/04',
    title: 'ワーキングホリデー（オーストラリア）',
    type: 'work',
    subtitle: '',
    description: [
      '3ヶ月語学学校で英語を学びました。',
      '3ヶ月農業に従事しました。',
      '4ヶ月レストランの厨房で働きました。',
    ],
  },
  {
    span: '2019/05 - 2019/12',
    title: 'Impact English College - Melbourne',
    type: 'study',
    subtitle: '英語コース → IELTSコース → Cambridge検定コース',
    description: ['語学学校に約半年通い、英語の資格を取得しました。'],
  },
  {
    span: '2021/03',
    title: '琉球大学 卒業',
    type: 'study',
    subtitle: '',
    description: [],
  },
  {
    span: '22021/04 - 2023/03',
    title: 'トランスコスモス株式会社',
    type: 'work',
    subtitle: 'コーダー',
    description: [
      'サイトの運用・表示検証を行っていました。',
      '英語を用いた業務（会議やメールなど）を担当していました。',
    ],
  },
  {
    span: '2023/04 - 2024/05',
    title: '株式会社コレボ',
    type: 'work',
    subtitle: 'フロントエンドエンジニア',
    description: [
      'HTML/CSS/JSを使いページを作成していました。',
      'Vue3/Nuxt3とHeadless CMSを使ったWebサイトを作成していました。',
      'Next.js、Astroの経験も1回ずつあります。',
    ],
  },
];

const HistoryAndExperience = () => {
  return (
    <Container
      id="history_and_experience"
      disableGutters
      sx={{ pt: { xs: 10, sm: 12 }, pr: { xs: 2, sm: 4 }, pl: { xs: 2, sm: 4 } }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{ mb: 3 }}
      >
        経歴
      </Typography>
      <Timeline
        position="right"
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
          mt: 0,
          p: 0,
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {HistoryAndExperienceItems.map((item) => (
          <TimelineItem
            key={item.title}
            sx={{
              '::before': {
                content: 'none',
              },
            }}
          >
            <TimelineOppositeContent>
              <Typography
                fontSize={18}
                sx={{
                  color: item.type === 'study' ? teal[900] : lightBlue[900],
                }}
              >
                <time>{item.span}</time>
              </Typography>
            </TimelineOppositeContent>
            {item.type === 'study' ? (
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: teal[800],
                  }}
                >
                  <School />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            ) : (
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: lightBlue[600],
                  }}
                >
                  <Work />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            )}
            <TimelineContent>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="subtitle1">{item.subtitle}</Typography>
              <List>
                {item.description.map((detail, index) => (
                  <ListItem
                    sx={{ pl: 0 }}
                    key={`${item.title}_${index}`}
                  >
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      <Check
                        fontSize="small"
                        sx={{
                          color: item.type === 'study' ? teal[800] : lightBlue[600],
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>{detail}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Timeline
        position="right"
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
          p: 0,
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
      >
        {HistoryAndExperienceItems.map((item) => (
          <TimelineItem
            key={item.title}
            sx={{
              '::before': {
                content: 'none',
              },
            }}
          >
            {item.type === 'study' ? (
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: teal[800],
                  }}
                >
                  <School />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            ) : (
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: lightBlue[600],
                  }}
                >
                  <Work />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            )}
            <TimelineContent sx={{ pr: 0 }}>
              <Typography
                fontSize={18}
                sx={{
                  color: item.type === 'study' ? teal[800] : lightBlue[600],
                }}
              >
                <time>{item.span}</time>
              </Typography>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="subtitle1">{item.subtitle}</Typography>
              {item.description.length > 0 ? (
                <List>
                  {item.description?.map((detail, index) => (
                    <ListItem
                      sx={{ pl: 0, pr: 0 }}
                      key={`${item.title}_${index}`}
                    >
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <Check
                          fontSize="small"
                          sx={{
                            color: item.type === 'study' ? teal[800] : lightBlue[600],
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText>{detail}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              ) : undefined}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default HistoryAndExperience;
