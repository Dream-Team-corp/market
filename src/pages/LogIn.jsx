import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

function Login() {
    const [showPasswordBtn, setShowPasswordBtn] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
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
                    Agar hisobingiz bo&apos;lmasa{" "}
                    <Link
                        style={{
                            color: "#2B6CB0",
                        }}
                        to="/sign-up"
                    >
                        Hisobga yaratish
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
                    <Button
                        colorScheme="blue"
                        sx={{
                            marginTop: "15px",
                        }}
                        onClick={() => navigate("/select-store")}
                    >
                        Kirish
                    </Button>
                </FormControl>
            </Card>
        </Box>
    );
}

export default Login;
