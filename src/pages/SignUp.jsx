import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    FormControl,
    FormLabel,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import ReactInputMask from "react-input-mask";

function SignUp() {
    const [showPasswordBtn, setShowPasswordBtn] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Card
                sx={{
                    width: "450px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "20px",
                }}
            >
                <Image
                    src="/src/assets/react.svg"
                    alt="React logo"
                    width="70px"
                />
                <Text as="b" fontSize="2xl" color={"gray.700"}>
                    Yangi hisob yaratish
                </Text>
                <Text
                    sx={{
                        fontSize: "lg",
                        marginBottom: "5px",
                    }}
                >
                    Agar hisobingiz bo&apos;lsa{" "}
                    <Link
                        style={{
                            color: "#2B6CB0",
                        }}
                        to="/login"
                    >
                        Hisobga kirish
                    </Link>
                </Text>
                <FormControl
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                    }}
                    isRequired
                >
                    <FormLabel htmlFor="name">Foydalanuvchining ismi</FormLabel>
                    <InputGroup marginTop="-10px">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Foydalanuvchining ismi"
                        />
                        <InputRightElement>
                            <CheckIcon color="green.500" fontSize="sm" />
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel htmlFor="surname">
                        Foydalanuvchining familiyasi
                    </FormLabel>
                    <InputGroup marginTop="-10px">
                        <Input
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder="Foydalanuvchining familiyasi"
                        />
                        <InputRightElement>
                            <CheckIcon color="green.500" fontSize="sm" />
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel htmlFor="username">
                        Foydalanuvchining nomi
                    </FormLabel>
                    <InputGroup marginTop="-10px">
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Foydalanuvchining nomi"
                        />
                        <InputRightElement>
                            <CheckIcon color="green.500" fontSize="sm" />
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel htmlFor="password">
                        Foydalanuvchining paroli
                    </FormLabel>
                    <InputGroup marginTop="-10px">
                        <Input
                            type={showPassword ? "password" : "text"}
                            name="password"
                            id="password"
                            placeholder="Foydalanuvchining paroli"
                        />
                        <InputRightElement>
                            {showPasswordBtn && (
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onMouseLeave={() =>
                                        setShowPasswordBtn(false)
                                    }
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    show
                                </Button>
                            )}
                            {!showPasswordBtn && (
                                <CheckIcon
                                    color="green.500"
                                    fontSize="sm"
                                    onMouseMove={() => setShowPasswordBtn(true)}
                                />
                            )}
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel htmlFor="telNumber">
                        Foydalanuvchining telefon raqami
                    </FormLabel>
                    <InputGroup marginTop="-10px">
                        <Input
                            as={ReactInputMask}
                            mask="+*** ** ***-**-**"
                            maskChar={null}
                            type="text"
                            name="telNumber"
                            id="telNumber"
                            placeholder="Foydalanuvchining telefon raqami"
                        />
                        <InputRightElement>
                            <CheckIcon color="green.500" fontSize="sm" />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </Card>
        </Box>
    );
}

export default SignUp;
