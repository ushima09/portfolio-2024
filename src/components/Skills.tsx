import { ArrowDownward } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';

const skillItems = [
  {
    summary: 'HTML',
    studySpan: 5,
    workSpan: 3,
    can: [
      'セマンティックなマークアップができます。',
      'レスポンシブに対応したマークアップができます。',
      'CSS、JSを用いて動きのあるページを実装できます。',
    ],
    learning: ['アクセシビリティに対応したマークアップを勉強中です。'],
  },
  {
    summary: 'CSS',
    studySpan: 5,
    workSpan: 3,
    can: ['レスポンシブに対応できます。', 'トランジションやアニメーションを実装できます。'],
    learning: ['filterなどの視覚効果を勉強中です。'],
  },
  {
    summary: 'JavaScript / TypeScript',
    studySpan: 3,
    workSpan: 2,
    can: [
      '基本的な構文（ES2015〜）を使えます。',
      'jQueryなどのライブラリを用いて動きを実装できます。',
      'fetchAPIなど、基礎的なWebAPIを調べながら実装できます。',
      '静的型付けプログラミングを調べながら実装できます。',
    ],
    learning: ['JSの細かな仕様を勉強中です。', 'TSプログラミングを勉強中です。'],
  },
  {
    summary: 'Node.js',
    studySpan: 3,
    workSpan: 1,
    can: [
      'Node.jsを使った環境構築を調べながら行えます。',
      'Expressなどのライブラリを用いたサーバ構築ができます。',
      'Markuplint、Stylelint、ESLint、Prettierなどのリンター・フォーマッターや、Gulpなどタスクランナーを調べながら利用できます。',
    ],
    learning: ['リンター・タスクランナーの使い方を勉強中です。'],
  },
  {
    summary: 'React / Next.js',
    studySpan: 2,
    workSpan: 0.5,
    can: [
      '関数コンポーネントで実装できます。',
      '簡単な環境構築（TS + ESLint + Prettier）を調べながら準備できます。',
      'Headless CMSを用いた開発を調べながらできます。',
    ],
    learning: ['React Server Componentについて勉強中です。', 'Material UIについて勉強中です。'],
  },
  {
    summary: 'Vue.js / Nuxt 3',
    studySpan: 2,
    workSpan: 0.5,
    can: [
      'Vue3・Nuxt3で実装できます。',
      '簡単な環境構築（TS + ESLint + Prettier）を調べながら準備できます。',
      'Headless CMSを用いた開発を調べながらできます。',
    ],
    learning: ['Vue2・Nuxt2も勉強中です。'],
  },
  {
    summary: '英語',
    workSpan: 1,
    can: ['日常会話ができます。ビジネスメールは調べながら対応できます。'],
    learning: ['英語資格に挑戦中です。'],
  },
];

const Skills = () => {
  return (
    <Container
      id="skills"
      disableGutters
      sx={{ pt: { xs: 10, sm: 12 }, pr: { xs: 2, sm: 4 }, pl: { xs: 2, sm: 4 } }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{ mb: 3 }}
      >
        スキル
      </Typography>
      {skillItems.map((skill) => (
        <Accordion
          key={skill.summary}
          sx={{ mb: 2 }}
        >
          <AccordionSummary expandIcon={<ArrowDownward />}>
            <Typography variant="h3">{skill.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="subtitle1"
              sx={{ mb: 2 }}
            >
              {skill.studySpan ? `学習期間:${skill.studySpan}年` : ''}{' '}
              {skill.studySpan ? `実務期間:${skill.workSpan}年` : ''}
            </Typography>
            <Grid container>
              <Grid
                xs={12}
                sm={6}
              >
                <Typography variant="h4">できる:</Typography>
                <List>
                  {skill.can.map((list, index) => (
                    <ListItem key={index}>
                      <Typography>{list}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid
                xs={12}
                sm={6}
              >
                <Typography variant="h4">勉強中:</Typography>
                <List>
                  {skill.learning.map((list, index) => (
                    <ListItem key={index}>
                      <Typography>{list}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography>プライベートでR言語やPythonの使用経験があります。</Typography>
      <Typography>Windows、Macどちらも使用できます。Linuxの学習経験もあります。</Typography>
      <Container
        sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}
      >
        <Chip label="LPIC 1" />
        <Chip label="ITパスポート" />
        <Chip label="HTML5プロフェッショナル認定試験 Lv1" />
        <Chip label="TOEIC 795" />
        <Chip label="ケンブリッジ英語検定 B2" />
      </Container>
    </Container>
  );
};

export default Skills;
