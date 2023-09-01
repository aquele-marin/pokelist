import { Modal } from "../../atoms/Modal";
import {
    Chart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartData,
    Colors,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { PokemonData } from "../../../types/PokeAPI";
import { Chip } from "../../atoms/Badges";

Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Colors
);

interface PokemonModalProps {
    data: PokemonData;
    open: boolean;
    handleClose: () => void;
}

export function PokemonModal({ data, open, handleClose }: PokemonModalProps) {
    const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
    const pokemonStats: ChartData<"radar", number[], string> = {
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
        plugins: {
            legend: {
                display: false,
            },
            colors: {
                enabled: true,
            },
        },
        scales: {
            r: {
                min: 0,
            },
        },
    };

    return (
        <Modal open={open} handleClose={handleClose}>
            <Modal.Content>
                <Modal.Title>{pokemonName}</Modal.Title>
                <div className="flex gap-2">
                    {data.types.map((type) => (
                        <Chip key={type.type.name}>
                            {type.type.name[0].toUpperCase() +
                                type.type.name.slice(1)}
                        </Chip>
                    ))}
                </div>

                <Radar
                    options={options}
                    data={pokemonStats}
                    className="w-96 h-96"
                />
            </Modal.Content>
            <Modal.Media url={data.sprites.front_default} />
            <Modal.Buttons>
                <button className="btn" onClick={handleClose}>
                    Fechar
                </button>
            </Modal.Buttons>
        </Modal>
    );
}
