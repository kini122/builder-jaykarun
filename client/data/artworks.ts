export type CategoryKey =
  | "ecological"
  | "eroticNature"
  | "figurative"
  | "figurativeAbstracts"
  | "illustrative"
  | "akademiSelection"
  | "natureAndLife";

export interface ArtworkItem {
  id: string;
  title: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  description?: string;
  image: string;
  category: CategoryKey;
}

const a = (
  id: string,
  title: string,
  _image: string,
  category: CategoryKey,
  description?: string,
): ArtworkItem => ({
  id,
  title,
  image: `/assets/artworks/${id}.webp`,
  category,
  description,
});

// Image URLs provided by the user prompt (attachments)
export const ecological: ArtworkItem[] = [
  a(
    "eco-2",
    "2",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F4fbafe266f184534a06631e810c4072b?format=webp&width=1200",
    "ecological",
    "Environmental reflections and nature conservation.",
  ),
  a(
    "eco-dogs-day",
    "DOGS DAY",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fa2a3781156664c02b2c1848d9cd293d8?format=webp&width=1200",
    "ecological",
    "Observation on urban co-existence.",
  ),
  a(
    "eco-waiting-pot",
    "THE WAITING POT",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F5cc23305c4e140488a1819e270a48188?format=webp&width=1200",
    "ecological",
  ),
  a(
    "eco-waste-land",
    "The Waste Land",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F135252155dc44997b6e88161601c0035?format=webp&width=1200",
    "ecological",
  ),
];

export const eroticNature: ArtworkItem[] = [
  a(
    "erotic-ii",
    "EROTIC NATURE II",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F5bfc9ad89989439790fb50fbe579ef83?format=webp&width=1200",
    "eroticNature",
  ),
  a(
    "erotic-iii",
    "EROTIC NATURE III",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F78778a595974446492b42daa57a8ab69?format=webp&width=1200",
    "eroticNature",
  ),
  a(
    "erotic-iv",
    "EROTIC NATURE IV",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Ff6cdb7a0899b466c9e5895384928d934?format=webp&width=1200",
    "eroticNature",
  ),
  a(
    "erotic-v",
    "EROTIC NATURE V",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F877127599a81421492d639302c219a45?format=webp&width=1200",
    "eroticNature",
  ),
  a(
    "erotic-i",
    "EROTIC NATURE",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F74198ca8890446f4ba59b092fae6fe4e?format=webp&width=1200",
    "eroticNature",
  ),
];

export const figurative: ArtworkItem[] = [
  a(
    "fig-shore",
    "AT THE SHORE",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F0ddb6335487f4dbd97cc53b6108e2f25?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-hope-of-love",
    "HOPE OF LOVE",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F54cce6c3e3104180b6e99aaa70d9759a?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-neo-marxian",
    "NEO MARXIAN",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fcb83237d50ae4525abc03b1d742b30e7?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-neo-marxian-ii",
    "NEO MARXIAN II",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F049dfbb55a624006b7511abf7dd8cec7?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-neo-marxian-sold",
    "NEO MARXIAN",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F98cdad91e02d41f398522e40439ec850?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-bath",
    "THE BATH",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F5f4d2eb6ea844f3983a6182a6211a100?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-devotee",
    "The Devotee",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F07147d3653714c8db34797c8e9ae31d6?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-nimph",
    "The Enchanted Nymph",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F1f5197504b024e05b46197c966818426?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-unknown-girl",
    "To an Unknown Girl",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F3c85c28952a548ada4e97c320d5f9e3b?format=webp&width=1200",
    "figurative",
  ),
  a(
    "fig-reed-player",
    "Waiting for My Reed Player",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fb9a91d2aa295422a894e28e406be9ee1?format=webp&width=1200",
    "figurative",
  ),
];

export const figurativeAbstracts: ArtworkItem[] = [
  a(
    "fa-celebrations",
    "CELEBRATIONS",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F46b7f5b748df4266ac2c9794cd608689?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-cityscape",
    "CITYSCAPE",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fdb92dd92a4094fa489665e55cce3feb6?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-dancer",
    "DANCER",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F29b65b7b7b4542efb5b134f215902363?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-portrait",
    "Portrait (Photo)",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fb9d916ba8172432a8251389427881d23?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-loose-talk",
    "LOOSE TALK",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F968ec4968697444da0ff979c62ca9f7b?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-splash-colors",
    "SPLASH OF COLORS",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fc4a883db83e0443593dbba761ac271fc?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-hat-santiago",
    "THE HAT OF SANTIAGO",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F1287540058164219817ef3c39e68a022?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-party",
    "THE PARTY",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F84ec589adec44667b334ec539e5b1f01?format=webp&width=1200",
    "figurativeAbstracts",
  ),
  a(
    "fa-untitled-sold",
    "UNTITLED",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F6f2d77911ff84549a69cf1d60fce2fff?format=webp&width=1200",
    "figurativeAbstracts",
  ),
];

export const illustrative: ArtworkItem[] = [
  a(
    "illu-ffeef",
    "Illustration",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F1ca618e762884512958ce392e0f70c92?format=webp&width=1200",
    "illustrative",
  ),
  a(
    "illu-untitled",
    "UNTITLED",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F70ab12320dc44c6594116df609785b58?format=webp&width=1200",
    "illustrative",
  ),
];

export const akademiSelection: ArtworkItem[] = [
  a(
    "ak-9",
    "Selection 9",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fb0d44213c44b481daa9f2380d22fb95b?format=webp&width=1200",
    "akademiSelection",
  ),
  a(
    "ak-10",
    "Selection 10",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F995cf65147674752a1ddb1941e89d9a6?format=webp&width=1200",
    "akademiSelection",
  ),
  a(
    "ak-11",
    "Selection 11",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F1ea9c7eca18848f68587704b3ce7a878?format=webp&width=1200",
    "akademiSelection",
  ),
  a(
    "ak-p5",
    "P5",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F4af885c17a4c45e38aa91e3765981e49?format=webp&width=1200",
    "akademiSelection",
  ),
  a(
    "ak-tar-kettle",
    "TAR KETTLE",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F3591d812bf8b4a5daa28bcdfd705740e?format=webp&width=1200",
    "akademiSelection",
  ),
];

export const natureAndLife: ArtworkItem[] = [
  a(
    "nl-6",
    "6",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fc451b5ef61c94ac7b288d28ed38cdce3?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-cat-garden",
    "A CAT IN MY GARDEN",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fcd707d6efe4244f6b1ed5f1919869b82?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-grfgrg",
    "grfgrg",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fe4826bdbdcf64b24a9777b86af74e89f?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-kai3",
    "KAI 3",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F0764229fca784515aebfb61b2dd88a26?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-p1",
    "P1",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F741bc20ed85c44f29e50ee057c358361?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-p2",
    "P2",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fe9de2809a8a04401b51410cd2a359495?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-p3",
    "P3",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fed7063940e284dfdac5b1af7a7130823?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-paint1",
    "Paint 1",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2F7b236bb9aa2a47338ce2761897ff554c?format=webp&width=1200",
    "natureAndLife",
  ),
  a(
    "nl-rfgrfrg",
    "rfgrfrg",
    "https://cdn.builder.io/api/v1/image/assets%2F31e04bb0599342f8b50394d1e8bce657%2Fb92eca727f7344eaaa6130bbdad852d9?format=webp&width=1200",
    "natureAndLife",
  ),
];

export const categories = [
  { key: "ecological" as const, name: "Ecological", items: ecological },
  {
    key: "eroticNature" as const,
    name: "Erotic Nature Series",
    items: eroticNature,
  },
  { key: "figurative" as const, name: "Figurative", items: figurative },
  {
    key: "figurativeAbstracts" as const,
    name: "Figurative Abstracts",
    items: figurativeAbstracts,
  },
  { key: "illustrative" as const, name: "Illustrative", items: illustrative },
  {
    key: "akademiSelection" as const,
    name: "Kerala Lalithakala Akademi Selection",
    items: akademiSelection,
  },
  {
    key: "natureAndLife" as const,
    name: "Nature and Life",
    items: natureAndLife,
  },
];

export const allWorks: ArtworkItem[] = [
  ...ecological,
  ...eroticNature,
  ...figurative,
  ...figurativeAbstracts,
  ...illustrative,
  ...akademiSelection,
  ...natureAndLife,
];
