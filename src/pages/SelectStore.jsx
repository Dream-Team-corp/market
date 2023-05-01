import { PlusSquareIcon } from "@chakra-ui/icons";
import {
    Button,
    Card,
    CardBody,
    Container,
    Flex,
    Heading,
} from "@chakra-ui/react";

function SelectStore() {
    return (
        <Container>
            <Flex>
                <Card>
                    <CardBody>
                        <Button>
                            <Heading>
                                <PlusSquareIcon />
                            </Heading>
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Heading>Do&rsquo;kon 1</Heading>
                    </CardBody>
                </Card>
            </Flex>
        </Container>
    );
}

export default SelectStore;
