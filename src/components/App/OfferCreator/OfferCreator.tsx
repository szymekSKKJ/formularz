import { Heading, Box, Input, Textarea, Card, CardBody, CardFooter, Text, Image, Stack, Link, Button, CloseButton } from "@chakra-ui/react";
import "./OfferCreator.css";
import { useState } from "react";

const inputWrapperStyles = {
  width: { sm: "100%", lg: "45%", xl: "30%" },
  minW: "175px",
  mb: "5px",
  mt: "5px",
  ml: "5px",
  mr: "5px",
};

const cardStyles = {
  width: { "2xl": "250px", sm: "200px" },
  height: "100%",
  bg: "#e9edf1",
  flexShrink: "0",
  padding: "16px",
};

const cardStylesCart = {
  width: "100%",
  height: "auto",
  bg: "#e9edf1",
  flexDirection: "row",
  position: "relative",
};

const generateId = () => Math.random().toString(16).slice(2);

const isEmpty = (str: string) => !str.trim().length;

const validateBasicInformationSection = (inputElements: HTMLInputElement[]): boolean => {
  const inputElementsInBasicInformationElement = inputElements.filter((inputElement) => inputElement.closest(".basic-information"));

  const foundEmptyInputInformationElement = inputElementsInBasicInformationElement.find((inputElement) => isEmpty(inputElement.value));

  if (foundEmptyInputInformationElement !== undefined) {
    foundEmptyInputInformationElement.focus();
    return false;
  } else {
    return true;
  }
};

const validateAdditionalsSection = (inputElements: HTMLInputElement[], isFromAddButton: boolean): boolean => {
  const inputElementsInAdditionalsElement = inputElements.filter((inputElement) => inputElement.closest(".additionals"));

  const foundEmptyInputInAdditionalsElement = inputElementsInAdditionalsElement.find((inputElement) => isEmpty(inputElement.value));

  if (isFromAddButton) {
    if (foundEmptyInputInAdditionalsElement !== undefined) {
      foundEmptyInputInAdditionalsElement.focus();
      return false;
    } else {
      return true;
    }
  } else {
    if (foundEmptyInputInAdditionalsElement !== undefined && foundEmptyInputInAdditionalsElement.placeholder === "Nazwa") {
      return true;
    } else {
      if (foundEmptyInputInAdditionalsElement !== undefined) {
        foundEmptyInputInAdditionalsElement.focus();
        return false;
      } else {
        return true;
      }
    }
  }
};

const formValidation = (clickedButton: HTMLButtonElement, isFromAddButton: boolean): boolean => {
  const offerCreatorElement = clickedButton.closest(".offer-creator") as HTMLFormElement;
  const inputElements = [...offerCreatorElement.elements].filter((formElement) => formElement.tagName === "INPUT") as HTMLInputElement[];

  const isBasicInformationSectionCorrect = validateBasicInformationSection(inputElements);

  if (isBasicInformationSectionCorrect) {
    const isBasicAdditionalsSectionCorrect = validateAdditionalsSection(inputElements, isFromAddButton);

    if (isBasicAdditionalsSectionCorrect) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

const OfferCreator = () => {
  const [additionalsElements, setAdditionalsElements] = useState([
    {
      id: generateId(),
      element: (
        <Box display="flex" gap="10px" flexDirection="column" key={generateId()}>
          <Input placeholder="Nazwa" />
          <Textarea placeholder="Opis" />
          <Box display="flex" gap="20px">
            <Input placeholder="Cena" />
            <Input placeholder="Ilość" />
          </Box>
        </Box>
      ),
    },
  ]);

  return (
    <form className="offer-creator">
      <Box pl={{ "3xl": "50px", "2xl": "25px", sm: "10px" }} pr={{ "3xl": "50px", "2xl": "25px", sm: "10px" }}>
        <Box ml="auto" mr="auto" mt="25px" bg="transparent" className="basic-information">
          <Heading as="h2" size="lg" mb="20px">
            Dane podstawowe
          </Heading>
          <Box width="auto" display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box sx={inputWrapperStyles}>
              <Input type="text" placeholder="Nazwa wydarzenia" />
            </Box>
            <Box sx={inputWrapperStyles}>
              <Input type="text" placeholder="Imię i nazwisko" />
            </Box>
            <Box sx={inputWrapperStyles}>
              <Input type="email" placeholder="Email" />
            </Box>
            <Box sx={inputWrapperStyles}>
              <Input type="text" placeholder="Lokalizacja" />
            </Box>
            <Box sx={inputWrapperStyles}>
              <Input type="date" placeholder="Data wydarzenia" />
            </Box>
            <Box sx={inputWrapperStyles}>
              <Input type="tel" placeholder="Numer telefonu" />
            </Box>
            <Box width="100%" mb="10px" mt="10px">
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
                    <Heading fontSize="22px">Wykonawca</Heading>
                    <Text mb="5px" fontSize="16px">
                      Wokalista
                    </Text>
                    <Link fontSize="16px" color="#285ea4">
                      Link do profilu
                    </Link>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        350 zł
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px">Wykonawca</Heading>
                    <Text mb="5px" fontSize="16px">
                      Wokalista
                    </Text>
                    <Link fontSize="16px" color="#285ea4">
                      Link do profilu
                    </Link>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        350 zł
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px">Wykonawca</Heading>
                    <Text mb="5px" fontSize="16px">
                      Wokalista
                    </Text>
                    <Link fontSize="16px" color="#285ea4">
                      Link do profilu
                    </Link>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        350 zł
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px">Wykonawca</Heading>
                    <Text mb="5px" fontSize="16px">
                      Wokalista
                    </Text>
                    <Link fontSize="16px" color="#285ea4">
                      Link do profilu
                    </Link>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        350 zł
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px">Wykonawca</Heading>
                    <Text mb="5px" fontSize="16px">
                      Wokalista
                    </Text>
                    <Link fontSize="16px" color="#285ea4">
                      Link do profilu
                    </Link>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        350 zł
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px">Wykonawca</Heading>
                    <Text mb="5px" fontSize="16px">
                      Wokalista
                    </Text>
                    <Link fontSize="16px" color="#285ea4">
                      Link do profilu
                    </Link>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        350 zł
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card sx={cardStyles}>
                  <CardBody padding="0px">
                    <Image
                      mb="10px"
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <Heading fontSize="22px">Wykonawca</Heading>
                    <Text mb="5px" fontSize="16px">
                      Wokalista
                    </Text>
                    <Link fontSize="16px" color="#285ea4">
                      Link do profilu
                    </Link>
                  </CardBody>
                  <CardFooter padding="0px">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        350 zł
                      </Button>
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
                  <CardBody padding="12px">
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
                  <CardBody padding="12px">
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
                  <CardBody padding="12px">
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
                  <CardBody padding="12px">
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
              <Card direction="row" padding="16px" backgroundColor="#e9edf1">
                <Image
                  width={{ "2xl": "275px", xl: "225px", lg: "180px" }}
                  height={{ "2xl": "275px", xl: "225px", lg: "180px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                  borderRadius="5px"
                  display={{ lg: "block", sm: "none" }}
                />
                <Stack width="100%" height="auto">
                  <CardBody padding="0px 16px 16px 16px" margin="0px">
                    <Heading mb="5px" fontSize={{ "2xl": "26px", lg: "22px" }}>
                      Nazwa techniki
                    </Heading>
                    <Box ml="10px">
                      <Text lineHeight="1.1" fontSize={{ "2xl": "20px", lg: "18px" }} mb="10px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati
                        corporis aut similique libero possimus quod aspernatur officiis eos ducimus fuga soluta incidunt. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dignissimos culpa pariatur debitis accusantium iure beatae nemo, obcaecati corporis aut similique libero possimus quod
                      </Text>
                      <Box textAlign="left">
                        <Link fontSize="16px" color="#285ea4">
                          Wyświetl szczegółowe informacje
                        </Link>
                      </Box>
                    </Box>
                  </CardBody>
                  <CardFooter padding="0px" mt="auto!" height="auto">
                    <div className="custom-button">
                      <Button fontSize="18px" backgroundColor="white" _hover={{ backgroundColor: "white" }}>
                        2500 zł
                      </Button>
                    </div>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
          </Box>
          <Box ml="auto" mr="auto" mt="25px" width="100%" pl={{ xl: "25px", sm: "0px" }}>
            <Heading as="h2" size="lg" mb="20px">
              Koszyk technik
            </Heading>
            <Box>
              <Box width="100%" display="flex" flexDirection="column" gap="20px">
                <Card sx={cardStylesCart}>
                  <CardBody padding="12px">
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
                  <CardBody padding="12px">
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
                  <CardBody padding="12px">
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
                  <CardBody padding="12px">
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
        <Box mt="25px" className="additionals">
          <Heading as="h2" size="lg" mb="20px">
            Dodatkowe
          </Heading>
          <Box display="flex" flexDir="column" gap="50px">
            {additionalsElements.map((elementObject) => elementObject.element)}
          </Box>
          <Box width="100%" display="flex" justifyContent="center" mt="32px">
            <Button
              fontSize="16px"
              backgroundColor="#e9edf1"
              onClick={(event) => {
                if (formValidation(event.currentTarget, true)) {
                  setAdditionalsElements((currentValue) => {
                    const generatedId = generateId();

                    return [
                      ...currentValue,
                      {
                        id: generatedId,
                        element: (
                          <Box display="flex" gap="10px" flexDirection="column" key={generateId()}>
                            <CloseButton
                              ml="auto"
                              onClick={() => {
                                setAdditionalsElements((currentValue) => {
                                  const indexOfElementToRemove = currentValue.findIndex((object) => object.id === generatedId);

                                  currentValue.splice(indexOfElementToRemove, 1);

                                  return [...currentValue];
                                });
                              }}
                            />
                            <Input placeholder="Nazwa" />
                            <Textarea placeholder="Opis" />
                            <Box display="flex" gap="20px">
                              <Input placeholder="Cena" />
                              <Input placeholder="Ilość" />
                            </Box>
                          </Box>
                        ),
                      },
                    ];
                  });
                }
              }}>
              Dodaj pozycję
            </Button>
          </Box>
        </Box>
        <Box mt="25px">
          <Heading as="h2" size="lg" mb="20px">
            Podsumowanie
          </Heading>
          <Box>
            <Text textAlign="right" fontWeight="500" fontSize="22px" mb="25px">
              Do zapłaty: 2 000 PLN
            </Text>
            <Box width="100%" display="flex">
              <Button ml="auto" fontSize="20px" backgroundColor="#e9edf1" onClick={(event) => formValidation(event.currentTarget, false)}>
                Utwórz
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default OfferCreator;
