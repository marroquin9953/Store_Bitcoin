import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
} from '@chakra-ui/react';
import { getCheckUser } from 'api/api';
import Button from 'components/Button';
import Input from 'components/Input';
import { Page } from 'components/Page';
import Text from 'components/Text';
import { useUserContext } from 'context/user';
import { useRouter } from 'next/router';
import { useState } from 'react';

const STEP_SIGNUP = 'signup';
const STEP_SHOP_NAME = 'shop';

const checkUser = async (username) => {
  try {
    await getCheckUser(username);
    return null;
  } catch (e) {
    console.log(e);
    return e.response?.data?.error || 'Error has ocurred';
  }
};

const Signup = () => {
  const {
    login,
    createShop,
    user: { user },
  } = useUserContext();
  const router = useRouter();

  const [step, setStep] = useState(STEP_SIGNUP);
  const [isBusy, setIsBusy] = useState();
  const [error, setError] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    switch (step) {
      case STEP_SIGNUP:
        const user = e.target?.user?.value.trim();
        setIsBusy(true);
        setError(null);
        const error = await checkUser(user);
        if (error) {
          setError(error);
        } else {
          login(user);
          setStep(STEP_SHOP_NAME);
        }
        setIsBusy(false);
        break;

      case STEP_SHOP_NAME:
        createShop(e.target.shop.value);
        router.push('/home');
        break;
      default:
    }
  };
  return (
    <form onSubmit={onSubmit} style={{ height: '100%', minHeight: '540px' }}>
      <FormControl isInvalid={!!error} height="100%">
        <Page shouldShowFork>
          {step === STEP_SIGNUP && (
            <>
              <Heading as="h1" mb={3} mt="24px">
              Acepta Bitcoin Lightning en tu punto de venta
              </Heading>
              <Text>
              Cree su propio pago en persona para aceptar pagos Lightning.
              </Text>

              <FormLabel mt="56px">Su usuario de Strike</FormLabel>
              <Input
                autoComplete="off"
                required
                name="user"
                placeholder="Jack"
                autoFocus
              />
              <FormErrorMessage>{error}</FormErrorMessage>
              <Button mt="auto" type="submit" isLoading={isBusy}>
              Iniciar sesión
              </Button>
            </>
          )}

          {step === STEP_SHOP_NAME && (
            <>
              <Heading as="h1" mb="8px" mt="24px">
              Elige el nombre de tu tienda
              </Heading>
              <Text>
              Esta tienda estará conectada a{' '}
                <Text as="span" fontWeight="bold">
                  @{user}
                </Text>
              </Text>

              <FormLabel mt="56px">Nombre de la tienda</FormLabel>
              <Input
                autoComplete="off"
                required
                name="shop"
                placeholder="McDonald’s"
                autoFocus
              />
              <Button mt="auto" type="submit">
              Crear tienda
              </Button>
            </>
          )}
        </Page>
      </FormControl>
    </form>
  );
};

export default Signup;
