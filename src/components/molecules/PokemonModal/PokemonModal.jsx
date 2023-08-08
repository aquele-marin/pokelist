import { Modal } from "../../atoms/Modal";
import { Chip, Button, Box } from "@mui/material";
import {
    Chart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export function PokemonModal({ data, open, handleClose }) {
    const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
    const pokemonStats = {
        labels: data.stats.map(
            (stat) => stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)
        ),
        datasets: [
            {
                label: pokemonName,
                data: data.stats.map((stat) => stat.base_stat),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: { legend: false },
        scales: {
            r: {
                min: 0,
            },
        },
    };

    return (
        <Modal.Component open={open} handleClose={handleClose}>
            <Modal.Content>
                <Modal.Title>{pokemonName}</Modal.Title>
                {data.types.map((type, i) => (
                    <Chip
                        label={
                            type.type.name[0].toUpperCase() +
                            type.type.name.slice(1)
                        }
                        variant="outlined"
                        className="mr-1"
                        key={i.toString()}
                    />
                ))}
                <Radar
                    options={options}
                    data={pokemonStats}
                    className="w-96 h-96"
                />
            </Modal.Content>
            <Modal.Media url={data.sprites.front_default} />
            <Modal.Buttons>
                <Button onClick={handleClose}>Fechar</Button>
            </Modal.Buttons>
        </Modal.Component>
    );
}
