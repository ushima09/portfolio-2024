import { Portrait } from '@mui/icons-material';
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

const HistoryAndExperienceItems = [
  {
    span: '2015/04',
    title: '琉球大学 入学',
    subtitle: '法文学部 総合社会システム学科 経済学専攻',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
    ],
  },
  {
    span: '2015/08 ― 2018/03',
    title: 'アルバイト（塾講師）',
    subtitle: '個別指導塾 小・中・高・社会人',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
    ],
  },
  {
    span: '2018/04 - 2019/04',
    title: 'ワーキングホリデー（オーストラリア）',
    subtitle: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
    ],
  },
  {
    span: '2019/05 - 2019/12',
    title: 'Impact English College - Melbourne',
    subtitle: '英語コース → IELTSコース → Cambridge検定コース',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
    ],
  },
  {
    span: '2021/03',
    title: '琉球大学 卒業',
    subtitle: '',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
    ],
  },
  {
    span: '22021/04 - 2023/03',
    title: 'トランスコスモス株式会社',
    subtitle: 'コーダー',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
    ],
  },
  {
    span: '2023/04 - 2024/05',
    title: '株式会社コレボ',
    subtitle: 'フロントエンドエンジニア',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias, voluptatum mollitia repellendus nam voluptas recusandae est neque temporibus quod, deleniti, ipsum eaque. Laborum labore, adipisci rerum perferendis maxime vitae.',
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
      >
        History / Experience
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
            <TimelineOppositeContent>{item.span}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <Portrait />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>{item.title}</Typography>
              <Typography>{item.subtitle}</Typography>
              <List>
                {item.description.map((detail, index) => (
                  <ListItem
                    sx={{ pl: 0 }}
                    key={`${item.title}_${index}`}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Portrait />
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
          display: {
            xs: 'block',
            sm: 'none',
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Portrait />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>2015/04</Typography>
            <Typography>琉球大学 入学</Typography>
            <Typography>法文学部 総合社会システム学科 経済学専攻</Typography>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Portrait />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>2018/04 - 2019/04</Typography>
            <Typography>ワーキングホリデー（オーストラリア）</Typography>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Portrait />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>2019/05 - 2019/12</Typography>
            <Typography>Impact English College - Melbourne</Typography>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Portrait />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>2021/03</Typography>
            <Typography>琉球大学 卒業</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Portrait />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>2021/04 - 2023/03</Typography>
            <Typography>トランスコスモス株式会社</Typography>
            <Typography>コーダー</Typography>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Portrait />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>2023/04 - 2024/05</Typography>
            <Typography>株式会社コレボ</Typography>
            <Typography>フロントエンドエンジニア</Typography>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Portrait />
                </ListItemIcon>
                <ListItemText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima, ad maxime
                  ipsum pariatur a animi cupiditate aperiam harum molestiae voluptatum accusamus
                  delectus beatae dolorum dignissimos suscipit quia expedita aliquid.
                </ListItemText>
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default HistoryAndExperience;
