import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    FormControl,
    FormLabel,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { useSignUpStore } from "../store/index.js";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function SignUp() {
    const [showPassword, setShowPassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { setValue, sendData, resData } = useSignUpStore((state) => state);
    useEffect(() => {
        if (resData.token && resData.user_data) {
            localStorage.setItem("token", resData.token);
            localStorage.setItem(
                "user_data",
                JSON.stringify(resData.user_data)
            );
            if (resData.user_data.user_role === "admin") {
                navigate("/admin");
            } else {
                navigate("/seller");
            }
        }
    }, [navigate, resData.token, resData.user_data]);
    const handleSend = (e) => {
        if (e.code === "Enter") {
            setIsLoading(true);
            sendData();
        }
    };
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
                    width: "420px",
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
                    onKeyDown={(e) => handleSend(e)}
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                    }}
                    isRequired
                    as="form"
                >
                    <FormLabel htmlFor="name">Foydalanuvchining ismi</FormLabel>
                    <Input
                        onChange={(e) =>
                            setValue({ first_name: e.target.value })
                        }
                        type="text"
                        id="name"
                        name="first_name"
                        placeholder="Misol: Biloliddin"
                        errorBorderColor="red.500"
                        isInvalid={!!resData.first_name}
                    />

                    <FormLabel htmlFor="surname">
                        Foydalanuvchining familiyasi
                    </FormLabel>
                    <Input
                        onChange={(e) =>
                            setValue({ last_name: e.target.value })
                        }
                        type="text"
                        name="last_name"
                        id="surname"
                        placeholder="Misol: Tursunov"
                        errorBorderColor="red.500"
                        isInvalid={!!resData.last_name}
                    />

                    <FormLabel htmlFor="username">
                        Foydalanuvchining nomi
                    </FormLabel>
                    <Input
                        onChange={(e) => setValue({ username: e.target.value })}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Misol: biloliddin.tursunov"
                        errorBorderColor="red.500"
                        isInvalid={!!resData.username}
                    />

                    <FormLabel htmlFor="password">
                        Foydalanuvchining paroli
                    </FormLabel>
                    <InputGroup>
                        <Input
                            onChange={(e) =>
                                setValue({ password: e.target.value })
                            }
                            type={showPassword ? "password" : "text"}
                            name="password"
                            id="password"
                            placeholder="Misol: Biloliddin9979"
                            errorBorderColor="red.500"
                            isInvalid={!!resData.password}
                        />
                        <InputRightElement>
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                size="sm"
                                aria-label="show password button"
                            >
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </IconButton>
                        </InputRightElement>
                    </InputGroup>

                    <FormLabel htmlFor="phone_number">
                        Foydalanuvchining telefon raqami
                    </FormLabel>
                    <Input
                        onChange={(e) =>
                            setValue({ phone_number: e.target.value })
                        }
                        type="number"
                        name="phone_number"
                        id="phone_number"
                        placeholder="Misol: +999 88 209 99 79"
                        errorBorderColor="red.500"
                        isInvalid={!!resData.phone_number}
                    />

                    <FormLabel htmlFor="address">
                        Foydalanuvchining Yashash Manzili
                    </FormLabel>
                    <Input
                        onChange={(e) => setValue({ address: e.target.value })}
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Misol: Yozyovon Xonobod"
                        errorBorderColor="red.500"
                        isInvalid={!!resData.address}
                    />

                    <Button
                        marginTop="10px"
                        colorScheme="blue"
                        onClick={() => {
                            setIsLoading(true);
                            sendData();
                        }}
                    >
                        {isLoading ? <Spinner /> : "Yangi hisob ochish"}
                    </Button>
                </FormControl>
            </Card>
        </Box>
    );
}

export default SignUp;
