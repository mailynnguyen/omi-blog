import { omiFriends } from "@/data/album/omi-friends.js";
import Grid from "@/components/album/Grid";

export const pages = [
    {
        caption: "My Friends!",
        grid: <Grid images={omiFriends} />
    },
    {
        caption: "lorem ipsum2",
        grid: <Grid images={omiFriends} />
    },
    {
        caption: "lorem ipsum",
        grid: <Grid images={omiFriends} />  
    },
    {
        caption: "lorem ipsum",
        grid: <Grid images={omiFriends} /> 
    },
]