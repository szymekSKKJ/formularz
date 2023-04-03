import {
  Heading,
  Box,
  Input,
  FormLabel,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Link,
  Button,
  CloseButton,
} from "@chakra-ui/react";

const inputWrapperStyles = {
  width: "30%",
  mb: "10px",
  mt: "10px",
};

const cardStyles = {
  width: "250px",
  height: "100%",
  bg: "#d9d9d9",
  flexShrink: "0",
};

const cardStylesCart = {
  width: "100%",
  height: "auto",
  bg: "#d9d9d9",
  flexDirection: "row",
  position: "relative",
  minW: "300px",
};

const OfferCreator = () => {
  return (
    <div className="offer-creator">
      <Box ml="auto" mr="auto" mt="25px" bg="transparent" pl="50px" pr="50px">
        <Heading as="h2" size="lg" mb="20px">
          Dane podstawowe
        </Heading>
        <Box width="auto" ml="20px" display="flex" flexWrap="wrap" justifyContent="space-between">
          <Box sx={inputWrapperStyles}>
            <FormLabel>Nazwa wydarzenia</FormLabel>
            <Input type="text" placeholder="Nazwa wydarzenia" />
          </Box>
          <Box sx={inputWrapperStyles}>
            <FormLabel>Imię i nazwisko</FormLabel>
            <Input type="text" placeholder="Imię i nazwisko" />
          </Box>
          <Box sx={inputWrapperStyles}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email" />
          </Box>
          <Box sx={inputWrapperStyles}>
            <FormLabel>Lokalizacja</FormLabel>
            <Input type="text" placeholder="Lokalizacja" />
          </Box>
          <Box sx={inputWrapperStyles}>
            <FormLabel>Data wydarzenia</FormLabel>
            <Input type="date" placeholder="Data wydarzenia" />
          </Box>
          <Box sx={inputWrapperStyles}>
            <FormLabel>Numer telefonu</FormLabel>
            <Input type="tel" placeholder="Numer telefonu" />
          </Box>
          <Box width="100%" mb="10px" mt="10px">
            <FormLabel>Informacje dodatkowe</FormLabel>
            <Textarea placeholder="Informacje dodatkowe" />
          </Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box ml="auto" mt="25px" width="100%" pl="50px">
          <Heading as="h2" size="lg" mb="20px">
            Wybór wykonawców
          </Heading>
          <Box>
            <Input mb="25px" type="text" placeholder="Wyszukaj wykonwacę" />
            <Box width="1200px" overflowX="auto" display="flex" gap="20px">
              <Card sx={cardStyles}>
                <CardBody>
                  <Image
                    mb="10px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                  <Heading mb="0px" size="md">
                    Wykonawca
                  </Heading>
                  <Text mt="0px">Wokalista</Text>
                  <Link ml="10px" color="darkblue">
                    Link do profilu
                  </Link>
                </CardBody>
                <CardFooter>
                  <Button ml="auto">Dodaj</Button>
                </CardFooter>
              </Card>
              <Card sx={cardStyles}>
                <CardBody>
                  <Image
                    mb="10px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                  <Heading mb="0px" size="md">
                    Wykonawca
                  </Heading>
                  <Text mt="0px">Wokalista</Text>
                  <Link ml="10px" color="darkblue">
                    Link do profilu
                  </Link>
                </CardBody>
                <CardFooter>
                  <Button ml="auto">Dodaj</Button>
                </CardFooter>
              </Card>
              <Card sx={cardStyles}>
                <CardBody>
                  <Image
                    mb="10px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                  <Heading mb="0px" size="md">
                    Wykonawca
                  </Heading>
                  <Text mt="0px">Wokalista</Text>
                  <Link ml="10px" color="darkblue">
                    Link do profilu
                  </Link>
                </CardBody>
                <CardFooter>
                  <Button ml="auto">Dodaj</Button>
                </CardFooter>
              </Card>
              <Card sx={cardStyles}>
                <CardBody>
                  <Image
                    mb="10px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                  <Heading mb="0px" size="md">
                    Wykonawca
                  </Heading>
                  <Text mt="0px">Wokalista</Text>
                  <Link ml="10px" color="darkblue">
                    Link do profilu
                  </Link>
                </CardBody>
                <CardFooter>
                  <Button ml="auto">Dodaj</Button>
                </CardFooter>
              </Card>
              <Card sx={cardStyles}>
                <CardBody>
                  <Image
                    mb="10px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                  <Heading mb="0px" size="md">
                    Wykonawca
                  </Heading>
                  <Text mt="0px">Wokalista</Text>
                  <Link ml="10px" color="darkblue">
                    Link do profilu
                  </Link>
                </CardBody>
                <CardFooter>
                  <Button ml="auto">Dodaj</Button>
                </CardFooter>
              </Card>
              <Card sx={cardStyles}>
                <CardBody>
                  <Image
                    mb="10px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                  <Heading mb="0px" size="md">
                    Wykonawca
                  </Heading>
                  <Text mt="0px">Wokalista</Text>
                  <Link ml="10px" color="darkblue">
                    Link do profilu
                  </Link>
                </CardBody>
                <CardFooter>
                  <Button ml="auto">Dodaj</Button>
                </CardFooter>
              </Card>
              <Card sx={cardStyles}>
                <CardBody>
                  <Image
                    mb="10px"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  />
                  <Heading mb="0px" size="md">
                    Wykonawca
                  </Heading>
                  <Text mt="0px">Wokalista</Text>
                  <Link ml="10px" color="darkblue">
                    Link do profilu
                  </Link>
                </CardBody>
                <CardFooter>
                  <Button ml="auto">Dodaj</Button>
                </CardFooter>
              </Card>
            </Box>
          </Box>
        </Box>
        <Box ml="auto" mr="auto" mt="25px" width="100%" pl="50px" pr="50px">
          <Heading as="h2" size="lg" mb="20px">
            Koszyk wykonawców
          </Heading>
          <Box>
            <Box width="100%" display="flex" flexDirection="column" gap="20px">
              <Card sx={cardStylesCart}>
                <CardBody>
                  <CloseButton position="absolute" right="10px" top="10px" />
                  <Heading as="h2" size="md" mb="20px">
                    Nazwa wykonwacy
                  </Heading>
                  <Text ml="10px" width="100%" lineHeight="1" height="50px" overflowY="auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam magnam laudantium fugit numquam nulla quo, esse blanditiis iusto
                    rerum veniam non tempora dignissimos soluta distinctio deleniti natus error. Asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
                  </Text>
                  <Text mt="25px" textAlign="right" fontWeight="500">
                    2000 PLN
                  </Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card sx={cardStylesCart}>
                <CardBody>
                  <CloseButton position="absolute" right="10px" top="10px" />
                  <Heading as="h2" size="md" mb="20px">
                    Nazwa wykonwacy
                  </Heading>
                  <Text ml="10px" width="100%" lineHeight="1" height="50px" overflowY="auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam magnam laudantium fugit numquam nulla quo, esse blanditiis iusto
                    rerum veniam non tempora dignissimos soluta distinctio deleniti natus error. Asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
                  </Text>
                  <Text mt="25px" textAlign="right" fontWeight="500">
                    2000 PLN
                  </Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card sx={cardStylesCart}>
                <CardBody>
                  <CloseButton position="absolute" right="10px" top="10px" />
                  <Heading as="h2" size="md" mb="20px">
                    Nazwa wykonwacy
                  </Heading>
                  <Text width="100%" lineHeight="1" height="50px" overflowY="auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam magnam laudantium fugit numquam nulla quo, esse blanditiis iusto
                    rerum veniam non tempora dignissimos soluta distinctio deleniti natus error. Asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Molestias totam magnam laudantium fugit numquam nulla quo, esse blanditiis iusto rerum veniam non tempora dignissimos soluta
                    distinctio deleniti natus error. Asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam magnam laudantium
                  </Text>
                  <Text ml="10px" mt="25px" textAlign="right" fontWeight="500">
                    2000 PLN
                  </Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Box>
            <Text pt="25px" textAlign="right" fontSize="22px">
              Suma: 6000zł
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OfferCreator;
