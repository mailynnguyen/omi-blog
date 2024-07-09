import { page1 } from "@/data/album/page1.js";
import { page2 } from "@/data/album/page2.js";
import { page3 } from "@/data/album/page3.js";
import { page4 } from "@/data/album/page4.js";
import { page5 } from "@/data/album/page5.js";
import { page6 } from "@/data/album/page6.js";
import Grid from "@/components/album/Grid";

export const pages = [
    <Grid images={page1} />,
    <Grid images={page2} />,
    <Grid images={page3} />,
    <Grid images={page4} />,
    <Grid images={page5} />,
    <Grid images={page6} />,
]