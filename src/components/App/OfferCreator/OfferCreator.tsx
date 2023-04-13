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
  extendTheme,
  StackDivider,
} from "@chakra-ui/react";
import "./OfferCreator.css";

const inputWrapperStyles = {
  width: { sm: "100%", lg: "45%", xl: "30%" },
  minW: "175px",
  mb: "10px",
  mt: "10px",
  ml: "5px",
  mr: "5px",
};

const cardStyles = {
  width: { "2xl": "250px", sm: "200px" },
  height: "100%",
  bg: "#d9d9d9",
  flexShrink: "0",
  padding: "16px",
};

const cardStylesCart = {
  width: "100%",
  height: "auto",
  bg: "#d9d9d9",
  flexDirection: "row",
  position: "relative",
};

const OfferCreator = () => {
  return (
    <div className="offer-creator">
      <Box pl={{ "3xl": "50px", "2xl": "25px", sm: "10px" }} pr={{ "3xl": "50px", "2xl": "25px", sm: "10px" }}>
        <Box ml="auto" mr="auto" mt="25px" bg="transparent">
          <Heading as="h2" size="lg" mb="20px">
            Dane podstawowe
          </Heading>
          <Box width="auto" display="flex" flexWrap="wrap" justifyContent="space-between">
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
        <Box display="flex" flexDirection={{ xl: "row", sm: "column" }}>
          <Box ml="auto" mt="25px" width={{ xl: "80%", sm: "100%" }}>
            <Heading as="h2" size="lg" mb="20px">
              Wybór wykonawców
            </Heading>
            <Box width="100%">
              <Input mb="25px" type="text" placeholder="Wyszukaj wykonwacę" />
              <Box width="100%" height={{ "2xl": "375px", sm: "310px" }} overflowX="auto" display="flex" gap="20px">
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px" mb="5px">
                      Wykonawca
                    </Heading>
                    <Box ml="10px">
                      <Text mb="-5px" fontSize="16px">
                        Wokalista
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Link do profilu</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px">350 zł</Button>
                    </div>
                  </CardFooter>
                </Card>{" "}
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px" mb="5px">
                      Wykonawca
                    </Heading>
                    <Box ml="10px">
                      <Text mb="-5px" fontSize="16px">
                        Wokalista
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Link do profilu</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px">350 zł</Button>
                    </div>
                  </CardFooter>
                </Card>{" "}
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px" mb="5px">
                      Wykonawca
                    </Heading>
                    <Box ml="10px">
                      <Text mb="-5px" fontSize="16px">
                        Wokalista
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Link do profilu</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px">350 zł</Button>
                    </div>
                  </CardFooter>
                </Card>{" "}
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px" mb="5px">
                      Wykonawca
                    </Heading>
                    <Box ml="10px">
                      <Text mb="-5px" fontSize="16px">
                        Wokalista
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Link do profilu</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px">350 zł</Button>
                    </div>
                  </CardFooter>
                </Card>{" "}
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px" mb="5px">
                      Wykonawca
                    </Heading>
                    <Box ml="10px">
                      <Text mb="-5px" fontSize="16px">
                        Wokalista
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Link do profilu</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px">350 zł</Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px" mb="5px">
                      Wykonawca
                    </Heading>
                    <Box ml="10px">
                      <Text mb="-5px" fontSize="16px">
                        Wokalista
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Link do profilu</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px">350 zł</Button>
                    </div>
                  </CardFooter>
                </Card>
              </Box>
            </Box>
          </Box>
          <Box ml="auto" mr="auto" mt="25px" width="100%" pl={{ xl: "25px", sm: "0px" }}>
            <Heading as="h2" size="lg" mb="20px">
              Koszyk wykonawców
            </Heading>
            <Box>
              <Box width="100%" display="flex" flexDirection="column" gap="20px">
                <Card sx={cardStylesCart}>
                  <CardBody>
                    <CloseButton position="absolute" right="10px" top="10px" />
                    <Heading width="90%" as="h2" size="md" mb="5px">
                      Nazwa wykonwacy
                    </Heading>
                    <Text textAlign="right" fontWeight="500">
                      2000 PLN
                    </Text>
                  </CardBody>
                </Card>
                <Card sx={cardStylesCart}>
                  <CardBody>
                    <CloseButton position="absolute" right="10px" top="10px" />
                    <Heading width="90%" as="h2" size="md" mb="5px">
                      Nazwa wykonwacy
                    </Heading>
                    <Text textAlign="right" fontWeight="500">
                      2000 PLN
                    </Text>
                  </CardBody>
                </Card>
              </Box>
              <Text pt="25px" textAlign="right" fontSize="22px">
                Suma: 6000zł
              </Text>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection={{ xl: "row", sm: "column" }}>
          <Box ml="auto" mt="25px" width={{ xl: "80%", sm: "100%" }} flexShrink="0">
            <Heading as="h2" size="lg" mb="20px">
              Wybór techniki
            </Heading>
            <Input mb="25px" type="text" placeholder="Wyszukaj technikę " />
            <Box display="flex" flexDirection="column" gap="20px">
              <Card direction="row" padding="16px" backgroundColor="lightGray">
                <Image
                  width="275px"
                  height="275px"
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                  borderRadius="5px"
                />
                <Stack width="100%" height="auto">
                  <CardBody padding="0px 16px 16px 16px" margin="0px">
                    <Heading mb="5px" fontSize="26px">
                      Nazwa techniki
                    </Heading>
                    <Box ml="10px">
                      <Text lineHeight="1.1" fontSize="20px" mb="10px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati
                        corporis aut similique libero possimus quod aspernatur officiis eos ducimus fuga soluta incidunt. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati corporis aut similique libero possimus quod
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Wyświetl szczegółowe informacje</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px" mt="auto!" height="auto">
                    <div className="custom-button">
                      <Button fontSize="18px">2500 zł</Button>
                    </div>
                  </CardFooter>
                </Stack>
              </Card>
              <Card direction="row" padding="16px" backgroundColor="lightGray">
                <Image
                  width="275px"
                  height="275px"
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                  borderRadius="5px"
                />
                <Stack width="100%" height="auto">
                  <CardBody padding="0px 16px 16px 16px" margin="0px">
                    <Heading mb="5px" fontSize="26px">
                      Nazwa techniki
                    </Heading>
                    <Box ml="10px">
                      <Text lineHeight="1.1" fontSize="20px" mb="10px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati
                        corporis aut similique libero possimus quod aspernatur officiis eos ducimus fuga soluta incidunt. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati corporis aut similique libero possimus quod
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Wyświetl szczegółowe informacje</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px" mt="auto!" height="auto">
                    <div className="custom-button">
                      <Button fontSize="18px">2500 zł</Button>
                    </div>
                  </CardFooter>
                </Stack>
              </Card>
              <Card direction="row" padding="16px" backgroundColor="lightGray">
                <Image
                  width="275px"
                  height="275px"
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                  borderRadius="5px"
                />
                <Stack width="100%" height="auto">
                  <CardBody padding="0px 16px 16px 16px" margin="0px">
                    <Heading mb="5px" fontSize="26px">
                      Nazwa techniki
                    </Heading>
                    <Box ml="10px">
                      <Text lineHeight="1.1" fontSize="20px" mb="10px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati
                        corporis aut similique libero possimus quod aspernatur officiis eos ducimus fuga soluta incidunt. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati corporis aut similique libero possimus quod
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Wyświetl szczegółowe informacje</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px" mt="auto!" height="auto">
                    <div className="custom-button">
                      <Button fontSize="18px">2500 zł</Button>
                    </div>
                  </CardFooter>
                </Stack>
              </Card>
              <Card direction="row" padding="16px" backgroundColor="lightGray">
                <Image
                  width="275px"
                  height="275px"
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                  borderRadius="5px"
                />
                <Stack width="100%" height="auto">
                  <CardBody padding="0px 16px 16px 16px" margin="0px">
                    <Heading mb="5px" fontSize="26px">
                      Nazwa techniki
                    </Heading>
                    <Box ml="10px">
                      <Text lineHeight="1.1" fontSize="20px" mb="10px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati
                        corporis aut similique libero possimus quod aspernatur officiis eos ducimus fuga soluta incidunt. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati corporis aut similique libero possimus quod
                      </Text>
                      <Box textAlign="right">
                        <Link fontSize="16px">Wyświetl szczegółowe informacje</Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px" mt="auto!" height="auto">
                    <div className="custom-button">
                      <Button fontSize="18px">2500 zł</Button>
                    </div>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
          </Box>
          <Box ml="auto" mr="auto" mt="25px" width="100%" pl={{ xl: "25px", sm: "0px" }}>
            <Heading as="h2" size="lg" mb="20px">
              Koszyk wykonawców
            </Heading>
            <Box>
              <Box width="100%" display="flex" flexDirection="column" gap="20px">
                <Card sx={cardStylesCart}>
                  <CardBody>
                    <CloseButton position="absolute" right="10px" top="10px" />
                    <Heading width="90%" as="h2" size="md" mb="5px">
                      Nazwa wykonwacy
                    </Heading>
                    <Text textAlign="right" fontWeight="500">
                      2000 PLN
                    </Text>
                  </CardBody>
                </Card>
                <Card sx={cardStylesCart}>
                  <CardBody>
                    <CloseButton position="absolute" right="10px" top="10px" />
                    <Heading width="90%" as="h2" size="md" mb="5px">
                      Nazwa wykonwacy
                    </Heading>
                    <Text textAlign="right" fontWeight="500">
                      2000 PLN
                    </Text>
                  </CardBody>
                </Card>
                <Card sx={cardStylesCart}>
                  <CardBody>
                    <CloseButton position="absolute" right="10px" top="10px" />
                    <Heading width="90%" as="h2" size="md" mb="5px">
                      Nazwa wykonwacy
                    </Heading>
                    <Text textAlign="right" fontWeight="500">
                      2000 PLN
                    </Text>
                  </CardBody>
                </Card>
              </Box>
              <Text pt="25px" textAlign="right" fontSize="22px">
                Suma: 6000zł
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OfferCreator;
