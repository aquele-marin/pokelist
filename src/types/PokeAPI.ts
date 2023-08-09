export type AttrReference = {
    name: string;
    url: string;
};

export type PokemonAbility = {
    ability: AttrReference;
    is_hidden: boolean;
    slot: Number;
};

export type GameIndice = {
    game_index: Number;
    version: AttrReference;
};

export type ItemVersionDetail = {
    rarity: Number;
    version: AttrReference;
};

export type HeldItem = {
    item: AttrReference;
    version_details: ItemVersionDetail[];
};

export type VersionGroupDetail = {
    level_learned_at: Number;
    move_learn_method: AttrReference;
    version_group: AttrReference;
};

export type Move = {
    move: AttrReference;
    version_group_details: VersionGroupDetail[];
};

export type DreamWorldSprites = {
    front_default: string | null;
    front_female: string | null;
};

export type HomeSprites = {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
};

export type OfficialArtworkSprites = {
    front_default: string | null;
    front_shiny: string | null;
};

export type OtherSprites = {
    dream_world: DreamWorldSprites;
    home: HomeSprites;
    "official-artwork": OfficialArtworkSprites;
};

export type RedBlueSprites = {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
};

export type YellowSprites = {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
};

export type GenerationISprites = {
    "red-blue": RedBlueSprites;
    yellow: YellowSprites;
};

export type CrystalSprites = {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
};

export type GoldSprites = {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
};

export type SilverSprites = {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
};

export type GenerationIISprites = {
    crystal: CrystalSprites;
    gold: GoldSprites;
    silver: SilverSprites;
};

export type EmeraldSprites = {
    front_default: string;
    front_shiny: string;
};

export type FireredLeafgreenSprites = {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
};

export type RubySapphireSprites = {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
};

export type GenerationIIISprites = {
    emerald: EmeraldSprites;
    "firered-leafgreen": FireredLeafgreenSprites;
    "ruby-sapphire": RubySapphireSprites;
};

export type DiamondPearlSprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
};

export type HeartgoldSoulsilverSprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
};

export type PlatinumSprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
};

export type GenerationIVSprites = {
    "diamond-pearl": DiamondPearlSprites;
    "heartgold-soulsilver": HeartgoldSoulsilverSprites;
    platinum: PlatinumSprites;
};

export type BlackWhiteAnimatedSprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
};

export type BlackWhiteSprites = {
    animated: BlackWhiteAnimatedSprites;
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
};

export type GenerationVSprites = {
    "black-white": BlackWhiteSprites;
};

export type OmegarubyAlphasapphireSprites = {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
};

export type XYSprites = {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
};

export type GenerationVISprites = {
    "omegaruby-alphasapphire": OmegarubyAlphasapphireSprites;
    "x-y": XYSprites;
};

export type UltraSunUltraMoonSprites = {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
};

export type IconsSprites = {
    front_default: string;
    front_female: string;
};

export type GenerationVIISprites = {
    icons: IconsSprites;
    "ultra-sun-ultra-moon": UltraSunUltraMoonSprites;
};

export type GenerationVIIISprites = {
    icons: IconsSprites;
};

export type VersionsSprites = {
    "generation-i": GenerationISprites;
    "generation-ii": GenerationIISprites;
    "generation-iii": GenerationIIISprites;
    "generation-iv": GenerationIVSprites;
    "generation-v": GenerationVSprites;
    "generation-vi": GenerationVISprites;
    "generation-vii": GenerationVIISprites;
    "generation-viii": GenerationVIIISprites;
};

export type Sprites = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: OtherSprites;
    versions: VersionsSprites;
};

export type PokemonStat = {
    base_stat: number;
    effort: number;
    stat: AttrReference;
};

export type PokemonType = {
    slot: number;
    type: AttrReference;
};

export type PokemonData = {
    abilities: PokemonAbility[];
    base_experience: Number;
    forms: AttrReference[];
    game_indices: GameIndice[];
    height: Number;
    held_items: HeldItem[];
    id: Number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: Number;
    part_types: any[];
    species: AttrReference;
    sprites: Sprites;
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
};
