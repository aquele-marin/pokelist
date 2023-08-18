import CatchingPokemon from "@mui/icons-material/CatchingPokemon";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { INVALID_VALUE, REQUIRED_FIELD } from "../../../constants";

export function Profile() {
    const profileSchema = object({
        name: string().required(REQUIRED_FIELD),
        email: string().email(INVALID_VALUE).required(REQUIRED_FIELD),
        password: string().required(REQUIRED_FIELD),
    });
    const formOptions = { resolver: yupResolver(profileSchema) };
    const { register, handleSubmit, formState: errors } = useForm(formOptions);

    function handleDeleteAccount() {
        console.log("Apagar conta");
    }

    function handleSave() {
        console.log("Salvar");
    }

    return (
        <div className="min-h-[85vh] bg-gray-100 flex justify-center items-center dark:bg-neutral-900">
            <div className="bg-gray-200 w-[48rem] h-[32rem] shadow flex justify-between items-center flex-col p-20 dark:bg-neutral-800">
                <Avatar
                    alt="Profile picture"
                    sx={{ width: "4rem", height: "4rem", bgcolor: "#cc0000" }}
                    className="shadow-md"
                >
                    <CatchingPokemon />
                </Avatar>
                <form
                    className="h-full flex flex-col w-full justify-between pt-8"
                    onSubmit={handleSubmit(handleSave)}
                >
                    <TextField
                        fullWidth
                        id="filled-basic"
                        label="Name"
                        {...register("name")}
                        variant="filled"
                        error={!!errors.errors.name}
                        helperText={errors.errors.name?.message}
                    />
                    <TextField
                        fullWidth
                        id="filled-basic"
                        label="Email"
                        {...register("email")}
                        variant="filled"
                        error={!!errors.errors.email}
                        helperText={errors.errors.email?.message}
                    />
                    <TextField
                        fullWidth
                        id="filled-basic"
                        label="Password"
                        {...register("password")}
                        variant="filled"
                        error={!!errors.errors.password}
                        helperText={errors.errors.password?.message}
                    />
                    <div className="w-full flex justify-end">
                        <Button type="submit">Salvar</Button>
                        <Button color="error" onClick={handleDeleteAccount}>
                            Apagar Conta
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
