import GhIcon from 'icons/insta.svg';
import Button from './Button';

export function ForkMeButton() {
  return (
    <Button
      as="a"
      href="https://instagram.com/99marroquin?igshid=OGQ5ZDc2ODk2ZA=="
      height="24px"
      sx={{
        borderRadius: 8,
        fontSize: 11,
        borderWidth: 1,
        border: '1px solid #CCFF00',
        bg: 'transparent',
        color: 'brand',
        pt: '4px',
        pb: '4px',
        pr: '8px',
        pl: '8px',
      }}
      rightIcon={<GhIcon />}
    >
      Sigueme en Instagram
    </Button>
  );
}
