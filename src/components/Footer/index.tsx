import { ActionIcon, Anchor, Avatar, createStyles, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
// import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';

// Todo: add logo
// Todo: add social media buttons as icons

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const items = links.map(link => (
    <Anchor<'a'>
      color='dimmed'
      key={link.label}
      sx={{ lineHeight: 1 }}
      onClick={event => {
        event.preventDefault();
        navigate(link.link);
      }}
      size='sm'>
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        {/* <MantineLogo size={28} /> */}

        <Group className={classes.links}>{items}</Group>

        <Group spacing='xs' position='right' noWrap>
          <ActionIcon size='lg' variant='default' radius='xl'>
            {/* <IconBrandTwitter size={18} stroke={1.5} /> */}
            <Avatar color='blue' radius='md' />
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <Avatar color='red' radius='md' />
            {/* <IconBrandYoutube size={18} stroke={1.5} /> */}
          </ActionIcon>
          <ActionIcon size='lg' variant='default' radius='xl'>
            <Avatar
              color='yellow' // temporary
              component='a'
              href='https://github.com/jsutinjdaniel'
              target='_blank'
              rel='noopener noreferrer'
              // src={...}
              alt='Github'
              radius='md'
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
