import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useLogInStore} from "../store/";
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
    InputRightElement, Spinner,
    Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Login() {
    const [showPassword, setShowPassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { setValue, sendData, resData, userData } = useLogInStore((state) => state);
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
    console.log(resData, userData)
    const handleSend = (e) => {
        if (e.code === "Enter") {
            setIsLoading(resData.token);
            sendData();
        }
    }
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
                    width: "400px",
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
                    onKeyDown={(e) => handleSend(e)}
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
                    <Input
                        onChange={(e) => setValue({ username: e.target.value })}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Foydalanuvchining nomi"
                        errorBorderColor="red.500"
                        isInvalid={!!resData.password && !!resData.username}
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
                            placeholder="Foydalanuvchining paroli"
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

                    <Button
                        colorScheme="blue"
                        sx={{
                            marginTop: "15px",
                        }}
                        onClick={() => {
                            setIsLoading(resData.token);
                            sendData();
                        }}
                    >
                        {isLoading ? <Spinner /> : "Kirish"}
                    </Button>
                </FormControl>
            </Card>
        </Box>
    );
}

export default Login;
