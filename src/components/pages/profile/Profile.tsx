import CatchingPokemon from "@mui/icons-material/CatchingPokemon";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { TextField } from "../../atoms/Inputs";
import { FormEvent } from "react";

export function Profile() {
    function handleDeleteAccount() {
        console.log("Apagar conta");
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Salvar", e);
    }

    return (
        <div className="min-h-[85vh] bg-base-100 flex justify-center items-center">
            <div className="bg-base-200 w-[48rem] h-[36rem] shadow flex justify-between items-center flex-col p-20">
                <Avatar
                    alt="Profile picture"
                    sx={{ width: "4rem", height: "4rem", bgcolor: "#cc0000" }}
                    className="shadow-md"
                >
                    <CatchingPokemon />
                </Avatar>
                <form
                    className="h-full flex flex-col w-full justify-between pt-8 "
                    onSubmit={onSubmit}
                >
                    <TextField
                        label="Name"
                        placeholder="Type your name here"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Email"
                        placeholder="Type your email here"
                        type="email"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        placeholder="Type your password here"
                        type="password"
                        minLength={6}
                        fullWidth
                        required
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
